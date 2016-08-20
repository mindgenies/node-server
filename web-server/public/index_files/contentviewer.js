InfoplumContentViewer = function () {
    return {
        restrict: "E",
        templateUrl: window.InfoplumControlsUrl + "ContentViewer/contentviewer.html",
        scope: {
            dialogdata: "=",
            translations: "=",
            close: "&",
            mobileview: "="
        },
        link: function ($scope, element, atts) {
            window.rioControls.contentviewer = true;
            window.loadDependency(window.InfoplumControlsUrl + 'ContentViewer/contentviewer.min.css');
            $scope.cross = window.InfoplumControlsUrl + "ContentViewer/Images/cross.png";

        }
    };
}
