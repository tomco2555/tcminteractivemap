var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: +4,
    zoomSnap: 0.25,
    attributionControl: false,
    zoomControl: false,
});

var bounds = [[0,0], [2813,5000]];
var image = L.imageOverlay('img/tcm_map2.png', bounds).addTo(map);

map.fitBounds(bounds);
map.addControl(L.control.zoom({ position: 'bottomright' }));

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

var test_group = new L.MarkersCanvas();
test_group.addTo(map);

function testCheckbox(playlist_name) {

    var playlist_checkbox_status = document.getElementById(playlist_name + "_playlist").checked;

    if(!(playlist_checkbox_status)) {
        
        test_group.removeMarkers(window[playlist_name + "_container_group"]);
        test_group.removeMarkers(window[playlist_name + "_events_group"]);
    }

    else if(playlist_checkbox_status) {
        test_group.addMarkers(window[playlist_name + "_container_group"])
        test_group.addMarkers(window[playlist_name + "_events_group"]);
    }
}