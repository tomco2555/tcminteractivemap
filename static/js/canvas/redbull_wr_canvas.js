var rb2_container_icon = L.icon({
    iconUrl: 'img/RedBull_WR/rb2_container.png',
    iconSize: [81, 75],
    iconAnchor: [40.5,75],
    popupAnchor: [0,-60],
});

var rb2_event_icon = L.icon({
    iconUrl: 'img/RedBull_WR/rb2_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

rb2_container_group = [];
rb2_events_group = [];
rb2_photo_ops_group = [];
rb2_feats_group = [];
rb2_collectibles_group = [];

//CONTAINER
rb2_container_marker = L.marker([721.719568, 5313.834672], {icon:rb2_container_icon});
rb2_container_marker.bindPopup('<b>Red Bull Wild Ride</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
rb2_event01_marker = L.marker([747.247696, 5331.913945], {icon:rb2_event_icon});
rb2_event01_marker.bindPopup("<b style=\"font-size:20px\">Dealing The Cards</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Audi RS Q e-tron</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
rb2_event02_marker = L.marker([1270.661615, 5179.294288], {icon:rb2_event_icon});
rb2_event02_marker.bindPopup("<b style=\"font-size:20px\">The Queen</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Action List</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Fiesta Red Bull Ed.</span><br>\
                              <span><b>Category:</b> Rally</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">37,500</span></span><br>", {
    className: "hstPopup"
});

//Event 03
rb2_event03_marker = L.marker([843.436605, 4667.816001], {icon:rb2_event_icon});
rb2_event03_marker.bindPopup("<b style=\"font-size:20px\">Straight Rush</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Proto WR1</span><br>\
                              <span><b>Category:</b> Powerboat</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//Event 04
rb2_event04_marker = L.marker([1568.124051, 5459], {icon:rb2_event_icon});
rb2_event04_marker.bindPopup("<b style=\"font-size:20px\">The Joker</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Action List</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> KTM 450 EXC Robbie Maddison Ed.</span><br>\
                              <span><b>Category:</b> Motocross</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 05
rb2_event05_marker = L.marker([1448.698193, 5263.702879], {icon:rb2_event_icon});
rb2_event05_marker.bindPopup("<b style=\"font-size:20px\">M4 Of A Kind</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> BMW M4 Red Bull Driftbrothers</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 06
rb2_event06_marker = L.marker([374.270518, 5235.065055], {icon:rb2_event_icon});
rb2_event06_marker.bindPopup("<b style=\"font-size:20px\">The Ace</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Action List</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Red Bull RB18</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 07
rb2_event07_marker = L.marker([578.79315, 4946.565488], {icon:rb2_event_icon});
rb2_event07_marker.bindPopup("<b style=\"font-size:20px\">Full House</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Wild Ride(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Action List</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Motocross</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var RB2featsArr = [[621.574632, 4932.069799, "bullseye", "Wailea", "Bullseye", "4,690 PTS", "4,000", "7,500"],  //Feat 01
                  [708.025873, 4616, "slalom", "Kalohi Islets", "Slalom", "4,150 PTS", "2,400", "4,500"],  //Feat 02
                  [1663.105654, 4918.281217, "long_jump", "Kahoma Falls", "Long Jump", "380 m", "1,600", "3,000"],  //Feat 03
                  [617.278967, 5471.75, "low_altitude", "RB Playground", "Low Altitude", "4,380 PTS", "2,400", "4,500"],  //Feat 04
                  [1327.252039, 5343, "long_jump", "Chase Squad HQ", "Long Jump", "310 m", "1,600", "3,000"],  //Feat 05
                 ]

function createRB2FeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["rb2_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["rb2_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Bold Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Red Bull Wild Ride</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createRB2FeatsMarkers(RB2featsArr);

//PHOTO OPS
//Photo Ops 1 Bold Views - Maui Big Hands
rb2_photo_ops01_marker = L.marker([846.443805, 4971.314225], {icon:photo_op_icon});
rb2_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Bold Views - Maui Big Hands</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Wild Ride</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Audi RS Q e-tron</span><br>\
                              <span>- Maui Big Hands</span><br>\
                              <span>- north of Kihei Beach</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Bold Views - Maui Big Pyramid
rb2_photo_ops02_marker = L.marker([1603.256539, 4966.75], {icon:photo_op_icon});
rb2_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Bold Views - Maui Big Pyramid</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Wild Ride</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- KTM 450 EXC Robbie Maddison Ed.</span><br>\
                              <span>- Maui Big Pyramid</span><br>\
                              <span>- Iao Lake</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Bold Views - Maui Big Whales
rb2_photo_ops03_marker = L.marker([257.53642, 5280.25], {icon:photo_op_icon});
rb2_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Bold Views - Maui Big Whales</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Wild Ride</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Audi RS Q e-tron</span><br>\
                              <span>- Maui Big Whales</span><br>\
                              <span>- Ahihi Kinau</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Bold Explorer
//Collectible 1 Bold Explorer
rb2_collectible01_marker = L.marker([402.75518, 4681.400445], {icon:collectible_icon});
rb2_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Bold Explorer
rb2_collectible02_marker = L.marker([176.856041, 5690.088268], {icon:collectible_icon});
rb2_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Bold Explorer
rb2_collectible03_marker = L.marker([260.59126, 5096.5], {icon:collectible_icon});
rb2_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Bold Explorer
rb2_collectible04_marker = L.marker([1199.592774, 6036.795365], {icon:collectible_icon});
rb2_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Bold Explorer
rb2_collectible05_marker = L.marker([1366.060703, 5972.046341], {icon:collectible_icon});
rb2_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Bold Explorer
rb2_collectible06_marker = L.marker([1406.44868, 5664.698701], {icon:collectible_icon});
rb2_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Bold Explorer
rb2_collectible07_marker = L.marker([1884.888846, 5260.160371], {icon:collectible_icon});
rb2_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Bold Explorer
rb2_collectible08_marker = L.marker([2036.723719, 4709.019925], {icon:collectible_icon});
rb2_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Wild Ride</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Bold Explorer</span><br>", {
    className: "hstPopup"
});

rb2_container_group.push(rb2_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        rb2_events_group.push(window["rb2_event0" + i + "_marker"]);
    }
    else {
        rb2_events_group.push(window["rb2_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 4; i++) {
    rb2_feats_group.push(window["rb2_feat" + i + "_marker"]);
}

for(var i = 1; i <= 3; i++) {
    if(i < 10) {
        rb2_photo_ops_group.push(window["rb2_photo_ops0" + i + "_marker"]);
    }
    else {
        rb2_photo_ops_group.push(window["rb2_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 8; i++) {
    if(i < 10) {
        rb2_collectibles_group.push(window["rb2_collectible0" + i + "_marker"]);
    }
    else {
        rb2_collectibles_group.push(window["rb2_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(rb2_container_group);
markers_canvas.addMarkers(rb2_events_group);
markers_canvas.addMarkers(rb2_collectibles_group);
markers_canvas.addMarkers(rb2_photo_ops_group);
markers_canvas.addMarkers(rb2_feats_group);