// Fetch all playlist jsons
InteractiveMap.utils.playlist.loadAllJsonFiles = async function() {
    const file_ext = ".json";

    const fetch_promises = InteractiveMap.data.playlists.map(async function(file_name) {
        const json_data = await fetch(InteractiveMap.paths.pathToPlaylists + file_name[0] + file_ext);
        InteractiveMap.data.playlistJSONData[file_name[0]] = await json_data.json();
        InteractiveMap.markers.playlists[file_name[2]] = {};
    })
    await Promise.all(fetch_promises);
}

// Loads json data from global object based on file name
InteractiveMap.utils.playlist.loadJsonFile = function (file_name) {
    const data = InteractiveMap.data.playlistJSONData[file_name];

    return data;
}

// Creates container markers and returns them
InteractiveMap.utils.playlist.loadContainerData = async function (data, playlist_prefix, playlist_name, mode) {
    var container_markers;

    if(mode === "canvas") {
        container_markers = [];
    }
    else if(mode === "dom") {
        container_markers = L.featureGroup();
    }
    
    var container_marker = L.marker(data['coords'], {icon:InteractiveMap.icons.playlists[playlist_name].Container});
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

InteractiveMap.utils.playlist.loadEventsData = async function (data, playlist_prefix, playlist_name, mode) {
    var event_markers;

    if(mode === "canvas") {
        event_markers = [];
    }
    else if(mode === "dom") {
        event_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var event_marker = L.marker(data[i]['coords'], {icon: (data[i]['side'] === "Donk" ? InteractiveMap.icons.playlists[playlist_name]["Event Donk"] : (data[i]['side'] === "Lowrider" ? InteractiveMap.icons.playlists[playlist_name]["Event Lowrider"] : InteractiveMap.icons.playlists[playlist_name]["Event"]))})
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

InteractiveMap.utils.playlist.loadFeatsData = async function (data, playlist_name, side_activities_name, mode) {
    var feats_markers;

    if(mode === "canvas") {
        feats_markers = [];
    }
    else if(mode === "dom") {
        feats_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var feat_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.playlist_side.Feats[data[i]['type']]});
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

InteractiveMap.utils.playlist.loadPhotoOpsData = async function (data, playlist_name, side_activities_name, mode) {
    var photo_ops_markers;

    if(mode === "canvas") {
        photo_ops_markers = [];
    }
    else if(mode === "dom") {
        photo_ops_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var photo_ops_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.playlist_side.Other["Photo Ops"]});
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

InteractiveMap.utils.playlist.loadCollectiblesData = async function (data, playlist_name, mode) {
    var collectibles_markers;

    if(mode === "canvas") {
        collectibles_markers = [];
    }
    else if(mode === "dom") {
        collectibles_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        var collectible_marker = L.marker(data[i]['coords'], {icon:InteractiveMap.icons.playlist_side.Other.Collectible});
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
InteractiveMap.utils.playlist.loadEverything = async function (file_name, playlist_prefix, playlist_name, side_activities_name, mode) {
    const data = InteractiveMap.utils.playlist.loadJsonFile(file_name);

    // Load container data
    let container_group = await InteractiveMap.utils.playlist.loadContainerData(data['Container'], playlist_prefix, playlist_name, mode);

    // Load events data
    let events_group = await InteractiveMap.utils.playlist.loadEventsData(data['Events'], playlist_prefix, playlist_name, mode);

    // Load feats data
    let feats_group = await InteractiveMap.utils.playlist.loadFeatsData(data['Feats'], playlist_name, side_activities_name, mode);

    // Load photo ops data
    let photo_ops_group = await InteractiveMap.utils.playlist.loadPhotoOpsData(data['Photo_ops'], playlist_name, side_activities_name, mode);

    // Load collectibles data
    let collectibles_group = await InteractiveMap.utils.playlist.loadCollectiblesData(data['Collectibles'], playlist_name, mode);

    return { container_group, events_group, feats_group, photo_ops_group, collectibles_group };
}

InteractiveMap.utils.playlist.initializePlaylists = async function (playlists, mode, first_load) {
    if(first_load) {
        await InteractiveMap.utils.playlist.loadAllJsonFiles();
    }

    const playlistPromises = playlists.map(async (playlist) => {
        const { container_group, events_group, feats_group, photo_ops_group, collectibles_group } = await InteractiveMap.utils.playlist.loadEverything(playlist[0], playlist[1], playlist[2], playlist[3], mode);

        InteractiveMap.markers.playlists[playlist[2]]["container"] = container_group;
        InteractiveMap.markers.playlists[playlist[2]]["events"] = events_group;
        InteractiveMap.markers.playlists[playlist[2]]["feats"] = feats_group;
        InteractiveMap.markers.playlists[playlist[2]]["photo_ops"] = photo_ops_group;
        InteractiveMap.markers.playlists[playlist[2]]["collectibles"] = collectibles_group;

        // TODO - remove this and add loading markers after DOMContentLoad based on mode switch
        if(mode === "canvas" && first_load) {
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.playlists[playlist[2]]["container"]);
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.playlists[playlist[2]]["events"]);
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.playlists[playlist[2]]["feats"]);
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.playlists[playlist[2]]["photo_ops"]);
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.playlists[playlist[2]]["collectibles"]);
        }

        else if(mode === "dom" && first_load) {
            InteractiveMap.markers.playlists[playlist[2]]["container"].addTo(InteractiveMap.map.instance);
            InteractiveMap.markers.playlists[playlist[2]]["events"].addTo(InteractiveMap.map.instance);
            InteractiveMap.markers.playlists[playlist[2]]["feats"].addTo(InteractiveMap.map.instance);
            InteractiveMap.markers.playlists[playlist[2]]["photo_ops"].addTo(InteractiveMap.map.instance);
            InteractiveMap.markers.playlists[playlist[2]]["collectibles"].addTo(InteractiveMap.map.instance);
        } 
    });

    // Wait for all the playlists to finish loading
    await Promise.all(playlistPromises);
}

InteractiveMap.utils.playlist.initializePlaylists(InteractiveMap.data.playlists, "canvas", true);