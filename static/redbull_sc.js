var rb_container_icon = L.icon({
    iconUrl: 'img/RedBull_SC/rb_container.png',
    iconSize: [97.5, 75],
    iconAnchor: [48.5,75],
    popupAnchor: [0,-60],
});

var rb_event_icon = L.icon({
    iconUrl: 'img/RedBull_SC/rb_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

rb_container_group = L.featureGroup();
rb_events_group = L.featureGroup();
rb_photo_ops_group = L.featureGroup();
rb_feats_group = L.featureGroup();
rb_collectibles_group = L.featureGroup();

//CONTAINER
rb_container_marker = L.marker([738.41363, 5319.917868], {icon:rb_container_icon}).addTo(rb_container_group);
rb_container_marker.bindPopup('<b>Red Bull Speed Clash</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
rb_event01_marker = L.marker([697.144878, 5475.625], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event01_marker.bindPopup("<b style=\"font-size:20px\">Rally Blast</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ford Puma Hybrid Rally1</span><br>\
                              <span><b>Category:</b> Rally</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
rb_event02_marker = L.marker([744.328628, 5374.011537], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event02_marker.bindPopup("<b style=\"font-size:20px\">The Dirt Clash</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Choose Your Ride</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Multi Category</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 03
rb_event03_marker = L.marker([643.37391, 5460.625], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event03_marker.bindPopup("<b style=\"font-size:20px\">Moto Rush</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> KTM RC16 Red Bull Team</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//Event 04
rb_event04_marker = L.marker([631.00239, 5460.625], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event04_marker.bindPopup("<b style=\"font-size:20px\">The Asphalt Clash</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Multi Category</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//Event 05
rb_event05_marker = L.marker([666.255554, 5495.5625], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event05_marker.bindPopup("<b style=\"font-size:20px\">Alpha Nitro</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Street Versus</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Red Bull RB20</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,875</span></span><br>", {
    className: "hstPopup"
});

//Event 06
rb_event06_marker = L.marker([678.189697, 5497.8125], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event06_marker.bindPopup("<b style=\"font-size:20px\">The High Clash</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Choose Your Ride</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Multi Category</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//Event 07
rb_event07_marker = L.marker([712.007417, 5402.5], {icon:rb_event_icon}).addTo(rb_events_group);
rb_event07_marker.bindPopup("<b style=\"font-size:20px\">Speed War</b><br>\
                              <i>Event</i><br>\
                              <span><b>Red Bull Speed Clash(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Choose Your Ride</span><br>\
                              <span><b>Weather:</b> TBD</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Multi Category</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,750</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var RBfeatsArr = [[750.436013, 5254.864044, "long_jump", "Observatory", "Long Jump", "360 m", "1,600", "3,000"],  //Feat 01
                  [701.104427, 5495.633903, "long_jump", "Red Hill", "Long Jump", "270 m", "1,600", "3,000"],  //Feat 02
                  [594.891512, 5460.455341, "long_jump", "Caldera", "Long Jump", "390 m", "1,600", "3,000"],  //Feat 03
                  [674.234668, 5485.380855, "escape", "Motorfest Gate", "Escape", "820 m", "2,400", "4,500"],  //Feat 04
                  [638.448573, 5453.56105, "slalom", "Paddocks", "Slalom", "5,600 PTS", "2,400", "4,500"],  //Feat 05
                 ]

function createRBFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["rb_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(rb_feats_group);
        window["rb_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Apex Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Red Bull Speed Clash</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createRBFeatsMarkers(RBfeatsArr);

//PHOTO OPS
//Photo Ops 1 Apex Views - Glass Turn
rb_photo_ops01_marker = L.marker([510.415884, 5446.5], {icon:photo_op_icon}).addTo(rb_photo_ops_group);
rb_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Apex Views - Glass Turn</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Speed Clash</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford Puma Hybrid Rally1</span><br>\
                              <span>- Nitro</span><br>\
                              <span>- Red Bull glass turn</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Apex Views - RB Cannon
rb_photo_ops02_marker = L.marker([688.383913, 5451.97006], {icon:photo_op_icon}).addTo(rb_photo_ops_group);
rb_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Apex Views - RB Cannon</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Speed Clash</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ferrari 488 GT3 AF Corse</span><br>\
                              <span>- Jumping from the Red Bull cannon</span><br>\
                              <span>- Red Bull playground</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Apex Views - RB Drift
rb_photo_ops03_marker = L.marker([725.850033, 5393.280197], {icon:photo_op_icon}).addTo(rb_photo_ops_group);
rb_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Apex Views - RB Drift</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Speed Clash</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford Puma Hybrid Rally1</span><br>\
                              <span>- Drifting</span><br>\
                              <span>- Red Bull playground</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Apex Views - RB Speed
rb_photo_ops04_marker = L.marker([697.92717, 5413.43274], {icon:photo_op_icon}).addTo(rb_photo_ops_group);
rb_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Apex Views - RB Speed</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Red Bull Speed Clash</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Red Bull vehicle</span><br>\
                              <span>- High Speed</span><br>\
                              <span>- Red Bull playground</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Apex Pylons
//Collectible 1 Apex Pylons
rb_collectible01_marker = L.marker([715.599868, 5358.985518], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Apex Pylons
rb_collectible02_marker = L.marker([730.621114, 5394.16408], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Apex Pylons
rb_collectible03_marker = L.marker([688.893139, 5412.75], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Apex Pylons
rb_collectible04_marker = L.marker([702.696959, 5461.162448], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Apex Pylons
rb_collectible05_marker = L.marker([716.835117, 5487.413787], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Apex Pylons
rb_collectible06_marker = L.marker([593.391382, 5431.75], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Apex Pylons
rb_collectible07_marker = L.marker([641.820585, 5458.6875], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Pylons</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Apex Shelters
rb_collectible08_marker = L.marker([616.642106, 5432.347846], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Shelters</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Apex Shelters
rb_collectible09_marker = L.marker([543.442807, 5434.734332], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Shelters</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Apex Shelters
rb_collectible10_marker = L.marker([750.495989, 5335.739382], {icon:collectible_icon}).addTo(rb_collectibles_group);
rb_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Red Bull Speed Clash</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Apex Shelters</span><br>", {
    className: "hstPopup"
});

rb_container_group.addTo(map);
rb_events_group.addTo(map);
rb_feats_group.addTo(map);
rb_collectibles_group.addTo(map);
rb_photo_ops_group.addTo(map);