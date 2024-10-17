var mij_container_icon = L.icon({
    iconUrl: 'img/MIJ/mij_container.png',
    iconSize: [55, 75],
    iconAnchor: [27.5,75],
    popupAnchor: [0,-60],
});

var mij_event_icon = L.icon({
    iconUrl: 'img/MIJ/mij_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

mij_container_group = [];
mij_events_group = [];
mij_photo_ops_group = [];
mij_feats_group = [];
mij_collectibles_group = [];

//Container
mij_container_marker = L.marker([1302.023957, 3166.9375], {icon:mij_container_icon});
mij_container_marker.bindPopup('<b>Made in Japan</b><br>\
                                <i>Container</i>', {
    className: "hstPopup"
})

//Events
//Event 01
mij_event01_marker = L.marker([1261.499086, 2980.375], {icon:mij_event_icon});
mij_event01_marker.bindPopup("<b style=\"font-size:20px\">Kyusha Spirit</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Honda NSX</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
mij_event02_marker = L.marker([1178.360157, 3300.644348], {icon:mij_event_icon});
mij_event02_marker.bindPopup("<b style=\"font-size:20px\">Wangan Spirit</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Nissan Skyline GT-R (R34)</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
mij_event03_marker = L.marker([845.040678, 3395.880317], {icon:mij_event_icon});
mij_event03_marker.bindPopup("<b style=\"font-size:20px\">Touge Spirit</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Mazda RX7</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 04
mij_event04_marker = L.marker([604.337828, 2455.875], {icon:mij_event_icon});
mij_event04_marker.bindPopup("<b style=\"font-size:20px\">Ebisu Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Mazda RX7</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 05
mij_event05_marker = L.marker([486.95271, 2435.010589], {icon:mij_event_icon});
mij_event05_marker.bindPopup("<b style=\"font-size:20px\">Zeroyon Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drag Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Nissan Skyline GT-R (R34)</span><br>\
                              <span><b>Category:</b> Dragster</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
mij_event06_marker = L.marker([569.321535, 2795.75], {icon:mij_event_icon});
mij_event06_marker.bindPopup("<b style=\"font-size:20px\">Kanjo Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Mitsubishi Lancer Evolution X Black Knight Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 07
mij_event07_marker = L.marker([565.817808, 2828.25], {icon:mij_event_icon});
mij_event07_marker.bindPopup("<b style=\"font-size:20px\">Shinjuku Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Toyota Supra Ryūjin Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Feats
var MIJfeatsArr = [[512.404716, 2365.481603, "speedtrap", "Oahu Airport", "Speedtrap", "210.0 km/h", "960", "1,800"],  //Feat 01
                [589.323626, 2685.3125, "speedtrap", "Moana Center", "Speedtrap", "210.0 km/h", "960", "1,800"],  //Feat 02
                [795.628761, 2955, "slalom", "Manoa Laces", "Slalom", "4,040 PTS", "2,880", "5,400"],  //Feat 03
                [507.885634, 3700.0625, "slalom", "Hanauma Bay", "Slalom", "5,640 PTS", "2,880", "5,400"],  //Feat 04
                [1025.830564, 2923.444598, "escape", "Manoa Canyon", "Escape", "880 m", "2,880", "5,400"],  //Feat 05
                [1233.438203, 3165.125, "speedtrap", "Kaneohe", "Speedtrap", "130.0 km/h", "960", "1,800"],  //Feat 06
               ]

function createMIJFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["mij_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["mij_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Nihon No Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Made in Japan</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createMIJFeatsMarkers(MIJfeatsArr);

//Photo Ops
//Photo Ops 1 Nihon No Views - Temple
mij_photo_ops01_marker = L.marker([1229.670028, 2952.701142], {icon:photo_op_icon});
mij_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Nihon No Views - Temple</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Night</span><br>\
                              <span>- Japanese Temple</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Nihon No Views - Street Art
mij_photo_ops02_marker = L.marker([654.570814, 2413.5], {icon:photo_op_icon});
mij_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Nihon No Views - Street Art</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Dawn</span><br>\
                              <span>- Dragon Wave graffiti</span><br>\
                              <span>- Container area of Kaka'ako</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Nihon No Views - Waikiki Market
mij_photo_ops03_marker = L.marker([550.00689, 2855.75], {icon:photo_op_icon});
mij_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Nihon No Views - Waikiki Market</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Night</span><br>\
                              <span>- Waikiki Market</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Nihon No Views - Ryūjin
mij_photo_ops04_marker = L.marker([1411.393413, 1998.902482], {icon:photo_op_icon});
mij_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Nihon No Views - Ryūjin</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Toyota Supra Ryūjin Edition</span><br>\
                              <span>- Night</span><br>\
                              <span>- Japanese Jodo near Schofield Barracks</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Nihon No Views - Shrimp
mij_photo_ops05_marker = L.marker([2085.806436, 2018.25], {icon:photo_op_icon});
mij_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Nihon No Views - Shrimp</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Dusk</span><br>\
                              <span>- Big Shrimp of Haleiwa</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Nihon No Fire
//Collectible 1 Nihon No Fire
mij_collectible01_marker = L.marker([813.645407, 3218.1875], {icon:collectible_icon});
mij_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Nihon No Fire</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Nihon No Fire
mij_collectible02_marker = L.marker([598.890222, 1761.4375], {icon:collectible_icon});
mij_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Nihon No Fire</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Nihon No Fire
mij_collectible03_marker = L.marker([1213.37449, 2956.5625], {icon:collectible_icon});
mij_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Nihon No Fire</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Nihon No Fire
mij_collectible04_marker = L.marker([1633.315649, 2256.112574], {icon:collectible_icon});
mij_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Nihon No Fire</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Nihon No Fire
mij_collectible05_marker = L.marker([1414.443722, 2011.3125], {icon:collectible_icon});
mij_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Nihon No Fire</span><br>", {
    className: "hstPopup"
});

mij_container_group.push(mij_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        mij_events_group.push(window["mij_event0" + i + "_marker"]);
    }
    else {
        mij_events_group.push(window["mij_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 5; i++) {
    mij_feats_group.push(window["mij_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        mij_photo_ops_group.push(window["mij_photo_ops0" + i + "_marker"]);
    }
    else {
        mij_photo_ops_group.push(window["mij_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        mij_collectibles_group.push(window["mij_collectible0" + i + "_marker"]);
    }
    else {
        mij_collectibles_group.push(window["mij_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(mij_container_group);
markers_canvas.addMarkers(mij_events_group);
markers_canvas.addMarkers(mij_collectibles_group);
markers_canvas.addMarkers(mij_photo_ops_group);
markers_canvas.addMarkers(mij_feats_group);