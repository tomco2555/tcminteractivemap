var al_container_icon = L.icon({
    iconUrl: 'img/AL/al_container.png',
    iconSize: [55, 75],
    iconAnchor: [27.5,75],
    popupAnchor: [0,-60],
});

var al_event_icon = L.icon({
    iconUrl: 'img/AL/al_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

al_container_group = [];
al_events_group = [];
al_photo_ops_group = [];
al_feats_group = [];
al_collectibles_group = [];

//CONTAINER
al_container_marker = L.marker([378.408662, 3047.541839], {icon:al_container_icon});
al_container_marker.bindPopup('<b>Automobili Lamborghini</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
al_event01_marker = L.marker([1299.127285, 3038.25], {icon:al_event_icon});
al_event01_marker.bindPopup("<b style=\"font-size:20px\">Creating A Legend</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Lamborghini Miura SV</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
al_event02_marker = L.marker([1746.18017, 2968.8125], {icon:al_event_icon});
al_event02_marker.bindPopup("<b style=\"font-size:20px\">Designing History</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Lamborghini Countach LP 5000 Quattrovalvole</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
al_event03_marker = L.marker([2131.72454, 1940.654561], {icon:al_event_icon});
al_event03_marker.bindPopup("<b style=\"font-size:20px\">Chasing The Future</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Lamborghini Diablo GT</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
al_event04_marker = L.marker([2027.098986, 1450], {icon:al_event_icon});
al_event04_marker.bindPopup("<b style=\"font-size:20px\">Trailblazing Forever</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Lamborghini Huracán LP610-4</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 05
al_event05_marker = L.marker([626.121975, 2134.932149], {icon:al_event_icon});
al_event05_marker.bindPopup("<b style=\"font-size:20px\">Powering Through</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Lamborghini Urus</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 06
al_event06_marker = L.marker([667.403908, 2153.228537], {icon:al_event_icon});
al_event06_marker.bindPopup("<b style=\"font-size:20px\">Achieving Immortality</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Lamborghini Countach LPI 800-4</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
al_event07_marker = L.marker([515.131068, 3719.293281], {icon:al_event_icon});
al_event07_marker.bindPopup("<b style=\"font-size:20px\">Owning The Racetracks</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Lamborghini Essenza SCV12</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 08
al_event08_marker = L.marker([515.502285, 2987.375], {icon:al_event_icon});
al_event08_marker.bindPopup("<b style=\"font-size:20px\">Defining Perfection</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Lamborghini Sián Roadster</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 09
al_event09_marker = L.marker([734.739524, 2572.875], {icon:al_event_icon});
al_event09_marker.bindPopup("<b style=\"font-size:20px\">Going For More</b><br>\
                              <i>Event</i><br>\
                              <span><b>Automobili Lamborghini(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Lamborghini Revuelto</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var ALfeatsArr = [[630.781217, 2831.25, "speedtrap", "Convention Center", "Speedtrap", "150.0 km/h", "960", "1,800"],  //Feat 01
                  [577.033039, 2927.775628, "escape", "Ala Wai", "Escape", "450 m", "2,880", "5,400"],  //Feat 02
                  [545.448545, 3214.242262, "slalom", "Kaimuki", "Slalom", "5,120 PTS", "1,920", "3,600"],  //Feat 03
                  [1464.255695, 3033.25, "escape", "Kahaluu", "Escape", "710 m", "2,880", "5,400"],  //Feat 04
                  [2076.002777, 1590.375, "slalom", "Mokuleia Beach", "Slalom", "5,100 PTS", "2,880", "5,400"],  //Feat 05
                  [634.83176, 1515.506609, "bullseye", "Nanakuli", "Bullseye", "5,440 PTS", "3,840", "7,200"],  //Feat 06
                 ]

function createALFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["al_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["al_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">A.L. Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Automobili Lamborghini</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createALFeatsMarkers(ALfeatsArr);

//PHOTO OPS
//Photo Ops 1 A.L. Views - Street Art
al_photo_ops01_marker = L.marker([2107.119762, 2019.125], {icon:photo_op_icon});
al_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Street Art</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Miura SV</span><br>\
                              <span>- In front of the graffiti</span><br>\
                              <span>- Haleiwa</span><br>\
                              <span>- Nitro</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 A.L. Views - Rainbow Containers
al_photo_ops02_marker = L.marker([501.787063, 1800.735807], {icon:photo_op_icon});
al_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Rainbow Containers</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Street Tier 2</span><br>\
                              <span>- near the rainbow containers</span><br>\
                              <span>- Kalaeloa</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 A.L. Views - Artsy Racetrack
al_photo_ops03_marker = L.marker([556.744059, 3602.25], {icon:photo_op_icon});
al_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Artsy Racetrack</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Essenza SCV12</span><br>\
                              <span>- Drift</span><br>\
                              <span>- next to the manta rays fresca</span><br>\
                              <span>- Hanauma Racetrack</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 A.L. Views - Urban Marvels
al_photo_ops04_marker = L.marker([725.488434, 2708.875], {icon:photo_op_icon});
al_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Urban Marvels</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini</span><br>\
                              <span>- Huli mural</span><br>\
                              <span>- between the State Capitol and the National Cemetery</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 A.L. Views - Waikiki Wing Hotel
al_photo_ops05_marker = L.marker([531.510827, 2772.625], {icon:photo_op_icon});
al_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Waikiki Wing Hotel</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini car</span><br>\
                              <span>- Waikiki Wing Hotel in Honolulu</span><br>\
                              <span>- Dusk</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 A.L. Views - Swimming Pool
al_photo_ops06_marker = L.marker([2172.300917, 1782.625], {icon:photo_op_icon});
al_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Swimming Pool</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini Diablo GT Pura Potenza Edizione</span><br>\
                              <span>- next to the pool</span><br>\
                              <span>- Haleiwa Island Resort</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 A.L. Views - Hole Rock
al_photo_ops07_marker = L.marker([2179.108337, 2680.875], {icon:photo_op_icon});
al_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">A.L. Views - Hole Rock</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Automobili Lamborghini</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini</span><br>\
                              <span>- Laie Point</span><br>\
                              <span>- Hole Rock in the background</span><br>\
                              <span>- Sunrise</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//A.L. Wheels
//Collectible 1 A.L. Wheels
al_collectible01_marker = L.marker([2187.488272, 1794.052502], {icon:collectible_icon});
al_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

//Collectible 2 A.L. Wheels
al_collectible02_marker = L.marker([1591.768069, 2299.75], {icon:collectible_icon});
al_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

//Collectible 3 A.L. Wheels
al_collectible03_marker = L.marker([1247.883648, 3166.125], {icon:collectible_icon});
al_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

//Collectible 4 A.L. Wheels
al_collectible04_marker = L.marker([546.258831, 2999.546966], {icon:collectible_icon});
al_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

//Collectible 5 A.L. Wheels
al_collectible05_marker = L.marker([567.195782, 2146.687799], {icon:collectible_icon});
al_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

//Collectible 6 A.L. Wheels
al_collectible06_marker = L.marker([643.832954, 2014.989161], {icon:collectible_icon});
al_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

//Collectible 7 A.L. Wheels
al_collectible07_marker = L.marker([575.683773, 1589.841209], {icon:collectible_icon});
al_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Automobili Lamborghini</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> A.L. Wheels</span><br>", {
    className: "hstPopup"
});

al_container_group.push(al_container_marker);

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        al_events_group.push(window["al_event0" + i + "_marker"]);
    }
    else {
        al_events_group.push(window["al_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 5; i++) {
    al_feats_group.push(window["al_feat" + i + "_marker"]);
}

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        al_photo_ops_group.push(window["al_photo_ops0" + i + "_marker"]);
    }
    else {
        al_photo_ops_group.push(window["al_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        al_collectibles_group.push(window["al_collectible0" + i + "_marker"]);
    }
    else {
        al_collectibles_group.push(window["al_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(al_container_group);
markers_canvas.addMarkers(al_events_group);
markers_canvas.addMarkers(al_collectibles_group);
markers_canvas.addMarkers(al_photo_ops_group);
markers_canvas.addMarkers(al_feats_group);