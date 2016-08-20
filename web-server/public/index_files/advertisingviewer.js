InfoplumAdvertising = function () {
    return {
        restrict: "E",
        templateUrl: window.InfoplumControlsUrl + "AdvertisingViewer/advertisingviewer.html",
        scope: {
            advertisingdata: "=",
            advertiseid: '=',
            margintopbottom: '=',
            onadvertisementclick: '='
        },
        link: function ($scope, element, atts) {
            window.loadDependency(window.InfoplumControlsUrl + 'AdvertisingViewer/advertisingviewer.min.css');

        },
        controller: function ($scope, $http) {

            for (var ad = 0; ad < window.adConfig.adPositions.length; ad++) {
                if (window.adConfig.adPositions[ad].id == $scope.advertiseid) {
                    $scope.adConfig = window.adConfig.adPositions[ad];
                }
            }

            if (!$scope.adConfig) {
                $scope.adConfig = {
                    type: '',
                    imageName: ''
                };
            }

            if ($scope.adConfig.type == 'googleAd') {
                setTimeout(function () {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                }, 1000);
            }

            if ($scope.adConfig.type == 'dfpAd') {
                $scope.adConfig.dfpAdId = "dfpAd_" + new Date().getTime();

                setTimeout(function () {
                    console.log("rendering DFP ad");
                    googletag.pubads().display($scope.adConfig.dfpNetCodeAdSlot, $scope.adConfig.dfpAdDims, $scope.adConfig.dfpAdId);
                }, 1000);

            }

        }
    };
}