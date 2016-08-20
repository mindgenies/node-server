(function () {
    'use strict';

    window.translations = function (API, $q) {
        // ! mark means the key is not present in the translations and ? means that the value is not translated
        //  possible combinations for translations:
        //1.    trans_text: "Trans Text~LIVE_MEDA_0001",    Syntax: DefaultValue~Key from getTranslations JSON
        //2.    trans_text: _stubTrans("Trans Text!")   This is for when word and its key is not found in getTranslations JSON

        var _translationMappings = {
            medal: "Medal Count~LIVE_MEDA_0001",
            medals: "Medals~PREH_LAND_0156",
            medal_predictor: "Medal Predictor~PREH_LAND_0023",
            records: "Records~PREH_LAND_0003",
            pos: "POS~PREH_LAND_0030",
            country: "Country~PREH_LAND_0031",
            total: "Total~PREH_LAND_0029",
            medal_count: "Medal Count~LIVE_MEDA_0001",
            total_medals: "Total Medals~LIVE_MEDA_0002",
            men: "Men~RECO_LAND_0001",
            women: "Women~RECO_LAND_0002",
            current_stars: "Current Stars~STAR_LAND_0001",
            past_stars: "Past Stars~STAR_LAND_0002",
            biography: "Biography~STAR_LAND_0005",
            years: "Years~GALL_LAND_0003",
            summary: "Summary~HIST_LAND_0001",
            key_facts: "Key Facts~HIST_LAND_0002",
            spotlight: "Spotlight~HIST_LAND_0003",
            anecdotes: "Anecdotes~HIST_LAND_0004",
            inside_the_games: "Inside The Games~HIST_LAND_0005",
            search_stars: "Search Stars~STAR_LAND_0003",
            search_news: "Search News~PREH_LAND_0021",
            news: "News~PREH_LAND_0001",
            historical: "Historical~GALL_LAND_0001",
            daily: "Daily~GALL_LAND_0002",
            gallery: "Gallery~PREH_LAND_0033",
            opening_ceremony: "OPENING CEREMONY~PREH_LAND_0024",
            closing_ceremony: "CLOSING CEREMONY~PREH_LAND_0025",
            medal_event: "Medal Events~PREH_LAND_0026",
            all_events: "All Events~PREH_LAND_0027",
            events: "Events~PREH_LAND_0012",
            blog: "Blog~LIVE_LAND_0002",
            gold_medals_by_nation: "GOLD MEDALS BY NATION~PREH_LAND_00410",
            day: "Day~PREH_LAND_0044",
            days: "Days~PREH_LAND_0004",
            phase: "Phase~PREH_LAND_0045",
            venue: "Venue~PREH_LAND_0065",
            world_record: "WOLRD RECORD~PREH_LAND_0046",
            olympic_record: "Olympic Record~PREH_LAND_0047",
            previous_winners: "Previous Winners~PREH_LAND_0049",
            name: "Name~PREH_LAND_0051",
            year: "Year~PREH_LAND_0052",
            olympic: "Olympic~PREH_LAND_0053",
            click_here_to_view_sport_profile: "Click Here To View Sport Profile~PREH_LAND_0050",
            team_members_who_didnt_compete_in_finals: "*TEAM MEMBERS WHO DIDN'T COMPETE IN THE FINALS~LIVE_MEDA_0003",
            oc: "OC~PREH_LAND_0066",
            cc: "CC~PREH_LAND_0067",
            height: "Height~STAR_PROF_0002",
            weight: "Weight~STAR_PROF_0003",
            date_of_birth: "Date Of Birth~STAR_PROF_0001",
            ceremonies: "CEREMONIES~PREH_LAND_0020",
            profile: "Profile~STAR_LAND_0004",
            schedule: "Schedule~PREH_LAND_0010",
            hrs: "HRS~PREH_LAND_0005",
            mins: "Mins~PREH_LAND_0006",
            secs: "Secs~PREH_LAND_0007",
            aug: "Aug~PREH_LAND_0009",
            jul:_stubTrans("Jul"),
            jan: _stubTrans("Jan"),
            did_you_know: "Did You Know?~PREH_LAND_0022",
            medal_tally: "Medal Tally~PREH_LAND_0068",
            there_have_been_no_medals_won_yet: "There Have Been No Medals Won Yet~LIVE_MEDA_0019",
            sun: "Sun~PREH_LAND_0013",
            mon: "Mon~PREH_LAND_0014",
            tue: "Tue~PREH_LAND_0015",
            wed: "Wed~PREH_LAND_0016",
            thu: "Thu~PREH_LAND_0017",
            fri: "Fri~PREH_LAND_00110",
            sat: "Sat~PREH_LAND_0019",
            history: "History~PREH_LAND_0032",
            venues: "Venues~PREH_LAND_0036",
            sports: "Sports~PREH_LAND_0035",
            stars: "Stars~PREH_LAND_0034",
            videos: "Videos~PREH_LAND_0037",
            archery: "ARCHERY~PREH_LAND_0070",
            athletics: "Athletics~PREH_LAND_0071",
            badminton: "Badminton~PREH_LAND_0072",
            basketball: "Basketball~PREH_LAND_0073",
            beach_volleyball: "Beach Volleyball~PREH_LAND_0074",
            boxing: "Boxing~PREH_LAND_0075",
            canoe_kayak_flatwater: "CANOE/KAYAK - FLATWATER~PREH_LAND_0076",
            canoe_kayak_slalom: "CANOE/KAYAK - SLALOM~PREH_LAND_0077",
            cycling_bmx: "CYCLING - BMX~PREH_LAND_0078",
            cycling_mountain_bike: "CYCLING - MOUNTAIN BIKE~PREH_LAND_0079",
            cycling_road: "CYCLING - ROAD~PREH_LAND_0080",
            cycling_track: "CYCLING - TRACK~PREH_LAND_0081",
            diving: "DIVING~PREH_LAND_0082",
            equestrian: "EQUESTRIAN~PREH_LAND_0083",
            fencing: "FENCING~PREH_LAND_0084",
            field_hockey: "FIELD HOCKEY~PREH_LAND_0085",
            football: "FOOTBALL (SOCCER)~PREH_LAND_0086",
            golf: "GOLF~PREH_LAND_0087",
            gymnastics_artisitc: "GYMNASTICS - ARTISTIC~PREH_LAND_0088",
            gymnastics_rhythmic: "GYMNASTICS - RHYTHMIC~PREH_LAND_0089",
            gymnastics_trampoline: "GYMNASTICS - TRAMPOLINE~PREH_LAND_0090",
            handball: "HANDBALL~PREH_LAND_0091",
            judo: "JUDO~PREH_LAND_0093",
            modern_pentathlon: "MODERN PENTATHLON~PREH_LAND_0094",
            open_water: "OPEN WATER~PREH_LAND_0095",
            rowing: "ROWING~PREH_LAND_0096",
            rugby_7s: "RUGBY 7S~PREH_LAND_0097",
            sailing: "SAILING~PREH_LAND_0098",
            shooting: "SHOOTING~PREH_LAND_0099",
            swimming: "SWIMMING~PREH_LAND_0100",
            synchronised_swimming: "SYNCHRONISED SWIMMING~PREH_LAND_0101",
            table_tennis: "TABLE TENNIS~PREH_LAND_0102",
            taekwondo: "TAEKWONDO~PREH_LAND_0103",
            tennis: "TENNIS~PREH_LAND_0104",
            triathlon: "TRIATHLON~PREH_LAND_0105",
            volleyball: "VOLLEYBALL~PREH_LAND_0106",
            water_polo: "WATER POLO~PREH_LAND_0107",
            weightlifting: "WEIGHTLIFTING~PREH_LAND_0108",
            wrestling: "WRESTLING~PREH_LAND_0109",
            hockey: "hockey~PREH_LAND_0092",
            wrestling_freestyle: "WRESTLING FREESTYLE~PREH_LAND_0110",
            wrestling_greco_roman: "WRESTLING - GRECO-ROMAN~PREH_LAND_0111",
            your_local_time: "Your local time~DAIL_SCHE_0002",
            my_time: "My Time~DAIL_SCHE_0001",
            next_day: "Next Day~DAIL_SCHE_0003",
            brasillia_time: "Brasillia Time~DAIL_SCHE_0004",
            WorldRecord: "World Record~PREH_LAND_0046",
            OlympicRecord: "Olympic Record~PREH_LAND_0047"
        };

        function _stubTrans(value, shortValue, abbr) {
            return {
                Abbreviation: abbr,
                ShortValue: shortValue,
                Value: value
            }
        };

        var _translations = {};

        var _setUpMappings = function (response) {
            if (response) {
                var _formattedResponse = {};
                for (var r = 0; r < response.Records.length; r++) { // array elements to object prop and values
                    var values = JSON.parse(response.Records[r].Value);
                    var valueTypeMap = {};
                    for (var v = 0; v < values.length; v++) {
                        valueTypeMap[values[v].f] = values[v].v;
                    };
                    response.Records[r].Value = valueTypeMap;
                    // language sniffing can be removed once all translation strings are present or development is completed
                    if (response.LanguageCode != 'en-US' && (response.Records[r]['DefaultValue'] == response.Records[r].Value.Value)) {
                        response.Records[r].Value.Value = response.Records[r].Value.Value.trim()// + '?'
                    }

                    _formattedResponse[response.Records[r].Key] = response.Records[r];

                }

                for (var key in _translationMappings) { // map object keys to generic names which are defined above
                    if (typeof _translationMappings[key] == 'object') { // handle stub Translations
                        _translations[key] = _translationMappings[key];
                    } else {
                        var CTSkey = _translationMappings[key].split('~')[1];
                        _formattedResponse[CTSkey] = _formattedResponse[CTSkey] || { Value: _stubTrans(_translationMappings[key].split('~')[0]) };
                        _translations[key] = _formattedResponse[CTSkey].Value;
                        _translations[key].uId = CTSkey;
                    }
                }
            } else {    // this runs if the API response does not contain any data or in case of API failure
                for (var key in _translationMappings) {
                    if (typeof _translationMappings[key] == 'object') { // handle stub Translations
                        _translations[key] = _translationMappings[key];
                    } else {
                        var valAndKey = _translationMappings[key].split('~');
                        _translations[key] = _stubTrans(valAndKey[0]);// + '!'
                        _translations[key].uId = valAndKey[1]
                    }

                }
            }
            return _translations;
        };

        return {
            getTranslations: function (clientId, lang) {
                var deferred = $q.defer();
                API.getTranslations(clientId, lang).then(function (response) {
                    _setUpMappings(response);
                    deferred.resolve(_translations);
                }, function (error) {
                    _setUpMappings(undefined);
                    deferred.resolve(_translations);
                });

                return deferred.promise;
            }
        }
    }

})();