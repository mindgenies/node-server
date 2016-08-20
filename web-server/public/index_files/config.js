var APIAuthCreds = {
    UserName: 'NBT',
    Password: 'NBT1v3Rs4lAn45s'
}

var appAnalytics = {
    googleAnalyticsIds: "UA-80189621-1,UA-52060683-2",
    customAnalyticsScriptUrl: ""
}

var scoreboardConfig = {    /*Configure this section in case full scoreboard is being deployed*/

    /*API URLs*/
    webServiceUrlForRio: "http://cws1-aws-gms-webservice.sportsflash.com.au/GamesExplorerJson.asmx/",
    /*API URLs ENDS*/


    /*Fallback API Paramters*/
    localeId: "en-US",
    clientId: "282",
    versionId: "3",
    gamesId: "140",
    sportId: "10",
    /*Fallback API Paramters ENDS*/

    /*Enable/Disable links*/
    enableBlogs: false,
    enableNews: false,
    enableSchedule: true,
    enableMedal: true,
    enablePredictor: true,
    enableRecords: true,
    enableDailyGallery: false,
    enableHistoricalGallery: false,
    enableCurrentStars: false,
    enablePastStars: false,
    enableHistory: true,
    enableSports: true,
    enableVenues: true,
    enableVideos: false,
    enableDidYouKnows: true,
    /*Enable/Disable links ENDS*/

    /*Path to css theme file*/
    UIthemeCssPath: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/branding.css", // /Infoplum.RioGames.Services/themes/greentheme.css
    /*Path to css theme file*/

    partnerLogoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",//Images/AFP_logo.png
    partnerLogoLink: "",
    partnerLogoLocation: "footer",    // header or footer

    footerLink: "http://www.infoplum.com",

    footerLogo: "Images/footer_img.png",

    TranslationProvidedByAcknowledgementText: ""

};

var widgetConfig = {    /*Configure this section in case individual widgets are being deployed*/

    languageDirection: "ltr",

    /*data and web service URLs*/
    webServiceUrlForRio: "http://cws1-aws-gms-webservice.sportsflash.com.au/GamesExplorerJson.asmx/",
    webServiceUrlForNews: "http://smartarchive.sportsflash.com.au/SmartArchiveAPI/api/SmartArchiveSearch/",
    coldContentUrl: "http://rio-coldcontentproxy.sportsflash.com.au/GetColdcontent.ashx",
    afpDbBasePath: "http://rio16-afpdb.sportsflash.com.au/rio16/",
    /*data and web service URLs ENDS*/

    /*Default API Paramters*/
    localeId: "en-US",
    clientId: "282",
    versionId: "3",
    gamesId: "140",
    sportId: "10",
    /*Default API Paramters ENDS*/

    preferredCountryId: "88",
    dataLimitForMedals: 10,
    dataLimitForPredictor: 10,


    /*Resource URLs*/
    resourceUrlForFlags: "http://resourcescdn.sportsflash.com.au/Games/Images/Flags",
    lowResPathForFlags: "/45x30/",
    hiResPathForFlags: "/300x200/",
    imageExtForFlags: ".gif",

    resourceUrlForMedalIcons: "http://resourcescdn.sportsflash.com.au/Games/Images/Medals/",
    imageExtForMedalIcons: ".png",

    resourceUrlForSportsIcons: "http://resourcescdn.sportsflash.com.au/Games/Images/Sport_Icons/",
    imageExtForSportsIcons: ".png",

    resourceUrlForHistoryArtwork: "http://resourcescdn.sportsflash.com.au/Games/Images/Historical_ShowCase_Image/",
    imageExtForHistoryArtwork: ".jpg",
    /*Resource URLs ENDS*/

    videoUrl: "",

    /*News Config*/
    exactSearch: true,
    newsSearchKeyword: "Oly 2016",
    newsDefaultCatalog: "SportsDirect",
    newsDefaultSortOrder: "Latest First",
    totalNewsResultsLimit: 20,
    /*News Config ENDS*/

    /*social*/
    enableTwitterShare: true,
    enableFBShare: true,
    fbShareUrl: "http://navbharattimes.indiatimes.com/olympics.cms",
    fbSharePicturePath: "http://navbharattimes-scoreboard.rio.sportsflash.com.au/infoplum.riogames.widgets/DidYouKnow/Images/rio_thumbnail_win_distr.jpg",
    twitterShareUrl: "http://navbharattimes.indiatimes.com/olympics.cms",
    /*social ENDS*/

    /*Enable/Disable widget headers*/
    showScheduleHeader: false,
    showMedalsHeader: false,
    showPredictorHeader: false,
    showHistoryHeader: false,
    showRecordsHeader: false,
    showVenuesHeader: false,
    showSportsHeader: false,
    showStarsHeader: false,
    showGalleryHeader: false,
    showVideosHeader: false,
    showCountdownHeader: false,
    showBlogsHeader: false,
    showNewsHeader: false,
    /*Enable/Disable widget headers ENDS*/

//    enableAllDeeplinkingInSchedule: true,

    /*Path to css theme file*/
    UIthemeCssPath: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/branding.css", // /Infoplum.RioGames.Services/themes/redtheme.css
    /*Path to css theme file*/

    whiteListedDomains: "navbharattimes-scoreboard.rio.sportsflash.com.au,navbharattimes.indiatimes.com,http://m.navbharattimes.indiatimes.com",

    fullAppURL: "",//http://navbharattimes.indiatimes.com/summer-olympics/medal-tally/medaltally.cms
    deeplinkingTargetType: "_self",  //_self or _blank

    footerLink: "http://www.infoplum.com",

    footerLogo: "Images/footer_img.png",

    sponsorLogo: {
        scheduleWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        historyWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        recordsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        venuesWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        sportsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        starsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        galleryWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        videosWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        blogsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        newsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        medalsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        predictedMedalsWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        },
        countDownWidget: {
            logoUrl: "/Infoplum.RioGames.Services/Config/navbharattimes-scoreboard.rio.sportsflash.com.au/NBT-logo.png",
            linkUrl: "",
            location: "footer"          //  header OR footer
        }
    },

    TranslationProvidedByAcknowledgementText: "",

};


