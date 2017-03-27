'use strict';

app.service('serviceRequestSvc', ['utilSvc', function (utilSvc) {

    this.retrieveData = function (id, callback) {

        firebase.database().ref("appdata/servicerequests/" + id).once('value').then(
            function (snapshot) {
                var serviceReq = snapshot.val();
                callback(serviceReq);
            });
    };

    this.retrieveAllData = function (callback) {

        var results = [];

        firebase.database().ref("appdata/servicerequests").once('value').then(
            function (snapshot) {

                snapshot.forEach(function (snap) {
                    var serviceReq = snap.val();

                    results.push(serviceReq);

                });

                callback(results);
            });
    };

    this.updateData = function (data) {
        data = utilSvc.ngObjSanitise(data);

        var dataKey = data.id
        if(!dataKey){
            var dataKey = firebase.database().ref("appdata/servicerequests").push().key;
            data.id = dataKey;
        }
       
        firebase.database().ref("appdata/servicerequests/" + dataKey).set(data);
    };

    this.removeData = function (id,callback) {
        firebase.database().ref("appdata/servicerequests/" + id).remove().then(function () {
            callback("success",null);
        }).catch(function (error) {
            console.log('error occured while deleting service request' + id + error);
            callback(null,error);
        });

    };

}]);

app.controller('pageCtrl', ['$scope', '$window', '$timeout', 'authSvc', 'groupSvc','personSvc','serviceRequestSvc', 'utilSvc', function ($scope, $window, $timeout, authSvc, groupSvc,personSvc,serviceRequestSvc, utilSvc) {

    /*====================== COMMON =======================*/
    authSvc.InitAuth();
    utilSvc.initLoadingModal();

    $scope.SingOut = function () {
        authSvc.SingOut();
    };

    /*====================== COMMON =======================*/

    $scope.pageKey = utilSvc.getUrlParam("id");

    $scope.model = {};

    $scope.model.servicerequest = {
        id: "",
        description:"",
        status:{
            id:"",
            desc:""
        },
        campus: {
            id: "",
            desc: ""
        },
        requesttype:{
            id:"",
            desc:""
        },
        requestsource:{
            id:"",
            desc:""
        },
        requestedby:{
            id:"",
            desc:""
        },
        assignedgroup:{
            id:"",
            desc:""
        },
        assignedperson:{
            id:"",
            desc:""
        },
    };

    $scope.model.servicerequests = [

    ];

    $scope.campuses = $window.hrmonline.campuses;

    $scope.sources = $window.hrmonline.servicerequestsources;

    $scope.requesttypes = $window.hrmonline.servicerequesttypes;

    $scope.statuses = $window.hrmonline.servicerequeststatuses;

    $scope.getData = function (id) {
        $('#loadingModal').modal('show');

        serviceRequestSvc.retrieveData(id,function (data) {
            $scope.model.servicerequest = data;

            if($scope.model.servicerequest.campus){
                for (var x = 0;x < $scope.campuses.length;x++) {
                    if($scope.campuses[x].id == $scope.model.servicerequest.campus.id){
                        $scope.model.servicerequest.campus = $scope.campuses[x];
                        break;
                    }
                }
            }

            if($scope.model.servicerequest.source){
                for (var x = 0;x < $scope.sources.length;x++) {
                    if($scope.sources[x].id == $scope.model.servicerequest.source.id){
                        $scope.model.servicerequest.source = $scope.sources[x];
                        break;
                    }
                }
            }

            if($scope.model.servicerequest.requesttype){
                for (var x = 0;x < $scope.requesttypes.length;x++) {
                    if($scope.requesttypes[x].id == $scope.model.servicerequest.requesttype.id){
                        $scope.model.servicerequest.requesttype = $scope.requesttypes[x];
                        break;
                    }
                }
            }

            if($scope.model.servicerequest.status){
                for (var x = 0;x < $scope.statuses.length;x++) {
                    if($scope.statuses[x].id == $scope.model.servicerequest.status.id){
                        $scope.model.servicerequest.status = $scope.statuses[x];
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

        serviceRequestSvc.retrieveAllData(function (data) {
            $scope.model.servicerequests = data;
            $scope.$apply();

            $('#loadingModal').modal("hide");
        });


    };

    $scope.updateData = function () {
        serviceRequestSvc.updateData($scope.model.servicerequest);

        $window.location.href = "/request-list.html";
    };

    $scope.removeData = function(id){

        $scope.confirmModalTitle = "Confirm Record removal";
        $scope.confirmModalBody  = "Are you sure you would like to remove this person?";

        $('#confirmModal').modal('show');
        $('#confirmModalOkBtn').click(function(){
            $('#confirmModal').modal('hide');

            serviceRequestSvc.removeData(id,function(success,error){
                
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

    $scope.openPersonSearch = function(callerid){
         //has-success
    };

    $scope.openGroupSearch = function(callerid){

    };

    if (!$scope.pageKey) {
        $scope.retrieveAllData();
    }
    else{
        $scope.getData($scope.pageKey);
    }


}]);