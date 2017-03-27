'use strict';

app.service('personSvc', ['utilSvc', function (utilSvc) {

    this.retrieveData = function (id, callback) {

        firebase.database().ref("appdata/people/" + id).once('value').then(
            function (snapshot) {
                var person = snapshot.val();
                callback(person);
            });
    };

    this.retrieveAllData = function (callback) {

        var results = [];

        firebase.database().ref("appdata/people").once('value').then(
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
            var dataKey = firebase.database().ref("appdata/people").push().key;
            data.id = dataKey;
        }
       
        firebase.database().ref("appdata/people/" + dataKey).set(data);
    };

    this.removeData = function (id,callback) {
        firebase.database().ref("appdata/people/" + id).remove().then(function () {
            callback("success",null);
        }).catch(function (error) {
            console.log('error occured while deleting person' + id + error);
            callback(null,error);
        });

    };

}]);

app.controller('pageCtrl', ['$scope', '$window', '$timeout', 'authSvc', 'groupSvc','personSvc', 'utilSvc', function ($scope, $window, $timeout, authSvc, groupSvc,personSvc, utilSvc) {

    /*====================== COMMON =======================*/
    authSvc.InitAuth();
    utilSvc.initLoadingModal();

    $scope.SingOut = function () {
        authSvc.SingOut();
    };

    /*====================== COMMON =======================*/

    $scope.pageKey = utilSvc.getUrlParam("id");

    $scope.model = {};

    $scope.model.person = {
        id: "",
        uid:"",
        firstname: "",
        lastname: "",
        email:"",
        mobileno:"",
        profilepicsrc:"",
        profiledesc:"",
        address:"",
        suburb:"",
        gender:"",
        birthdate:"",
        status:{
            id:"",
            desc:"",
            stage:""
        },
        campus: {
            id: "",
            desc: ""
        },
        family:{
            id:"",
            desc:""
        },
        groups:[],
        groupcount:0
    };

    $scope.model.people = [

    ];

    $scope.campuses = $window.hrmonline.campuses;

    $scope.statuses = $window.hrmonline.personstatuses;

    $scope.getData = function (id) {
        $('#loadingModal').modal('show');

        personSvc.retrieveData(id,function (data) {
            $scope.model.person = data;

            if($scope.model.person.campus){
                for (var x = 0;x < $scope.campuses.length;x++) {
                    if($scope.campuses[x].id == $scope.model.person.campus.id){
                        $scope.model.person.campus = $scope.campuses[x];
                        break;
                    }
                }
            }

            if($scope.model.person.status){
                for (var x = 0;x < $scope.statuses.length;x++) {
                    if($scope.statuses[x].id == $scope.model.person.status.id){
                        $scope.model.person.status = $scope.statuses[x];
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

        personSvc.retrieveAllData(function (data) {
            $scope.model.people = data;
            $scope.$apply();

            $('#loadingModal').modal("hide");
        });


    };

    $scope.updateData = function () {
        personSvc.updateData($scope.model.person);

        $window.location.href = "/people-list.html";
    };

    $scope.removeData = function(id){

        $scope.confirmModalTitle = "Confirm Record removal";
        $scope.confirmModalBody  = "Are you sure you would like to remove this person?";

        $('#confirmModal').modal('show');
        $('#confirmModalOkBtn').click(function(){
            $('#confirmModal').modal('hide');

            personSvc.removeData(id,function(success,error){
                
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