var misc_json_data;

async function loadMiscJsonFile() {
    const path_to_folder = "static/data/";
    const file_ext = ".json";
    const file_name = "misc";

    const json_data = await fetch(path_to_folder + file_name + file_ext);
    misc_json_data = await json_data.json();
}

async function loadMFGrounds(data, mode) {
    var mfgrounds_markers;

    if(mode === "canvas") {
        mfgrounds_markers = [];
    }
    else if(mode === "dom") {
        mfgrounds_markers = L.featureGroup();
    }

    var mfgrounds_marker = L.marker(data['coords'], {icon:mf_grounds_icon});
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

async function loadDemoRoyale(data, mode) {
    var demo_royale_markers;

    if(mode === "canvas") {
        demo_royale_markers = [];
    }
    else if(mode === "dom") {
        demo_royale_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var demo_royale_marker = L.marker(data[i]['coords'], {icon:demo_royale_icon});
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

async function loadGrandRace(data, mode) {
    var grand_race_markers;

    if(mode === "canvas") {
        grand_race_markers = [];
    }
    else if(mode === "dom") {
        grand_race_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var grand_race_marker = L.marker(data[i]['coords'], {icon:grand_race_icon});
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

async function loadAchievements(data, mode) {
    var achievements_markers;

    if(mode === "canvas") {
        achievements_markers = [];
    }
    else if(mode === "dom") {
        achievements_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var achievements_marker = L.marker(data[i]['coords'], {icon:achievement_icon});
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

async function loadTreasures(data, mode) {
    var treasure_markers;

    if(mode === "canvas") {
        treasure_markers = [];
    }
    else if(mode === "dom") {
        treasure_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var treasure_marker = L.marker(data[i]['coords'], {icon:treasure_icon});
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

async function loadMiscEverything(mode) {
    let mf_grounds_group = await loadMFGrounds(misc_json_data["MF_grounds"], mode)

    let demo_royale_group = await loadDemoRoyale(misc_json_data["Demo_royale"], mode)

    let grand_race_group = await loadGrandRace(misc_json_data["Grand_race"], mode)

    let achievements_group = await loadAchievements(misc_json_data["Achievements"], mode)

    let treasure_group = await loadTreasures(misc_json_data["Treasures"], mode)

    return { mf_grounds_group, demo_royale_group, grand_race_group, achievements_group, treasure_group }
}

async function initializeMisc(mode, first_load) {
    if(first_load) {
        await loadMiscJsonFile();
    }

    const {mf_grounds_group, demo_royale_group, grand_race_group, achievements_group, treasure_group } = await loadMiscEverything(mode);
    window["mf_grounds_group"] = mf_grounds_group;
    window["demo_royale_group"] = demo_royale_group;
    window["grand_race_group"] = grand_race_group;
    window["achievements_group"] = achievements_group;
    window["treasure_group"] = treasure_group;

    if(mode === "canvas" && first_load) {
        markers_canvas.addMarkers(window["mf_grounds_group"]);
        markers_canvas.addMarkers(window["demo_royale_group"]);
        markers_canvas.addMarkers(window["grand_race_group"]);
        markers_canvas.addMarkers(window["achievements_group"]);
        markers_canvas.addMarkers(window["treasure_group"]);
    }

    else if(mode === "dom" && first_load) {
        window["mf_grounds_group"].addTo(map);
        window["demo_royale_group"].addTo(map);
        window["grand_race_group"].addTo(map);
        window["achievements_group"].addTo(map);
        window["treasure_group"].addTo(map);
    } 
}

initializeMisc("canvas", true);