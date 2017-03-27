'use strict';

angular.module('pageApp', ['firebase'])

  .controller('pageCtrl', ['$scope','$window',function ($scope,$window) {

    var auth = firebase.auth();

    firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				$window.hrmonline.currentUser = user;
        $window.location.href = '/index.html';
			}
		});	

    $scope.SignIn = function (event) {
      event.preventDefault(); // To prevent form refresh
      var email = $scope.user.email;
      var password = $scope.user.password;

      auth.signInWithEmailAndPassword(email, password)
        .then(function (user) {

          console.log('Authentication successful');

          $window.hrmonline.currentUser = user;

          $window.location.href = "/index.html";

        }).catch(function (error) {
          
          // Failure callback
          console.log('Authentication failure');

          $scope.error = "Login Failed";

        });
    };

    $scope.SignInWithOAuth = function (providerName) {

      var provider = null;

      if (providerName == "google") {
        provider = new auth.GoogleAuthProvider();
      } else if (providerName == "facebook") {
        provider = new auth.FacebookAuthProvider();
      }

      auth.signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        $window.hrmonline.currentUser = user;
        
        $window.location.href = "/index.html";
        
      }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        
      });

    };


    $scope.createUser = function () {
      $scope.message = null;
      $scope.error = null;

      var firstname = $scope.user.firstname;
      var surname = $scope.user.surname;
      var mobileno = $scope.user.mobileno;

      var email = $scope.user.email;
      var password = $scope.user.password;

      // Create a new user
      auth.createUserWithEmailAndPassword(email, password)
        .then(function (user) {
          $scope.message = "User created with uid: " + user.uid;

          $window.hrmonline.currentUser = user;

        }).catch(function (error) {
          $scope.error = "User creation Failed";
        });
    };

  }]);