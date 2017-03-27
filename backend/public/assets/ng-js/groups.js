'use strict';

app.service('groupSvc', ['utilSvc', function (utilSvc) {

    this.retrieveData = function (id, callback) {

        firebase.database().ref("appdata/groups/" + id).once('value').then(
            function (snapshot) {
                var group = snapshot.val();
                callback(group);
            });
    };

    this.retrieveAllData = function (callback) {

        var results = [];

        firebase.database().ref("appdata/groups").once('value').then(
            function (snapshot) {

                snapshot.forEach(function (snap) {
                    var group = snap.val();

                    results.push(group);

                });

                callback(results);
            });
    };

    this.updateData = function (data) {
        data = utilSvc.ngObjSanitise(data);

        var dataKey = data.id
        if(!dataKey){
            var dataKey = firebase.database().ref("appdata/groups").push().key;
            data.id = dataKey;
        }
       
        firebase.database().ref("appdata/groups/" + dataKey).set(data);
    };

    this.removeData = function (id,callback) {
        firebase.database().ref("appdata/groups/" + id).remove().then(function () {
            callback("success",null);
        }).catch(function (error) {
            console.log('error occured while deleting gruoup' + id + error);
            callback(null,error);
        });

    };

}]);

app.controller('pageCtrl', ['$scope', '$window', '$timeout', 'authSvc', 'groupSvc', 'utilSvc', function ($scope, $window, $timeout, authSvc, groupSvc, utilSvc) {

    /*====================== COMMON =======================*/
    authSvc.InitAuth();
    utilSvc.initLoadingModal();

    $scope.SingOut = function () {
        authSvc.SingOut();
    };

    /*====================== COMMON =======================*/

    $scope.pageKey = utilSvc.getUrlParam("id");

    $scope.model = {};

    $scope.model.group = {
        id: "",
        name: "",
        description: "",
        membercount:0,
        campus: {
            id: "",
            desc: ""
        }
    };

    $scope.model.groups = [

    ];

    $scope.campuses = $window.hrmonline.campuses;

    $scope.getData = function (id) {
        $('#loadingModal').modal('show');

        groupSvc.retrieveData(id,function (data) {
            $scope.model.group = data;

            if($scope.model.group.campus){
                for (var x = 0;x < $scope.campuses.length;x++) {
                    if($scope.campuses[x].id == $scope.model.group.campus.id){
                        $scope.model.group.campus = $scope.campuses[x];
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

        groupSvc.retrieveAllData(function (data) {
            $scope.model.groups = data;
            $scope.$apply();

            $('#loadingModal').modal("hide");
        });


    };

    $scope.updateData = function () {
        groupSvc.updateData($scope.model.group);

        $window.location.href = "/group-list.html";
    };

    $scope.removeData = function(id){

        $scope.confirmModalTitle = "Confirm Record removal";
        $scope.confirmModalBody  = "Are you sure you would like to remove this group?";

        $('#confirmModal').modal('show');
        $('#confirmModalOkBtn').click(function(){
            $('#confirmModal').modal('hide');

            groupSvc.removeData(id,function(success,error){
                
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