'use strict';

app.service('eventSvc', ['utilSvc', function (utilSvc) {

    this.retrieveData = function (id, callback) {

        firebase.database().ref("appdata/events/" + id).once('value').then(
            function (snapshot) {
                var person = snapshot.val();
                callback(person);
            });
    };

    this.retrieveAllData = function (callback) {

        var results = [];

        firebase.database().ref("appdata/events").once('value').then(
            function (snapshot) {

                snapshot.forEach(function (snap) {
                    var person = snap.val();

                    results.push(person);

                });

                callback(results);
            });
    };

    this.updateData = function (data) {
        data = utilSvc.ngObjSanitise(data);

        var dataKey = data.id
        if(!dataKey){
            var dataKey = firebase.database().ref("appdata/events").push().key;
            data.id = dataKey;
        }
       
        firebase.database().ref("appdata/events/" + dataKey).set(data);
    };

    this.removeData = function (id,callback) {
        firebase.database().ref("appdata/events/" + id).remove().then(function () {
            callback("success",null);
        }).catch(function (error) {
            console.log('error occured while deleting event' + id + error);
            callback(null,error);
        });

    };

}]);

app.controller('pageCtrl', ['$scope', '$window', '$timeout', 'authSvc', 'eventSvc', 'utilSvc', function ($scope, $window, $timeout, authSvc, eventSvc, utilSvc) {

    /*====================== COMMON =======================*/
    authSvc.InitAuth();
    utilSvc.initLoadingModal();

    $scope.SingOut = function () {
        authSvc.SingOut();
    };

    /*====================== COMMON =======================*/

    $scope.pageKey = utilSvc.getUrlParam("id");

    $scope.model = {};

    $scope.model.event = {
        id: "",
        name: "",
        description: "",
        startdate:"",
        enddate:"",
        bannersrc:"",
        status:{
            id:"",
            desc:""
        },
        campus: {
            id: "",
            desc: ""
        }
    };

    $scope.model.events = [

    ];

    $scope.campuses = $window.hrmonline.campuses;

    $scope.statuses = $window.hrmonline.eventstatuses;

    $scope.getData = function (id) {
        $('#loadingModal').modal('show');

        eventSvc.retrieveData(id,function (data) {
            $scope.model.event = data;

            if($scope.model.event.campus){
                for (var x = 0;x < $scope.campuses.length;x++) {
                    if($scope.campuses[x].id == $scope.model.event.campus.id){
                        $scope.model.event.campus = $scope.campuses[x];
                        break;
                    }
                }
            }

            if($scope.model.event.status){
                for (var x = 0;x < $scope.statuses.length;x++) {
                    if($scope.statuses[x].id == $scope.model.event.status.id){
                        $scope.model.event.status = $scope.statuses[x];
                        break;
                    }
                }
            }

            $scope.$apply();

            $('#loadingModal').modal("hide");
        });
    };

    $scope.retrieveAllData = function () {

        $('#loadingModal').modal('show');

        eventSvc.retrieveAllData(function (data) {
            $scope.model.events = data;
            $scope.$apply();

            $('#loadingModal').modal("hide");
        });


    };

    $scope.updateData = function () {
        eventSvc.updateData($scope.model.event);

        $window.location.href = "/event-list.html";
    };

    $scope.removeData = function(id){

        $scope.confirmModalTitle = "Confirm Record removal";
        $scope.confirmModalBody  = "Are you sure you would like to remove this person?";

        $('#confirmModal').modal('show');
        $('#confirmModalOkBtn').click(function(){
            $('#confirmModal').modal('hide');

            eventSvc.removeData(id,function(success,error){
                
                if(!success){
                    $scope.alertModalTitle = "Unable to remove record!";
                    $scope.alertModalBody = "An error occured while removing the record:" + error;
                }else{
                    $scope.alertModalTitle = "Trasaction successful!";
                    $scope.alertModalBody = "The record was removed successfully";
                }
                
                $scope.retrieveAllData();

                $('#alertModal').modal('show');
            });
        });
    };

    if (!$scope.pageKey) {
        $scope.retrieveAllData();
    }
    else{
        $scope.getData($scope.pageKey);
    }


}]);