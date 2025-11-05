// Creates map instance
// 'map' is the name of the map that has to be used also in div so map can be created
InteractiveMap.map.instance = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: +4,
    zoomSnap: 0.25,
    attributionControl: false,
    zoomControl: false,
});

// Bounds settings for the map
InteractiveMap.map.settings = {
    // Bounds of the basic image
    bounds: [[0,0], [3579,6707]],

    // Expanded bounds for the case when user tries to go far from the map
    get expandedBounds() {
        const bounds = this.bounds;
        return [
            [bounds[0][0] - 3000, bounds[0][1] - 4000], 
            [bounds[1][0] + 3000, bounds[1][1] + 4000]
        ];
    }
};

// Setting picture(background) for the map
L.imageOverlay('img/oahu_maui.avif', InteractiveMap.map.settings.bounds).addTo(InteractiveMap.map.instance);

InteractiveMap.map.instance
    .fitBounds(InteractiveMap.map.settings.bounds)
    .setMaxBounds(InteractiveMap.map.settings.expandedBounds)
    .addControl(L.control.zoom({ position: 'bottomright' }))

// Adding popup that appears on any place I click on the map to give me coords of that place
InteractiveMap.map.mapClickPopup = {
    popup: L.popup({className: 'hstPopup'}),

    onMapClick(e) {
        InteractiveMap.map.mapClickPopup.popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(InteractiveMap.map.instance);
    }
}

InteractiveMap.map.instance.on('click', InteractiveMap.map.mapClickPopup.onMapClick);

// Canvas for performance mode
InteractiveMap.map.canvas = new L.MarkersCanvas();
InteractiveMap.map.canvas.addTo(InteractiveMap.map.instance);

// New panes for challenges mode for markers and popups
InteractiveMap.map.instance.createPane("challenges");
InteractiveMap.map.instance.getPane("challenges").style.zIndex = 600;
InteractiveMap.map.instance.createPane("challenges-popup");
InteractiveMap.map.instance.getPane("challenges-popup").style.zIndex = 700;

/* var map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -4,
    maxZoom: +4,
    zoomSnap: 0.25,
    attributionControl: false,
    zoomControl: false,
}); */

// Bounds of the basic image
//var bounds = [[0,0], [3579,6707]];

// Expanded bounds for the case when user tries to go far from the map
/* var expandedBounds = [[bounds[0][0] - 3000, [bounds[0][1] - 4000]], 
                        [bounds[1][0] + 3000, [bounds[1][1] + 4000]]] */
//var image = L.imageOverlay('img/oahu_maui.avif', bounds).addTo(map);

/* map.fitBounds(bounds);
map.setMaxBounds(expandedBounds);
map.addControl(L.control.zoom({ position: 'bottomright' })); */

/* var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
} */

/* map.on('click', onMapClick);

var markers_canvas = new L.MarkersCanvas();
markers_canvas.addTo(map);

map.createPane("challenges");
map.getPane("challenges").style.zIndex = 600;
map.createPane("challenges-popup");
map.getPane("challenges-popup").style.zIndex = 700; */