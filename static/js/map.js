var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: +4,
    zoomSnap: 0.25,
    attributionControl: false,
    zoomControl: false,
});

// Bounds of the basic image
var bounds = [[0,0], [3579,6707]];

// Expanded bounds for the case when user tries to go far from the map
var expandedBounds = [[bounds[0][0] - 3000, [bounds[0][1] - 4000]], 
                        [bounds[1][0] + 3000, [bounds[1][1] + 4000]]]
var image = L.imageOverlay('img/oahu_maui.avif', bounds).addTo(map);

map.fitBounds(bounds);
map.setMaxBounds(expandedBounds);
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

map.createPane("challenges");
map.getPane("challenges").style.zIndex = 600;
map.createPane("challenges-popup");
map.getPane("challenges-popup").style.zIndex = 700;
