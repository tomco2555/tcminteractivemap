var dc_container_icon = L.icon({
    iconUrl: 'img/DreamCars/dc_container.png',
    iconSize: [62, 75],
    iconAnchor: [31,75],
    popupAnchor: [0,-60],
});

var dc_event_icon = L.icon({
    iconUrl: 'img/DreamCars/dc_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

dc_container_group = [];
dc_events_group = [];
dc_photo_ops_group = [];
dc_feats_group = [];
dc_collectibles_group = [];

//CONTAINER
dc_container_marker = L.marker([1349.381937, 2044.952811], {icon:dc_container_icon});
dc_container_marker.bindPopup('<b>Dream Cars</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
dc_event01_marker = L.marker([1381.110271, 1787.212389], {icon:dc_event_icon});
dc_event01_marker.bindPopup("<b style=\"font-size:20px\">Dream Bulls</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Lamborghini Egoista</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
dc_event02_marker = L.marker([2901.045399, 2033.813092], {icon:dc_event_icon});
dc_event02_marker.bindPopup("<b style=\"font-size:20px\">Dream Duel: Egoista vs Terzo Millennio</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Lamborghini Egoista</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 03
dc_event03_marker = L.marker([2248.531242, 3039.630317], {icon:dc_event_icon});
dc_event03_marker.bindPopup("<b style=\"font-size:20px\">Dream Bugattis</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Bugatti La Voiture Noire</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
dc_event04_marker = L.marker([1970.030236, 3417.855574], {icon:dc_event_icon});
dc_event04_marker.bindPopup("<b style=\"font-size:20px\">Dream Duel: Veyron vs Noire</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Bugatti La Voiture Noire</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
dc_event05_marker = L.marker([1228.979947, 3314.394555], {icon:dc_event_icon});
dc_event05_marker.bindPopup("<b style=\"font-size:20px\">French Dreams</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Citroen GT</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
dc_event06_marker = L.marker([1552.774971, 2367.438745], {icon:dc_event_icon});
dc_event06_marker.bindPopup("<b style=\"font-size:20px\">Dream Duel: Trezor vs Citroen GT</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Citroen GT</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
dc_event07_marker = L.marker([2601.687074, 1462.278799], {icon:dc_event_icon});
dc_event07_marker.bindPopup("<b style=\"font-size:20px\">Supercar Festival</b><br>\
                              <i>Event</i><br>\
                              <span><b>Dream Cars(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Mercedes-Benz Vision EQ Silver Arrow</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var DCfeatsArr = [[2432.662665, 1805.420389, "slalom", "Ka'ala", "Slalom", "5,480 PTS", "2,880", "5,400"],  //Feat 01
                  [1320.130067, 1851.470718, "speedtrap", "Barbers Point", "Speedtrap", "150.0 km/h", "960", "1,800"],  //Feat 02
                  [1906.535787, 2174.25, "speedtrap", "Kunia", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 03
                  [2924.094072, 2143.063877, "slalom", "East Haleiwa", "Slalom", "4,970 PTS", "2,880", "5,400"],  //Feat 04
                  [1505.38297, 3560.724585, "escape", "Kuapa River", "Escape", "1340 m", "2,880", "5,400"],  //Feat 05
                 ]

function createDCFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["dc_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["dc_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Super Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Dream Cars</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createDCFeatsMarkers(DCfeatsArr);

//PHOTO OPS
//Photo Ops 1 Super Views - Sulphur Chimneys
dc_photo_ops01_marker = L.marker([2135.320435, 1691.929751], {icon:photo_op_icon});
dc_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Super Views - Sulphur Chimneys</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Dream Cars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Egoista</span><br>\
                              <span>- easternmost Sulphur Chimney</span><br>\
                              <span>- Mauna Pele Sulphur Banks</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Super Views - Aulinaii Resort
dc_photo_ops02_marker = L.marker([1437.315506, 1595.75], {icon:photo_op_icon});
dc_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Super Views - Aulinaii Resort</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Dream Cars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Egoista</span><br>\
                              <span>- Aulinaii Resort</span><br>\
                              <span>- near Kohola Lagoon Beach</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Super Views - Royal Luau
dc_photo_ops03_marker = L.marker([1291.514167, 2805.875], {icon:photo_op_icon});
dc_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Super Views - Royal Luau</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Dream Cars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Egoista</span><br>\
                              <span>- Royal Luau</span><br>\
                              <span>- Honolulu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Super Views - Fast Fashion
dc_photo_ops04_marker = L.marker([1325.857014, 2674.984953], {icon:photo_op_icon});
dc_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Super Views - Fast Fashion</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Dream Cars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Egoista</span><br>\
                              <span>- high speed</span><br>\
                              <span>- going through Moana Center</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Super Views - Fire Ball
dc_photo_ops05_marker = L.marker([2534.472369, 1756.75], {icon:photo_op_icon});
dc_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Super Views - Fire Ball</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Dream Cars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Egoista</span><br>\
                              <span>- hairpin turns</span><br>\
                              <span>- Peacock area</span><br>\
                              <span>- volcano in the background</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Super Shinny
//Collectible 1 Super Shinny
dc_collectible01_marker = L.marker([1428.405643, 1576.848122], {icon:collectible_icon});
dc_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Dream Cars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Super Shinny</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Super Shinny
dc_collectible02_marker = L.marker([1267.397991, 2812.875], {icon:collectible_icon});
dc_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Dream Cars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Super Shinny</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Super Shinny
dc_collectible03_marker = L.marker([1307.513745, 2879.875], {icon:collectible_icon});
dc_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Dream Cars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Super Shinny</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Super Shinny
dc_collectible04_marker = L.marker([3303.501933, 2272.25], {icon:collectible_icon});
dc_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Dream Cars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Super Shinny</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Super Shinny
dc_collectible05_marker = L.marker([2937.506539, 1777], {icon:collectible_icon});
dc_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Dream Cars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Super Shinny</span><br>", {
    className: "hstPopup"
});

dc_container_group.push(dc_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        dc_events_group.push(window["dc_event0" + i + "_marker"]);
    }
    else {
        dc_events_group.push(window["dc_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 4; i++) {
    dc_feats_group.push(window["dc_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        dc_photo_ops_group.push(window["dc_photo_ops0" + i + "_marker"]);
    }
    else {
        dc_photo_ops_group.push(window["dc_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        dc_collectibles_group.push(window["dc_collectible0" + i + "_marker"]);
    }
    else {
        dc_collectibles_group.push(window["dc_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(dc_container_group);
markers_canvas.addMarkers(dc_events_group);
markers_canvas.addMarkers(dc_collectibles_group);
markers_canvas.addMarkers(dc_photo_ops_group);
markers_canvas.addMarkers(dc_feats_group);