var InfoplumControlsUrl = InfoplumControlsUrl || '/Infoplum.Controls/';
InfoplumLoading = function () {
    return {
        restrict: "E",
        templateUrl: window.InfoplumControlsUrl + "Loading/Loading.html",
        transclude: true,
        scope: {
           
        },
        link: function ($scope, element, atts) {
           
            window.loadDependency(window.InfoplumControlsUrl + 'Loading/loading.min.css');
            // console.log('config', $scope.config);
        },
        controller: function ($scope) {
            $scope.loading = { Image: window.InfoplumControlsUrl + 'Loading/Images/loading.gif'}
        }
    };
}