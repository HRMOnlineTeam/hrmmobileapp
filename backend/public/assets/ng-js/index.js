'use strict';

// Declare app level module which depends on views, and components
app.controller('pageCtrl', ['$scope','$window','authSvc', function ($scope,$window,authSvc) {

        /*====================== COMMON =======================*/
        authSvc.InitAuth();

        $scope.SingOut = function(){
            authSvc.SingOut();
        };
        
        /*====================== COMMON =======================*/

        
        

    }]);