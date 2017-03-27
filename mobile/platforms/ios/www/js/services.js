angular.module('app.services', [])

.service('localStorageService', ['$http', function ($http) {
    
    this.set= function (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    };

    this.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };

    this.destroy = function (key) {
        return localStorage.removeItem(key);
    };

}])

.service('profileService', ['localStorageService', function (localStorageService) {

    var data = localStorageService.get('userProfile');
    if (data) {
        console.log('Stored Profile ID:' + data.id);
    }
    else {
        console.log('No Data in Storage');
    }

    var profile = {
        id: 'AAABBBCCC',
        mobile: '0828297206',
        email: 'timothybaloyi@gmail.com',
        alias: 'Tim',
        roles: [
            {
                code: 'user',
                description: 'general logged in user'
            },
            {
                code: 'servant',
                description: 'general servant role - campus agnostic'
            },
            {
                code: 'rdc-usher',
                description: 'roodepoort campus usher role'
            },
            {
                code: 'rdc-usher-headcount',
                description: 'roodepoort campus usher role - head count allowed'
            },
            {
                code: 'rdc-stewards-checkin',
                description: 'roodepoort campus stewards role - checkin allowed'
            }
        ]
    };

    this.Get = function () {
        return profile;
    };

    this.HasRole = function (code) {
        if (profile && profile.roles && profile.roles.length > 0) {
            for (var i = 0; i < profile.roles; i++) {
                if (profile.roles[i].code == code) {
                    return true;
                }
            }
        }

        return false;
    };

    this.IsLoggedIn = function () {
        return this.HasRole('user');
    };
    
}])

.service('notificationService', function () {
    var notifications = [
        {
            id: '0',
            source: 'facebook',
            type: 'Status Update',
            state:'unread',
            description: '<b>Tim</b> has posted a new item in the page',
            timestamp: '2017-02-12 08:23 PM',
            imgsrc: 'img/ionic.png',
        },
        {
            id: '1',
            source: 'twitter',
            type: 'Post',
            state: 'unread',
            description: '<b>Jaimy</b> says hi to everyone',
            timestamp: '2017-02-11 10:12 AM',
            imgsrc: 'img/ionic.png',
        },
        {
            id: '2',
            source: 'facebook',
            type: 'Event',
            state: 'unread',
            description: '<b>Hope Restoration Ministries</b> Join us at the event next week',
            timestamp: '2017-01-07 05:32 PM',
            imgsrc: 'img/ionic.png',
        },
        {
            id: '3',
            source: 'facebook',
            type: 'Status Update',
            state: 'unread',
            description: '<b>Andrew</b> has left the building',
            timestamp: '2017-02-12 08:23 PM',
            imgsrc: 'img/ionic.png',
        }
    ];

    this.all = function () {
        return notifications;
    };

    this.count = function () {
        console.log('notification length is:' + notifications.length);
        return 3;
    };

    this.remove = function (notification) {
        notifications.splice(notifications.indexOf(notification), 1);
    };

    this.get = function (id) {
        for (var i = 0; i < notifications.length; i++) {
            if (notifications[i].id == id) {
                return notifications[i];
            }
        }

        return null;
    };

});