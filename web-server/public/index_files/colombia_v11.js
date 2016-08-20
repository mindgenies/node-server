if (typeof colombia == 'undefined') {
    var colombia = {};
}
(function(funcName, baseObj) {
    try {

        "use strict";
        funcName = funcName || "colombiadocReady";
        baseObj = baseObj || window;
        var readyList = [];
        var readyFired = false;
        var readyEventHandlersInstalled = false;
        function clmbready() {
            try {            
                if (!readyFired) {
                    readyFired = true;
                    for (var i = 0; i < readyList.length; i++) {
                        readyList[i].fn.call(window, readyList[i].ctx);
                    }
                    readyList = [];
                }
            }
            catch(e) {
                console.log('Dom clmbready Error 1' + e);
            }                                  
        }

        function readyStateChange() {
            if (document.readyState === "complete") {
                clmbready();
            }
        }
        baseObj[funcName] = function(callback, context) {
            try 
            {                  
                if (readyFired) {
                    setTimeout(function() {
                        callback(context);
                    }, 1);
                    return;
                } else {
                    readyList.push({
                        fn: callback,
                        ctx: context
                    });
                }
                if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
                    setTimeout(clmbready, 1);
                } else if (!readyEventHandlersInstalled) {
                    if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", clmbready, false);
                        window.addEventListener("load", clmbready, false);
                    } else {
                        // must be IE
                        document.attachEvent("onreadystatechange", readyStateChange);
                        window.attachEvent("onload", clmbready);
                    }
                    readyEventHandlersInstalled = true;
                }
            }
            catch(e) 
            {
                console.log('Dom clmbready Error baseObj' + e);
            }  
        }
    } catch (e) {
        console.log('Dom ready Error' + e)
        COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Dom ready Error :- ' + e);
    }
})("colombiadocReady", window);
// modify this previous line to pass in your own method name 
// and object for the method to be attached to

