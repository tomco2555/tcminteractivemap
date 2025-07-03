// Global object that holds all playlist loaded jsons
// It is so we don't have to fetch everytime we change mode when it was fetched already
var playlists_json_data = {};

// Fetch all playlist jsons
async function loadAllJsonFiles() {
    const path_to_folder = "static/data/playlists/";
    const file_ext = ".json";
    const file_names = ["american_muscle",
                        "auto_lambo",
                        "bike_lovers",
                        "chase_squad",
                        "donut_media",
                        "dream_cars",
                        "drift",
                        "drift2",
                        "dvl",
                        "ele_ody",
                        "gymkhana",
                        "hollywood",
                        "hst",
                        "lbwk",
                        "mauiex",
                        "mij",
                        "mij2",
                        "motorsports",
                        "off_add",
                        "off_add2",
                        "ons",
                        "porsche",
                        "redbull_sc",
                        "redbull_wr",
                        "vin_gar"
                        ];

    const fetch_promises = file_names.map(async function(file_name) {
        const json_data = await fetch(path_to_folder + file_name + file_ext);
        playlists_json_data[file_name] = await json_data.json();
    })
    await Promise.all(fetch_promises);
}

// Loads json data from global object based on file name
function loadJsonFile(file_name) {
    const data = playlists_json_data[file_name];

    return data;
}

// Creates container markers and returns them
async function loadContainerData(data, playlist_prefix, playlist_name, mode) {
    var container_markers;

    if(mode === "canvas") {
        container_markers = [];
    }
    else if(mode === "dom") {
        container_markers = L.featureGroup();
    }
    
    var container_marker = L.marker(data['coords'], {icon:window[playlist_prefix + "_container_icon"]});
    container_marker.bindPopup('<b>' + playlist_name + '</b><br>\
                                <i>Container</i>', {
        className: "hstPopup"
    });

    if(mode === "canvas") {
        container_markers.push(container_marker);
    }
    else if(mode === "dom") {
        container_marker.addTo(container_markers);
    }

    return container_markers;
}

async function loadEventsData(data, playlist_prefix, playlist_name, mode) {
    var event_markers;

    if(mode === "canvas") {
        event_markers = [];
    }
    else if(mode === "dom") {
        event_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var event_marker = L.marker(data[i]['coords'], {icon: window[playlist_prefix + "_event" + (data[i]['side'] === "Donk" ? "_d" : (data[i]['side'] === "Lowrider" ? "_l" : "")) + "_icon"]})
        event_marker.bindPopup("<b style=\"font-size:20px\">" + data[i]['name'] + "</b><br>\
                        <i>Event</i><br>\
                        <span><b>" + playlist_name + "(" + (i + 1) + "/" + data.length + ")</b></span><br>" +
                        (data[i]['side'] ? "<span><b>" + data[i]['side'] + " side(" + data[i]['side_event_number'] + ")</b></span><br>" : "") + 
                        "<hr style=\"background-color:white;height:0.5px\">\
                        <span><b>Event type:</b> " + data[i]['type'] + "</span><br>\
                        <span><b>Weather:</b> " + data[i]['weather'] + "</span><br>\
                        <span><b>Car:</b> " + data[i]['car'] + "</span><br>\
                        <span><b>Category:</b> " + data[i]['category'] + "</span><br>\
                        <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + data[i]['xp'] + "</span></span><br>\
                        <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + data[i]['bucks'] + "</span></span><br>", {
                className: "hstPopup"
        });

        if(mode === "canvas") {
            event_markers.push(event_marker);
        }
        else if(mode === "dom") {
            event_marker.addTo(event_markers);
        }
    }

    return event_markers;

}

async function loadFeatsData(data, playlist_name, side_activities_name, mode) {
    var feats_markers;

    if(mode === "canvas") {
        feats_markers = [];
    }
    else if(mode === "dom") {
        feats_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var feat_marker = L.marker(data[i]['coords'], {icon:window[data[i]['icon_name'] + "_icon"]});
        feat_marker.bindPopup("<b style=\"font-size:20px\">" + (data[i]['side'] === "Dirty South" ? "Dirty South" : data[i]['side'] === "West Side" ? "West Side" : side_activities_name) + " Feats - " + data[i]['name'] + "</b><br>\
                                     <i>Feat - " + data[i]['type'] + "</i><br>\
                                     <span><b>" + playlist_name + "</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + data[i]['objective'] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + data[i]['xp'] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + data[i]['bucks'] + "</span></span><br>", {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            feats_markers.push(feat_marker);
        }
        else if(mode === "dom") {
            feat_marker.addTo(feats_markers);
        }
    }

    return feats_markers;
}