/*Advertisment config */
var adConfig = {

    adPositions: [
        //Advertisements for desktop layout
        {
            id: 1,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], 
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Schedule LHS below news"
        },
        {
            id: 2,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Schedule RHS below schedule"
        },
        {
            id: 3,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Predictor LHS below news"
        },
        {
            id: 4,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Predictor RHS below predictor"
        },
        {
            id: 5,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], 
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Records LHS below news"
        },
        {
            id: 6,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Records RHS below records"
        },
        {
            id: 7,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, History LHS below Medal Tally"
        },
        {
            id: 8,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Medals RHS below Medals"
        },
        {
            id: 9,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Gallery LHS below news"
        },
        {
            id: 10,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Stars LHS below news"
        },
        {
            id: 11,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Stars RHS in-between stars"
        },
        {
            id: 12,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Sports LHS below news"
        },
        {
            id: 13,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Sports RHS in-between sports"
        },
        {
            id: 14,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Venues LHS below news"
        },
        {
            id: 15,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Venues RHS in-between venues"
        },
        {
            id: 16,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop: Pre-series, Videos LHS below news"
        },
        {
            id: 17,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Desktop and mobile: Post series, blog-and-news (news tab) below news"
        },

        //Advertisements for mobile layout
        {
            id: 18,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: News tab, below news, schedule"
        },
        {
            id: 20,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: News tab, below news"
        },
        {
            id: 21,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: Predictor tab, below medals predictor"
        },
        {
            id: 22,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: Medals tab, below medals"
        },
        {
            id: 23,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: pre news, records"
        },
        {
            id: 24,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: Records tab, below records"
        },
        {
            id: 25,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: pre news tab, history"
        },
        {
            id: 26,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: History tab, below history"
        },
        {
            id: 28,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: pre stars news tab, below news"
        },
        {
            id: 29,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: pre sports news tab, below news"
        },
        {
            id: 30,
            type: "",    // googleAd, urlAd, dfpAd
            data_ad_client: "", //ca-pub-7324354594815111
            data_ad_slot: "",  //2165906180
            data_ad_format: "",  //auto
            dfpNetCodeAdSlot: "", ///6355419/Travel/Europe/France/Paris
            dfpAdDims: [300, 250], //[300, 250]
            imageName: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            hrefUrl: "", //http://rio16demo-alpha-scoreboard.sportsflash.com.au/en/img/ad_left.png
            comments: "Mobile: pre venues news tab, below news"
        }
    ]
};
/*Advertisment config ENDS*/

/*Blog mapping with date*/

var blogToDateMap = {

    languageFolderForBlog: "English",

       0: {
        date: "8/5/2016",
        folder: "f0259a7c-3f97-4d42-9957-3376d9d587ef"
    },
    1: {
        date: "8/6/2016",
        folder: "881f3024-1b45-4dd6-a5f1-03c86cd2f1e7"
    },
    2: {
        date: "8/7/2016",
        folder: "5f37df90-d619-4e54-893c-ed2749e5d34d"
    },
    3: {
        date: "8/8/2016",
        folder: "ae587410-8f93-4198-9734-eb2191c3ae21"
    },
    4: {
        date: "8/9/2016",
        folder: "fdcdd933-6097-4760-b018-25fc20ffd5e2"
    },
    5: {
        date: "8/10/2016",
        folder: "8f22ce99-781e-4f8f-8d7d-d557e3cdee8c"
    },
    6: {
        date: "8/11/2016",
        folder: "de640303-f0ae-4bae-b1ba-8f1ac259d266"
    },
    7: {
        date: "8/12/2016",
        folder: "0773f4db-2586-4587-9ed2-ced880d8f70c"
    },
    8: {
        date: "8/13/2016",
        folder: "180d1003-9f7a-45f6-8873-5ec72e79491c"
    },
    9: {
        date: "8/14/2016",
        folder: "4e31ca6b-05c7-4384-88a9-57fd3f245175"
    },
    10: {
        date: "8/15/2016",
        folder: "5abf35c0-b2e5-41b2-8d20-2500f6be12e3"
    },
    11: {
        date: "8/16/2016",
        folder: "fdd2c184-7d62-47aa-830c-08afb3c29a87"
    },
    12: {
        date: "8/17/2016",
        folder: "b5a7a2e7-4418-4015-a2e4-04bcbea1ed59"
    },
    13: {
        date: "8/18/2016",
        folder: "4c481245-ea53-4a43-96e5-37d5d392049e"
    },
    14: {
        date: "8/19/2016",
        folder: "72fa97b9-5326-4824-acab-836fab15bfb5"
    },
    15: {
        date: "8/20/2016",
        folder: "1f2d9d74-d6a5-4f18-a7cd-ba5198cdc739"
    },
    16: {
        date: "8/21/2016",
        folder: "981f51fc-c3a1-45cf-9c01-eba6bf3e4c08"
    }
};

/*Blog mapping with date ENDS*/