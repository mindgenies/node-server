window.infoplumDependencies = [];
window.infoplumCallbackQueue = [];
window.loadedCssFiles = [];
window.loadedJsFiles = [];

if (typeof loadDependencies != 'function')
    loadDependencies = function (dependencies, callback) {
        infoplumCallbackQueue.push(callback);

        for (var i = 0; i < dependencies.length; i++) {
            if (dependencies[i].toLowerCase().indexOf('.js') == dependencies[i].length - 3) {
                var queueState = dependencyqueue(dependencies[i]);
                if (queueState == null) {
                    var obj = {};
                    obj.name = dependencies[i];
                    obj.status = 'pending';
                    obj.callbacks = [];
                    window.infoplumDependencies.push(obj);
                }
            }
        }

        for (var i = 0; i < dependencies.length; i++) {
            loadDependency(dependencies[i], function () {
                readyCallback();
            });
        }
    }

if (typeof loadDependency != 'function')
    loadDependency = function (filename, callback) {
        
        if (filename.indexOf('://') < 0 && filename.indexOf('/') !== 0)
            if (filename.toLowerCase().lastIndexOf('.js') == filename.length - 3 && window.loadedJsFiles.indexOf(filename) >= 0) {
                if (queueState == 'loaded') {
                    callback();
                    return;
                }

                if (queueState == 'loading') {
                    addCallback(filename, callback);
                    return;
                }
                return;
            }

        if (filename.toLowerCase().lastIndexOf('.js') == filename.length - 3) {
            window.loadedJsFiles.push(filename);
            var queueState = dependencyqueue(filename);

            if (queueState == 'loaded') {
                callback();
                return;
            }

            if (queueState == 'loading') {
                addCallback(filename, callback);
                return;
            }

            addCallback(filename, callback);

            var isIE10 = (navigator && navigator.userAgent && !!~navigator.userAgent.indexOf("MSIE 10.0")) //MSIE 10.0
            var cacheBusterStr = isIE10 ? ('?cacheBuster=' + new Date().getTime()) : '';

            var script = document.createElement('script');
            script.src = filename + cacheBusterStr;
            script.type = 'text/javascript';
            document.head.appendChild(script);
            
            script.onload = function () {
                callbackProxy(filename, callback);
            };
            script.onerror = function () {
                callbackProxy(filename, callback);
            };
        }

        if (filename.toLowerCase().lastIndexOf('.css') == filename.length - 4 && !~window.loadedCssFiles.indexOf(filename)) {
            var link = document.createElement('link');
            link.href = filename;
            link.type = 'text/css';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
            window.loadedCssFiles.push(filename);
        }
    }

if (typeof dependencyqueue != 'function')
    dependencyqueue = function (filename) {
        for (var i = 0; i < window.infoplumDependencies.length; i++) {
            if (window.infoplumDependencies[i].name.toLowerCase() == filename.toLowerCase()) {
                return window.infoplumDependencies[i].status;
            }
        }
        return null;
    }

if (typeof addCallback != 'function')
    addCallback = function (filename, callback) {
        for (var i = 0; i < window.infoplumDependencies.length; i++) {
            if (window.infoplumDependencies[i].name.toLowerCase() == filename.toLowerCase()) {
                window.infoplumDependencies[i].callbacks.push(callback);
                return;
            }
        }

        var obj = {};
        obj.name = filename;
        obj.status = 'loading';
        obj.callbacks = [callback];
        //if (dependencyqueue(filename) != 'pending')
        window.infoplumDependencies.push(obj);
    }

if (typeof callbackProxy != 'function')
    callbackProxy = function (filename, callback) {
        for (var i = 0; i < window.infoplumDependencies.length; i++) {
            if (window.infoplumDependencies[i].name.toLowerCase() == filename.toLowerCase()) {
                window.infoplumDependencies[i].status = 'loaded';
                for (var j = 0; j < window.infoplumDependencies[i].callbacks.length; j++) {
                    if (typeof window.infoplumDependencies[i].callbacks[j] == 'function')
                        window.infoplumDependencies[i].callbacks[j]();
                }
            }
        }

        if (typeof callback == 'function')
            callback();
    }

if (typeof readyCallback != 'function')
    readyCallback = function () {

        for (var i = 0; i < window.infoplumDependencies.length; i++) {
            if (window.infoplumDependencies[i].status != 'loaded')
                return;
        }

        for (var i = 0; i < infoplumCallbackQueue.length; i++)
            if (typeof infoplumCallbackQueue[i] == 'function') {
                infoplumCallbackQueue[i]();
            }
        window.infoplumCallbackQueue = [];
    }

