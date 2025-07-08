var ha_container_icon = L.icon({
    iconUrl: 'img/HA/ha_container.png',
    iconSize: [68, 75],
    iconAnchor: [34,75],
    popupAnchor: [0,-60],
});

var ha_event_icon = L.icon({
    iconUrl: 'img/HA/ha_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

ha_container_group = [];
ha_events_group = [];
ha_photo_ops_group = [];
ha_feats_group = [];
ha_collectibles_group = [];

//CONTAINER
ha_container_marker = L.marker([2151.373031, 2998.375], {icon:ha_container_icon});
ha_container_marker.bindPopup('<b>Hollywood Action!</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
ha_event01_marker = L.marker([2041.533985, 3005.027043], {icon:ha_event_icon});
ha_event01_marker.bindPopup("<b style=\"font-size:20px\">Scene 1: The Driver</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Video Lane</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Mini Cooper S</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
ha_event02_marker = L.marker([1616.83916, 2700.175632], {icon:ha_event_icon});
ha_event02_marker.bindPopup("<b style=\"font-size:20px\">Scene 2: The Test</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Dodge Challenger R/T</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 03
ha_event03_marker = L.marker([1307.177338, 2540.59235], {icon:ha_event_icon});
ha_event03_marker.bindPopup("<b style=\"font-size:20px\">Scene 3: The First Job</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Video Lane</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Motocross</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
ha_event04_marker = L.marker([1335.508402, 2101.625], {icon:ha_event_icon});
ha_event04_marker.bindPopup("<b style=\"font-size:20px\">Scene 4: The Ascent</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ferrari 308 GTS</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 05
ha_event05_marker = L.marker([1432.128972, 1969.5], {icon:ha_event_icon});
ha_event05_marker.bindPopup("<b style=\"font-size:20px\">Scene 5: The Race</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ariel Nomad</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
ha_event06_marker = L.marker([1365.884527, 1673.625], {icon:ha_event_icon});
ha_event06_marker.bindPopup("<b style=\"font-size:20px\">Scene 6: The Heist</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Video Lane</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Shelby GT 500</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
ha_event07_marker = L.marker([2273.717298, 1933.406716], {icon:ha_event_icon});
ha_event07_marker.bindPopup("<b style=\"font-size:20px\">Scene 7: The Love Story</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Porsche 550 Spyder</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 08
ha_event08_marker = L.marker([1545.934554, 2644.66775], {icon:ha_event_icon});
ha_event08_marker.bindPopup("<b style=\"font-size:20px\">Scene 8: The Getaway</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 09
ha_event09_marker = L.marker([2010.106052, 2464.75], {icon:ha_event_icon});
ha_event09_marker.bindPopup("<b style=\"font-size:20px\">The Premiere</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hollywood Action!(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Ivory Tower Aezus</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var HAfeatsArr = [[2108.551126, 3088.370878, "bullseye", "Kaneohe", "Bullseye", "6,320 PTS", "4,800", "9,000"],  //Feat 01
                  [2100.859569, 3536.594566, "slalom", "Mokapu", "Slalom", "4,970 PTS", "2,880", "5,400"],  //Feat 02
                  [1374.20612, 3083.356931, "escape", "Makiki", "Escape", "1270 m", "1,440", "2,700"],  //Feat 03
                  [1487.784616, 2364.034746, "speedtrap", "Kaka'ako", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 04
                 ]

function createHAFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["ha_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["ha_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Movie Award Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Hollywood Action!</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createHAFeatsMarkers(HAfeatsArr);

//PHOTO OPS
//Photo Ops 1 Movie Award Views - Rooftop
ha_photo_ops01_marker = L.marker([1433.64205, 2765.75], {icon:photo_op_icon});
ha_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Movie Award Views - Rooftop</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hollywood Action!</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Mini Cooper S 1969</span><br>\
                              <span>- Edge of the Kakaako Center Rooftop</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Movie Award Views - Canals
ha_photo_ops02_marker = L.marker([2004.844021, 3053.463858], {icon:photo_op_icon});
ha_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Movie Award Views - Canals</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hollywood Action!</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Motocross Bike</span><br>\
                              <span>- Kaneohe Canals</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Movie Award Views - High Point
ha_photo_ops03_marker = L.marker([1591.516101, 1841], {icon:photo_op_icon});
ha_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Movie Award Views - High Point</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hollywood Action!</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Chevrolet Impala</span><br>\
                              <span>- Jump from the highest cliff</span><br>\
                              <span>- Afternoon</span><br>\
                              <span>- Makakilo River</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Movie Award Views - Koko Crater
ha_photo_ops04_marker = L.marker([1415.396387, 3819.141294], {icon:photo_op_icon});
ha_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Movie Award Views - Koko Crater</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hollywood Action!</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 1 vehicle</span><br>\
                              <span>- House</span><br>\
                              <span>- Dusk</span><br>\
                              <span>- Entrance of Koko Crater</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Movie Award Views - Waikiki Shell
ha_photo_ops05_marker = L.marker([1234.869905, 3010.329161], {icon:photo_op_icon});
ha_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Movie Award Views - Waikiki Shell</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hollywood Action!</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Aston Martin DB5</span><br>\
                              <span>- Movie Poster</span><br>\
                              <span>- parking lot side of the Waikiki Shell</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Focus Puller Movie Award
//Collectible 1 Focus Puller Movie Award
ha_collectible01_marker = L.marker([1839.512339, 3000.5], {icon:collectible_icon});
ha_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Focus Puller Movie Award
ha_collectible02_marker = L.marker([1657.00675, 3657], {icon:collectible_icon});
ha_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Focus Puller Movie Award
ha_collectible03_marker = L.marker([1410.762409, 3002.625], {icon:collectible_icon});
ha_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Focus Puller Movie Award
ha_collectible04_marker = L.marker([1337.701923, 1765.380468], {icon:collectible_icon});
ha_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Focus Puller Movie Award
ha_collectible05_marker = L.marker([1337.138499, 1623.625], {icon:collectible_icon});
ha_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Focus Puller Movie Award
ha_collectible06_marker = L.marker([1433.261249, 1587.375], {icon:collectible_icon});
ha_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Focus Puller Movie Award
ha_collectible07_marker = L.marker([1902.145436, 1979.137941], {icon:collectible_icon});
ha_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Focus Puller Movie Award
ha_collectible08_marker = L.marker([2391.501476, 2092.875], {icon:collectible_icon});
ha_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Hollywood Action!</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Focus Puller Movie Award</span><br>", {
    className: "hstPopup"
});

ha_container_group.push(ha_container_marker);

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        ha_events_group.push(window["ha_event0" + i + "_marker"]);
    }
    else {
        ha_events_group.push(window["ha_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 3; i++) {
    ha_feats_group.push(window["ha_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        ha_photo_ops_group.push(window["ha_photo_ops0" + i + "_marker"]);
    }
    else {
        ha_photo_ops_group.push(window["ha_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 8; i++) {
    if(i < 10) {
        ha_collectibles_group.push(window["ha_collectible0" + i + "_marker"]);
    }
    else {
        ha_collectibles_group.push(window["ha_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(ha_container_group);
markers_canvas.addMarkers(ha_events_group);
markers_canvas.addMarkers(ha_collectibles_group);
markers_canvas.addMarkers(ha_photo_ops_group);
markers_canvas.addMarkers(ha_feats_group);