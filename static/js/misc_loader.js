InteractiveMap.utils.misc.loadMiscJsonFile = async function () {
    const file_ext = ".json";
    const file_name = "misc";

    const json_data = await fetch(InteractiveMap.paths.pathToData + file_name + file_ext);
    InteractiveMap.data.miscJSONData = await json_data.json();
}

InteractiveMap.utils.misc.loadMFGrounds = async function (data, mode) {
    var mfgrounds_markers;

    if(mode === "canvas") {
        mfgrounds_markers = [];
    }
    else if(mode === "dom") {
        mfgrounds_markers = L.featureGroup();
    }

    var mfgrounds_marker = L.marker(data['coords'], {icon:InteractiveMap.icons.misc["MF Grounds"]});
    mfgrounds_marker.bindPopup('<b>Motorfest Grounds</b><br>\
                                <i>Car Meet</i>', {
        className: "hstPopup"
    });

    if(mode === "canvas") {
        mfgrounds_markers.push(mfgrounds_marker);
    }
    else if(mode === "dom") {
        mfgrounds_marker.addTo(mfgrounds_markers);
    }

    return mfgrounds_markers;
}

InteractiveMap.utils.misc.loadDemoRoyale = async function (data, mode) {
    var demo_royale_markers;

    if(mode === "canvas") {
        demo_royale_markers = [];
    }
    else if(mode === "dom") {
        demo_royale_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var demo_royale_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.misc["Demo Royale"]});
        demo_royale_marker.bindPopup("<b>Demo Royale</b><br>\
                                    <span>" + data[i]['name'] + "</span><br>\
                                    " + data[i]['info'], {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            demo_royale_markers.push(demo_royale_marker);
        }
        else if(mode === "dom") {
            demo_royale_marker.addTo(demo_royale_markers);
        }
    }

    return demo_royale_markers;
}

InteractiveMap.utils.misc.loadGrandRace = async function (data, mode) {
    var grand_race_markers;

    if(mode === "canvas") {
        grand_race_markers = [];
    }
    else if(mode === "dom") {
        grand_race_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var grand_race_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.misc["Grand Race"]});
        grand_race_marker.bindPopup("<b>Grand Race</b><br>\
                                    <span>" + data[i]['name'] + "</span><br>\
                                    " + data[i]['info'], {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            grand_race_markers.push(grand_race_marker);
        }
        else if(mode === "dom") {
            grand_race_marker.addTo(grand_race_markers);
        }
    }

    return grand_race_markers;
}

InteractiveMap.utils.misc.loadAchievements = async function (data, mode) {
    var achievements_markers;

    if(mode === "canvas") {
        achievements_markers = [];
    }
    else if(mode === "dom") {
        achievements_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var achievements_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.misc["Achievement"]});
        achievements_marker.bindPopup("<b>" + data[i]['name'] + "</b><br>\
                                    <i>Achievement</i>\
                                    <hr style=\"background-color:white;height:0.5px\">\
                                    " + data[i]['info'], {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            achievements_markers.push(achievements_marker);
        }
        else if(mode === "dom") {
            achievements_marker.addTo(achievements_markers);
        }
    }

    return achievements_markers;
}

InteractiveMap.utils.misc.loadTreasures = async function (data, mode) {
    var treasure_markers;

    if(mode === "canvas") {
        treasure_markers = [];
    }
    else if(mode === "dom") {
        treasure_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var treasure_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.misc["Treasure"]});
        treasure_marker.bindPopup("<b>Treasure Crate</b><br>\
                                    " + data[i]['info'], {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            treasure_markers.push(treasure_marker);
        }
        else if(mode === "dom") {
            treasure_marker.addTo(treasure_markers);
        }
    }

    return treasure_markers;
}

InteractiveMap.utils.misc.loadMiscEverything = async function (mode) {
    let mf_grounds_group = await InteractiveMap.utils.misc.loadMFGrounds(InteractiveMap.data.miscJSONData["MF_grounds"], mode)

    let demo_royale_group = await InteractiveMap.utils.misc.loadDemoRoyale(InteractiveMap.data.miscJSONData["Demo_royale"], mode)

    let grand_race_group = await InteractiveMap.utils.misc.loadGrandRace(InteractiveMap.data.miscJSONData["Grand_race"], mode)

    let achievements_group = await InteractiveMap.utils.misc.loadAchievements(InteractiveMap.data.miscJSONData["Achievements"], mode)

    let treasure_group = await InteractiveMap.utils.misc.loadTreasures(InteractiveMap.data.miscJSONData["Treasures"], mode)

    return { mf_grounds_group, demo_royale_group, grand_race_group, achievements_group, treasure_group }
}

InteractiveMap.utils.misc.initializeMisc = async function (mode, first_load) {
    if(first_load) {
        await InteractiveMap.utils.misc.loadMiscJsonFile();
    }

    const {mf_grounds_group, demo_royale_group, grand_race_group, achievements_group, treasure_group } = await InteractiveMap.utils.misc.loadMiscEverything(mode);

    InteractiveMap.markers.misc["mf_grounds"] = mf_grounds_group;
    InteractiveMap.markers.misc["demo_royale"] = demo_royale_group;
    InteractiveMap.markers.misc["grand_race"] = grand_race_group;
    InteractiveMap.markers.misc["achievements"] = achievements_group;
    InteractiveMap.markers.misc["treasure"] = treasure_group;

    if(mode === "canvas" && first_load) {
        InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.misc["mf_grounds"]);
        InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.misc["demo_royale"]);
        InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.misc["grand_race"]);
        InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.misc["achievements"]);
        InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.misc["treasure"]);
    }

    else if(mode === "dom" && first_load) {
        InteractiveMap.markers.misc["mf_grounds"] .addTo(InteractiveMap.map.instance);
        InteractiveMap.markers.misc["demo_royale"] .addTo(InteractiveMap.map.instance);
        InteractiveMap.markers.misc["grand_race"] .addTo(InteractiveMap.map.instance);
        InteractiveMap.markers.misc["achievements"] .addTo(InteractiveMap.map.instance);
        InteractiveMap.markers.misc["treasure"] .addTo(InteractiveMap.map.instance);
    } 
}

InteractiveMap.utils.misc.initializeMisc("canvas", true);