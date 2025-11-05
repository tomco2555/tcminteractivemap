//Flags that handle which zoom is currently shown
InteractiveMap.locations.zoom_level_flags = {
    closest_zoom_shown:false,
    middle_zoom_shown:false,
    normal_zoom_shown:false
}

InteractiveMap.locations.markers_by_zoom = {
    closest_zoom_markers:null,
    middle_zoom_markers:null,
    normal_zoom_markers:null
}

// Get width of the text so we can create marker for it
InteractiveMap.locations.funcs.getTextWidth = function(text, font, ctx) {
    ctx.font = font;
    return ctx.measureText(text).width;
}

// Creates marker
InteractiveMap.locations.funcs.svgText = function(text, width, font_size) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (width + 2) + '" height="' + (font_size + 2) + '" xmlns:xlink="http://www.w3.org/1999/xlink"><text x="1" y="' + font_size + '" dominant-baseline="text-after-edge" style="font-size: ' + font_size + 'px; fill:white; stroke:black; stroke-width:2; paint-order:stroke; font-family:Arial; font-weight:bold">' + text + '</text></svg>';
}

// Loads json with locations
InteractiveMap.locations.funcs.loadLocationsJSON = async function() {
    const file_ext = ".json";
    const file_name = "locations";

    const json_data = await fetch(InteractiveMap.paths.pathToData + file_name + file_ext);
    InteractiveMap.locations.JSONData = await json_data.json();
}

// Loads SVG for every marker
InteractiveMap.locations.funcs.loadSVGs = async function() {
    await InteractiveMap.locations.funcs.loadLocationsJSON();

    const test_canvas = document.createElement("canvas");
    const ctx = test_canvas.getContext("2d");

    for(const zoom_level in InteractiveMap.locations.JSONData) {
        const locations = InteractiveMap.locations.JSONData[zoom_level];

        for(const location of locations) {
            location.width = InteractiveMap.locations.funcs.getTextWidth(location.name, "bold 12px Arial", ctx);
            location.img = 'data:image/svg+xml,' + encodeURIComponent(InteractiveMap.locations.funcs.svgText(location.name, location.width, 12));
        }
    }
}

// Function for creating marker group for specific zoom level and by the current mode selected
InteractiveMap.locations.funcs.loadLocations = async function(names_by_zoom, mode) {
    var locations_markers;

    if(mode === "canvas") {
        locations_markers = [];
    }
    else if(mode === "dom") {
        locations_markers = L.featureGroup();
    }

    if(mode === "canvas") {
        for(let i = 0; i < names_by_zoom.length; i++) {
            var locations_icon = L.icon({
                iconUrl: names_by_zoom[i]['img'],
                iconSize: [names_by_zoom[i]['width'], 12],
                iconAnchor: [names_by_zoom[i]['width']/2, 0]
            })

            var locations_marker = L.marker(names_by_zoom[i]['coords'], {icon:locations_icon});
            locations_marker.bindPopup("<b>" + names_by_zoom[i]['name'] + "</b>", {
                className: "hstPopup"
            });

            locations_markers.push(locations_marker);
        }
    }

    else if(mode === "dom") {
        for(let i = 0; i < names_by_zoom.length; i++) {
            var locations_icon = L.icon({
                iconUrl: names_by_zoom[i]['img'],
                iconSize: [names_by_zoom[i]['width'], 12],
                iconAnchor: [names_by_zoom[i]['width']/2, 0]
            })

            var locations_marker = L.marker(names_by_zoom[i]['coords'], {icon:locations_icon});
            locations_marker.bindPopup("<b>" + names_by_zoom[i]['name'] + "</b>", {
                className: "hstPopup"
            });

            locations_marker.addTo(locations_markers);
        }
    }

    return locations_markers;
}

// Function that keeps the track of which zoom was applied so it can remove markers if zoom gets within different range
InteractiveMap.locations.funcs.zoomSwitchLogic = function(close_zoom_bool, middle_zoom_bool, normal_zoom_bool, markers_to_add, mode) {
    Object.entries(InteractiveMap.locations.zoom_level_flags).forEach(function(single_flag) {
        if(single_flag[1] === true) {
            switch (single_flag[0]) {
                case "closest_zoom_shown":
                    if (mode === "canvas") {
                        InteractiveMap.map.canvas.removeMarkers(InteractiveMap.locations.markers_by_zoom.closest_zoom_markers);
                    }
                    else if (mode === "dom") {
                        InteractiveMap.locations.markers_by_zoom.closest_zoom_markers.removeFrom(InteractiveMap.map.instance);
                    }
                case "middle_zoom_shown":
                    if (mode === "canvas") {
                        InteractiveMap.map.canvas.removeMarkers(InteractiveMap.locations.markers_by_zoom.middle_zoom_markers);
                    }
                    else if (mode === "dom") {
                        InteractiveMap.locations.markers_by_zoom.middle_zoom_markers.removeFrom(InteractiveMap.map.instance);
                    }
                case "normal_zoom_shown":
                    if (mode === "canvas") {
                        InteractiveMap.map.canvas.removeMarkers(InteractiveMap.locations.markers_by_zoom.normal_zoom_markers);
                    }
                    else if (mode === "dom") {
                        InteractiveMap.locations.markers_by_zoom.normal_zoom_markers.removeFrom(InteractiveMap.map.instance);
                    }
            }
        }
    });

    InteractiveMap.locations.zoom_level_flags.closest_zoom_shown = close_zoom_bool;
    InteractiveMap.locations.zoom_level_flags.middle_zoom_shown = middle_zoom_bool;
    InteractiveMap.locations.zoom_level_flags.normal_zoom_shown = normal_zoom_bool;

    if (mode === "canvas") {
        InteractiveMap.map.canvas.addMarkers(markers_to_add);
    }
    else if (mode === "dom") {
        markers_to_add.addTo(InteractiveMap.map.instance);
    }
}

