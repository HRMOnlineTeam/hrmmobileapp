angular.module('app.controllers', [])

.controller('loginCtrl', function ($scope, $state, $ionicHistory, profileService) {

    var auth = firebase.auth();
    $scope.user = {};

    $scope.SignIn = function (event) {
       
        var email = $scope.user.email;
        var password = $scope.user.password;

        auth.signInWithEmailAndPassword(email, password)
          .then(function (user) {

              console.log('Authentication successful');

              //$window.hrmonline.currentUser = user;

              $state.go("tab.home");

          }).catch(function (error) {

              // Failure callback
              console.log('Authentication failure');

              $scope.error = "Login Failed";

          });
    };

    $scope.IsLoggedIn = profileService.isLoggedIn();
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

.controller('homeCtrl', function ($scope, $ionicActionSheet, $ionicBackdrop, $timeout, notificationService) {

    //$scope.notificationCount = notificationService.count();

    $scope.tglOptions = {
        val1: true,
        val2: false,
        val3: true
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
        }, 3000);
    };

    $scope.fbPosts = [];

    var getAllFbPostData = function (callback) {

       var results = [];

        firebase.database().ref("fbdata/posts/data").once('value').then(
            function (snapshot) {

                snapshot.forEach(function (snap) {
                    var post = snap.val();

                    results.push(post);

                });

                callback(results);
            });
    };

    $scope.retrieveAllData = function () {

        getAllFbPostData(function (data) {
            $scope.fbPosts = data;
            $scope.$apply();
        });
    };

    $scope.retrieveAllData();

})

.controller('eventsCtrl', function ($scope) {

    $scope.fbEvents = [];

    var getAllFbEventData = function (callback) {

        var results = [];

        firebase.database().ref("fbdata/events/data").once('value').then(
            function (snapshot) {

                snapshot.forEach(function (snap) {
                    var event = snap.val();

                    results.push(event);

                });

                callback(results);
            });
    };

    $scope.retrieveAllData = function () {

        getAllFbEventData(function (data) {
            $scope.fbEvents = data;
            $scope.$apply();
        });
    };

    $scope.retrieveAllData();

})

.controller('mediaCtrl', function ($scope) {

})

.controller('contactUsCtrl', function ($scope, $state, contactService) {

    $scope.openForm = function (name) {
        $state.go('contactform', { formName: name });
    };

})

.controller('giveCtrl', function ($scope) {

})

.controller('campusesCtrl', function ($scope, $ionicHistory) {

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
})

.controller('contactFormCtrl', function ($scope, $ionicHistory) {

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };
})

