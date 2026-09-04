var de_container_icon = L.icon({
    iconUrl: 'img/Drift/de_container.png',
    iconSize: [60, 75],
    iconAnchor: [30,75],
    popupAnchor: [0,-60],
});

var de_event_icon = L.icon({
    iconUrl: 'img/Drift/de_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

de_container_group = [];
de_events_group = [];
de_photo_ops_group = [];
de_feats_group = [];
de_collectibles_group = [];

//CONTAINER
de_container_marker = L.marker([1613.32165, 2627.255819], {icon:de_container_icon});
de_container_marker.bindPopup('<b>Drift Experience</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
de_event01_marker = L.marker([1349.55225, 3377.672317], {icon:de_event_icon});
de_event01_marker.bindPopup("<b style=\"font-size:20px\">Initial Drill</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(1/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Nissan 370Z Nismo</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
de_event02_marker = L.marker([1782.497856, 2362.25], {icon:de_event_icon});
de_event02_marker.bindPopup("<b style=\"font-size:20px\">Wind Slider</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(2/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> BMW M5</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
de_event03_marker = L.marker([1750.124613, 1456.625], {icon:de_event_icon});
de_event03_marker.bindPopup("<b style=\"font-size:20px\">Dream Spiral</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(3/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Creators DeLorean DMC-12 Outadrift</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
de_event04_marker = L.marker([2650.859392, 1825.375], {icon:de_event_icon});
de_event04_marker.bindPopup("<b style=\"font-size:20px\">Silver Shadow</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(4/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Shelby GT 500</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
de_event05_marker = L.marker([2350.133578, 1535.5], {icon:de_event_icon});
de_event05_marker.bindPopup("<b style=\"font-size:20px\">Hawai'i Red Sun</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(5/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Toyota GR Supra</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
de_event06_marker = L.marker([1398.016607, 1673.544974], {icon:de_event_icon});
de_event06_marker.bindPopup("<b style=\"font-size:20px\">Diffracted Blue</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(6/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Lamborghini Aventador LP 700-4</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 07
de_event07_marker = L.marker([2150.000703, 2676.75], {icon:de_event_icon});
de_event07_marker.bindPopup("<b style=\"font-size:20px\">Skyline Juku</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(7/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Nissan Skyline GT-R (R34)</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 08
de_event08_marker = L.marker([2841.523695, 2175.060459], {icon:de_event_icon});
de_event08_marker.bindPopup("<b style=\"font-size:20px\">Drift Emperor</b><br>\
                              <i>Event</i><br>\
                              <span><b>Drift Experience(8/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Mazda RX7</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var DEfeatsArr = [[2712.665913, 2273.525078, "bullseye", "Koolauloa", "Bullseye", "7,740 PTS", "3,840", "7,200"],  //Feat 01
                  [2590.010019, 1435.5, "bullseye", "Kuaokala", "Bullseye", "6,850 PTS", "3,840", "7,200"],  //Feat 02
                  [2447.695047, 1536.896589, "slalom", "Mauna Pele North Road", "Slalom", "6,490 PTS", "2,880", "5,400"],  //Feat 03
                  [2079.176896, 1276.690982, "escape", "Kaimu Black Beach", "Escape", "550 m", "2,880", "5,400"],  //Feat 04
                  [1903.124549, 1316.632827, "buoy_smashing", "Kaimu Waters", "Buoy Smashing", "19,820 PTS", "5,760", "10,800"],  //Feat 05
                  [1410.258349, 1767.125, "slalom", "Kalaeloa Fields", "Slalom", "8,250 PTS", "2,880", "5,400"],  //Feat 06
                  [1993.554474, 2423.078162, "escape", "Mililani Heritage", "Escape", "720 m", "2,880", "5,400"],  //Feat 07
                  [1525.543362, 2666.202352, "escape", "Nuuanu Punchbowl", "Escape", "600 m", "2,880", "5,400"],  //Feat 08
                  [1381.809175, 3120.904167, "slalom", "Kaimuki", "Slalom", "7,710 PTS", "3,840", "7,200"],  //Feat 09
                 ]

function createDEFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["de_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["de_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Burning Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Drift Experience</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createDEFeatsMarkers(DEfeatsArr);

//PHOTO OPS
//Photo Ops 1 Burning Views - HNL Mountain Roads
de_photo_ops01_marker = L.marker([1615.004851, 2863.25], {icon:photo_op_icon});
de_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - HNL Mountain Roads</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Nissan 370Z Nismo Drift</span><br>\
                              <span>- Manoa mountain roads north of Honolulu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Burning Views - Ewa Shopping Mall
de_photo_ops02_marker = L.marker([1415.281933, 2103.712607], {icon:photo_op_icon});
de_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - Ewa Shopping Mall</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Mitsubishi Lancer Evolution X Drift</span><br>\
                              <span>- Night</span><br>\
                              <span>- Ewa Mall parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Burning Views - Central Industrial Zone
de_photo_ops03_marker = L.marker([1748.276925, 2109.058818], {icon:photo_op_icon});
de_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - Central Industrial Zone</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Mitsubishi Lancer Evolution X Drift</span><br>\
                              <span>- Central Industrial Zone in the Mililani Waipio area</span><br>\
                              <span>- west of Honouliuli Gulch</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Burning Views - Southern Volcano Roads
de_photo_ops04_marker = L.marker([1855.0412, 1427.5], {icon:photo_op_icon});
de_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - Southern Volcano Roads</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drift car</span><br>\
                              <span>- winding road south of the Mauna Pele volcano</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Burning Views - Northern Volcano Roads
de_photo_ops05_marker = L.marker([2513.416305, 1287.287895], {icon:photo_op_icon});
de_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - Northern Volcano Roads</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Nissan 370Z Nismo Drift</span><br>\
                              <span>- winding roads north of the Mauna Pele volcano</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Burning Views - Wahiawa Shopping Mall
de_photo_ops06_marker = L.marker([2410.385511, 2326], {icon:photo_op_icon});
de_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - Wahiawa Shopping Mall</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drift car</span><br>\
                              <span>- Night</span><br>\
                              <span>- Wahiawa Mall parking lot</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 Burning Views - Honouliuli 7 Days Market
de_photo_ops07_marker = L.marker([1929.544153, 2302.75], {icon:photo_op_icon});
de_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">Burning Views - Honouliuli 7 Days Market</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Drift Experience</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Mitsubishi Lancer Evolution X Drift</span><br>\
                              <span>- Night</span><br>\
                              <span>- Honouliuli 7 Days Market parking lot</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Burning Rubber
//Collectible 1 Burning Rubber
de_collectible01_marker = L.marker([1326.64219, 1598], {icon:collectible_icon});
de_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Burning Rubber
de_collectible02_marker = L.marker([1573.139132, 2403.125], {icon:collectible_icon});
de_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Burning Rubber
de_collectible03_marker = L.marker([1286.014976, 2825.375], {icon:collectible_icon});
de_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Burning Rubber
de_collectible04_marker = L.marker([1290.135898, 2808.875], {icon:collectible_icon});
de_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Burning Rubber
de_collectible05_marker = L.marker([1186.26821, 3173.375], {icon:collectible_icon});
de_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Burning Rubber
de_collectible06_marker = L.marker([1225.514659, 3340.75], {icon:collectible_icon});
de_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Burning Rubber
de_collectible07_marker = L.marker([1475.439996, 3338.6875], {icon:collectible_icon});
de_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Burning Rubber
de_collectible08_marker = L.marker([2910.618075, 2524.25], {icon:collectible_icon});
de_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Burning Rubber
de_collectible09_marker = L.marker([2970.625018, 2559.0625], {icon:collectible_icon});
de_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Burning Rubber
de_collectible10_marker = L.marker([3284.268585, 2287.225272], {icon:collectible_icon});
de_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Burning Rubber
de_collectible11_marker = L.marker([2828.274256, 2029.125], {icon:collectible_icon});
de_collectible11_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Burning Rubber
de_collectible12_marker = L.marker([2942.041406, 1800.117088], {icon:collectible_icon});
de_collectible12_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Burning Rubber
de_collectible13_marker = L.marker([1437.771115, 1597.402457], {icon:collectible_icon});
de_collectible13_marker.bindPopup("<b style=\"font-size:20px\">Drift Experience</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Burning Rubber</span><br>", {
    className: "hstPopup"
});

de_container_group.push(de_container_marker);

for(var i = 1; i <= 8; i++) {
    if(i < 10) {
        de_events_group.push(window["de_event0" + i + "_marker"]);
    }
    else {
        de_events_group.push(window["de_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 8; i++) {
    de_feats_group.push(window["de_feat" + i + "_marker"]);
}

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        de_photo_ops_group.push(window["de_photo_ops0" + i + "_marker"]);
    }
    else {
        de_photo_ops_group.push(window["de_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 13; i++) {
    if(i < 10) {
        de_collectibles_group.push(window["de_collectible0" + i + "_marker"]);
    }
    else {
        de_collectibles_group.push(window["de_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(de_container_group);
markers_canvas.addMarkers(de_events_group);
markers_canvas.addMarkers(de_collectibles_group);
markers_canvas.addMarkers(de_photo_ops_group);
markers_canvas.addMarkers(de_feats_group);