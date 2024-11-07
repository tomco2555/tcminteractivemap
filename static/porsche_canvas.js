var porsche_container_icon = L.icon({
    iconUrl: 'img/Porsche/porsche_container.png',
    iconSize: [75, 75],
    iconAnchor: [37.5,75],
    popupAnchor: [0,-60],
});

var porsche_event_icon = L.icon({
    iconUrl: 'img/Porsche/porsche_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

porsche_container_group = [];
porsche_events_group = [];
porsche_photo_ops_group = [];
porsche_feats_group = [];
porsche_collectibles_group = [];

//CONTAINER
porsche_container_marker = L.marker([1437.003357, 2245.25], {icon:porsche_container_icon});
porsche_container_marker.bindPopup('<b>911 Legacy</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
porsche_event01_marker = L.marker([1272.477611, 1797.995768], {icon:porsche_event_icon});
porsche_event01_marker.bindPopup("<b style=\"font-size:20px\">911 Arrival</b><br>\
                              <i>Event</i><br>\
                              <span><b>911 Legacy(1/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Porsche 911</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 02
porsche_event02_marker = L.marker([1647.486228, 1889.566096], {icon:porsche_event_icon});
porsche_event02_marker.bindPopup("<b style=\"font-size:20px\">911 Rally</b><br>\
                              <i>Event</i><br>\
                              <span><b>911 Legacy(2/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Porsche 959 Raid</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 03
porsche_event03_marker = L.marker([2144.542128, 1691.5], {icon:porsche_event_icon});
porsche_event03_marker.bindPopup("<b style=\"font-size:20px\">911 Legends</b><br>\
                              <i>Event</i><br>\
                              <span><b>911 Legacy(3/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Porsche 911 Turbo 3.6</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 04
porsche_event04_marker = L.marker([1594.814293, 2413.625], {icon:porsche_event_icon});
porsche_event04_marker.bindPopup("<b style=\"font-size:20px\">911 Freeway</b><br>\
                              <i>Event</i><br>\
                              <span><b>911 Legacy(4/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Porsche 911 GT1 Strassenversion (993)</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
porsche_event05_marker = L.marker([1350.976705, 2850.08227], {icon:porsche_event_icon});
porsche_event05_marker.bindPopup("<b style=\"font-size:20px\">911 Grand Prix</b><br>\
                              <i>Event</i><br>\
                              <span><b>911 Legacy(5/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Porsche 911 GT3 Cup</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 06
porsche_event06_marker = L.marker([1185.378902, 3202.75], {icon:porsche_event_icon});
porsche_event06_marker.bindPopup("<b style=\"font-size:20px\">911 Challenge</b><br>\
                              <i>Event</i><br>\
                              <span><b>911 Legacy(6/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Porsche 911 Carrera 4S (992)</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var PorschefeatsArr = [[1268.412791, 2943.066812, "speedtrap", "Waikiki", "Speedtrap", "170.0 km/h", "960", "1,800"],  //Feat 01
                       [1426.628058, 2144.5, "escape", "Ewa", "Escape", "1100 m", "2,880", "5,400"],  //Feat 02
                       [1440.502493, 1974.860852, "speedtrap", "Kapolei", "Speedtrap", "170.0 km/h", "960", "1,800"],  //Feat 03
                       [2303.24711, 1440.730067, "escape", "Waianae", "Escape", "1380 m", "2,880", "5,400"],  //Feat 04
                      ]

function createPorscheFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["porsche_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["porsche_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">911 Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>911 Legacy</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createPorscheFeatsMarkers(PorschefeatsArr);

//PHOTO OPS
//Photo Ops 1 911 Views - Volcano
porsche_photo_ops01_marker = L.marker([2275.704, 1578.615889], {icon:photo_op_icon});
porsche_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">911 Views - Volcano</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>911 Legacy</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche 959 Raid</span><br>\
                              <span>- Mauna Pele Nunui Crater in the background</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 911 Views - Rainbow Silo
porsche_photo_ops02_marker = L.marker([1232.405268, 1700.125], {icon:photo_op_icon});
porsche_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">911 Views - Rainbow Silo</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>911 Legacy</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Rainbow smiley silo located near the lighthouse</span><br>\
                              <span>- Kalaeloa Barbers Point Harbor</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 911 Views - Waikiki Shell
porsche_photo_ops03_marker = L.marker([1222.398834, 3011.625], {icon:photo_op_icon});
porsche_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">911 Views - Waikiki Shell</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>911 Legacy</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche 911 Turbo 3.6</span><br>\
                              <span>- Waikiki Shell</span><br>\
                              <span>- in Honolulu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 911 Views - Close Shot
porsche_photo_ops04_marker = L.marker([1280.282185, 3281.152241], {icon:photo_op_icon});
porsche_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">911 Views - Close Shot</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>911 Legacy</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche</span><br>\
                              <span>- Freedrive</span><br>\
                              <span>- Near Miss</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 911 Views - Carrera 4S
porsche_photo_ops05_marker = L.marker([1433.189609, 2244.375], {icon:photo_op_icon});
porsche_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">911 Views - Carrera 4S</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>911 Legacy</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche 911 Carrera 4S Timeless Edition</span><br>\
                              <span>- Porsche container</span><br>\
                              <span>- Ford Island</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//911 Collection
//Collectible 1 911 Collection
porsche_collectible01_marker = L.marker([1275.877426, 1744.875], {icon:collectible_icon});
porsche_collectible01_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 2 911 Collection
porsche_collectible02_marker = L.marker([1454.013007, 2164.125], {icon:collectible_icon});
porsche_collectible02_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 3 911 Collection
porsche_collectible03_marker = L.marker([1429.510001, 2244.5625], {icon:collectible_icon});
porsche_collectible03_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 4 911 Collection
porsche_collectible04_marker = L.marker([1377.133243, 2316.835369], {icon:collectible_icon});
porsche_collectible04_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 5 911 Collection
porsche_collectible05_marker = L.marker([1257.284758, 2750.291825], {icon:collectible_icon});
porsche_collectible05_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 6 911 Collection
porsche_collectible06_marker = L.marker([1135.147358, 3038.875], {icon:collectible_icon});
porsche_collectible06_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 7 911 Collection
porsche_collectible07_marker = L.marker([1063.521303, 3541.25], {icon:collectible_icon});
porsche_collectible07_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 8 911 Collection
porsche_collectible08_marker = L.marker([2150.697969, 3046.216013], {icon:collectible_icon});
porsche_collectible08_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

//Collectible 9 911 Collection
porsche_collectible09_marker = L.marker([2916.840113, 2009.243919], {icon:collectible_icon});
porsche_collectible09_marker.bindPopup("<b style=\"font-size:20px\">911 Legacy</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> 911 Collection</span><br>", {
    className: "hstPopup"
});

porsche_container_group.push(porsche_container_marker);

for(var i = 1; i <= 6; i++) {
    if(i < 10) {
        porsche_events_group.push(window["porsche_event0" + i + "_marker"]);
    }
    else {
        porsche_events_group.push(window["porsche_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 3; i++) {
    porsche_feats_group.push(window["porsche_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        porsche_photo_ops_group.push(window["porsche_photo_ops0" + i + "_marker"]);
    }
    else {
        porsche_photo_ops_group.push(window["porsche_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        porsche_collectibles_group.push(window["porsche_collectible0" + i + "_marker"]);
    }
    else {
        porsche_collectibles_group.push(window["porsche_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(porsche_container_group);
markers_canvas.addMarkers(porsche_events_group);
markers_canvas.addMarkers(porsche_collectibles_group);
markers_canvas.addMarkers(porsche_photo_ops_group);
markers_canvas.addMarkers(porsche_feats_group);