async function loadPhotoOpsData(data, playlist_name, side_activities_name, mode) {
    var photo_ops_markers;

    if(mode === "canvas") {
        photo_ops_markers = [];
    }
    else if(mode === "dom") {
        photo_ops_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var photo_ops_marker = L.marker(data[i]['coords'], {icon:window[data[i]['icon_name'] +"_icon"]});
        photo_ops_marker.bindPopup("<b style=\"font-size:20px\">" + (data[i]['side'] === "Dirty South" ? "Dirty South" : data[i]['side'] === "West Side" ? "West Side" : side_activities_name) + " Views - " + data[i]['name'] + "</b><br>\
                                    <i>Photo Ops</i><br>\
                                    <span><b>" + playlist_name + "</b></span><br>\
                                    <hr style=\"background-color:white;height:0.5px\">\
                                    <span><b>Requirements</b></span><br>\
                                    " + data[i]['requirements'], {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            photo_ops_markers.push(photo_ops_marker);
        }
        else if(mode === "dom") {
            photo_ops_marker.addTo(photo_ops_markers);
        }
    }

    return photo_ops_markers;
}

async function loadCollectiblesData(data, playlist_name, mode) {
    var collectibles_markers;

    if(mode === "canvas") {
        collectibles_markers = [];
    }
    else if(mode === "dom") {
        collectibles_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var collectible_marker = L.marker(data[i]['coords'], {icon:window[data[i]['icon_name'] +"_icon"]});
        collectible_marker.bindPopup("<b style=\"font-size:20px\">" + playlist_name + "</b><br>\
                                    <i>Collectible</i><br>\
                                    <span><b>Challenge:</b> " + data[i]['challenge_name'] + "</span><br>", {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            collectibles_markers.push(collectible_marker);
        }
        else if(mode === "dom") {
            collectible_marker.addTo(collectibles_markers);
        }
    }

    return collectibles_markers;
}

// Main function that loads json file, creates all markers and adds them to the canvas
async function loadEverything(file_name, playlist_prefix, playlist_name, side_activities_name, mode) {
    const data = loadJsonFile(file_name);

    // Load container data
    let container_group = await loadContainerData(data['Container'], playlist_prefix, playlist_name, mode);

    // Load events data
    let events_group = await loadEventsData(data['Events'], playlist_prefix, playlist_name, mode);

    // Load feats data
    let feats_group = await loadFeatsData(data['Feats'], playlist_name, side_activities_name, mode);

    // Load photo ops data
    let photo_ops_group = await loadPhotoOpsData(data['Photo_ops'], playlist_name, side_activities_name, mode);

    // Load collectibles data
    let collectibles_group = await loadCollectiblesData(data['Collectibles'], playlist_name, mode);

    return { container_group, events_group, feats_group, photo_ops_group, collectibles_group };
}

async function initializePlaylists(playlists, mode, first_load) {
    if(first_load) {
        await loadAllJsonFiles();
    }

    const playlistPromises = playlists.map(async (playlist) => {
        const { container_group, events_group, feats_group, photo_ops_group, collectibles_group } = await loadEverything(playlist[0], playlist[1], playlist[2], playlist[3], mode);

        window[playlist[1] + "_container_group"] = container_group;
        window[playlist[1] + "_events_group"] = events_group;
        window[playlist[1] + "_feats_group"] = feats_group;
        window[playlist[1] + "_photo_ops_group"] = photo_ops_group;
        window[playlist[1] + "_collectibles_group"] = collectibles_group;

        // TODO - remove this and add loading markers after DOMContentLoad based on mode switch
        if(mode === "canvas" && first_load) {
            markers_canvas.addMarkers(window[playlist[1] + "_container_group"]);
            markers_canvas.addMarkers(window[playlist[1] + "_events_group"]);
            markers_canvas.addMarkers(window[playlist[1] + "_feats_group"]);
            markers_canvas.addMarkers(window[playlist[1] + "_photo_ops_group"]);
            markers_canvas.addMarkers(window[playlist[1] + "_collectibles_group"]);
        }

        else if(mode === "dom" && first_load) {
            window[playlist[1] + "_container_group"].addTo(map);
            window[playlist[1] + "_events_group"].addTo(map);
            window[playlist[1] + "_feats_group"].addTo(map);
            window[playlist[1] + "_photo_ops_group"].addTo(map);
            window[playlist[1] + "_collectibles_group"].addTo(map);
        } 
    });

    // Wait for all the playlists to finish loading
    await Promise.all(playlistPromises);
}

const playlists_data = [["american_muscle", "am", "American Muscle", "American"],
                        ["auto_lambo", "al", "Automobili Lamborghini", "A.L."],
                        ["bike_lovers", "bl", "Bike Lovers", "Rider"],
                        ["chase_squad", "tcs", "The Chase Squad", "Code 10"],
                        ["donut_media", "dm", "Rule the Streets", "Donut x"],
                        ["dream_cars", "dc", "Dream Cars", "Super"],
                        ["drift", "de", "Drift Experience", "Burning"],
                        ["drift2", "de2", "Drift Experience Vol.2", "Blazing"],
                        ["dvl", "dvl", "Donk vs Lowrider", ""],
                        ["ele_ody", "eo", "Electric Odyssey", "E-Feats"],
                        ["gymkhana", "gym", "Gymkhana Grid Masters", "Gymkhana"],
                        ["hollywood", "ha", "Hollywood Action!", "Movie Award"],
                        ["hst", "hst", "Hawaii Scenic Tour", "Rainbow"],
                        ["lbwk", "lbwk", "Liberty Walk", "Liberty"],
                        ["mauiex", "mauiex", "Maui Expeditions", "Valley Isle"],
                        ["mij", "mij", "Made in Japan", "Nihon No"],
                        ["mij2", "mij2", "Made in Japan Vol.2", "Sekai No"],
                        ["motorsports", "motorsports", "Motorsports", "Alpha"],
                        ["off_add", "oa", "Off-roading Addict", "Wild"],
                        ["off_add2", "oa2", "Off-roading Addict Vol.2", "Wilder"],
                        ["ons", "ons", "Ocean\'N Sky", "ONS"],
                        ["porsche", "porsche", "911 Legacy", "911"],
                        ["redbull_sc", "rb", "Red Bull Speed Clash", "Apex"],
                        ["redbull_wr", "rb2", "Red Bull Wild Ride", "Bold"],
                        ["vin_gar", "vg", "Vintage Garage", "Retro"]]

initializePlaylists(playlists_data, "canvas", true);