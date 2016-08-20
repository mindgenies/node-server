(function () {
    'use strict';
    window.fallbackSrc = function () {
        var fallbackSrc = {
            link: function postLink(scope, iElement, iAttrs) {
                iElement.bind('error', function () {
                    angular.element(this).attr("src", iAttrs.fallbacksrc);
                });
            }
        }
        return fallbackSrc;
    }

})();