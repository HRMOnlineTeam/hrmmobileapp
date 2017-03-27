'use strict';

app.service('utilSvc', [function () {
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

app.service('authSvc', ['$window', function ($window) {
    this.InitAuth = function () {
        firebase.auth().onAuthStateChanged(function (user) {

            if (user) {
                $window.hrmonline.currentUser = user;
            } else { //User is not logged in redirect to login page.
                $window.location.href = '/login.html';
            }
        });
    };

    this.SingOut = function () {

        firebase.auth().signOut();
        $window.location.href = '/login.html';
    };
}]);

