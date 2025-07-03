var ferrari_container_icon = L.icon({
    iconUrl: 'img/Ferrari/ferrari_container.png',
    iconSize: [48, 75],
    iconAnchor: [24,75],
    popupAnchor: [0,-60],
});

var ferrari_event_icon = L.icon({
    iconUrl: 'img/Ferrari/ferrari_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

ferrari_container_group = [];
ferrari_events_group = [];
ferrari_photo_ops_group = [];
ferrari_feats_group = [];
ferrari_collectibles_group = [];

//CONTAINER
ferrari_container_marker = L.marker([555.888675, 5072.625], {icon:ferrari_container_icon});
ferrari_container_marker.bindPopup('<b>Ferrari Supercars</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
ferrari_event01_marker = L.marker([543.767085, 5080.375], {icon:ferrari_event_icon});
ferrari_event01_marker.bindPopup("<b style=\"font-size:20px\">Gran Turismo Omologato</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Ferrari GTO</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 02
ferrari_event02_marker = L.marker([1374.47272, 4706.5], {icon:ferrari_event_icon});
ferrari_event02_marker.bindPopup("<b style=\"font-size:20px\">Generazione F</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
ferrari_event03_marker = L.marker([891.800551, 4999.5], {icon:ferrari_event_icon});
ferrari_event03_marker.bindPopup("<b style=\"font-size:20px\">Timeless Red</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ferrari 512 TR</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
ferrari_event04_marker = L.marker([1093.760898, 3599.25], {icon:ferrari_event_icon});
ferrari_event04_marker.bindPopup("<b style=\"font-size:20px\">Racing DNA</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">28,125</span></span><br>", {
    className: "hstPopup"
});

//Event 05
ferrari_event05_marker = L.marker([494.90085, 5011.619312], {icon:ferrari_event_icon});
ferrari_event05_marker.bindPopup("<b style=\"font-size:20px\">Celebrating Enzo</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Ferrari Enzo Ferrari</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 06
ferrari_event06_marker = L.marker([1875.759467, 4744.686502], {icon:ferrari_event_icon});
ferrari_event06_marker.bindPopup("<b style=\"font-size:20px\">\"La\" Ferrari</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ferrari LaFerrari</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 07
ferrari_event07_marker = L.marker([465.017999, 5034.75], {icon:ferrari_event_icon});
ferrari_event07_marker.bindPopup("<b style=\"font-size:20px\">The Prancing Horse</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ferrari Supercars(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ferrari F80</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">28,125</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var FerrarifeatsArr = [[1054.474654, 4568.25, "slalom", "Kaiwi", "Slalom", "4,760 PTS", "2,400", "4,500"],  //Feat 01
                    [1250.829091, 4973.612322, "slalom", "Lighthouse", "Slalom", "4,830 PTS", "2,400", "4,500"],  //Feat 02
                    [555.999332, 5128.3125, "speedtrap", "Museum", "Speedtrap", "190.0 km/h", "800", "1,500"],  //Feat 03
                    [1647.447796, 4771.75, "speedtrap", "West Highway", "Speedtrap", "180.0 km/h", "800", "1,500"],  //Feat 04
                    ]

function createFerrariFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["ferrari_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["ferrari_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Supercar Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Ferrari Supercars</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createFerrariFeatsMarkers(AMfeatsArr);

//PHOTO OPS
//Photo Ops 1 Supercar Views - Hanauma Racetrack
ferrari_photo_ops01_marker = L.marker([1150.655667, 3605.360701], {icon:photo_op_icon});
ferrari_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Supercar Views - Hanauma Racetrack</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ferrari Supercars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ferrari F50</span><br>\
                              <span>- Hanauma Racetrack</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Supercar Views - Speedway
ferrari_photo_ops02_marker = L.marker([1082.254272, 4023.084032], {icon:photo_op_icon});
ferrari_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Supercar Views - Speedway</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ferrari Supercars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ferrari Hypercar</span><br>\
                              <span>- High Speed</span><br>\
                              <span>- Speedway connecting Maui to Oahu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Supercar Views - Lavender Fields
ferrari_photo_ops03_marker = L.marker([1327.997399, 5278.125], {icon:photo_op_icon});
ferrari_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Supercar Views - Lavender Fields</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ferrari Supercars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ferrari GTO</span><br>\
                              <span>- in front of a Lavender field in Kealaloloa Fields</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Supercar Views - Wailea Resort
ferrari_photo_ops04_marker = L.marker([583.911769, 4957.348866], {icon:photo_op_icon});
ferrari_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Supercar Views - Wailea Resort</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ferrari Supercars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ferrari</span><br>\
                              <span>- Wailea Resort in Kihei</span><br>\
                              <span>- near the stairs located by the fountains</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Supercar Views - Museum
ferrari_photo_ops05_marker = L.marker([564.990101, 5071.723388], {icon:photo_op_icon});
ferrari_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Supercar Views - Museum</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ferrari Supercars</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ferrari F50</span><br>\
                              <span>- Museo Enzo Ferrari</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Supercar Stallion
//Collectible 1 Supercar Stallion
ferrari_collectible01_marker = L.marker([543.782863, 5074.993757], {icon:collectible_icon});
ferrari_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Ferrari Supercars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Supercar Stallion</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Supercar Stallion
ferrari_collectible02_marker = L.marker([534.856957, 4991.289992], {icon:collectible_icon});
ferrari_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Ferrari Supercars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Supercar Stallion</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Supercar Stallion
ferrari_collectible03_marker = L.marker([502.019581, 4961.375], {icon:collectible_icon});
ferrari_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Ferrari Supercars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Supercar Stallion</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Supercar Stallion
ferrari_collectible04_marker = L.marker([589.263605, 4983], {icon:collectible_icon});
ferrari_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Ferrari Supercars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Supercar Stallion</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Supercar Stallion
ferrari_collectible05_marker = L.marker([650.183244, 4933.660789], {icon:collectible_icon});
ferrari_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Ferrari Supercars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Supercar Stallion</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Supercar Stallion
ferrari_collectible06_marker = L.marker([712.75153, 4941.527352], {icon:collectible_icon});
ferrari_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Ferrari Supercars</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Supercar Stallion</span><br>", {
    className: "hstPopup"
});

ferrari_container_group.push(ferrari_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        ferrari_events_group.push(window["ferrari_event0" + i + "_marker"]);
    }
    else {
        ferrari_events_group.push(window["ferrari_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 3; i++) {
    ferrari_feats_group.push(window["ferrari_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        ferrari_photo_ops_group.push(window["ferrari_photo_ops0" + i + "_marker"]);
    }
    else {
        ferrari_photo_ops_group.push(window["ferrari_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 6; i++) {
    if(i < 10) {
        ferrari_collectibles_group.push(window["ferrari_collectible0" + i + "_marker"]);
    }
    else {
        ferrari_collectibles_group.push(window["ferrari_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(ferrari_container_group);
markers_canvas.addMarkers(ferrari_events_group);
markers_canvas.addMarkers(ferrari_collectibles_group);
markers_canvas.addMarkers(ferrari_photo_ops_group);
markers_canvas.addMarkers(ferrari_feats_group);