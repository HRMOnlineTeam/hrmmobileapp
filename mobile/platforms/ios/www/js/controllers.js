angular.module('app.controllers', [])

.controller('loginCtrl', function ($scope,$state,$ionicHistory,profileService) {

    $scope.IsLoggedIn = profileService.IsLoggedIn();
    console.log('The profileService.IsLoggedIn returned:' + $scope.IsLoggedIn)
    if ($scope.IsLoggedIn == true) {
        $state.go('tab.home');
    }

    $scope.skipLogin = function () {
        console.log('skipLogin clicked');
        $state.go('tab.home');
    };

})

.controller('mainCtrl', function ($scope, $state, notificationService) {
    $scope.notificationCount = notificationService.count();

    $scope.openNotifications = function () {
        console.log('openNotifications clicked');
        $state.go('notifications');
    };
})

.controller('notificationsCtrl', function ($scope, $ionicHistory, notificationService) {
    $scope.notifications = notificationService.all();

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };

})

.controller('menuCtrl', function ($scope) {

})

.controller('homeCtrl', function ($scope, $ionicActionSheet, $ionicBackdrop, $timeout,notificationService) {

    //$scope.notificationCount = notificationService.count();

    $scope.tglOptions = {
        val1: true,
        val2: false,
        val3:true
    };

    $scope.rdoOptions = {
        value: 1
    };
    
    $scope.chkOptions = {
        val1: false,
        val2: false,
        val3: false,
    };

    $scope.showBackdrop = function () {
        $ionicBackdrop.retain();

        $timeout(function () {
            $ionicBackdrop.release();
        }, 3000);
    };

    //Show the Action Sheet
    $scope.showActionSheet = function () {
        var toggleActionSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<b>Share</b>' },
                { text: 'Comment' }
            ],
            destructiveText: 'Delete',
            titleText: 'Action',
            cancelText: 'Cancel',
            cancel: function () {
                // add cancel code...
            },
            buttonClicked: function (index) {
                if (index === 0) {
                    // add edit 1 code
                }
                if (index === 1) {
                    // add edit 2 code
                }
            },
            destructiveButtonClicked: function () {
                // add delete code..
            }
        });

        $timeout(function () {
            toggleActionSheet();
        },3000);
    };

})

.controller('eventsCtrl', function ($scope) {

})

.controller('mediaCtrl', function ($scope) {

})

.controller('contactusCtrl', function ($scope) {

})

.controller('giveCtrl', function ($scope) {

})
