var am_container_icon = L.icon({
    iconUrl: 'img/AM/am_container.png',
    iconSize: [64, 75],
    iconAnchor: [32,75],
    popupAnchor: [0,-60],
});

var am_event_icon = L.icon({
    iconUrl: 'img/AM/am_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

am_container_group = [];
am_events_group = [];
am_photo_ops_group = [];
am_feats_group = [];
am_collectibles_group = [];

//CONTAINER
am_container_marker = L.marker([1562.268069, 2303], {icon:am_container_icon});
am_container_marker.bindPopup('<b>American Muscle</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
am_event01_marker = L.marker([2442.904726, 2235.606477], {icon:am_event_icon});
am_event01_marker.bindPopup("<b style=\"font-size:20px\">Jackson V8</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Mustang GT Fastback</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
am_event02_marker = L.marker([2092.382066, 2226.3125], {icon:am_event_icon});
am_event02_marker.bindPopup("<b style=\"font-size:20px\">Vegas Strip</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drag Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Dragster</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
am_event03_marker = L.marker([2193.478998, 1982.197084], {icon:am_event_icon});
am_event03_marker.bindPopup("<b style=\"font-size:20px\">Denver RWD</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Ford Mustang GT Fastback Stunt Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 04
am_event04_marker = L.marker([2741.391554, 2814.196601], {icon:am_event_icon});
am_event04_marker.bindPopup("<b style=\"font-size:20px\">Orlando Smackdown</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Monster</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
am_event05_marker = L.marker([3138.434459, 2431.25], {icon:am_event_icon});
am_event05_marker.bindPopup("<b style=\"font-size:20px\">Tallahassee Melee</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 06
am_event06_marker = L.marker([3219.114911, 2214.625], {icon:am_event_icon});
am_event06_marker.bindPopup("<b style=\"font-size:20px\">Palm Springs Riot</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Mustang Shelby GT500</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
am_event07_marker = L.marker([2268.005818, 1768.375], {icon:am_event_icon});
am_event07_marker.bindPopup("<b style=\"font-size:20px\">Phoenix Rumble</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 08
am_event08_marker = L.marker([2129.92626, 1965.84524], {icon:am_event_icon});
am_event08_marker.bindPopup("<b style=\"font-size:20px\">Reno Roar</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Mustang Shelby GT500 Tribute Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 09
am_event09_marker = L.marker([1418.857813, 2118.84547], {icon:am_event_icon});
am_event09_marker.bindPopup("<b style=\"font-size:20px\">Detroit Finisher</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ford Mustang Boss 429</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var AMfeatsArr = [[1550.695041, 1833.6875, "escape", "Makakilo River", "Escape", "690 m", "2,880", "5,400"],  //Feat 01
                  [2055.316933, 2183.28243, "slalom", "Kunia", "Slalom", "5,510 PTS", "2,880", "5,400"],  //Feat 02
                  [2243.328411, 2097.278713, "speedtrap", "Schofield", "Speedtrap", "250.0 km/h", "960", "1,800"],  //Feat 03
                  [2645.845217, 1814.612777, "escape", "Peacock Flats", "Escape", "440 m", "1,440", "2,700"],  //Feat 04
                  [3249.991633, 2322.5, "speedtrap", "Turtle Bay Resort", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 05
                  [2882.130379, 2602.5, "slalom", "Cultural Center", "Slalom", "5,660 PTS", "2,880", "5,400"],  //Feat 06
                  [2314.893948, 2785.875, "escape", "Waiahole Forest", "Escape", "960 m", "2,880", "5,400"],  //Feat 07
                 ]

function createAMFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["am_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["am_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">American Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>American Muscle</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createAMFeatsMarkers(AMfeatsArr);

//PHOTO OPS
//Photo Ops 1 American Views - Bunkers
am_photo_ops01_marker = L.marker([1400.536982, 2153.25], {icon:photo_op_icon});
am_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">American Views - Bunkers</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>American Muscle</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford Mustang Shelby GT500 Tribute Edition</span><br>\
                              <span>- Ewa military camp</span><br>\
                              <span>- Bunkers</span><br>\
                              <span>- Hawaiian flag</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 American Views - American Flag
am_photo_ops02_marker = L.marker([2435.926708, 2268.125], {icon:photo_op_icon});
am_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">American Views - American Flag</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>American Muscle</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford</span><br>\
                              <span>- American flag</span><br>\
                              <span>- Afternoon</span><br>\
                              <span>- Wahiawa police station</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 American Views - Waimea Arch
am_photo_ops03_marker = L.marker([3182.191082, 2184.25], {icon:photo_op_icon});
am_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">American Views - Waimea Arch</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>American Muscle</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Top of natural arch</span><br>\
                              <span>- Waimea Bay</span><br>\
                              <span>- Sunrise</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 American Views - Airtime
am_photo_ops04_marker = L.marker([2475.664365, 1835], {icon:photo_op_icon});
am_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">American Views - Airtime</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>American Muscle</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Jump over the hillock</span><br>\
                              <span>- Peacock Flats belvedere</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 American Views - Battleship
am_photo_ops05_marker = L.marker([1391.698683, 2257.858359], {icon:photo_op_icon});
am_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">American Views - Battleship</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>American Muscle</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford</span><br>\
                              <span>- Donut</span><br>\
                              <span>- USS Ship Museum</span><br>\
                              <span>- in Pearl Harbor</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//American Stars
//Collectible 1 American Stars
am_collectible01_marker = L.marker([1567.011337, 2303.0625], {icon:collectible_icon});
am_collectible01_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 2 American Stars
am_collectible02_marker = L.marker([1403.998602, 2167.282284], {icon:collectible_icon});
am_collectible02_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 3 American Stars
am_collectible03_marker = L.marker([1264.26494, 2360.5], {icon:collectible_icon});
am_collectible03_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 4 American Stars
am_collectible04_marker = L.marker([1340.318722, 1801.125], {icon:collectible_icon});
am_collectible04_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 5 American Stars
am_collectible05_marker = L.marker([1681.320304, 2649.125], {icon:collectible_icon});
am_collectible05_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 6 American Stars
am_collectible06_marker = L.marker([2823.853284, 1548.387074], {icon:collectible_icon});
am_collectible06_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 7 American Stars
am_collectible07_marker = L.marker([1976.871239, 3223.0625], {icon:collectible_icon});
am_collectible07_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 8 American Stars
am_collectible08_marker = L.marker([2910.630238, 2528.8125], {icon:collectible_icon});
am_collectible08_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 9 American Stars
am_collectible09_marker = L.marker([2727.568388, 2152], {icon:collectible_icon});
am_collectible09_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 10 American Stars
am_collectible10_marker = L.marker([2308.515468, 2083.1875], {icon:collectible_icon});
am_collectible10_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

//Collectible 11 American Stars
am_collectible11_marker = L.marker([1112.919048, 3239.375], {icon:collectible_icon});
am_collectible11_marker.bindPopup("<b style=\"font-size:20px\">American Muscle</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> American Stars</span><br>", {
    className: "hstPopup"
});

am_container_group.push(am_container_marker);

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        am_events_group.push(window["am_event0" + i + "_marker"]);
    }
    else {
        am_events_group.push(window["am_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 6; i++) {
    am_feats_group.push(window["am_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        am_photo_ops_group.push(window["am_photo_ops0" + i + "_marker"]);
    }
    else {
        am_photo_ops_group.push(window["am_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 11; i++) {
    if(i < 10) {
        am_collectibles_group.push(window["am_collectible0" + i + "_marker"]);
    }
    else {
        am_collectibles_group.push(window["am_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(am_container_group);
markers_canvas.addMarkers(am_events_group);
markers_canvas.addMarkers(am_collectibles_group);
markers_canvas.addMarkers(am_photo_ops_group);
markers_canvas.addMarkers(am_feats_group);