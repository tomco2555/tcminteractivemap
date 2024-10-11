var de2_container_icon = L.icon({
    iconUrl: 'img/Drift2/de2_container.png',
    iconSize: [60, 75],
    iconAnchor: [30,75],
    popupAnchor: [0,-60],
});

var de2_event_icon = L.icon({
    iconUrl: 'img/Drift2/de2_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

de2_container_group = L.featureGroup();
de2_events_group = L.featureGroup();
de2_photo_ops_group = L.featureGroup();
de2_feats_group = L.featureGroup();
de2_collectibles_group = L.featureGroup();

//CONTAINER
de2_container_marker = L.marker([2044.380379, 1631.125], {icon:de2_container_icon}).addTo(de2_container_group);
de2_container_marker.bindPopup('<b>Drift Experience Vol.2</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
de2_event01_marker = L.marker([2280.326482, 2039.561122], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event01_marker.bindPopup("<b style=\"font-size:20px\">Speed Of Light</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Toyota GR Supra</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
de2_event02_marker = L.marker([1704.936762, 2960.625], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event02_marker.bindPopup("<b style=\"font-size:20px\">Arch-Drifter</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Nissan Skyline GT-R (R34)</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 03
de2_event03_marker = L.marker([903.138921, 2764.1875], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event03_marker.bindPopup("<b style=\"font-size:20px\">Nature vs Nurture</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> BMW Z4 sDrive35is</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
de2_event04_marker = L.marker([696.536314, 2682.625], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event04_marker.bindPopup("<b style=\"font-size:20px\">Night Glider</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Lamborghini Murciélago LP640</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
de2_event05_marker = L.marker([656.082819, 2346.6875], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event05_marker.bindPopup("<b style=\"font-size:20px\">The Hard Yards</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> McLaren 12C</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
de2_event06_marker = L.marker([651.796506, 1615.827383], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event06_marker.bindPopup("<b style=\"font-size:20px\">No Rest For The Drifter</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Chevrolet Camaro SS</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 07
de2_event07_marker = L.marker([1234.642319, 1485.969078], {icon:de2_event_icon}).addTo(de2_events_group);
de2_event07_marker.bindPopup("<b style=\"font-size:20px\">Smoke In The Eye</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience Vol.2(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Mazda MX-5</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var DE2featsArr = [[1130.230377, 1417.660708, "speedtrap", "Kapolei", "Speedtrap", "250.0 km/h", "960", "1,800"],  //Feat 01
                   [475.271807, 1962.221318, "slalom", "Barber Point Waters", "Slalom", "5,320 PTS", "3,840", "7,200"],  //Feat 02
                   [653.022459, 2460.024492, "slalom", "Chinatown", "Slalom", "8,210 PTS", "2,880", "5,400"],  //Feat 03
                   [827.153221, 2921.76522, "speedtrap", "Manoa", "Speedtrap", "220.0 km/h", "960", "1,800"],  //Feat 04
                   [1213.260089, 3087.25, "escape", "Kaneohe Bay", "Escape", "760 m", "2,880", "5,400"],  //Feat 05
                   [1902.386109, 2560.625, "slalom", "Kualoa Racetrack", "Slalom", "8,290 PTS", "3,840", "7,200"],  //Feat 06
                  ]

function createDE2FeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["de2_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(de2_feats_group);
        window["de2_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Blazing Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Drift Experience Vol.2</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createDE2FeatsMarkers(DE2featsArr);

//PHOTO OPS
//Photo Ops 1 Blazing Views - Turtle Bay Resort
de2_photo_ops01_marker = L.marker([2512.959756, 2283.723613], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Turtle Bay Resort</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Toyota GR Supra Drift</span><br>\
                              <span>- Drift</span><br>\
                              <span>- Night</span><br>\
                              <span>- Turtle Bay Resort parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Blazing Views - Kaneohe
de2_photo_ops02_marker = L.marker([1383.37975, 3041.843149], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Kaneohe</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Nissan 370Z Nismo Drift</span><br>\
                              <span>- Nitro</span><br>\
                              <span>- Parking lot of the Kaneohe harbor</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Blazing Views - Polynesian Cultural Center
de2_photo_ops03_marker = L.marker([2124.851983, 2557.796671], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Polynesian Cultural Center</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drift car</span><br>\
                              <span>- Drift</span><br>\
                              <span>- Night</span><br>\
                              <span>- Polynesian Cultural Center parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Blazing Views - Hanauma Racetrack
de2_photo_ops04_marker = L.marker([573.958977, 3607.459783], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Hanauma Racetrack</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drift car</span><br>\
                              <span>- Burn</span><br>\
                              <span>- Hanauma Racetrack parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Blazing Views - Convention Center
de2_photo_ops05_marker = L.marker([621.219884, 2856.772792], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Convention Center</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Toyota GR Supra Drift</span><br>\
                              <span>- Nitro</span><br>\
                              <span>- Night</span><br>\
                              <span>- Convention Center parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Blazing Views - Moana Center
de2_photo_ops06_marker = L.marker([554.035451, 2658.621156], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Moana Center</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Mitsubishi Lancer Evo X Drift</span><br>\
                              <span>- Jump</span><br>\
                              <span>- Night</span><br>\
                              <span>- Moana Center parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 Blazing Views - Oahu Airport
de2_photo_ops07_marker = L.marker([574.243695, 2440.253], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Oahu Airport</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Toyota GR Supra Drift</span><br>\
                              <span>- Control tower</span><br>\
                              <span>- Night</span><br>\
                              <span>- east-side parking lot of Oahu Airport</span><br>", {
    className: "hstPopup"
});

//Photo Ops 8 Blazing Views - Schofield Barracks
de2_photo_ops08_marker = L.marker([1532.207887, 2213.029141], {icon:photo_op_icon}).addTo(de2_photo_ops_group);
de2_photo_ops08_marker.bindPopup("<b style=\"font-size:20px\">Blazing Views - Schofield Barracks</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drift car</span><br>\
                              <span>- Drift</span><br>\
                              <span>- parking lot of the main building of Schofield Barracks</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Blazing Rubber
//Collectible 1 Blazing Rubber
de2_collectible01_marker = L.marker([540.19766, 2787.125], {icon:collectible_icon}).addTo(de2_collectibles_group);
de2_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Blazing Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Blazing Rubber
de2_collectible02_marker = L.marker([695.072692, 2768.323048], {icon:collectible_icon}).addTo(de2_collectibles_group);
de2_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Blazing Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Blazing Rubber
de2_collectible03_marker = L.marker([641.503761, 2554.9375], {icon:collectible_icon}).addTo(de2_collectibles_group);
de2_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Blazing Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Blazing Rubber
de2_collectible04_marker = L.marker([608.208373, 2424.315599], {icon:collectible_icon}).addTo(de2_collectibles_group);
de2_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Blazing Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Blazing Rubber
de2_collectible05_marker = L.marker([457.139554, 2920.25], {icon:collectible_icon}).addTo(de2_collectibles_group);
de2_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Blazing Rubber</span><br>", {
    className: "hstPopup"
});

de2_container_group.addTo(map);
de2_events_group.addTo(map);
de2_feats_group.addTo(map);
de2_collectibles_group.addTo(map);
de2_photo_ops_group.addTo(map);