var columbiaAds = { 
    _auds: "-1",
    isauds: false,
    lotamecall: false,
    itemInfo: [],
    colombiaAdeURL:'',
    deviceType: 'desktop',
    colombiaCookies:'',
    fns: {
        push: function(func) {
            func();
        }
    },
    update: function() {
        try {
            colombiaViewportAd.onScroll();
        } catch (e) {
            COLOMBIAUTIL.onConsole('Update:' + e);   
        //console.log('Error in update', e);
        }
    },
    resetAdDivClass: function(divid) {
        try{
            var colombiaclassArr = ['colombia', 'colombiaFail', 'colombiaRequestSend', 'colombiaSuccess', 'colombiatracked', 'colombiaTimeOut','colombiaSliderSuccess'];
            var adDivObj = document.getElementById(divid);
            var newDivClassname = adDivObj.className;
            for (var i = 0; i < colombiaclassArr.length; i++) {
                newDivClassname = COLOMBIAUTIL.strExactReplace(newDivClassname, colombiaclassArr[i], '');
            }
            var unitid = adDivObj.getAttribute('data-slot') + "~" + adDivObj.getAttribute('data-position');
            colombiaViewportAd.adunitpos[unitid] = 0;
            var id = adDivObj.getAttribute('data-slot') + "~" + adDivObj.getAttribute('data-position')+ "~" + adDivObj.getAttribute('data-section');
            if(typeof colombiaViewportAd.colombiaAdDiv[id] != 'undefined'){
                colombiaViewportAd.colombiaAdDiv[id].tpimp = [];
            }
            adDivObj.className = 'colombia ' + colombiaViewportAd.adTrim(newDivClassname);
        }catch(e){
            console.log('error in resetAdDivClass ' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Reset AdDiv Class :- ' + e);
        }
        
    },
    clear: function() {
        try 
        {
            columbiaAds.itemInfo = [];
            for(var i in colombiaViewportAd.colombiaAdDiv)
            {
                var id = colombiaViewportAd.colombiaAdDiv[i].divid;
                columbiaAds.resetAdDivClass(id);
                                                            
            }
            colombiaViewportAd.onScroll();

        } catch (e) {
            COLOMBIAUTIL.onConsole('Clear:' + e); 
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error clear :- ' + e);
        }
    },
    clearData: function(){
        try { 
            columbiaAds.itemInfo = [];
            colombiaDataLoader.pv = 0;
            colombiaDataLoader.dpv = false;
        }catch(e) {
            COLOMBIAUTIL.onConsole('clearData:' + e); 
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error clearData :- ' + e);
        }
    },
    notifyColombiaAd:function(divid){
        try {
            var item = document.getElementById(divid);
            if(item!= null && item.className.indexOf('colombiaSliderSuccess') > -1 ) {
                var adunit = item.getAttribute('data-slot');
                var position = item.getAttribute('data-position');
                var section = item.getAttribute('data-section');
                var id = adunit+"~"+position+"~"+section;
                var notifyurl = colombiaViewportAd.colombiaAdDiv[id].imprURL;
                var img = document.createElement('img');
                img.src = notifyurl + '&adunit='+adunit+'~'+position;
                img.style.display = 'none';
                item.appendChild(img);
                item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombiaSliderSuccess', 'colombiatracked');
            }  
        } catch(e) {
            COLOMBIAUTIL.onConsole('notifyColombiaAd:' + e); 
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error notifyColombiaAd :- ' + e);
        }
         
    },
    refresh: function(id) 
    {
        if(id == "" || typeof id == 'undefined' ) {
            return;
        }
        try {
            columbiaAds.resetAdDivClass(id);
            colombiaViewportAd.onScroll();
        } catch (e) {
            COLOMBIAUTIL.onConsole('Refresh:' + e); 
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error in refresh :- ' + e);
        }
    },
    refreshFBAd: function(id,itemId) 
    {
        if(id == "" || typeof id == 'undefined' ) {
            return;
        }
        try {
            colombiaDataLoader.isnf = true;
            if (columbiaAds.itemInfo.indexOf(itemId) == -1) 
            {
                columbiaAds.itemInfo.push(itemId);
            } 
            columbiaAds.resetAdDivClass(id);
            var item = document.getElementById(id);
            if(item)
            {
                var adunits = colombiaViewportAd.colombiaAdRequest(item);
                if(adunits.length > 0)
                {
                    columbiaAds.load(adunits);
                }
            }
        } catch (e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error in refreshFBAd :- ' + e);
        }
    },
    timeoutHandler: function(adunitid) {
        try
        {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Timeout Event:- ' + adunitid );
            for(var i=0; i < adunitid.length; i++)
            {
                var obid = adunitid[i].split("~")[0]+"~"+adunitid[i].split("~")[1]+"~"+adunitid[i].split("~")[2];
                var item = document.getElementById(colombiaViewportAd.colombiaAdDiv[obid].divid);
                item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombiaRequestSend', 'colombiaTimeOut');
                item.style.display = 'none';
                if(colombiaViewportAd.colombiaAdDiv[obid].type == 'data'){
                    colombiaViewportAd.colombiaAdDiv[obid].cback(null,item.id);
                }
            }
        }
        catch(e){
            COLOMBIAUTIL.onConsole('Timeouthandler:' + e); 
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on timeoutHandler :- ' + e);
        //console.log('error on timeoutHandler - ' + e)
        }
    },
    load: function(adstring) {
        try {
            if (!this.isauds && !columbiaAds.lotamecall) {
                colombiaDataLoader.fireTimeOutPixel('loatamecall');
                columbiaAds.lotamecall = true;
                $jsonp.send("//ad.crwdcntrl.net/5/c=2800/pe=y/callback=ccuad", {
                    callbackName: 'ccuad',
                    onSuccess: function(json) {
                        try {
                            if (json.hasOwnProperty('Profile')) {
                                
                                for (var _i = 0; _i < json.Profile.Audiences.Audience.length; _i++) {
                                    if (_i == 200) {
                                        break;
                                    }
                                    if(_i == 0)
                                    {
                                        columbiaAds._auds = json.Profile.Audiences.Audience[_i].abbr;
                                    }else{
                                        columbiaAds._auds += "," + json.Profile.Audiences.Audience[_i].abbr;
                                    }
                                }
                            }
                        } catch (e) {
                            COLOMBIAUTIL.onConsole('onLotameError:' + e); 
                            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on Lotame :- ' + e);
                        }

                        columbiaAds.isauds = true;
                        colombiaDataLoader.loadFile(adstring);
                    },
                    onTimeout: function() {
                        columbiaAds.isauds = true;
                        colombiaDataLoader.loadFile(adstring);
                    },
                    timeout: 2
                });

            } else {
                colombiaDataLoader.loadFile(adstring);
            }
        } catch (e) {
            COLOMBIAUTIL.onConsole('Load:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on load :- ' + e);
        //console.log(' error on load');
        }
    },
    loadDataAd: function(jsondata, id)
    {
        try          
        {
            if(jsondata != null) {  
                var iType = jsondata.paidAds[0].itemType;
                if (iType == 8) 
                {
                    colombiaadCreative.renderExternalHTMLTag(jsondata, colombiaViewportAd.colombiaAdDiv[id].divid);
                    return;
                }
                if(iType == 5)
                {
                    columbiaAds.colombiaAdeURL = jsondata.paidAds[0].clk[0];
                    jsondata.paidAds[0].clk[0] = "javascript:colombiaLeads.clmbLead('"+id+"','"+colombiaViewportAd.colombiaAdDiv[id].divid+"',1)";
                }
                colombiaViewportAd.colombiaAdDiv[id].cback(jsondata, colombiaViewportAd.colombiaAdDiv[id].divid);
                if(iType == 5)
                {
                    colombiaLeads.clmbLead(id,colombiaViewportAd.colombiaAdDiv[id].divid,0);
                }
            } else {
                colombiaViewportAd.colombiaAdDiv[id].cback(jsondata, colombiaViewportAd.colombiaAdDiv[id].divid);
            }    
        } catch(e)
{
            COLOMBIAUTIL.onConsole('LoadData:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on loadDataAd :- ' + e);
        }
    },
    loadDisplayAd: function(jsondata, id)
    {
        try          
        {
            colombiaadCreative.createAd(jsondata,colombiaViewportAd.colombiaAdDiv[id].divid);
        } catch(e)
{
            COLOMBIAUTIL.onConsole('LoadDisplayAd:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on loadDisplayAd :- ' + e);
        }
               
    },
    jsonCallback: function(response) 
    {  
        try
        {
            var adResponse;
            
            if(typeof JSON == 'undefined')
            { 
                adResponse = eval(response);
            }
            else
            {
                adResponse = JSON.parse(response);
            }
            
            for (var i = 0; i < adResponse.length; i++) 
            {
                var id = adResponse[i].adSlot+'~'+adResponse[i].position+'~'+adResponse[i].section;
                var item = document.getElementById(colombiaViewportAd.colombiaAdDiv[id].divid);
                colombiaViewportAd.colombiaAdDiv[id].imprURL = adResponse[i].imprUrl;
                var success = adResponse[i].success;
                
                if (success == 1)
                {
                    try{
                        var itemSlider = item.getAttribute('data-slide');
                        if(itemSlider == 'slider') 
                        {
                            item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombiaRequestSend', 'colombiaSliderSuccess');   
                        }else {
                            item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombiaRequestSend', 'colombiaSuccess');
                        }
                        colombiaViewportAd.RequestNotify();
                    }catch(e){
                        item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombiaRequestSend', 'colombiaSuccess');
                    // COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on success :- ' + e.message);
                    }
                                                                                
                    colombiaViewportAd.colombiaAdDiv[id].addata  = adResponse[i];
                    colombiaDataLoader.fireTimeOutPixel('success');                         
                    if (colombiaViewportAd.colombiaAdDiv[id].type == 'data')
                    {
                        var jsondata = columbiaAds.getAdJSON(adResponse[i]);
                        columbiaAds.loadDataAd(jsondata,id);
                    }
                    else 
                    {
                        columbiaAds.loadDisplayAd(adResponse[i],id)
                        
                    }
                } else {
                    item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombiaRequestSend', 'colombiaFail');
                    item.style.display='none';
                    colombiaViewportAd.colombiaAdDiv[id].addata  = null;
                    colombiaDataLoader.fireTimeOutPixel('noresponse');
                    if (colombiaViewportAd.colombiaAdDiv[id].type == 'data')
                    {
                        columbiaAds.loadDataAd(null,id);
                    }
                }
                                                                
                if (!vserveModule.isload && adResponse[i].hasOwnProperty('cs')) {
                    vserveModule.load(adResponse[i]);
                }
                if(adResponse[i].hasOwnProperty('fpc'))
                {
                    columbiaAds.colombiaCookies = adResponse[i].fpc;
                    COLOMBIAUTIL.setCookie('_col_uuid',columbiaAds.colombiaCookies,60);
                }
            }
            setTimeout(colombiaViewportAd.RequestNotify, 1000);
        }catch(e){
            COLOMBIAUTIL.onConsole('jsonback:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on jsonback :- ' + e.message);
        //console.log(' error on jsonback'+e);
        }
    },
    getCB: function() {
        var rnd = '0';
        try {
            var text = "";
            var hdntxt = "";
            var captchatext = "";
            var possible = "ABCDEFGHIkLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            for (var i = 0; i < 3; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length)) + Math.floor((Math.random() * 999) + 1);
            }
            rnd = text;
        } catch (e) {
        //console.log('Error in getcb', e);
        }
        return rnd;
    },
    repllaceMacro: function(url) {
        try {
            url = COLOMBIAUTIL.strReplace(url, "%7B%7BRND%7D%7D", columbiaAds.getCB());
        } catch (e) {
            COLOMBIAUTIL.onConsole('repllaceMacro:' + e);
        }
        return url;
    },
    getAdJSON: function(response) {
        try {
            var ad = {};
            if (response.hasOwnProperty("items")) {
                var items = columbiaAds.dataResponseFormat(response.items, response);
                ad["paidAds"] = items;
            }

            if (response.hasOwnProperty("oItems")) {
                var items = columbiaAds.dataResponseFormat(response.oItems, response);
                ad["organicAds"] = items;

            }
            ad["version"] = "1.2";
            return ad;
        } catch (e) {
            COLOMBIAUTIL.onConsole('getAdjson:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on getAdJSON :- ' + e);
        }
    },
    fireImpression: function(pixelurl) {
        for (var i = 0; i < pixelurl.length; i++) {
            try 
            {
            
                (new Image()).src  = pixelurl[i];
            } catch(e) { 
            COLOMBIAUTIL.onConsole('fireImpression:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on fireImpression :- ' + e);
        }
           
        /* var img = document.createElement('img');
            img.src = pixelurl[i];
            img.style.display = 'none';
            document.body.appendChild(img);
            */
        }
    },
    fireThirdPartyImp: function(id) {
        try{
            var pixelurl = colombiaViewportAd.colombiaAdDiv[id].tpimp;
            colombiaViewportAd.colombiaAdDiv[id].tpimp = [];
            for (var i = 0; i < pixelurl.length; i++) 
            {
                // var img = document.createElement('img');
                if(pixelurl[i].indexOf('[CB]') > -1)
                {
                    pixelurl[i] = COLOMBIAUTIL.strReplace(pixelurl[i], '[CB]',  columbiaAds.getCB());
                }
                else
                {
                    if(pixelurl[i].indexOf('?') == -1)
                    {
                        pixelurl[i]= pixelurl[i] + "?cb=" + columbiaAds.getCB();
                    } else {
                        pixelurl[i] = pixelurl[i] + "&cb=" + columbiaAds.getCB();
                    }
                }
                try {
                    (new Image()).src  = pixelurl[i];
                } catch(e) {
                    console.log('error in image objects fireThirdPartyImp' + e);
                }
            /*img.src = pixelurl[i];
                img.style.display = 'none';
                document.body.appendChild(img);
               */ 
            }
        }catch(e){
            console.log("error in fireThirdPartyImp " +e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on fireThirdPartyImp :- ' + e);
        }
    },
    storeThirdPartyImprURL:function(item,response)
    {
        try
        {
            if (item.hasOwnProperty('imprTrackers')) 
            {
                var id = response.adSlot+"~"+response.position+"~"+response.section;
                for(var t=0; t< item.imprTrackers.length; t++)
                {
                    colombiaViewportAd.colombiaAdDiv[id].tpimp.push(item.imprTrackers[t]); 
                }
                if(typeof colombiaViewportAd.colombiaAdDiv[id] != 'undefined')
                {
                    var adDivObj = document.getElementById(colombiaViewportAd.colombiaAdDiv[id].divid);
                    var newDivClassname = adDivObj.className;

                    if(newDivClassname.indexOf('colombiatracked') > -1)
                    {
                        this.fireThirdPartyImp(id);
                    }
                }
            }
        }catch(e){
            console.log("error in storeThirdPartyImprURL " +e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on storeThirdPartyImprURL :- ' + e);
        }     
    },
    dataResponseFormat: function(responseData, response) {
        var items = [];
        try
        {   
            for (var i = 0; i < responseData.length; i++) 
            {
                var ob = {
                    "title": responseData[i].hasOwnProperty("name") ? responseData[i].name : "",
                    "mainimage": responseData[i].hasOwnProperty("sImg") ? responseData[i].sImg[0] : "",
                    "clk": [responseData[i].hasOwnProperty("url") ? columbiaAds.repllaceMacro(responseData[i].url) : ""],
                    "brandtext": responseData[i].hasOwnProperty("brand") ? responseData[i].brand : "",
                    "price": responseData[i].hasOwnProperty("price") ? responseData[i].price : "",
                    "text": responseData[i].hasOwnProperty("desc") ? responseData[i].desc : "",
                    "iconImage": responseData[i].hasOwnProperty("iconimage") ? responseData[i].iconimage : "",
                    "offerPrice": responseData[i].hasOwnProperty("offerPrice") ? responseData[i].offerPrice : "",
                    "offerText": responseData[i].hasOwnProperty("offertext") ? responseData[i].offertext : "",
                    "inhouse": responseData[i].hasOwnProperty("inhouse") ? responseData[i].inhouse : false,
                    "extraImages": responseData[i].hasOwnProperty("sImg") ? [responseData[i].sImg[0]] : [],
                    "downloads": responseData[i].hasOwnProperty("downloads") ? responseData[i].downloads : "",
                    "reviews": responseData[i].hasOwnProperty("reviews") ? responseData[i].reviews : "",
                    "imptracker": [],
                    "pubdate": responseData[i].hasOwnProperty("pubdate") ? responseData[i].pubdate : "",
                    "rating": responseData[i].hasOwnProperty("rating") ? responseData[i].rating : "",
                    "displayUrl": responseData[i].hasOwnProperty("displayUrl") ? responseData[i].displayUrl : "",
                    "vastXml": responseData[i].hasOwnProperty("vastXml") ? responseData[i].vastXml : "",
                    "videoUrl": responseData[i].hasOwnProperty("videoUrl") ? responseData[i].videoUrl : "",
                    "duration": responseData[i].hasOwnProperty("duration") ? responseData[i].duration : "",
                    "views": responseData[i].hasOwnProperty("views") ? responseData[i].views : "",
                    "author": responseData[i].hasOwnProperty("author") ? responseData[i].author : "",
                    "publishdate": responseData[i].hasOwnProperty("publishDate") ? responseData[i].publishDate : "",
                    "platform": responseData[i].hasOwnProperty("platform") ? responseData[i].platform : "",
                    "colombiaLogo": "//static.clmbtech.com/ad/commons/images/colombia-icon.png",
                    "itemType": responseData[i].hasOwnProperty("itemType") ? responseData[i].itemType : 1,
                    "adAttributionIcon": responseData[i].hasOwnProperty("adAttributionIcon") ? responseData[i].adAttributionIcon : "",
                    "adAttributionText": responseData[i].hasOwnProperty("adAttributionText") ? responseData[i].adAttributionText : "",
                    "adAttributionUrl": responseData[i].hasOwnProperty("adAttributionUrl") ? responseData[i].adAttributionUrl : "",
                    "autoplay": responseData[i].hasOwnProperty("playStrategy") ? responseData[i].playStrategy : "0",
                    "audio": responseData[i].hasOwnProperty("audioStrategy") ? responseData[i].audioStrategy : "0",
                    "vastUrl": responseData[i].hasOwnProperty("vastUrl") ? responseData[i].vastUrl : "",
                    "dataType": responseData[i].hasOwnProperty("dataType") ? responseData[i].dataType : "0",
                    "ip": response.hasOwnProperty("ip") ? response.ip : "0",
                    "slot": response.hasOwnProperty("adSlot") ? response.adSlot : "",
                    "position": response.hasOwnProperty("position") ? response.position : "",
                    "impr": response.hasOwnProperty("imprId") ? response.imprId : "0",
                    "script": responseData[i].hasOwnProperty("script") ? responseData[i].script : "",
                    "snippet": response.hasOwnProperty("snippet") ? response.snippet : "",
                    "leadsnippet": responseData[i].hasOwnProperty("snippet") ? responseData[i].snippet : "",
                    "lineItemId": response.items[i].hasOwnProperty("lId") ? response.items[i].lId : "0",
                    "ItemId": responseData[i].hasOwnProperty("itemId") ? responseData[i].itemId : "0",
                    "ctaText": response.items[i].hasOwnProperty("ctaText") ? response.items[i].ctaText : ""
                }
                items.push(ob);
                if (responseData[i].hasOwnProperty('imprTrackers')){
                    columbiaAds.storeThirdPartyImprURL(responseData[i],response);
                }
                //columbiaAds.dfpLog(responseData[i]);
            }
        }catch(e){
            console.log('Error in dataformat ' +e);  
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on dataformat :- ' + e);
        }
        return items;
    },
    checkDevice: function() {
        try {
            var ua = 'desktop';
            var mobile = (/iphone|ipad|ipod|android|blackberry|mini|iemobile|sce|palm/i.test(navigator.userAgent.toLowerCase()));
            if (mobile) {
                ua = 'mobile';
            }
            return ua;
        } catch (e) {
            return 'desktop';
        }
    },
    dfpLog: function(responseData){
      /*  try {
            if(responseData.itemType == 4 && responseData.hasOwnProperty('vastUrl') && responseData.vastUrl !='' )
            {
                var url = responseData.vastUrl;
                if(url.indexOf('ca-video-pub-7371018475227526') > -1) 
                {
                    var _url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/Videotest_Tracker_BABA/Baba_V4callNew&sz=1x1&c='+columbiaAds.getCB();
                    COLOMBIAUTIL.dfpTrack(_url);
                }
            }
        } catch(e) {  }  
  */      
    }
// end
}

var colombiaDataLoader = {
    arrLoadQueue: [],
    pv: 0,
    dpv: false,
    tm_three: '',
    tm_seven: '',
    isnf:false,
    script_error: false,
    loadFile: function(adunitid) {
        try {
            this.arrLoadQueue.push(adunitid);
            if (this.arrLoadQueue.length == 1) {
                this.initiateLoad();
            }  
        }catch(e) {
            console.log('Error in loadFile ' +e);  
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on loadFile :- ' + e);
        }

    },
    initiateLoad: function() {
        try {
            if (this.arrLoadQueue[0] == null) {} else {
                var ex = (columbiaAds.itemInfo.length > 0) ? columbiaAds.itemInfo.toString() : null;
                if (this.arrLoadQueue[0] == "") {
                    return;
                }

                if(!COLOMBIAUTIL.isFlashPlugins){
                    columbiaAds._auds+=',5q6';
                    COLOMBIAUTIL.isFlashPlugins = true;
                }
                var windowref = (window.location != window.parent.location) ? document.referrer : document.location;
                var url = '//ade.clmbtech.com/cde/data/v4.htm?id=' + this.arrLoadQueue[0] + '&_v=0&auds=' + columbiaAds._auds + '&_u=' + escape(windowref) + '&_t=3&_c=colombiaadCallback&fpc='+columbiaAds.colombiaCookies+'&r=' + columbiaAds.getCB();
                   
                if(colombiaDataLoader.isnf){
                    colombiaDataLoader.isnf = false;
                    url = url+'&nf='+ex;
                }
                if(!colombiaDataLoader.dpv){
                    colombiaDataLoader.dpv = true;
                    url = url+'&dpv=1'; 
                }
                colombiaDataLoader.fireTimeOutPixel('calladv4');
                $jsonp.send(url, {
                    callbackName: 'colombiaadCallback',
                    onSuccess: function(json) {
                        columbiaAds.jsonCallback(json);
                        colombiaDataLoader.searchQueue();
                    },
                    onTimeout: function() 
                    {
                        //colombiaDataLoader.arrErrorQueue.push((colombiaDataLoader.arrLoadQueue[0]));
                        columbiaAds.timeoutHandler(colombiaDataLoader.arrLoadQueue[0]);
                        colombiaDataLoader.searchQueue();
                        //colombiaDataLoader.arrLoadQueue = [];
                        colombiaDataLoader.fireTimeOutPixel('timeout');
                        console.log('timeout');
                    },
                    timeout: 15
                });
            //COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', ' Ad Request from :- ' + this.arrLoadQueue[0]);
            // COLOMBIAUTIL.dfpTrack('http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/Columbia_Test/CTN_AD_Track_1x1&sz=1x1&c=');
            }
        } catch (e) {
            COLOMBIAUTIL.onConsole('jsonp:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on jsonp :- ' + e);
        }
    },
    colombiatrackPixel: function(trackno) {
        try {
        /*var eventTrackURL = "//ade.clmbtech.com/cde/eventTracking.htm?ad=0_270738_99653d38-2363-438c-8b5a-49f56e1a0054-7fcg_man9-c399-43a7-9daa-5f621bae533a-25ol8_2644_645001_144_206659_4&ida={ios_ifa}&idv={ios_ifv}&gpId=1&um5=1&o1={android_id_sha1}&matchType={match_type}&impId={publisher_ref_id}&trackingPartner=hasoffers&userAgent={conversion_user_agent}&deviceIp={device_ip}&attributed={is_attributed}&eventTime={conversion_timestamp_milliseconds}&dnt={ios_ad_tracking}&eid="+trackno+"&adpn=gaana.com&cb="+ columbiaAds.getCB();
            COLOMBIAUTIL.ColombiaTrack(eventTrackURL); */
        }catch(e){
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on colombiatrackPixel :- ' + e);
        }    

    },
    fireTimeOutPixel: function(par) {
        try {
            //var windowref = (window.location != window.parent.location) ? document.referrer : document.location;
            var url = "";
            /* var hostname = window.location.hostname;
            var section = "";
            var param = "";
          
            if (window.location.pathname.length > 1) {
                var path = window.location.pathname.split('/');

                if (path.length > 1) {
                    section = "-" + window.location.pathname.split('/')[1];
                }
            }
       */
            if (par == "timeout" && !colombiaDataLoader.script_error) {
                url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/ColombiaTimeout_tracker&sz=1x1&c='+ columbiaAds.getCB();
            } else if (par == "noresponse") {
                url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/ColombiaBlank_tracker&sz=1x1&c=' + columbiaAds.getCB();
            } else if(par == 'loatamecall') {
                url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/Calllotame_tracker&sz=1x1&c=' + columbiaAds.getCB();
            } else if(par == 'success') {
                // url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/ColombiaSuccess_tracker&sz=1x1&c=' + columbiaAds.getCB();
                url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/ColombiaSuccess_tracker1&sz=1x1&c='+ columbiaAds.getCB();
            } else if(par == 'calladv4') {
                url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/AdV4Request_tracker&sz=1x1&c=' + columbiaAds.getCB();
            } else if(par == 'jsload') {
                url = 'http://pubads.g.doubleclick.net/gampad/ad?iu=/7176/COLOMBIA_Tags/ColombiaJsLoad_tracker&sz=1x1&c=' + columbiaAds.getCB();
            } 
            
            if (url != "") {
                var img = document.createElement('img');
                img.src = url;
                img.style.display = 'none';
                document.body.appendChild(img);
            }
        } catch (e) {
            COLOMBIAUTIL.onConsole('pixel fire:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error in pixel fire :- ' + e);
        }
    },
    searchQueue: function() {
        try {
            if (this.arrLoadQueue.length != 0) {
                this.arrLoadQueue.splice(0, 1);
            }
            if (this.arrLoadQueue.length > 0) {
                this.initiateLoad();
            } 
        }catch(e) {
            COLOMBIAUTIL.onConsole('error search Queue:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error in search Queue :- ' + e); 
        }
    }
};

var colombiaadCreative = {
    resizeAd: function(width, height, container) {
        try {
            var dv = document.getElementById(container);
            dv.style.width = width;
            dv.style.height = height + "px";
        } catch (e) {
            COLOMBIAUTIL.onConsole('resizeAd:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Error on resizeAd :- ' + e);
        }
    },
    replaceAdValue: function(adStr, response) {
        try{
            var repstr = COLOMBIAUTIL.strReplace(adStr, '{{href}}', response.hasOwnProperty("url")? response.url : '');
            repstr = COLOMBIAUTIL.strReplace(repstr, '{{imgsrc}}', response.hasOwnProperty("sImg") ? response.sImg[0] : '');
            repstr = COLOMBIAUTIL.strReplace(repstr, '{{title}}', response.hasOwnProperty("name") ? response.name : '');
            repstr = COLOMBIAUTIL.strReplace(repstr, '{{desc}}', response.hasOwnProperty("desc") ? response.desc : '');
            repstr = COLOMBIAUTIL.strReplace(repstr, '{{brand}}', response.hasOwnProperty("brand") ? response.brand : '');
            return repstr;
        }catch(e){
            console.log('error in replace values ' +e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Error on replaceAdValue :- ' + e);
        }
    },
    createAd: function(response, adcontainer) {
        var snippet;
        var adstr = "";
        var adsnippet = "";
        try {
            if (!response.hasOwnProperty('snippet')) {
               
                return;
            }

            snippet = response.snippet;
            var adBox = document.getElementById(adcontainer);
            adBox.style.display = 'none';
            snippet = snippet.replace("%jdata%", "");
            snippet = snippet.replace("\\", "");
            snippet = COLOMBIAUTIL.strReplace(snippet, "\\\"", "\"");
            snippet = COLOMBIAUTIL.strReplace(snippet, "\\\"", "\"");
            snippet = COLOMBIAUTIL.strReplace(snippet, "<\\a>", "</a>");
            snippet = COLOMBIAUTIL.strReplace(snippet, 'id="adsdivLyr">', 'id="adsdivLyr">{{adpaidbody}}');
            snippet = COLOMBIAUTIL.strReplace(snippet, 'id="adsOrgdivLyr">', 'id="adsOrgdivLyr">{{adogbody}}');

            if (response.hasOwnProperty('items') || response.hasOwnProperty('oItems')) {
                if (snippet.indexOf("{{width}}") > -1) {
                    var frmwidth1 = snippet.split("{{width}}");
                    frmwidth = frmwidth1.length == 3 ? frmwidth1[1] : "";
                    adBox.style.width = frmwidth;
                }

                if (snippet.indexOf("{{height}}") > -1) {
                    var frmheight1 = snippet.split("{{height}}");
                    frmheight = frmheight1.length == 3 ? frmheight1[1] : "";
                    adBox.style.height = frmheight;
                }
            }
            /*  Code for Paid items             */
            if (response.hasOwnProperty('items')) {
                var paidItem = "";

                for (var i = 0; i < response.items.length; i++) 
                {
                    if (i == 0) {
                        if (snippet.indexOf("#pd#") > -1) {
                            var tmp1 = snippet.split("#pd#");
                            paidItem = tmp1.length == 3 ? tmp1[1] : "";
                        }
                    }
                    if (paidItem != "") {
                        adstr += this.replaceAdValue(paidItem, response.items[i]);
                    }
                   
                    if (response.items[i].hasOwnProperty('imprTrackers'))
                    {
                        columbiaAds.storeThirdPartyImprURL(response.items[i],response);
                    }
                   // columbiaAds.dfpLog(response.items[i]);
                }
                adsnippet = COLOMBIAUTIL.strReplace(snippet, '{{adpaidbody}}', adstr);
            }
            /*  Code for organic items   */
            if (response.hasOwnProperty('oItems')) {
                var organicItem = "";
                adstr = '';
                for (var j = 0; j < response.oItems.length; j++) {
                    if (j == 0) 
                    {
                        if (snippet.indexOf("#og#") > -1) {
                            var tmp2 = snippet.split("#og#");
                            organicItem = tmp2.length == 3 ? tmp2[1] : "";
                        }
                    }
                    if (organicItem != "") {
                        adstr += this.replaceAdValue(organicItem, response.oItems[j]);
                    }
                    if (response.oItems[j].hasOwnProperty('imprTrackers'))
                    {
                        columbiaAds.storeThirdPartyImprURL(response.oItems[j],response);
                    }
                }
                adsnippet = COLOMBIAUTIL.strReplace(adsnippet, '{{adogbody}}', adstr);
            }
            /* End of Og Items       */
            adBox.innerHTML = "";
            var id = response.adSlot+"~"+response.position+"~"+response.section;
            colombiaadCreative.drawAdFrame(id,adcontainer, adsnippet);
            
            
        } catch (e) {
            COLOMBIAUTIL.onConsole('CreateAd :' + e.message);
            console.log(e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Create Ad :- ' + e);
        }
    },
    renderExternalHTMLTag: function(response, adcontainer) {
        try {
            var snippet = response.paidAds[0].snippet;
            snippet = COLOMBIAUTIL.strExactReplace(snippet, 'parentColombiaContainerId', adcontainer);
            snippet = COLOMBIAUTIL.strExactReplace(snippet, 'colombiaItemId', response.paidAds[0].ItemId);
            
            var iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';
            iframe.setAttribute("scrolling", "no");
            iframe.setAttribute("frameBorder", '0');
            iframe.style.overflow = "hidden";
            // iframe.style.float = "left";
            iframe.id = 'ifr_' + adcontainer;
            var p = document.getElementById(adcontainer);
            //p.innerHTML = '';
            p.appendChild(iframe);
            document.getElementById(iframe.id).onload = function() 
            {
                this.contentWindow.document.body.style.margin = 0;
                this.contentWindow.document.body.style.padding = 0;
            }
            iframe.contentWindow.document.write(snippet);
            iframe.contentWindow.document.close();
            colombiaViewportAd.onScroll();
        } catch (e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error renderExternalHTMLTag :- ' + e);
        }
    },
    drawAdFrame: function(id,adcontainer, snippet) {
        try {
            var iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';
            iframe.setAttribute("scrolling", "no");
            iframe.setAttribute("frameBorder", '0');
            iframe.style.overflow = "hidden";
            //iframe.style.float = "left";
            iframe.id = 'ifr_' + id;
            document.getElementById(adcontainer).appendChild(iframe);
           
            document.getElementById(iframe.id).onload = function() {
                try { 
                    var iFrameBody = '';
                    var id = this.id.split('_')[1];
                    if (this.contentDocument) 
                    { 
                        iFrameBody = this.contentDocument.getElementsByTagName('body')[0];
                    }
                    else if ( this.contentWindow ) 
                    { 
                        iFrameBody = this.contentWindow.document.getElementsByTagName('body')[0];
                    }
                    var frameHTML = iFrameBody.innerHTML;
                    var iframeContent = (this.contentWindow || this.contentDocument);
                    if (frameHTML.indexOf("#mb#") > 0) 
                    {
                        setTimeout(function() {
                            iframeContent.res();
                        }, 500);
                    }
                    if (frameHTML.indexOf("<video") > 0) 
                    {
                        var ad = {};
                        var divData = colombiaViewportAd.colombiaAdDiv[id];
                        ad["paidAds"] = columbiaAds.dataResponseFormat(divData.addata.items, divData.addata);
                        iframeContent.colombiaVideoAd(ad, divData.divid);
                    }
                } catch(e){
                    COLOMBIAUTIL.onConsole('Iframe onload :' + e);
                } 
            }
            
            if (snippet.indexOf("#mb#") > 0) {
                snippet += "<script> var container = \'" + adcontainer + "\';var addiv = document.getElementById('colombiaAdBox');window.top.onresize = res;function res(){try{window.top.colombiaadCreative.resizeAd('100%',addiv.offsetHeight,container);}catch(e){}};</script>";
            }
            iframe.contentWindow.document.write(snippet);
            iframe.contentWindow.document.close();
            document.getElementById(adcontainer).style.display = 'block';

        } catch (e) {
            COLOMBIAUTIL.onConsole('iframe render:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error iframe render :- ' + e);
        }
    }

}

var colombiaLeads = {
    clmbLead: function(id,adcontainer,status) 
    {
        try 
        {
            var LeadData = colombiaViewportAd.colombiaAdDiv[id].addata.items;
            var isIfrmObj = document.getElementById("ifr_lead_"+adcontainer);
            if(status==0 && !isIfrmObj)  
            {
                if (LeadData[0].hasOwnProperty('snippet'))
                { 
                    var iframe = document.createElement('iframe');
                    iframe.style.width = '100%';
                    iframe.style.height = 'auto';
                    iframe.style.border = '0';
                    iframe.style.display = 'none';
                    iframe.setAttribute("scrolling", "no");
                    iframe.setAttribute("frameBorder", '0');
                    iframe.style.overflow = "hidden";
                    iframe.style.top = "0px";
                    iframe.style.left = "0px";
                    iframe.id = 'ifr_lead_' + adcontainer; 
                    iframe.setAttribute("AddClick", columbiaAds.colombiaAdeURL);
                    iframe.setAttribute('dataads','ifr_lead_' +id);
                    var snippetData =LeadData[0].snippet;
                    if (snippetData.indexOf("#popup#") > 0)
                    {
                        document.body.appendChild(iframe);
                    }
                    else {
                        document.getElementById(adcontainer).appendChild(iframe);     
                    }
                    snippetData = COLOMBIAUTIL.strReplace(snippetData, "{{FROM_ID}}", iframe.id);
                    document.getElementById(iframe.id).onload = function() 
                    {
                        try 
                        {
                            var frmId = this.getAttribute('dataads');
                            var data = colombiaViewportAd.colombiaAdDiv[frmId.split('ifr_lead_')[1]].addata;
                            var container = colombiaViewportAd.colombiaAdDiv[frmId.split('ifr_lead_')[1]].divid;
                            /* For Set predata lineItemId and itemId for old version */
                            this.contentWindow.setFrmaData(data,container);
                        /* For Open lead form */
                        }      
                        catch(e){
                            console.log('Error Load Lead iframe :' +e);
                        } 
                    }
                    iframe.contentWindow.document.write(snippetData);
                    iframe.contentWindow.document.close();
                }
            }                  
            else {
                isIfrmObj.contentWindow.clmbLeadanimate("ifr_lead_"+adcontainer,'open');
            }
        }
        catch(e){
            console.log('leadgen render:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error leadgen render :- ' + e);
        }
    }
}


var $jsonp = (function() {
    try {
        var that = {};
        that.send = function(src, options) {
            var callback_name = options.callbackName || 'callback';
            var on_success = options.onSuccess || function() {};
            var on_timeout = options.onTimeout || function() {};
            timeout = options.timeout || 10; // sec

            var timeout_trigger = window.setTimeout(function() {
                window[callback_name] = function() {};
                on_timeout();
            }, timeout * 1000);

            window[callback_name] = function(data) {
                window.clearTimeout(timeout_trigger);
                on_success(data);
            }

            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = src;
            script.onerror = function() {
                colombiaDataLoader.script_error = true;
                colombiaDataLoader.fireTimeOutPixel("adurlerror");
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        return that;
    }catch(e) {
        console.log('jsonp script:' + e);
        COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error jsonp script :- ' + e);

    }

})();
var vserveModule = {
    isload: false,
    vload: false,
    load: function(response) {
        try {
            vserveModule.isload = true;
            for (var n = 0; n < response.cs.length; n++) {
                if (response.cs[n].id == "4087") {
                    vserveModule.loadVeserve(response.cs[n].c, response.cs[n].s);
                } else {
                    if (response.cs[n].c != "") {
                        var img = document.createElement('img');
                        img.src = response.cs[n].c;
                        img.style.display = 'none';
                        document.body.appendChild(img);
                    }
                }
            }
        } catch (e) {
            console.log('vserveModule:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error vserve Module :- ' + e);
        }
    },
    loadVeserve: function(_vurl, _adeurl) {
        try {
            if (!vserveModule.vload) {
                vserveModule.vload = true;
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (xhttp.readyState == 4 && xhttp.status == 200) {
                        var ob = JSON.parse(xhttp.responseText);
                        var vuid = -1;

                        if (ob.hasOwnProperty('vuid') && ob.vuid != "") {
                            vuid = ob.vuid;
                        }

                        var img = document.createElement('img');
                        _adeurl = COLOMBIAUTIL.strReplace(_adeurl, "{{data}}", vuid);
                        img.src = _adeurl;
                        img.style.display = 'none';
                        document.body.appendChild(img);
                    }
                };

                xhttp.open("GET", _vurl, true);
                xhttp.send();
            }
        } catch (e) {
            COLOMBIAUTIL.onConsole('Error on load Veserve :' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error load Veserve :- ' + e);

        }
    }
}
var COLOMBIAUTIL = {
    isFlashPlugins: false,
    ie9Versions: false,
    strReplace: function($str, $search, $replace) {
        try {
            return $str.split($search).join($replace);  
        }catch(e) {
            COLOMBIAUTIL.onConsole('Error on strReplace :' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error strReplace :- ' + e);
  
        }
    },
    strExactReplace: function($str, $search, $replace) {
        try {
            if(COLOMBIAUTIL.ie9Versions){
                return $str.split($search).join($replace);   
            }else {
                return $str.split(new RegExp("\\b" + $search + "\\b", "gi")).join($replace); 
            }
        }catch(e){
            COLOMBIAUTIL.onConsole('Error strExactReplace :' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error strExactReplace :- ' + e);
        }
    },
    debugTrack: function(pixelurl, msg) {
        try {
            var img = document.createElement('img');
            img.src = pixelurl + "?cb=" + columbiaAds.getCB() + "&msg=" + msg;
            img.style.display = 'none';
            document.body.appendChild(img);   
        }catch(e) {
            console.log('Error in bugtrack'); 
        }

    },
    ColombiaTrack: function(pixelurl) { 
        try {
            var img = document.createElement('img');
            img.src = pixelurl + columbiaAds.getCB();
            img.style.display = 'none';
            document.body.appendChild(img);  
        }
        catch(e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error ColombiaTrack :- ' + e);
            console.log('Error in ColombiaTrack');  
        }
    },
    onConsole:function(msg) {
        try
        {
        /*var myParam = location.search.indexOf('colombiatrack=');
                if(myParam > 0 ) {
                    console.log(msg);
                }*/
        }catch(e){
            
        }
    },
    setCookie: function(name, value, days)
    {
        try 
        {
            var domain, date, expires, host;
            if (days)
            {
                date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                expires = "; expires="+date.toGMTString();
            }
            else
            {
                expires = "";
            }
            host = location.host;
            if (host.split('.').length === 1)
            {
                document.cookie = name+"="+value+expires+"; path=/";
            }
            else
            {
                domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[0];
                document.cookie = name+"="+value+expires+"; path=/; domain="+domain;
            }
        } catch(e){
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error setCookie :- ' + e);
            console.log('error in setcookie ' +e);
            
        }  
    },

    getCookie: function(name)
    {
        try {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i=0; i < ca.length; i++)
            {
                var c = ca[i];
                while (c.charAt(0)==' ')
                {
                    c = c.substring(1,c.length);
                }
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
        }catch(e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error getCookie :- ' + e);
            console.log('error in get cookie ' + e); 
        }
        return null;
    },
    Cookieerase: function(name)
    {
        try {
            this.setCookie(name, '', -1);  
        }catch(e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error Cookieerase :- ' + e);
            console.log('error in cookie erase ' +e);
        }
        
    },
    isFlashPlugin:function(){
        var isAvailable = false;
        try{
            isAvailable = ((typeof navigator.plugins != "undefined" && typeof navigator.plugins["Shockwave Flash"] == "object") || (window.ActiveXObject && (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) != false));
            if(isAvailable) {
                COLOMBIAUTIL.isFlashPlugins = true;
            }
        }catch(e){
            COLOMBIAUTIL.isFlashPlugins = false;   
        }
    },
    getIeVersions: function() {
        try {
            var myNav = navigator.userAgent.toLowerCase();

            var isIEbrowser = (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : 'Not IE';

            if(isIEbrowser < 9 )
            {
                COLOMBIAUTIL.ie9Versions = true;
            }
        } catch(e) {
            COLOMBIAUTIL.onConsole('getIeVersions:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on getIeVersions :- ' + e);
        }
    }
}

var colombiaViewportAd = {
    adunitpos: [],
    removeSetIntval: 0,
    loadColomibaAds: "",
    colombiaAdDiv:[],
    colombiaAdsLimit: {
        length: 0,
        AdsAutodisplay: false
    },
    adstring:[],
    istwoadLimitDisplay: false,
    isadLimitAutoDisplay:false,
    init: function() {
        colombiaViewportAd.onScroll();
    },
    getObjectByClassname: function(classstr){
       try {
            var addItems = [];
            var classname = '.'+classstr;
            if (typeof document.querySelectorAll != 'undefined') {
                addItems = document.querySelectorAll(classname);
            } else {
                document.getElementsByClassName = function(cl) {
                    var retnode = [];
                    var elem = this.getElementsByTagName('*');
                    for (var i = 0; i < elem.length; i++) {
                        if ((' ' + elem[i].className + ' ').indexOf(' ' + cl + ' ') > -1)
                            retnode.push(elem[i]);
                    }
                    return retnode;
                };
                addItems = document.getElementsByClassName(classstr);
            }
            return addItems;
       } catch(e) {
          COLOMBIAUTIL.onConsole('getObjectByClassname:' + e);
          COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error getObjectByClassname :- ' + e);
       }
    },
    onScroll: function() {
        try {
            var addItems = colombiaViewportAd.getObjectByClassname('colombia');
            colombiaViewportAd.adstring = [];
            for (var i = 0; i < addItems.length; i++)
            {
                colombiaViewportAd.removeSetIntval = 1;
                if(i >= 2)
                {
                    colombiaViewportAd.isadLimitAutoDisplay = true;
                    colombiaViewportAd.istwoadLimitDisplay = false;
                } else {
                    if(!colombiaViewportAd.isadLimitAutoDisplay){
                        colombiaViewportAd.istwoadLimitDisplay = true;
                    }
                } 
                if (colombiaViewportAd.istwoadLimitDisplay || (colombiaViewportAd.isElementPartiallyInViewport(addItems[i], 'ads'))) 
                {
                    colombiaViewportAd.adstring = colombiaViewportAd.colombiaAdRequest(addItems[i]);
                }
            }
                
            if(addItems.length > 0)
            {
                colombiaViewportAd.colombiaAdsLimit.AdsAutodisplay = true;
            }
            if (colombiaViewportAd.adstring.length > 0) 
            {
                columbiaAds.load(colombiaViewportAd.adstring);
            }

            // For send Ads Notification 
            colombiaViewportAd.RequestNotify();
        // End Of notify

        } catch (e) {
            COLOMBIAUTIL.onConsole('colombiaViewportAd:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error colombiaViewportAd :- ' + e);
        //console.log('Error : colombiaViewportAd', e);
        }
    },
    colombiaAdRequest: function(item)
    {
        try
        {
           if(item)
            {
                var geterror = 0;
                var clmbMsg = "";
                var registerSlot = item.getAttribute('data-slot') ? colombiaViewportAd.adTrim(item.getAttribute('data-slot')) : "";
                var callBackFunc = item.getAttribute('data-cb') ? colombiaViewportAd.adTrim(item.getAttribute('data-cb')) : "";
                var position = item.getAttribute('data-position') ? colombiaViewportAd.adTrim(item.getAttribute('data-position')) : "none";
                var  section = item.getAttribute('data-section') ? colombiaViewportAd.adTrim(item.getAttribute('data-section')) : 0;
                //put a long check instead of int
                if (!geterror && (registerSlot == '' || !colombiaViewportAd.isInt(registerSlot))) {
                    clmbMsg = registerSlot + ' - register slot is not valid'; 
                    geterror = 1;
                }
                if (!geterror && (colombiaViewportAd.adTrim(position) == '' || !colombiaViewportAd.isInt(position))) {
                    clmbMsg = position + ' - slot position is not valid';
                    geterror = 1;
                }
                var unitid = registerSlot + "~" + position; // use same in clear & refresh
                if (!geterror && (colombiaViewportAd.adunitpos.hasOwnProperty(unitid))) {
                    if (colombiaViewportAd.adunitpos[unitid] == 1) {
                        clmbMsg =  'slot and position already in use ' + registerSlot + " ~ " + position;
                        geterror = 1;
                    }
                } else {
                    colombiaViewportAd.adunitpos[unitid] = 1;
                }
                var strClassName = item.className;
                   
                if (geterror == 0)
                {
                    item.className = COLOMBIAUTIL.strExactReplace(strClassName, 'colombia', 'colombiaRequestSend');
                    var type;
                    var cback;
                                                                                          
                    if(callBackFunc == "")
                    {
                        type = 'display';
                        cback = '';
                    } else {
                        try {
                            type = 'data';
                            cback = eval(callBackFunc);  
                        } catch(e){
                            console.log( callBackFunc + ' is not defined' + e); 
                        }
                    }
                    var id = registerSlot+"~"+position+"~"+section;
                    
                    if(typeof colombiaViewportAd.colombiaAdDiv[id] == 'undefined')
                    {                                                                 
                        colombiaViewportAd.colombiaAdDiv[id] = 
                        {
                            'slot': registerSlot,
                            'divid':item.id,
                            'position': position,
                            'section' : section,
                            'data': false,
                            'type': type,
                            'load': false,
                            'cback': cback,
                            'addata': '',
                            'timeout': false,
                            'container':item,
                            'tpimp' : []
                        };
                    }
                    
                    colombiaViewportAd.adstring.push(id);
                    
                } else {
                    console.log(clmbMsg);
                    colombiaViewportAd.adstring = [];
                    item.className = COLOMBIAUTIL.strExactReplace(item.className, 'colombia', 'colombiainvalid'); 
                }
            }
            
        } catch(e){
            COLOMBIAUTIL.onConsole('colombiaAdRequest:' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error colombiaAdRequest :- ' + e);
        }
        return colombiaViewportAd.adstring;
    },

    itemTrackURL: function(item) {
        try {
            var adslot = item.getAttribute('data-slot');
            var id = adslot+"~"+item.getAttribute('data-position')+"~"+item.getAttribute('data-section');
            var imprURL = colombiaViewportAd.colombiaAdDiv[id].imprURL;// columbiaAds.divdisplay[item.id].imprURL;
            if (typeof imprURL != 'undefined' && imprURL != "") {
                var notifyURL = [];
                var strClassName = item.className;
                item.className = COLOMBIAUTIL.strExactReplace(strClassName, 'colombiaSuccess', 'colombiatracked');
                if(colombiaDataLoader.pv == 0){
                    colombiaDataLoader.pv = 1;
                    notifyURL.push(imprURL + "&pv=1&cb=" + columbiaAds.getCB());
                }else{
                    notifyURL.push(imprURL + "&cb=" + columbiaAds.getCB());
                }
                colombiaDataLoader.fireTimeOutPixel('notify-'+adslot);
                columbiaAds.fireImpression(notifyURL);
                
                try{
                    if (colombiaViewportAd.colombiaAdDiv[id].tpimp.length > 0) 
                    {
                        columbiaAds.fireThirdPartyImp(id);
                    }
                }catch(e){
                    
                }
            }
        } catch(e){
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error colombiaViewportNOtify :- ' + e);
        }
    },
    isInt: function(value) {
        try {
            return !isNaN(value) &&
            parseInt(Number(value)) == value &&
            !isNaN(parseInt(value, 10));  
        } catch(e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error isInt :- ' + e);
        }

    },
    adTrim: function(str) {
        try {
            return str.replace(/^\s+|\s+$/g, '');
        }catch(e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error adTrim :- ' + e);
        }
    },
    isElementPartiallyInViewport: function(el, reqType) {
        try {
            if (typeof reqType == 'undefined') {
                reqType = 'ads';
            }
            if (el.getBoundingClientRect) {
                var rect = el.getBoundingClientRect();
                var windowHeight = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight);
                var rTop = rect.top;
                var rBottom = rect.bottom;
                var h = rBottom - rTop;
                //calculate if in viewport
                //    -h<=rtop<=windowHeight 
                var vertInView = (rTop <= windowHeight) && ((rTop + h) >= 0);
                if (!vertInView) {
                    if (reqType != 'notify') 
                    {
                        if (rTop < 0) {
                            rTop += 600;
                        } else {
                            rTop += -600;
                        }
                        //check if in 600px range of viewport
                        vertInView = (rTop <= windowHeight) && ((rTop + h) >= 0);
                    }

                }
                //to handle visibility false
                if (rTop == 0 && rBottom == 0 && reqType != 'notify') {
                    return false;
                }
                return (vertInView);
            } else {
                return false;
            }
        } catch (e) {
            return false;
        }
    },
    checkColombiaAds: function() {
        try {
            if (colombiaViewportAd.removeSetIntval == 1) {
                clearInterval(colombiaViewportAd.loadColomibaAds);
            } else {
                colombiaViewportAd.init();
            }  
        } 
        catch(e) {
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error checkColombiaAds :- ' + e);
        }
    },
    RequestNotify: function() {
        try {
            var addItems1 = [];
            addItems1 = colombiaViewportAd.getObjectByClassname('colombiaSuccess');
            for (var i = 0; i < addItems1.length; i++) {
                var item1 = addItems1[i];
                colombiaViewportAd.removeSetIntval = 1;
                if (colombiaViewportAd.isElementPartiallyInViewport(item1, 'notify')) // For Viewport Partial start
                {
                    colombiaViewportAd.itemTrackURL(item1);
                    try {
                        var unitid = item1.getAttribute('data-slot') + "-" + item1.getAttribute('data-position');
                        if(unitid =='129162-1') {
                            colombiaDataLoader.colombiatrackPixel(129162);
                        }
                    } catch(e){
                        
                    }
                }
            }
        } catch(e) {
            console.log('Error RequestNotify -' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'RequestNotify' + e);   

        }
    },
    adcallthrottle: function(fn, threshhold, scope) {
        try {
            threshhold || (threshhold = 250);
            var last, deferTimer;
            return function() {
                var context = scope || this;
                var now = +new Date,
                args = arguments;
                if (last && now < last + threshhold) {
                    clearTimeout(deferTimer);
                    deferTimer = setTimeout(function() {
                        last = now;
                        fn.apply(context, args);
                    }, threshhold);
                } else {
                    last = now;
                    fn.apply(context, args);
                }
            };
        } catch (e) {
            //COLOMBIAUTIL.onConsole('throttle:' + e);
            console.log('throttle:'+e);
        }
    },
    colombiaTrackedItems: function() {
        var addItems=[];
        try 
        {
            addItems = document.getElementsByClassName('colombiatracked');
            var windowref = (window.location != window.parent.location) ? document.referrer : document.location;
            if(addItems.length > 0) {
                var html = addItems.length+'--'+escape(windowref)+'--'+escape(addItems[0].innerHTML);
                COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'Colombia Tracked found -' + html);   
            }
        }
        catch(e) {
            console.log('error colombia Tracked Items :' + e);
            COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error colombia Tracked Items :- ' + e);
        }
    }
};

function supportOldBrowserColombia(){
    try{
        if (!Object.create) {
            Object.create = (function() {
                function F() {}

                return function(o) {
                    if (arguments.length != 1) {
                        throw new Error('Object.create implementation only accepts one parameter.');
                    }
                    F.prototype = o;
                    return new F()
                }
            })()
        };

        if (!Array.prototype.indexOf) {
            Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
                "use strict";
                if (this == null) {
                    throw new TypeError();
                }
                var t = Object(this);
                var len = t.length >>> 0;
                if (len === 0) {
                    return -1;
                }
                var n = 0;
                if (arguments.length > 0) {
                    n = Number(arguments[1]);
                    if (n != n) { // shortcut for verifying if it's NaN
                        n = 0;
                    } else if (n != 0 && n != Infinity && n != -Infinity) {
                        n = (n > 0 || -1) * Math.floor(Math.abs(n));
                    }
                }
                if (n >= len) {
                    return -1;
                }
                var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
                for (; k < len; k++) {
                    if (k in t && t[k] === searchElement) {
                        return k;
                    }
                }
                return -1;
            }
        }
    }catch(e){
        COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error supportOldBrowserColombia :- ' + e);
    }
}
(function() {
    try {
        supportOldBrowserColombia();
        colombia = Object.create(columbiaAds);
        
        colombiaViewportAd.loadColomibaAds = setInterval(colombiaViewportAd.checkColombiaAds, 500);
        
        var scrollStopper = colombiaViewportAd.adcallthrottle(colombiaViewportAd.onScroll, 500);
        
        window.onscroll = function() 
        {
            scrollStopper();
        }
        if (window.addEventListener) {
            window.addEventListener('scroll', function() {
                scrollStopper();
            });
        } else if (window.attachEvent) {
            window.attachEvent('scroll', function() {
                scrollStopper();
            });
        }
        window.onresize = function() {
            scrollStopper();
        }
        colombiadocReady(function() {
            try
            {
                colombiaDataLoader.fireTimeOutPixel('jsload');
            }catch(e){
                            
            }
            //colombiaViewportAd.colombiaTrackedItems();
            colombiaViewportAd.init();
        });

        COLOMBIAUTIL.isFlashPlugin();
        COLOMBIAUTIL.getIeVersions();
                                
        var isCookies = COLOMBIAUTIL.getCookie('_col_uuid');
                
        if(isCookies!=null && isCookies!="")
        {
            columbiaAds.colombiaCookies = isCookies;
        }  
    } catch (e) {
        console.log('Error in load page', e);
        colombiaViewportAd.init();
        COLOMBIAUTIL.debugTrack('http://LB-T-1393831672.ap-southeast-1.elb.amazonaws.com/image.jpeg', 'error on load :- ' + e);
    }
})();