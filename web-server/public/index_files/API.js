(function () {
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

(function () {
    'use strict';
    window.rioServices = window.rioServices || {};
    window.rioServices.API = true;


    window.API = function ($http) {

        window.widgetConfig = window.widgetConfig || {};

        var _coldContentUrl = window.widgetConfig.coldContentUrl;

        var _baseAPIUrl = window.widgetConfig.webServiceUrlForRio;

        var _newsSearchUrl = window.widgetConfig.webServiceUrlForNews;

        var _afpDBPath = window.widgetConfig.afpDbBasePath + '/afpdb/';

        var _baseAPIParams = {
            clientId: window.widgetConfig.clientId || '82',
            localeId: window.widgetConfig.localeId || 'en-US',
            VersionId: window.widgetConfig.versionId || '3',
            gamesId: window.widgetConfig.gamesId || '140',
            sportId: window.widgetConfig.sportId || '10'
        };


        var _ = {   // lodash shim
            merge: function (o1, o2) {
                var merged = {};
                for (var key1 in o1) {

                    try {
                        var objProp = o1[key1].toString()
                    } catch (ex) {
                        var objProp = false;
                    }

                    if (objProp && objProp != '') {
                        merged[key1] = o1[key1]
                    }
                }
                for (var key2 in o2) {
                    if (!merged.hasOwnProperty(key2)) { // dont overwrite if already present
                        merged[key2] = o2[key2]
                    }
                }
                return merged;
            }
        };

        var x2js;
        if (window.X2JS) {
            x2js = new X2JS();
        };

        //var languageMappingForBlogFolders = {
        //    en: 'english',
        //    fr: 'francais',
        //    es: 'espanol'
        //};

        var getRequestString = function (obj) {
            var getString = "?";
            for (var k in obj) {
                getString += k + "=" + obj[k] + "&";
            }
            getString = getString.substring(0, getString.length - 1);
            return getString;
        };

        return {
            // All methods are async, will return a promise object
            // Example usage in a ctrl: API.getRecords(ParamtersDataObject).then(successFunct, errFunct)
            // Dont pass baseAPIParamters in any methods, will be injected automatically
            getRecords: function (params) {

                return $http({
                    url: _baseAPIUrl + 'GetRecords' + getRequestString(params),
                    //  url: '/Infoplum.RioGames.Widgets/Records/records.json',
                    method: 'GET',
                    data: _baseAPIParams,
                    headers: window.APIAuthCreds,
                    cache: false    // can selectively change 
                }).then(function (response) {
                    return response.data;
                })
            },

            getRecordsMen: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetRecords' + getRequestString(params),
                    //  url: '/Infoplum.RioGames.Widgets/Records/sampleRecordJSON.json',
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false    // can selectively change 
                }).then(function (response) {
                    return response.data;
                })
            },

            getRecordsWomen: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetRecords' + getRequestString(params),
                    // url: '/Infoplum.RioGames.Widgets/Records/records.json',
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },

            getConfigurationFromTPCI: function (params) {
                params.matchId = '1001001010001';
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetConfigurationFromTPCI' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },

            getMedalTally: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetMedalTally' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getMedalDetails: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetMedalDetails' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getVenues: function (language) {
                return $http({
                    url: _coldContentUrl + '?language=' + language.split('-')[0] + '&type=sites',
                    method: 'GET',
                    headers: {
                        "Accept": "*/*",
                        "Content-Type": "text/plain; charset=utf-8"
                    },
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }
                })
            },

            getStars: function (params, language) {
                // var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _coldContentUrl + '?language=' + language.split('-')[0] + '&type=' + params,
                    //  url: '/Infoplum.RioGames.Services/StaticData/'+params+'/index.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }
                })
            },
            getHistory: function (lang) {
                return $http({
                    url: _coldContentUrl + '?language=' + lang.split('-')[0] + '&type=histo',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getHistorySummary: function (params, lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/histo/jo2016-histo-' + params.year + '-resume-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getHistoryKeyNote: function (params, lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/histo/jo2016-histo-' + params.year + '-ft-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getHistorySpotLight: function (params, lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/histo/jo2016-histo-' + params.year + '-exploit-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getHistoryAnecdotes: function (params, lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/histo/jo2016-histo-' + params.year + '-anecdote-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getHistoryInsideTheGames: function (params, lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/histo/jo2016-histo-' + params.year + '-fait-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },

            getGalleryDaily: function (lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/direct/photoday/index-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getGalleryHistorical: function (lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/direct/historic/diapo-jo2016-100-direct-gal-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },


            getDailyDataForGallery: function (params) {
                return $http({
                    url: params.Path,
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {

                        return response.data;
                    }
                })
            },
            getStarsDetails: function (params, language) {
                var lang = language.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/' + params.starType + '/jo2016-bio-' + params.starId + '-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }
                })
            },

            getVenuesDetails: function (params, language) {
                var venueId = params;
                var lang = language.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/sites/jo2016-direct-sites-' + venueId + '-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }

                })
            },


            getSportsDetails: function (sportsid, lang) {
                var lang = lang.split('-')[0];
                return $http({
                    url: _afpDBPath + lang + '/sports/jo2016-sports-' + sportsid + '-bref-' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }

                })
            },

            GetSportEvent: function (params) {

                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetSportEventByNation' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getSports: function (language) {
                return $http({
                    url: _coldContentUrl + '?language=' + language.split('-')[0] + '&type=sports',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }
                })
            },

            getContestResults: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetContestResults' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getCountDown: function (param) {
                var param = _.merge(param, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetCountDown' + getRequestString(param),
                    method: 'GET',
                    data: param,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getDailySchedule: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetDailySchedule' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getDailyScheduleDetailed: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetDailyScheduleDetailedByNation' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getFairFaxEvents: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetFixture' + getRequestString(params),
                    //  url: '/Infoplum.RioGames.Web/Live/getEvents.json',
                    // url: '/Live/getEvents.json',
                    // method: 'POST',
                    method: 'GET',
                    //  data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getAllFairFaxEvents: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetFixture' + getRequestString(params),
                    // url: '/Infoplum.RioGames.Web/Live/getAllEvents.json',
                    // url: '/Live/getAllEvents.json',
                    // method: 'POST',
                    method: 'GET',
                    // data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },

            getEventHistory: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetEventHistory' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getFunFact: function () {
                return $http({
                    url: _baseAPIUrl + 'GetFunFact' + getRequestString(_baseAPIParams),
                    method: 'GET',
                    data: _baseAPIParams,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getMedalTallyAllNations: function (params) {
                var params = _.merge(params, _baseAPIParams);

                return $http({
                    url: _baseAPIUrl + 'GetMedalTallyAllNations' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            //getNewsArticle: function (params) {// not being used, use getNewsDetail instead
            //    var params = _.merge(params, _baseAPIParams);
            //    return $http({
            //        url: _baseAPIUrl + 'GetNewsArticle',
            //        method: 'POST',
            //        data: params,
            //        cache: false
            //    }).then(function (response) {
            //        return response.data;
            //    })
            //},
            //getNewsList: function (params) {    // not being used, use getNews instead
            //    var params = _.merge(params, _baseAPIParams);
            //    return $http({
            //        url: _baseAPIUrl + 'GetNewsList',
            //        method: 'POST',
            //        data: params,
            //        cache: false
            //    }).then(function (response) {
            //        return response.data;
            //    })
            //},
            getPredictedMedalTally: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetPredictedMedalTally' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getSportList: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetSportList' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getVenueList: function () {
                return $http({
                    url: _baseAPIUrl + 'GetVenueList' + getRequestString(_baseAPIParams),
                    method: 'GET',
                    data: _baseAPIParams,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getTranslations: function (clientId, lang) {
                var lang = lang || _baseAPIParams.localeId;
                var clientId = clientId || _baseAPIParams.clientId;
                return $http({
                    url: _baseAPIUrl + 'GetTranslation' + getRequestString({ localeId: lang, clientId: clientId, sportId: _baseAPIParams.sportId }),
                    method: 'GET',
                    //data: { localeId: lang, clientId: clientId, sportId: _baseAPIParams.sportId },  // sportId hardocded currently
                    headers: window.APIAuthCreds
                    //cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getNews: function (lang, searchText) {
                var lang = lang || _baseAPIParams.localeId;
                var postParams = {
                    withatleastoneofthewords: "",
                    withallofthewords: window.widgetConfig.newsSearchKeyword || "",
                    withtheexactphrase: "",
                    withoutthewords: "",
                    fromdate: "",
                    todate: "",
                    keywords: "",
                    subject: "",
                    location: "",
                    publication: "",
                    edition: "",
                    newsitemtype: "",
                    catalog: window.widgetConfig.newsDefaultCatalog,
                    sortby: window.widgetConfig.newsDefaultSortOrder,
                    processed: "yes",
                    published: "yes",
                    startindex: 0,
                    endindex: window.widgetConfig.totalNewsResultsLimit || 20
                };

                if (window.widgetConfig.exactSearch) {
                    postParams.withtheexactphrase = searchText || "";
                } else {
                    postParams.withatleastoneofthewords = searchText || "";
                }

                return $http({
                    url: _newsSearchUrl + 'photoSearch',
                    method: 'POST',
                    data: postParams,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getNewsDetails: function (newsRef) {    // newsRef is value of property "xmlfilename" acquired from getNews 
                var postParams = { searchid: newsRef };
                return $http({
                    url: _newsSearchUrl + 'GetPhotoDetails',
                    method: 'POST',
                    data: postParams,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            //  getdailyscheduledetailed
            getDailyscheduledetailedData: function (params) {   // Added by Shashank    // newsRef is value of property "xmlfilename" acquired from getNews 
                //var postParams = { localeId: params.localeId, filterMedalEvent: params.medals, dayId: params.day, gamesId: params.gamesId };
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetDailyScheduleDetailed' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            },
            getBlogByDate: function (params) {
                params.lang = params.lang || window.widgetConfig.localeId;
                var lang = params.lang.split('-')[0];
                var langMap = window.blogToDateMap;

                var dayMap = langMap[params.dayId];
                if (!dayMap) {  // fallback to day 1 if dayId not found in the mapping
                    dayMap = langMap['1'];
                }

                var blogUrl = window.widgetConfig.afpDbBasePath + '/' + window.blogToDateMap['languageFolderForBlog'] + '/livereports/' + dayMap['folder'] + '/index.xml';

                    return $http({
                    url: blogUrl,
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }

                })
            },
            getBlogByDateXML: function (params) {
                var lang = params.lang.split('-')[0] || window.widgetConfig.localeId.split('-')[0];
                var langMap = window.blogToDateMap;

                var dayMap = langMap[params.dayId];
                if (!dayMap) {  // fallback to day 1 if dayId not found in the mapping
                    dayMap = langMap['1'];
                }
                var blogUrl = window.widgetConfig.afpDbBasePath + '/' + window.blogToDateMap['languageFolderForBlog'] + '/livereports/' + dayMap['folder'] + '/' + params.blogXML;

                return $http({
                    url: blogUrl,
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }

                })
            },
            getBlogFolderPath: function (params) {
                var lang = params.lang.split('-')[0];

                var langMap = window.blogToDateMap;

                var dayMap = langMap[params.dayId];
                if (!dayMap) {  // fallback to day 1 if dayId not found in the mapping
                    dayMap = langMap['1'];
                }

                var blogUrl = window.widgetConfig.afpDbBasePath + '/' + window.blogToDateMap['languageFolderForBlog'] + '/livereports/' + dayMap['folder'] + '/';
                return blogUrl;
            },

            getCeremony: function (params, language) {
                return $http({
                    url: _afpDBPath + 'getCeremonyProfile_140.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);

                    } else {
                        return response.data;
                    }

                })
            },
            getDidYouKnowXML: function (lang) {
                return $http({
                    //url: params.xmlPath,
                    url: _afpDBPath + 'Funfacts_140_' + lang + '.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }

                })
            },
            getMedalTallyXML: function () {
                return $http({
                    //url: params.xmlPath,
                    url: _afpDBPath + 'HistoricalMedalTallyInfoplumIds.xml',
                    method: 'GET',
                    cache: false
                }).then(function (response) {
                    if (x2js) {
                        return x2js.xml_str2json(response.data);
                    } else {
                        return response.data;
                    }

                })
            },
            getGamesList: function (params) {
                var params = _.merge(params, _baseAPIParams);
                return $http({
                    url: _baseAPIUrl + 'GetGamesList' + getRequestString(params),
                    method: 'GET',
                    data: params,
                    headers: window.APIAuthCreds,
                    cache: false
                }).then(function (response) {
                    return response.data;
                })
            }
        }
    }


})();