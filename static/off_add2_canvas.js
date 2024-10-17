var oa2_container_icon = L.icon({
    iconUrl: 'img/OffAdd2/oa2_container.png',
    iconSize: [52, 75],
    iconAnchor: [26,75],
    popupAnchor: [0,-60],
});

var oa2_event_icon = L.icon({
    iconUrl: 'img/OffAdd2/oa2_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

oa2_container_group = [];
oa2_events_group = [];
oa2_photo_ops_group = [];
oa2_feats_group = [];
oa2_collectibles_group = [];

//CONTAINER
oa2_container_marker = L.marker([2041.95944, 1561.114996], {icon:oa2_container_icon});
oa2_container_marker.bindPopup('<b>Off-roading Addict Vol.2</b><br>\
                            <i>Container</i>', {
                        className: "hstPopup"
});

//EVENTS
//Event 01
oa2_event01_marker = L.marker([1822.767026, 1776.782564], {icon:oa2_event_icon});
oa2_event01_marker.bindPopup("<b style=\"font-size:20px\">Life Of Pierce</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ivory Tower IVT Falcon S-1000 Adventure Edition</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
oa2_event02_marker = L.marker([1835.636706, 1556.375], {icon:oa2_event_icon});
oa2_event02_marker.bindPopup("<b style=\"font-size:20px\">Jungle Bruise</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Land Rover Defender Works V8 Pierce Edition</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 03
oa2_event03_marker = L.marker([2251.257106, 2630.967556], {icon:oa2_event_icon});
oa2_event03_marker.bindPopup("<b style=\"font-size:20px\">Blue Rush</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Peugeot 3008 DKR Maxi</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
oa2_event04_marker = L.marker([2074.080852, 1891.176038], {icon:oa2_event_icon});
oa2_event04_marker.bindPopup("<b style=\"font-size:20px\">Wetter World</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Jeep Wrangler Unlimited Rubicon 392</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 05
oa2_event05_marker = L.marker([1385.913295, 2789.285288], {icon:oa2_event_icon});
oa2_event05_marker.bindPopup("<b style=\"font-size:20px\">Boyz N The Mud</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> KTM 450 EXC Nighthawk Edition</span><br>\
                              <span><b>Category:</b> Motocross</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
oa2_event06_marker = L.marker([1154.731605, 3545.769664], {icon:oa2_event_icon});
oa2_event06_marker.bindPopup("<b style=\"font-size:20px\">The Goats And The Darkness</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Jeep Gladiator</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
oa2_event07_marker = L.marker([881.970517, 3094.316913], {icon:oa2_event_icon});
oa2_event07_marker.bindPopup("<b style=\"font-size:20px\">The KTM Strikes Back... Again</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> KTM 450 EXC</span><br>\
                              <span><b>Category:</b> Motocross</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 08
oa2_event08_marker = L.marker([1044.832538, 1589.189113], {icon:oa2_event_icon});
oa2_event08_marker.bindPopup("<b style=\"font-size:20px\">Big Trouble In Little Mauna</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Hummer HX Concept</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 09
oa2_event09_marker = L.marker([2263.195075, 2235.114773], {icon:oa2_event_icon});
oa2_event09_marker.bindPopup("<b style=\"font-size:20px\">Green Planet</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict Vol.2(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Live Event</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Audi S1 EKS RX Quattro</span><br>\
                              <span><b>Category:</b> Rally</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var OA2featsArr = [[2294.389239, 2131.462189, "escape", "Waimea", "Escape", "390 m", "2,880", "5,400"],  //Feat 01
                   [1838.320591, 2416.007095, "escape", "Wahiawa Edge", "Escape", "520 m", "2,880", "5,400"],  //Feat 02
                   [1770.249135, 2792.629844, "speedtrap", "Hindu Monastery", "Speedtrap", "150.0 km/h", "960", "1,800"],  //Feat 03
                   [819.388867, 3206.198923, "slalom", "Waimanalo Road", "Slalom", "4,850 PTS", "2,880", "5,400"],  //Feat 04
                   [843.227326, 2032.446636, "speedtrap", "Mililani Waipio", "Speedtrap", "140.0 km/h", "960", "1,800"],  //Feat 05
                   [1890.053782, 1324.25, "slalom", "Kuaokala Meadows", "Slalom", "4,960 PTS", "1,920", "3,600"],  //Feat 06
                  ]

function createOA2FeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["oa2_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["oa2_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Wilder Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Off-roading Addict Vol.2</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createOA2FeatsMarkers(OA2featsArr);

//PHOTO OPS
//Photo Ops 1 Wilder Views - Kuapa River Gorge
oa2_photo_ops01_marker = L.marker([783.515679, 3538.75], {icon:photo_op_icon});
oa2_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Wilder Views - Kuapa River Gorge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Jeep Wrangler 392 Unlimited Edition</span><br>\
                              <span>- Drift</span><br>\
                              <span>- Sunset</span><br>\
                              <span>- Kuapa River Gorge</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Wilder Views - Makaleha River Gorge
oa2_photo_ops02_marker = L.marker([1957.428237, 1411.11997], {icon:photo_op_icon});
oa2_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Wilder Views - Makaleha River Gorge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid vehicle</span><br>\
                              <span>- Dusk</span><br>\
                              <span>- Makaleha River Gorge</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Wilder Views - Peacock River Gorge
oa2_photo_ops03_marker = L.marker([1833.50581, 1644.730373], {icon:photo_op_icon});
oa2_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Wilder Views - Peacock River Gorge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally vehicle</span><br>\
                              <span>- Burnout</span><br>\
                              <span>- Morning</span><br>\
                              <span>- Peacock River Gorge</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Wilder Views - Makakilo River Gorge
oa2_photo_ops04_marker = L.marker([847.651084, 1844], {icon:photo_op_icon});
oa2_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Wilder Views - Makakilo River Gorge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Motocross</span><br>\
                              <span>- Wheelie</span><br>\
                              <span>- Makakilo River Gorge</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Wilder Views - Nanakuli River Gorge
oa2_photo_ops05_marker = L.marker([885.68331, 1706.602216], {icon:photo_op_icon});
oa2_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Wilder Views - Nanakuli River Gorge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Motocross</span><br>\
                              <span>- Burnout</span><br>\
                              <span>- Nanakuli River Gorge</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Wilder Views - Manoa Canyon
oa2_photo_ops06_marker = L.marker([1006.58624, 2923.35621], {icon:photo_op_icon});
oa2_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Wilder Views - Manoa Canyon</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid vehicle</span><br>\
                              <span>- Midday</span><br>\
                              <span>- Manoa Canyon</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Wilder Fauna
//Collectible 1 Wilder Fauna
oa2_collectible01_marker = L.marker([738.262163, 3533.375], {icon:collectible_icon});
oa2_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Fauna</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Wilder Fauna
oa2_collectible02_marker = L.marker([2134.37726, 2301.279019], {icon:collectible_icon});
oa2_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Fauna</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Wilder Fauna
oa2_collectible03_marker = L.marker([1588.185594, 1730.46707], {icon:collectible_icon});
oa2_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Fauna</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Wilder Fauna
oa2_collectible04_marker = L.marker([1409.317806, 1413.152902], {icon:collectible_icon});
oa2_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Fauna</span><br>", {
    className: "hstPopup"
});

//Wilder Supply Shortages
//Collectible 1 Wilder Supply Shortages
oa2_collectible05_marker = L.marker([1263.525241, 3566.75], {icon:collectible_icon});
oa2_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Supply Shortages</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Wilder Supply Shortages
oa2_collectible06_marker = L.marker([2361.374445, 2382.596299], {icon:collectible_icon});
oa2_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Supply Shortages</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Wilder Supply Shortages
oa2_collectible07_marker = L.marker([2408.874508, 2187.75], {icon:collectible_icon});
oa2_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Supply Shortages</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Wilder Supply Shortages
oa2_collectible08_marker = L.marker([1872.148448, 1504.25], {icon:collectible_icon});
oa2_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wilder Supply Shortages</span><br>", {
    className: "hstPopup"
});

oa2_container_group.push(oa2_container_marker);

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        oa2_events_group.push(window["oa2_event0" + i + "_marker"]);
    }
    else {
        oa2_events_group.push(window["oa2_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 5; i++) {
    oa2_feats_group.push(window["oa2_feat" + i + "_marker"]);
}

for(var i = 1; i <= 6; i++) {
    if(i < 10) {
        oa2_photo_ops_group.push(window["oa2_photo_ops0" + i + "_marker"]);
    }
    else {
        oa2_photo_ops_group.push(window["oa2_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 8; i++) {
    if(i < 10) {
        oa2_collectibles_group.push(window["oa2_collectible0" + i + "_marker"]);
    }
    else {
        oa2_collectibles_group.push(window["oa2_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(oa2_container_group);
markers_canvas.addMarkers(oa2_events_group);
markers_canvas.addMarkers(oa2_collectibles_group);
markers_canvas.addMarkers(oa2_photo_ops_group);
markers_canvas.addMarkers(oa2_feats_group);