// Show markers to the user
InteractiveMap.locations.funcs.displayNames = async function() {
    // Initialization to load SVGs if they are not loaded yet
    if(Object.keys(InteractiveMap.locations.JSONData).length === 0) {
        await InteractiveMap.locations.funcs.loadSVGs();
    }

    var mode_switch_checkbox_state = document.getElementById("mode_switch").checked ? "canvas" : "dom";

    // If marker arrays are not initialized then do so
    if(Object.values(InteractiveMap.locations.markers_by_zoom).every((currentvalue) => currentvalue === null)) {
        InteractiveMap.locations.markers_by_zoom.closest_zoom_markers = await InteractiveMap.locations.funcs.loadLocations(InteractiveMap.locations.JSONData['closest_zoom'], mode_switch_checkbox_state);
        InteractiveMap.locations.markers_by_zoom.middle_zoom_markers = await InteractiveMap.locations.funcs.loadLocations(InteractiveMap.locations.JSONData['middle_zoom'], mode_switch_checkbox_state);
        InteractiveMap.locations.markers_by_zoom.normal_zoom_markers = await InteractiveMap.locations.funcs.loadLocations(InteractiveMap.locations.JSONData['normal_zoom'], mode_switch_checkbox_state);
    }

    // Get current zoom on the map
    var current_zoom_level = InteractiveMap.map.instance.getZoom();
    //console.log(current_zoom_level)

    // divIcon for marker on canvas via SVG
    if(current_zoom_level >= 0) {
        InteractiveMap.locations.funcs.zoomSwitchLogic(true, false, false, InteractiveMap.locations.markers_by_zoom.closest_zoom_markers, mode_switch_checkbox_state);
    }

    else if(current_zoom_level < 0 && current_zoom_level >= -2) {
        InteractiveMap.locations.funcs.zoomSwitchLogic(false, true, false, InteractiveMap.locations.markers_by_zoom.middle_zoom_markers, mode_switch_checkbox_state);
    }

    else if(current_zoom_level < -2 && current_zoom_level >= -4) {
        InteractiveMap.locations.funcs.zoomSwitchLogic(false, false, true, InteractiveMap.locations.markers_by_zoom.normal_zoom_markers, mode_switch_checkbox_state);
    }
}

// Removes all the locations from the map, dependant on the current mode because canvas markers are stored in array while DOM markers are stored in featureGroup
InteractiveMap.locations.funcs.removeLocationsFromMap = function() {
    var mode_switch_checkbox_state = document.getElementById("mode_switch").checked;

    if (mode_switch_checkbox_state) {
        InteractiveMap.map.canvas.removeMarkers(InteractiveMap.locations.markers_by_zoom.closest_zoom_markers);
        InteractiveMap.map.canvas.removeMarkers(InteractiveMap.locations.markers_by_zoom.middle_zoom_markers);
        InteractiveMap.map.canvas.removeMarkers(InteractiveMap.locations.markers_by_zoom.normal_zoom_markers);
    }

    else if (!mode_switch_checkbox_state) {
        InteractiveMap.locations.markers_by_zoom.closest_zoom_markers.removeFrom(InteractiveMap.map.instance);
        InteractiveMap.locations.markers_by_zoom.middle_zoom_markers.removeFrom(InteractiveMap.map.instance);
        InteractiveMap.locations.markers_by_zoom.normal_zoom_markers.removeFrom(InteractiveMap.map.instance);
    }
}

// Resets already loaded location markers to null
// Prevents issues when changing mode while locations are on/off due to difference of how they are stored
InteractiveMap.locations.funcs.resetZoomMarkers = function() {
    InteractiveMap.locations.markers_by_zoom.closest_zoom_markers = null;
    InteractiveMap.locations.markers_by_zoom.middle_zoom_markers = null;
    InteractiveMap.locations.markers_by_zoom.normal_zoom_markers = null;
}

// When Mode Switch button gets triggered this function gets called to reset current markers and create appropriate ones based on the mode selected
InteractiveMap.locations.funcs.modeSwitchWhileLocationsOn = function() {
    const location_switch_state = document.getElementById("locations_switch").checked;

    if (location_switch_state) {
        InteractiveMap.locations.funcs.resetZoomMarkers();
        InteractiveMap.map.instance.fire('zoomend');
    }
}

// Logic for when "Show location names" button gets triggered
InteractiveMap.locations.funcs.locationShowLogic = function(checkbox) {
    const location_switch_state = checkbox.checked;

    if (location_switch_state) {
        InteractiveMap.map.instance.on('zoomend', InteractiveMap.locations.funcs.displayNames);
        InteractiveMap.map.instance.fire('zoomend');
    }

    else if (!location_switch_state) {
        InteractiveMap.map.instance.off('zoomend', InteractiveMap.locations.funcs.displayNames);
        InteractiveMap.locations.funcs.removeLocationsFromMap();
        InteractiveMap.locations.funcs.resetZoomMarkers();
    }
}