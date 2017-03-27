angular.module('app.services', [])

.service('localStorageService', ['$http', function ($http) {

    this.set = function (key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    };

    this.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };

    this.destroy = function (key) {
        return localStorage.removeItem(key);
    };

}])

.service('contactService', function () {

    var contactData = {
        id: 'AAABBBCCC',
        mobile: '0828297206',
        email: 'timothybaloyi@gmail.com',
        alias: 'Tim',
    };

    this.getContactInstance = function () {
        return contactData;
    };

    this.submitData = function (data) {
        return void (0);
    };

})

.service('headCountService', function () {

    var headCountData = {
        submittedBy: 'John Doe',
        campus: 'Roodepoort-Main',
        date: '2017-02-17',
        services: [
            { name: '08:00' },
            { name: '10:00' },
            { name: '12:00' },
        ],
        serviceNumber: 1,
        sections: [
            {
                name: 'A',
                rowCount: 11,
                maxRowSeats: 8,
                rows: [
                    {
                        label: 'B',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'C',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'D',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    }
                    ,
                    {
                        label: 'E',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'F',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'G',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'H',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'I',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'J',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }]
                    },
                    {
                        label: 'K',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }]
                    },
                    {
                        label: 'L',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
                    }
                ],
                males: 0,
                females: 0,
                boys: 0,
                girls: 0
            },
            {
                name: 'B',
                rowCount: 11,
                maxRowSeats: 24,
                rows: [
                    {
                        label: 'A',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'B',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }]
                    },
                    {
                        label: 'C',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }]
                    },
                    {
                        label: 'D',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }]
                    }
                    ,
                    {
                        label: 'E',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }]
                    },
                    {
                        label: 'F',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }]
                    },
                    {
                        label: 'G',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }]
                    },
                    {
                        label: 'H',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }]
                    },
                    {
                        label: 'I',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }, { id: 19, value: 0 }, { id: 20, value: 0 }]
                    },
                    {
                        label: 'J',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }, { id: 19, value: 0 }, { id: 20, value: 0 }, { id: 21, value: 0 }, { id: 22, value: 0 }]
                    },
                    {
                        label: 'K',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 },{ id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 },{ id: 17, value: 0 }, { id: 18, value: 0 }, { id: 19, value: 0 }, { id: 20, value: 0 }, { id: 21, value: 0 }, { id: 22, value: 0 }, { id: 23, value: 0 }, { id: 24, value: 0 }]
                    },
                    {
                        label: 'L',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
                    }
                ],
                males: 0,
                females: 0,
                boys: 0,
                girls: 0
            },
            {
                name: 'C',
                rowCount: 11,
                maxRowSeats: 8,
                rows: [
                    {
                        label: 'B',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'C',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'D',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    }
                    ,
                    {
                        label: 'E',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'F',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'G',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'H',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'I',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }]
                    },
                    {
                        label: 'J',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }]
                    },
                    {
                        label: 'K',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }]
                    },
                    {
                        label: 'L',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
                    }
                ],
                males: 0,
                females: 0,
                boys: 0,
                girls: 0
            },
            {
                name: 'D',
                rowCount: 3,
                maxRowSeats: 22,
                rows: [
                    {
                        label: 'A',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }, { id: 19, value: 0 }, { id: 20, value: 0 }]
                    },
                    {
                        label: 'B',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }, { id: 19, value: 0 }, { id: 20, value: 0 }, { id: 21, value: 0 }, { id: 22, value: 0 }]
                    },
                    {
                        label: 'C',
                        seats: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }, { id: 5, value: 0 }, { id: 6, value: 0 }, { id: 7, value: 0 }, { id: 8, value: 0 }, { id: 9, value: 0 }, { id: 10, value: 0 }, { id: 11, value: 0 }, { id: 12, value: 0 }, { id: 13, value: 0 }, { id: 14, value: 0 }, { id: 15, value: 0 }, { id: 16, value: 0 }, { id: 17, value: 0 }, { id: 18, value: 0 }, { id: 19, value: 0 }, { id: 20, value: 0 }, { id: 21, value: 0 }, { id: 22, value: 0 }]
                    }
                ],
                males: 0,
                females: 0,
                boys: 0,
                girls: 0
            }
        ],
        totalCount: 0,
        totalMales: 0,
        totalFemales: 0,
        totalBoys: 0,
        totalGirls: 0
    };

    this.headCountDataInstance = function (name) {
        return headCountData;
    };

    this.headCountDataSections = function (name) {
        var sections = [];

        for (var i = 0; i < headCountData.sections.length; i++) {
            sections.push({ name: headCountData.sections[i].name });
        }

        console.log('sections:' + sections.length);

        return sections;
    };

    this.headCountDataServices = function (name) {
        var services = [];

        for (var i = 0; i < headCountData.services.length; i++) {
            services.push({ name: headCountData.services[i].name });
        }

        console.log('services:' + services.length);

        return services;
    };

    this.submitData = function (data) {
        return void (0);
    };

})

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

    this.getProfile = function () {
        return profile;
    };

    this.hasRole = function (code) {
        if (profile && profile.roles && profile.roles.length > 0) {
            for (var i = 0; i < profile.roles; i++) {
                if (profile.roles[i].code == code) {
                    return true;
                }
            }
        }

        return false;
    };

    this.isLoggedIn = function () {
        return this.hasRole('user');
    };

}])

.service('notificationService', function () {
    var notifications = [
        {
            id: '0',
            source: 'facebook',
            type: 'Status Update',
            state: 'unread',
            description: '<b>Tim</b> has posted a new item in the page',
            timestamp: '2017-02-12 08:23 PM',
            imgSrc: 'img/ionic.png',
        },
        {
            id: '1',
            source: 'twitter',
            type: 'Post',
            state: 'unread',
            description: '<b>Jaimy</b> says hi to everyone',
            timestamp: '2017-02-11 10:12 AM',
            imgSrc: 'img/ionic.png',
        },
        {
            id: '2',
            source: 'facebook',
            type: 'Event',
            state: 'unread',
            description: '<b>Hope Restoration Ministries</b> Join us at the event next week',
            timestamp: '2017-01-07 05:32 PM',
            imgSrc: 'img/ionic.png',
        },
        {
            id: '3',
            source: 'facebook',
            type: 'Status Update',
            state: 'unread',
            description: '<b>Andrew</b> has left the building',
            timestamp: '2017-02-12 08:23 PM',
            imgSrc: 'img/ionic.png',
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

})

.service('utilSvc', [function () {
    this.ngObjSanitise = function (ngObj) {
        var output;

        output = angular.toJson(ngObj);
        output = angular.fromJson(output);

        return output;
    };

    this.initLoadingModal = function () {
        function alignModal() {

            var modalDialog = $(document).find(".modal-dialog");
            /* Applying the top margin on modal dialog to align it vertically center */
            modalDialog.css("margin-top", Math.max(0, ($(window).height() - modalDialog.height()) / 2));
        }

        // Align modal when it is displayed
        $(".modal").on("shown.bs.modal", alignModal);

        // Align modal when user resize the window
        $(window).on("resize", function () {
            $(".modal:visible").each(alignModal);
        });
    };

    this.getUrlParam = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }

        return null;
    };

}]);