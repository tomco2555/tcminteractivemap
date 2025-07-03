map.on('zoomend', displayNames)

var locations_svgs;
var zoom_level_flags = {
    closest_zoom_shown:false,
    normal_zoom_shown:false
}

function getTextWidth(text, font, ctx) {
    ctx.font = font;
    return ctx.measureText(text).width;
}

function svgText(text, width, font_size) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (width + 2) + '" height="' + (font_size + 2) + '" xmlns:xlink="http://www.w3.org/1999/xlink"><text x="1" y="' + font_size + '" dominant-baseline="text-after-edge" style="font-size: ' + font_size + 'px; fill:white; stroke:black; stroke-width:2; paint-order:stroke; font-family:Arial; font-weight:bold">' + text + '</text></svg>';
}

async function loadLocationsJSON() {
    const path_to_folder = "static/data/";
    const file_ext = ".json";
    const file_name = "locations";

    const json_data = await fetch(path_to_folder + file_name + file_ext);
    locations_svgs = await json_data.json();
}

async function loadSVGs() {
    await loadLocationsJSON();

    const test_canvas = document.createElement("canvas");
    const ctx = test_canvas.getContext("2d");

    for(const zoom_level in locations_svgs) {
        const locations = locations_svgs[zoom_level];

        for(const location of locations) {
            location.width = getTextWidth(location.name, "bold 12px Arial", ctx);
            location.img = 'data:image/svg+xml,' + encodeURIComponent(svgText(location.name, location.width, 12));
        }
    }
}

async function loadLocations(names_by_zoom) {
    let locations_markers = [];

    for(let i = 0; i < names_by_zoom.length; i++) {
        var locations_icon = L.icon({
            iconUrl: names_by_zoom[i]['img'],
            iconSize: [names_by_zoom[i]['width'], 12],
            iconAnchor: [names_by_zoom[i]['width']/2, 0]
        })

        var locations_marker = L.marker(names_by_zoom[i]['coords'], {icon:locations_icon});
        locations_marker.bindPopup("<b>" + names_by_zoom[i]['name'] + "<br>", {
            className: "hstPopup"
        });

        locations_markers.push(locations_marker);
    }

    return locations_markers;
}

async function displayNames() {
    if(!locations_svgs) {
        await loadSVGs();
    }

    var current_zoom_level = map.getZoom();
    console.log(current_zoom_level)

    // divIcon for marker on canvas via SVG
    if(current_zoom_level >= 0 && !zoom_level_flags.closest_zoom_shown) {
        console.log("som tu");
        zoom_level_flags.closest_zoom_shown = true;
        const locations = await loadLocations(locations_svgs['closest_zoom']);

        markers_canvas.addMarkers(locations);
    }
}