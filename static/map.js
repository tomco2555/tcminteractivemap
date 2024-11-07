var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: +4,
    zoomSnap: 0.25,
    attributionControl: false,
    zoomControl: false,
});

var bounds = [[0,0], [3579,6707]];
var image = L.imageOverlay('img/oahu_maui.png', bounds).addTo(map);

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

var markers_canvas = new L.MarkersCanvas();
markers_canvas.addTo(map);
