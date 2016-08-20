
(function () {
    "use strict";

    window.infoplumAnalyticsTracker = window.infoplumAnalyticsTracker || {};
    window.infoplumAnalyticsTracker._trackers = window.infoplumAnalyticsTracker._trackers || [];


    function _setupGA(GAIds, cb) {
        if (!GAIds || GAIds == "") {    // if GA IDs string is not defined or is empty just exit.
            cb(false);
            return;
        }

        if (!window.ga) {    // check if ga is already present on page or not.
            (function (i, s, o, g, r, a, m) {                                                   // Execute!!!
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m); a.onload = function () {_registerTrackers(GAIds); setTimeout(function () { cb(true) }, 2000) };
            })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        } else {
            _registerTrackers(GAIds);
            setTimeout(function () { cb(true) }, 1000)
        }

    };

    function _registerTrackers(GAIds) {
        
        if (!GAIds || GAIds == "") {
            return false;
        }

        var GAIds = GAIds.split(",");   // convert comma separated string to array

        for (var g = 0; g < GAIds.length; g++) {
            var trackerName = 'infoplumTracker' + GAIds[g].trim().replace(/-/g, '');
            if (!~window.infoplumAnalyticsTracker._trackers.indexOf(trackerName)) {         // unique trackers only
                ga('create', GAIds[g], 'auto', trackerName);
                window.infoplumAnalyticsTracker._trackers.push(trackerName);
            }
        }
    }

    function _sendEvent(trackParams) {

        //var trackParams = {                                      // example trackParams structure
        //    eventType: 'pageview',  // or event
        //    evtParams: {
        //        evtCategory:""
        //        evtAction:"",    
        //        evtLabel:""
        //    }
        //};

        if (trackParams.eventType == 'pageview') {
            for (var t = 0 ; t < window.infoplumAnalyticsTracker._trackers.length; t++) {
                ga(window.infoplumAnalyticsTracker._trackers[t] + '.send', 'pageview');
            }
        }

        if (trackParams.eventType == 'event') {
            for (var t = 0 ; t < window.infoplumAnalyticsTracker._trackers.length; t++) {
                ga(window.infoplumAnalyticsTracker._trackers[t] + '.send', 'event', trackParams.evtParams.evtCategory || "", trackParams.evtParams.evtAction || "", trackParams.evtParams.evtLabel || "");
            }
        }

    };

    window.infoplumAnalyticsTracker.setupGA = window.infoplumAnalyticsTracker.setupGA || _setupGA;
    window.infoplumAnalyticsTracker.sendEvent = window.infoplumAnalyticsTracker.sendEvent || _sendEvent;


})();