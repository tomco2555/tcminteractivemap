var motorsports_container_icon = L.icon({
    iconUrl: 'img/Motorsports/motorsports_container.png',
    iconSize: [75, 64],
    iconAnchor: [37.5,64],
    popupAnchor: [0,-50],
});

var motorsports_event_icon = L.icon({
    iconUrl: 'img/Motorsports/motorsports_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

motorsports_container_group = L.featureGroup();
motorsports_events_group = L.featureGroup();
motorsports_photo_ops_group = L.featureGroup();
motorsports_feats_group = L.featureGroup();
motorsports_collectibles_group = L.featureGroup();

//CONTAINER
motorsports_container_marker = L.marker([549.091931, 3628.872001], {icon:motorsports_container_icon}).addTo(motorsports_container_group);
motorsports_container_marker.bindPopup('<b>Motorsports</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
motorsports_event01_marker = L.marker([312.761741, 3541.125], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event01_marker.bindPopup("<b style=\"font-size:20px\">Opening Act: Alpha Debut</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(1/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ivory Tower IVT AGP R-07</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,740</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
motorsports_event02_marker = L.marker([494.180072, 3592.721167], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event02_marker.bindPopup("<b style=\"font-size:20px\">Act 2: Alpha Grand Prix</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(2/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ivory Tower IVT AGP R-07</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,900</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 03
motorsports_event03_marker = L.marker([497.626248, 3592.632779], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event03_marker.bindPopup("<b style=\"font-size:20px\">Act 3: Grand Touring</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(3/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> McLaren Senna GTR</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">23,220</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,500</span></span><br>", {
    className: "hstPopup"
});

//Event 04
motorsports_event04_marker = L.marker([526.609473, 3595.019264], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event04_marker.bindPopup("<b style=\"font-size:20px\">Act 4: Alpha Gamble</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(4/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Proto Alpha Mark II</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,320</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
motorsports_event05_marker = L.marker([306.013361, 3501.416004], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event05_marker.bindPopup("<b style=\"font-size:20px\">Act 5: Acura Derby</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(5/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Acura NSX GT3</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">25,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">45,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
motorsports_event06_marker = L.marker([534.133743, 3595.107652], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event06_marker.bindPopup("<b style=\"font-size:20px\">Act 6: Alpha Rising</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(6/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Proto Alpha Mark X</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,900</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
motorsports_event07_marker = L.marker([312.111038, 3535.975848], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event07_marker.bindPopup("<b style=\"font-size:20px\">Act 7: 24h Of Hanauma</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(7/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Bugatti Bolide</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">25,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">45,000</span></span><br>", {
    className: "hstPopup"
});

//Event 08
motorsports_event08_marker = L.marker([307.6045, 3506.365751], {icon:motorsports_event_icon}).addTo(motorsports_events_group);
motorsports_event08_marker.bindPopup("<b style=\"font-size:20px\">Alpha Grand Finale</b><br>\
                              <i>Event</i><br>\
                              <span><b>Motorsports(8/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Red Bull RB18</span><br>\
                              <span><b>Category:</b> Alpha GP</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">19,350</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var MotorsportsfeatsArr = [[396.53593, 3657.333049, "bullseye", "Water Bridge", "Bullseye", "7,120 PTS", "4,800", "9,000"],  //Feat 01
                           [462.015925, 3597.625, "speedtrap", "Paddocks", "Speedtrap", "170.0 km/h", "960", "1,800"],  //Feat 02
                           [448.868245, 3491.339732, "speedtrap", "Forest Straight", "Speedtrap", "250.0 km/h", "960", "1,800"],  //Feat 03
                           [313.989018, 3434.947966, "slalom", "Marina Straight", "Slalom", "6,790 PTS", "3,840", "7,200"],  //Feat 04
                           [420.888077, 3567.625, "slalom", "Peak Chicane", "Slalom", "9,240 PTS", "3,840", "7,200"],  //Feat 05
                          ]

function createMotorsportsFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["motorsports_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(motorsports_feats_group);
        window["motorsports_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Alpha Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Motorsports</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createMotorsportsFeatsMarkers(MotorsportsfeatsArr);

//PHOTO OPS
//Photo Ops 1 Alpha Views - Pit Stop
motorsports_photo_ops01_marker = L.marker([514.51148, 3597.494138], {icon:photo_op_icon}).addTo(motorsports_photo_ops_group);
motorsports_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Alpha Views - Pit Stop</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Motorsports</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ivory Tower IVT AGP R-07</span><br>\
                              <span>- Pitlane</span><br>\
                              <span>- North-east of Hanauma Racetrack</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Alpha Views - Starting Grid
motorsports_photo_ops02_marker = L.marker([303.27797, 3520.773052], {icon:photo_op_icon}).addTo(motorsports_photo_ops_group);
motorsports_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Alpha Views - Starting Grid</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Motorsports</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ivory Tower IVT AGP R-07</span><br>\
                              <span>- Starting Grid</span><br>\
                              <span>- Near the marina of Hanauma Racetrack</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Alpha Views - High Speed
motorsports_photo_ops03_marker = L.marker([323.027747, 3587.859808], {icon:photo_op_icon}).addTo(motorsports_photo_ops_group);
motorsports_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Alpha Views - High Speed</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Motorsports</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Racing Vehicle</span><br>\
                              <span>- High Speed</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Alpha Views - Water Bridge
motorsports_photo_ops04_marker = L.marker([464.8808, 3694.375], {icon:photo_op_icon}).addTo(motorsports_photo_ops_group);
motorsports_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Alpha Views - Water Bridge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Motorsports</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Racing Vehicle</span><br>\
                              <span>- Water bridge of Hanauma Racetrack</span><br>\
                              <span>- Night</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Alpha Views - Podium
motorsports_photo_ops05_marker = L.marker([290.68671, 3506.719305], {icon:photo_op_icon}).addTo(motorsports_photo_ops_group);
motorsports_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Alpha Views - Water Bridge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Motorsports</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Red Bull RB18</span><br>\
                              <span>- Next to the Hanauma Racetrack podium at the marina</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Alpha Trophy
//Collectible 1 Alpha Trophy
motorsports_collectible01_marker = L.marker([424.256703, 3653.095606], {icon:collectible_icon}).addTo(motorsports_collectibles_group);
motorsports_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Motorsports</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Alpha Trophy</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Alpha Trophy
motorsports_collectible02_marker = L.marker([364.965455, 3600.410953], {icon:collectible_icon}).addTo(motorsports_collectibles_group);
motorsports_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Motorsports</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Alpha Trophy</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Alpha Trophy
motorsports_collectible03_marker = L.marker([435.270952, 3618.875], {icon:collectible_icon}).addTo(motorsports_collectibles_group);
motorsports_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Motorsports</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Alpha Trophy</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Alpha Trophy
motorsports_collectible04_marker = L.marker([568.249557, 3605.095536], {icon:collectible_icon}).addTo(motorsports_collectibles_group);
motorsports_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Motorsports</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Alpha Trophy</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Alpha Trophy
motorsports_collectible05_marker = L.marker([305.666792, 3492.400392], {icon:collectible_icon}).addTo(motorsports_collectibles_group);
motorsports_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Motorsports</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Alpha Trophy</span><br>", {
    className: "hstPopup"
});

motorsports_container_group.addTo(map);
motorsports_events_group.addTo(map);
motorsports_feats_group.addTo(map);
motorsports_collectibles_group.addTo(map);
motorsports_photo_ops_group.addTo(map);