.controller('headCountCtrl', function ($scope, $ionicHistory, $window, headCountService,utilSvc) {

    $scope.goBack = function () {
        $ionicHistory.goBack();
    };

    $scope.selectSectionOptions = headCountService.headCountDataSections('{campus}');
    $scope.selectServicesOptions = headCountService.headCountDataServices('{campus}');

    $scope.selectSection = 'A';
    $scope.selectService = '08:00';
    $scope.headCountData = headCountService.headCountDataInstance('{campus}');
    $scope.maxColWidth = 10;
    $scope.section = null;

    $scope.currentRowLabel = 'A';
    $scope.currentSeatIndx = 0;
    $scope.currentRowSeatCount = 0;

    var alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    $scope.moveNextAlphabet = function (direction) {

        var beginChar = $scope.section.rows[0].label;
        var endChar = $scope.section.rows[$scope.section.rows.length - 1].label;

        var beginCharIndx = 0;
        var endCharIndx = 0;
        for (var i = 0; i < alphabets.length; i++) {
            if (alphabets[i] == beginChar) {
                beginCharIndx = i;
            }
            if (alphabets[i] == endChar) {
                endCharIndx = i;
            }
        }

        //console.log('begin char:' + beginChar + ' end char:' + endChar);

        for (var i = 0; i < alphabets.length; i++) {
            if (alphabets[i] == $scope.currentRowLabel) {

                if (direction == 'up' && i > beginCharIndx) {
                    $scope.currentRowLabel = alphabets[i - 1];

                    $scope.currentSeatIndx = 0;

                    break;
                }
                if (direction == 'down' && i < endCharIndx) {
                    $scope.currentRowLabel = alphabets[i + 1];

                    $scope.currentSeatIndx = 0;
                    break;
                }
                
            }
        }

        //console.log('current row label:' + $scope.currentRowLabel);

        for (var i = 0; i < $scope.section.rows.length; i++) {
            if ($scope.section.rows[i].label == $scope.currentRowLabel) {
                $scope.currentRowSeatCount = $scope.section.rows[i].seats.length;
                break;
            }
        }

    };

    $scope.moveNextSeat = function (direction) {

        if (direction == 'back' && $scope.currentSeatIndx > 0) {
            $scope.currentSeatIndx--;
        }

        if (direction == 'forward' && $scope.currentSeatIndx < ($scope.currentRowSeatCount - 1)) {
            $scope.currentSeatIndx++;
        }
        else if (direction == 'forward' && $scope.currentSeatIndx == ($scope.currentRowSeatCount - 1)) {
            $scope.moveNextAlphabet('down');
        }
    };

    $scope.setSeatGender = function (gender) {
        for (var i = 0; i < $scope.section.rows.length; i++) {
            if ($scope.section.rows[i].label == $scope.currentRowLabel) {

                $scope.section.rows[i].seats[$scope.currentSeatIndx].value = gender;

                $scope.moveNextSeat('forward');
                break;
            }
        }

        $scope.recalculateSectionTotals();
    };

    //console.log('device width:' + $window.innerWidth);

    $scope.getRowClass = function (label) {

        console.log('row label:' + label);
        if (label == $scope.currentRowLabel) {
            return 'selectedRow';
        }

    };

    $scope.isCurrentSeatClass = function (seatid,rowlabel) {

        console.log('seat id:' + seatid);
        if (rowlabel == $scope.currentRowLabel && (seatid - 1) == $scope.currentSeatIndx) {

            //console.log('curur row seat:' + seatid  + ' row:' + rowlabel);

            return 'selectedSeat';
        }

    };

    $scope.recalculateSectionTotals = function () {

        $scope.section.males = 0;
        $scope.section.females = 0;
        $scope.section.boys = 0;
        $scope.section.girls = 0;

        for (var i = 0; i < $scope.section.rows.length; i++) {
            for (var x = 0; x < $scope.section.rows[i].seats.length; x++) {
                if ($scope.section.rows[i].seats[x].value == 'M') {
                    $scope.section.males++;
                } else if ($scope.section.rows[i].seats[x].value == 'F') {
                    $scope.section.females++;
                } else if ($scope.section.rows[i].seats[x].value == 'B') {
                    $scope.section.boys++;
                } else if ($scope.section.rows[i].seats[x].value == 'G') {
                    $scope.section.girls++;
                }
            }
        }
    };

    $scope.getNumber = function (num) {
        return new Array(num);
    }

    $scope.onSectionChange = function () {

        console.log('in here');

        console.log($scope.selectSection);

        for (var i = 0; i < $scope.headCountData.sections.length; i++) {
            var section = $scope.headCountData.sections[i];
            if (section.name == $scope.selectSection) {
                $scope.section = section;
                break;
            }
        }

        if ($scope.section != null) {

            for (var i = 0; i < $scope.headCountData.sections.length; i++) {
                var dataSection = $scope.headCountData.sections[i];
                if (dataSection.name == $scope.selectSection) {
                    $scope.dataSection = dataSection;
                    break;
                }
            }

            //console.log('section rows:' + $scope.section.rows.length);

            $scope.sectionRows = $scope.section.rows;

            //console.log('Section found:' + $scope.section.name)
            $scope.maxColWidth = $window.innerWidth / $scope.section.maxRowSeats;

            //console.log('maxColWidth:' + $scope.maxColWidth);

            $scope.currentRowLabel = $scope.section.rows[0].label;

            $scope.moveNextAlphabet('back');
        }
    };


    $scope.onSectionChange();

    $scope.submitData = function () {
        console.log('Saving Headcount info');
        var data = utilSvc.ngObjSanitise($scope.headCountData);

        var dataKey = data.id
        if (!dataKey) {
            var dataKey = firebase.database().ref("appdata/headcount").push().key;
            data.id = dataKey;
            console.log('Generated Key' + dataKey);
        }

        firebase.database().ref("appdata/headcount/" + dataKey).set(data);
    };

})