var lch_container_icon = L.icon({
    iconUrl: 'img/LuxuryChronicles/lch_container.png',
    iconSize: [37.5, 75],
    iconAnchor: [18.75,75],
    popupAnchor: [0,-60],
});

var lch_event_icon = L.icon({
    iconUrl: 'img/LuxuryChronicles/lch_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

lch_container_group = L.featureGroup();
lch_events_group = L.featureGroup();
lch_photo_ops_group = L.featureGroup();
lch_feats_group = L.featureGroup();
lch_collectibles_group = L.featureGroup();

//CONTAINER
lch_container_marker = L.marker([1125.060654, 5164.25], {icon:lch_container_icon}).addTo(lch_container_group);
lch_container_marker.bindPopup('<b>Luxury Chronicles: Europe</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
lch_event01_marker = L.marker([592.763779, 5965.152806], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event01_marker.bindPopup("<b style=\"font-size:20px\">France: Genty Automobile</b><br>\
                              <i>Event</i><br>\
                              <span><b>Luxury Chronicles: Europe(1/13)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Genty Akylone</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
lch_event02_marker = L.marker([1024.038458, 5164], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event02_marker.bindPopup("<b style=\"font-size:20px\">France: Citroën</b><br>\
                              <i>Event</i><br>\
                              <span><b>Luxury Chronicles: Europe(2/13)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Citroën GT</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 03
lch_event03_marker = L.marker([1062.595185, 4570.866197], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event03_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 04
lch_event04_marker = L.marker([1899.243673, 4821.054034], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event04_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 05
lch_event05_marker = L.marker([1413.098598, 4721.449548], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event05_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 06
lch_event06_marker = L.marker([1185.632699, 5160.125], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event06_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 07
lch_event07_marker = L.marker([1200.50943, 5240.721909], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event07_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 08
lch_event08_marker = L.marker([1255.380449, 5247.875], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event08_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 09
lch_event09_marker = L.marker([967.383525, 5579.072504], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event09_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 10
lch_event10_marker = L.marker([878.276752, 5730.75], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event10_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 11
lch_event11_marker = L.marker([856.061449, 6015.75], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event11_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 12
lch_event12_marker = L.marker([421.586474, 5959.012447], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event12_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//Event 13
lch_event13_marker = L.marker([318.62796, 5809.128106], {icon:lch_event_icon}).addTo(lch_events_group);
lch_event13_marker.bindPopup("<b style=\"font-size:20px\">TBD</b><br>", {
    className: "hstPopup"
});

//FEATS
var LCHfeatsArr = [[322.858776, 5362.874605, "speedtrap", "Manawainui", "Slalom", "200.0 km/h", "800", "1,500"],  //Feat 01
                    [1674.939501, 4720.821648, "slalom", "Napili", "Slalom", "5,900 PTS", "2,400", "4,500"],  //Feat 02
                    [441.032096, 5776.875, "speedtrap", "Pipiwai Bayan Tree", "Speedtrap", "190.0 km/h", "800", "1,500"],  //Feat 03
                    [2783.856926, 1950.554056, "long_jump", "College Stadium", "Long Jump", "230 m", "1,600", "3,000"],  //Feat 04
                    [2725.883218, 1478.560279, "long_jump", "Makaleha River", "Long Jump", "180 m", "1,600", "3,000"],  //Feat 05
                    [572.795619, 5943.055719, "speedtrap", "Lyon's Hill", "Speedtrap", "210.0 km/h", "800", "1,500"],  //Feat 06
                    [1125.020881, 5277, "escape", "Central", "Escape", "1360 m", "2,400", "4,500"],  //Feat 07
                    ]

function createLCHFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["lch_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(lch_feats_group);
        window["lch_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Luxury Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Luxury Chronicles: Europe</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createLCHFeatsMarkers(LCHfeatsArr);

//PHOTO OPS
//Photo Ops 1 Luxury Views - French Jewel
lch_photo_ops01_marker = L.marker([890.637432, 4801.078268], {icon:photo_op_icon}).addTo(lch_photo_ops_group);
lch_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Luxury Views - French Jewel</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Luxury Chronicles: Europe</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- French car</span><br>\
                              <span>- under a clear sky</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Luxury Views - Kihei Golf Club
lch_photo_ops02_marker = L.marker([556.376697, 5033.185494], {icon:photo_op_icon}).addTo(lch_photo_ops_group);
lch_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Luxury Views - Kihei Golf Club</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Luxury Chronicles: Europe</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- French car</span><br>\
                              <span>- Kihei Golf Club</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Luxury Swing
//Collectible 1 Luxury Swing
lch_collectible01_marker = L.marker([625.664759, 5019.5], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Swing</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Luxury Swing
lch_collectible02_marker = L.marker([697.896092, 4997], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Swing</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Luxury Swing
lch_collectible03_marker = L.marker([1371.498524, 1962.875], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Swing</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Luxury Swing
lch_collectible04_marker = L.marker([2299.126547, 2334.375], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Swing</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Luxury Swing
lch_collectible05_marker = L.marker([2955.543236, 1812.75], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Swing</span><br>", {
    className: "hstPopup"
});

//Luxury Bleu Blanc Rouge
//Collectible 1 Luxury Bleu Blanc Rouge
lch_collectible06_marker = L.marker([2398.079597, 2386.927328], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Bleu Blanc Rouge</span><br>", {
    className: "hstPopup"
});

//Luxury B&B
//Collectible 1 Luxury B&B
lch_collectible07_marker = L.marker([2801.887761, 1482.875], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury B&B</span><br>", {
    className: "hstPopup"
});

//Luxury Stay
//Collectible 1 Luxury Stay
lch_collectible08_marker = L.marker([658.016874, 4947.324575], {icon:collectible_icon}).addTo(lch_collectibles_group);
lch_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Luxury Chronicles: Europe</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Luxury Stay</span><br>", {
    className: "hstPopup"
});

lch_container_group.addTo(map);
lch_events_group.addTo(map);
lch_feats_group.addTo(map);
lch_collectibles_group.addTo(map);
lch_photo_ops_group.addTo(map);