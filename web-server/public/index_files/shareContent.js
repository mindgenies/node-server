InfoplumShareContent = function ($sce) {
    return {
        restrict: "E",
        templateUrl: $sce.trustAsResourceUrl( window.InfoplumControlsUrl + "ShareContent/shareContent.html"),
        transclude: true,
        scope: {
            config: "=",
            sharecontent: '=',
            //isshow: '=',
            shareonfb: '&',
            shareontw:'&'
                      
        },
        link: function ($scope, element, atts) {
            $scope.imagePath = window.InfoplumControlsUrl + "ShareContent/Images/";
            window.loadDependency(window.InfoplumControlsUrl + 'ShareContent/shareContent.min.css');
           
        },
        controller: function ($scope) {
            if (window.scoreboardMobileAppMode && window.scoreboardMobileAppMode == 'paid') {
                // show all twitter and FB
                $scope.isshow = true;
            }
            $scope.widgetConfig = window.widgetConfig; // config files object in widget scope
//			console.log("$scope.widgetConfig sc",$scope.widgetConfig);
            if (window.scoreboardMobileAppMode && window.scoreboardMobileAppMode == 'free') {
                // Hide all FB and twitter
                $scope.isshow = false;
            }

            if (!window.scoreboardMobileAppMode) {
                // Hide all FB and twitter
                $scope.isshow = false;
            }
            $scope.shareonfb = function () {
                var text, image;
                FB.init({ appId: "1701749670104037", status: true, cookie: true, xfbml: true });
                FB.ui(
                {
                    method: "share",
                    href: window.widgetConfig.fbShareUrl,
                    link: window.widgetConfig.fbShareUrl,
                    picture: $scope.sharecontent.Image,
                    description: $scope.sharecontent.Text
                }, function (response) {
                    if (response && response.post_id) {
                        // alert('success');
                    } else {
                        // alert('error');
                    }
                }

                      );
            };
            $scope.shareontw = function () {
                $scope.twittersharingrhslink = "https://twitter.com/intent/tweet?hashtags=gamesexplorer&text=" + $scope.sharecontent.Text + " " + window.widgetConfig.twitterShareUrl;
                window.open($scope.twittersharingrhslink, "_blank");
            };

       
        }
    };
}

function setUpFBSDK() {
    if (!window.FB) {
        var scriptTags = document.getElementsByTagName('script');
        for (var s = 0 ; s < scriptTags.length; s++) {
            if (scriptTags[s].src == 'https://connect.facebook.net/en_US/all.js') {
                return;
            }
        }
        var fbScript = document.createElement('script');
        fbScript.src = "https://connect.facebook.net/en_US/all.js";
        document.getElementsByTagName('head')[0].appendChild(fbScript);
    }
}
setUpFBSDK();
function shareonfb(text, description, image) {
    //var url = 'http://riogamesnightly.realitypremedia.co.in/main.html#/en-US/videos/140';
    FB.init({ appId: "1701749670104037", status: true, cookie: true, xfbml: true });
    FB.ui(
    {
        method: "share",
        href: window.widgetConfig.fbShareUrl,
        link: window.widgetConfig.fbShareUrl,
        picture: window.widgetConfig.fbSharePicturePath,
        caption: 'GAMES EXPLORER - RIO 2016',
        title: 'Did You Know?',
        description: description
    }, function (response) {
        if (response && response.post_id) {
            // alert('success');
        } else {
            // alert('error');
        }
    }

          );
}