var eo_container_icon = L.icon({
    iconUrl: 'img/EleOdy/eo_container.png',
    iconSize: [75, 75],
    iconAnchor: [37.5,75],
    popupAnchor: [0,-60],
});

var eo_event_icon = L.icon({
    iconUrl: 'img/EleOdy/eo_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

eo_container_group = [];
eo_events_group = [];
eo_photo_ops_group = [];
eo_feats_group = [];
eo_collectibles_group = [];

//CONTAINER
eo_container_marker = L.marker([1583.010687, 2251.125], {icon:eo_container_icon});
eo_container_marker.bindPopup('<b>Electric Odyssey</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
eo_event01_marker = L.marker([1668.775235, 2328.856184], {icon:eo_event_icon});
eo_event01_marker.bindPopup("<b style=\"font-size:20px\">Porsche E-xpress</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Delivery</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Porsche Taycan Turbo S</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
eo_event02_marker = L.marker([1222.9548, 3115.512478], {icon:eo_event_icon});
eo_event02_marker.bindPopup("<b style=\"font-size:20px\">Piece Of E-story</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Porsche Taycan Turbo S</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 03
eo_event03_marker = L.marker([1670.365778, 2332.303329], {icon:eo_event_icon});
eo_event03_marker.bindPopup("<b style=\"font-size:20px\">Lotus E-xpress</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Delivery</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Lotus Evija</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
eo_event04_marker = L.marker([824.25659, 2387.634435], {icon:eo_event_icon});
eo_event04_marker.bindPopup("<b style=\"font-size:20px\">Hyper E-volution</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Lotus Evija</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 05
eo_event05_marker = L.marker([1665.505786, 2326.116145], {icon:eo_event_icon});
eo_event05_marker.bindPopup("<b style=\"font-size:20px\">Hummer E-xpress</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Delivery</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> GMC Hummer EV</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
eo_event06_marker = L.marker([1649.863758, 1637.128975], {icon:eo_event_icon});
eo_event06_marker.bindPopup("<b style=\"font-size:20px\">E-xplorers</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> GMC Hummer EV</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 07
eo_event07_marker = L.marker([1157.595696, 1808.248816], {icon:eo_event_icon});
eo_event07_marker.bindPopup("<b style=\"font-size:20px\">Final E-vent</b><br>\
                              <i>Event</i><br>\
                              <span><b>Electric Odyssey(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var EOfeatsArr = [[1091.421251, 2270.196383, "escape", "Waipio Fields", "Escape", "1340 m", "2,880", "5,400"],  //Feat 01
                  [1104.15753, 2077.037781, "slalom", "Kunia Farm", "Slalom", "6,480 PTS", "2,880", "5,400"],  //Feat 02
                  [1092.636601, 1790.875, "escape", "Nanakuli Rivers", "Escape", "2100 m", "2,880", "5,400"],  //Feat 03
                  [1618.384878, 2239.125, "speedtrap", "Wahiawa", "Speedtrap", "190.0 km/h", "960", "1,800"],  //Feat 04
                  [1652.255537, 1615.8125, "escape", "Mauna Pele Red Hill", "Escape", "760 m", "2,880", "5,400"],  //Feat 05
                  [2061.250527, 2053.0625, "slalom", "Haleiwa Fields", "Slalom", "8,940 PTS", "2,880", "5,400"],  //Feat 06
                 ]

function createEOFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["eo_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["eo_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">E-Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Electric Odyssey</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createEOFeatsMarkers(EOfeatsArr);

//PHOTO OPS
//Photo Ops 1 E-Views - Wind Turbines
eo_photo_ops01_marker = L.marker([965.946343, 2207.233817], {icon:photo_op_icon});
eo_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">E-Views - Wind Turbines</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Electric Odyssey</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche Taycan Turbo S</span><br>\
                              <span>- Water Tank Graffiti</span><br>\
                              <span>- near the wind turbines at Waipio Fields</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 E-Views - Water Tank
eo_photo_ops02_marker = L.marker([1286.838148, 1941.184891], {icon:photo_op_icon});
eo_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">E-Views - Water Tank</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Electric Odyssey</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- GMC Hummer EV</span><br>\
                              <span>- Water Tank Graffiti</span><br>\
                              <span>- southwest of the Japanese Jodo</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 E-Views - Observatory
eo_photo_ops03_marker = L.marker([1118.276717, 1566.25], {icon:photo_op_icon});
eo_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">E-Views - Observatory</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Electric Odyssey</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche Taycan Turbo S</span><br>\
                              <span>- Mauna Pele observatory</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 E-Views - Sulphur Chimneys
eo_photo_ops04_marker = L.marker([1362.458026, 1682.75], {icon:photo_op_icon});
eo_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">E-Views - Sulphur Chimneys</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Electric Odyssey</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- GMC Hummer EV</span><br>\
                              <span>- easternmost Sulphur chimney</span><br>\
                              <span>- Mauna Pele Sulphur Banks</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//E-nergy
//Collectible 1 E-nergy
eo_collectible01_marker = L.marker([2383.653131, 2416.360648], {icon:collectible_icon});
eo_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 2 E-nergy
eo_collectible02_marker = L.marker([2192.938502, 2083.6875], {icon:collectible_icon});
eo_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 3 E-nergy
eo_collectible03_marker = L.marker([1585.941174, 2265.0625], {icon:collectible_icon});
eo_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 4 E-nergy
eo_collectible04_marker = L.marker([1360.194285, 2369], {icon:collectible_icon});
eo_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 5 E-nergy
eo_collectible05_marker = L.marker([1018.772499, 2317.5], {icon:collectible_icon});
eo_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 6 E-nergy
eo_collectible06_marker = L.marker([962.75733, 2090.9375], {icon:collectible_icon});
eo_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 7 E-nergy
eo_collectible07_marker = L.marker([729.757154, 2406.5625], {icon:collectible_icon});
eo_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

//Collectible 8 E-nergy
eo_collectible08_marker = L.marker([547.580828, 1795.520894], {icon:collectible_icon});
eo_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Electric Odyssey</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> E-nergy</span><br>", {
    className: "hstPopup"
});

eo_container_group.push(eo_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        eo_events_group.push(window["eo_event0" + i + "_marker"]);
    }
    else {
        eo_events_group.push(window["eo_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 5; i++) {
    eo_feats_group.push(window["eo_feat" + i + "_marker"]);
}

for(var i = 1; i <= 4; i++) {
    if(i < 10) {
        eo_photo_ops_group.push(window["eo_photo_ops0" + i + "_marker"]);
    }
    else {
        eo_photo_ops_group.push(window["eo_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 8; i++) {
    if(i < 10) {
        eo_collectibles_group.push(window["eo_collectible0" + i + "_marker"]);
    }
    else {
        eo_collectibles_group.push(window["eo_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(eo_container_group);
markers_canvas.addMarkers(eo_events_group);
markers_canvas.addMarkers(eo_collectibles_group);
markers_canvas.addMarkers(eo_photo_ops_group);
markers_canvas.addMarkers(eo_feats_group);