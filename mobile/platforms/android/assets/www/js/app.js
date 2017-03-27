// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers', 'app.services','ngCordova','ionic-cache-src','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider,$sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist(['self', '*://www.youtube.com/**', '*://player.vimeo.com/video/**', '*://www.facebook.com/**','*://**']);


    $stateProvider

    .state('tab',{
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    .state('tab.home', {
        url:'/home',
        views: {
            'tab-home': {
                templateUrl: 'templates/tab-home.html',
                controller: 'homeCtrl'
            }
        }
    })

    .state('tab.events', {
        url: '/events',
        views: {
            'tab-events': {
                templateUrl: 'templates/tab-events.html',
                controller: 'eventsCtrl'
            }
        }
    })

    .state('tab.media', {
        url: '/media',
        views: {
            'tab-media': {
                templateUrl: 'templates/tab-media.html',
                controller: 'mediaCtrl'
            }
        }
    })

    .state('tab.contactus', {
        url: '/contactus',
        views: {
            'tab-contactus': {
                templateUrl: 'templates/tab-contactus.html',
                controller: 'contactUsCtrl'
            }
        }
    })

    .state('tab.give', {
        url: '/give',
        views: {
            'tab-give': {
                templateUrl: 'templates/tab-give.html',
                controller: 'giveCtrl'
            }
        }
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
    })

    .state('notifications', {
        url: '/notifications',
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
    })

    .state('contactform', {
        url: '/contactform',
        templateUrl: 'templates/contact-form.html',
        controller: 'contactFormCtrl'
    })

    .state('campuses', {
        url: '/campuses',
        templateUrl: 'templates/campuses.html',
        controller: 'campusesCtrl'
    })

    .state('headcount', {
        url: '/headcount',
        templateUrl: 'templates/headcount.html',
        controller: 'headCountCtrl'
    })

    $urlRouterProvider.otherwise('/login');
})
