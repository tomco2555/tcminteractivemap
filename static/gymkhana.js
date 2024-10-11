var gym_container_icon = L.icon({
    iconUrl: 'img/Gymkhana/gym_container.png',
    iconSize: [88, 75],
    iconAnchor: [44,75],
    popupAnchor: [0,-60],
});

var gym_event_icon = L.icon({
    iconUrl: 'img/Gymkhana/gym_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

gym_container_group = L.featureGroup();
gym_events_group = L.featureGroup();
gym_photo_ops_group = L.featureGroup();
gym_feats_group = L.featureGroup();
gym_collectibles_group = L.featureGroup();

//CONTAINER
gym_container_marker = L.marker([441.772941, 1589.310879], {icon:gym_container_icon}).addTo(gym_container_group);
gym_container_marker.bindPopup('<b>Gymkhana Grid Masters</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
gym_event01_marker = L.marker([423.062477, 1526.997094], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event01_marker.bindPopup("<b style=\"font-size:20px\">Grid Paradise</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(1/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Stunt Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Hoonigan Ford Hoonicorn Mustang</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,760</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
gym_event02_marker = L.marker([386.282553, 1646.5], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event02_marker.bindPopup("<b style=\"font-size:20px\">Rocket Science</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(2/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Stunt Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Hoonigan Ford Hoonicorn Mustang</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,760</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
gym_event03_marker = L.marker([697.30853, 1616.28112], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event03_marker.bindPopup("<b style=\"font-size:20px\">Scotto vs Scotto</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(3/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
gym_event04_marker = L.marker([1658.574718, 1335.033637], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event04_marker.bindPopup("<b style=\"font-size:20px\">Volkhana</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(4/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Hoonigan Chevrolet Big Block 632 Camaro</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,640</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
gym_event05_marker = L.marker([1570.071431, 1343.121799], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event05_marker.bindPopup("<b style=\"font-size:20px\">Carbon Project</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(5/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Delivery</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Mitsubishi Lancer Evolution IX</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 06
gym_event06_marker = L.marker([342.502456, 1558.827551], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event06_marker.bindPopup("<b style=\"font-size:20px\">Rocket Up</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(6/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Stunt Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Hoonigan Audi S1 E-tron Quattro Hoonitron</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,760</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
gym_event07_marker = L.marker([478.879509, 1692.018748], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event07_marker.bindPopup("<b style=\"font-size:20px\">This vs That</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(7/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 08
gym_event08_marker = L.marker([586.337254, 1713.721778], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event08_marker.bindPopup("<b style=\"font-size:20px\">Racekhana</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(8/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dusk</span><br>\
                              <span><b>Car:</b> Hoonigan Audi S1 E-tron Quattro Hoonitron</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,300</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 09
gym_event09_marker = L.marker([467.495927, 1587.294197], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event09_marker.bindPopup("<b style=\"font-size:20px\">Hoonigan Burnyard</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(9/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Stunt Trial</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Hoonigan Ford Hoonicorn Mustang</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,760</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 10
gym_event10_marker = L.marker([561.482627, 1853.545923], {icon:gym_event_icon}).addTo(gym_events_group);
gym_event10_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Motorfest</b><br>\
                              <i>Event</i><br>\
                              <span><b>Gymkhana Grid Masters(10/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Hoonigan Mitsubishi Lancer Evolution IX</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var GymfeatsArr = [[489.729495, 1805.930164, "slalom", "Barbers Point Harbor", "Slalom", "4,280 PTS", "2,880", "5,400"],  //Feat 01
                   [566.812196, 1632.409742, "speedtrap", "Nai'a Lagoon Beach", "Speedtrap", "210.0 km/h", "960", "1,800"],  //Feat 02
                   [336.509503, 1554.751035, "bullseye", "Gymkhana Grid Park", "Bullseye", "4,290 PTS", "2,880", "5,400"],  //Feat 03
                   [910.265758, 1477.455002, "slalom", "Leeward Coast", "Slalom", "2,990 PTS", "2,880", "5,400"],  //Feat 04
                   [1075.883226, 1537, "bullseye", "Observatory Road", "Bullseye", "4,180 PTS", "4,800", "9,000"],  //Feat 05
                   [1558.451911, 1398.507567, "slalom", "Pokai Road", "Slalom", "4,120 PTS", "2,880", "5,400"],  //Feat 06
                  ]

function createGymFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["gym_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(gym_feats_group);
        window["gym_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Gymkhana Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Gymkhana Grid Masters</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createGymFeatsMarkers(GymfeatsArr);

//PHOTO OPS
//Photo Ops 1 Gymkhana Views - Hoonigan Hangar
gym_photo_ops01_marker = L.marker([460.07793, 1575.787462], {icon:photo_op_icon}).addTo(gym_photo_ops_group);
gym_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Views - Hoonigan Hangar</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Gymkhana Grid Masters</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hoonigan Ford Hoonicorn Mustang</span><br>\
                              <span>- Drift</span><br>\
                              <span>- Hoonigan Hangar entrance</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Gymkhana Views - Waianae Gas Station
gym_photo_ops02_marker = L.marker([1615.5654, 1352.25], {icon:photo_op_icon}).addTo(gym_photo_ops_group);
gym_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Views - Waianae Gas Station</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Gymkhana Grid Masters</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hoonigan Mitsubishi Lancer Evolution IX</span><br>\
                              <span>- Gas pumps</span><br>\
                              <span>- Waianae Gas Station</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Gymkhana Views - Perched Boat
gym_photo_ops03_marker = L.marker([356.665471, 1567.746254], {icon:photo_op_icon}).addTo(gym_photo_ops_group);
gym_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Views - Perched Boat</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Gymkhana Grid Masters</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hoonigan Ford Hoonicorn Mustang</span><br>\
                              <span>- Donut</span><br>\
                              <span>- Highest perched boat</span><br>\
                              <span>- Gymkhana Grid Park</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Gymkhana Views - Barbers Point Harbor
gym_photo_ops04_marker = L.marker([523.109733, 1790.05401], {icon:photo_op_icon}).addTo(gym_photo_ops_group);
gym_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Views - Barbers Point Harbor</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Gymkhana Grid Masters</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hoonigan car</span><br>\
                              <span>- Jumping above the rainbow containers</span><br>\
                              <span>- Barbers Point Harbor</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Gymkhana Views - Barbers Point Tunnels
gym_photo_ops05_marker = L.marker([467.561376, 1756.737724], {icon:photo_op_icon}).addTo(gym_photo_ops_group);
gym_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Views - Barbers Point Tunnels</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Gymkhana Grid Masters</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hoonigan Mitsubishi Lancer Evolution IX</span><br>\
                              <span>- Burn</span><br>\
                              <span>- Lowest tunnel near the small cargo ship</span><br>\
                              <span>- Barbers Point Harbor</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Gymkhana Mark
//Collectible 1 Gymkhana Mark
gym_collectible01_marker = L.marker([358.131574, 1607.875], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Gymkhana Mark
gym_collectible02_marker = L.marker([380.567949, 1616.625], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Gymkhana Mark
gym_collectible03_marker = L.marker([370.361768, 1563.324705], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Gymkhana Mark
gym_collectible04_marker = L.marker([370.136144, 1553.375], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Gymkhana Mark
gym_collectible05_marker = L.marker([387.194127, 1548.875], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Gymkhana Mark
gym_collectible06_marker = L.marker([403.641394, 1518.974262], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Gymkhana Mark
gym_collectible07_marker = L.marker([472.006152, 1589.25], {icon:collectible_icon}).addTo(gym_collectibles_group);
gym_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Gymkhana Grid Masters</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Gymkhana Mark</span><br>", {
    className: "hstPopup"
});

gym_container_group.addTo(map);
gym_events_group.addTo(map);
gym_feats_group.addTo(map);
gym_collectibles_group.addTo(map);
gym_photo_ops_group.addTo(map);