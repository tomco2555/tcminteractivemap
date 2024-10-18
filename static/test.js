/* var test_icon = L.icon({
    iconUrl: 'img/placeholder_marker.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

var test_group = new L.MarkersCanvas();
test_group.addTo(map);

var t1_markers = [];
var t2_markers = [];

//test
test_marker = L.marker([1196.458971, 2620], {icon:test_icon});
test_marker.bindPopup("<b style=\"font-size:20px\">Test1</b>", {
    className: "hstPopup"
});

//test2
test_marker2 = L.marker([1660.043872, 2528], {icon:test_icon});
test_marker2.bindPopup("<b style=\"font-size:20px\">Test 2</b>", {
    className: "hstPopup"
});

t1_markers.push(test_marker)
t1_markers.push(test_marker2)

//test3
test_marker3 = L.marker([1472.096744, 2566], {icon:test_icon});
test_marker3.bindPopup("<b style=\"font-size:20px\">Test 3</b>", {
    className: "hstPopup"
});

//test4
test_marker4 = L.marker([1042.257609, 2016], {icon:test_icon});
test_marker4.bindPopup("<b style=\"font-size:20px\">Test 4</b>", {
    className: "hstPopup"
});

t2_markers.push(test_marker3)
t2_markers.push(test_marker4)

test_group.addMarkers(t1_markers)
test_group.addMarkers(t2_markers)

function testCheckbox(playlist_name) {

    var playlist_checkbox_status = document.getElementById(playlist_name + "_playlist").checked;

    if(!(playlist_checkbox_status)) {
        
        test_group.removeMarkers(t1_markers);
        test_group.removeMarkers(t2_markers);
    }

    else if(playlist_checkbox_status) {
        test_group.addMarkers(t1_markers)
        test_group.addMarkers(t2_markers)
    }
} */
