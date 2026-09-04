var tcs_container_icon = L.icon({
    iconUrl: 'img/ChaseSquad/tcs_container.png',
    iconSize: [55, 75],
    iconAnchor: [27.5,75],
    popupAnchor: [0,-60],
});

var tcs_event_icon = L.icon({
    iconUrl: 'img/ChaseSquad/tcs_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

tcs_container_group = L.featureGroup();
tcs_events_group = L.featureGroup();
tcs_photo_ops_group = L.featureGroup();
tcs_feats_group = L.featureGroup();
tcs_collectibles_group = L.featureGroup();

//Container
tcs_container_marker = L.marker([1400.43992, 5347.495033], {icon:tcs_container_icon}).addTo(tcs_container_group);
tcs_container_marker.bindPopup('<b>The Chase Squad</b><br>\
                                <i>Container</i>', {
    className: "hstPopup"
})

//Events
//Event 01
tcs_event01_marker = L.marker([1385.940402, 5378.519343], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event01_marker.bindPopup("<b style=\"font-size:20px\">Day One</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Target Smash</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Audi RS 6 Avant Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
tcs_event02_marker = L.marker([1346.165273, 5375.867692], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event02_marker.bindPopup("<b style=\"font-size:20px\">Training Beasts</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Target Smash</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Audi RS 6 Avant Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
tcs_event03_marker = L.marker([1490.234129, 4609.010388], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event03_marker.bindPopup("<b style=\"font-size:20px\">Dog Eat Dog</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Pursuit</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ford Mustang Dark Horse Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
tcs_event04_marker = L.marker([1493.240948, 5344.047887], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event04_marker.bindPopup("<b style=\"font-size:20px\">First Night Out</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ivory Tower Ogmios Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
tcs_event05_marker = L.marker([1508.614803, 5430.049749], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event05_marker.bindPopup("<b style=\"font-size:20px\">Encounter</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Ivory Tower Ogmios Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 06
tcs_event06_marker = L.marker([206.63594, 5517.475061], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event06_marker.bindPopup("<b style=\"font-size:20px\">Chase Squad Assemble</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Pursuit</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ivory Tower Aezus Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
tcs_event07_marker = L.marker([734.939713, 5740.904939], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event07_marker.bindPopup("<b style=\"font-size:20px\">Night Off?</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack / Pursuit</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 08
tcs_event08_marker = L.marker([832.158753, 5982.24221], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event08_marker.bindPopup("<b style=\"font-size:20px\">Dogged Mindset</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Pursuit</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Porsche 911 GT3 RS Chase Squad Ed.</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 09
tcs_event09_marker = L.marker([1664.340936, 5077.5], {icon:tcs_event_icon}).addTo(tcs_events_group);
tcs_event09_marker.bindPopup("<b style=\"font-size:20px\">Dogs V Cats</b><br>\
                              <i>Event</i><br>\
                              <span><b>The Chase Squad(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack / Pursuit</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Helicopter</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">28,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">54,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var TCSfeatsArr = [[1326.022428, 5065.75, "slalom", "Kealaloloa", "Slalom", "5,440 PTS", "2,880", "5,400"],  //Feat 01
                    [414.756358, 5368.354683, "slalom", "Kahikinui", "Slalom", "5,060 PTS", "2,880", "5,400"],  //Feat 02
                    [768.657436, 4463.96511, "slalom", "Hanawi", "Slalom", "5,110 PTS", "2,880", "5,400"],  //Feat 03
                    [1334.692785, 4995.355856, "speedtrap", "Olowalu", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 04
                    [1747.451653, 5367.647576, "speedtrap", "Waiehu", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 05
                    [951.785067, 5102.65931, "escape", "Auwahi", "Escape", "960 m", "2,880", "5,400"],  //Feat 06
                   ]

function createTCSFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["tcs_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(tcs_feats_group);
        window["tcs_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Code 10 Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>The Chase Squad</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createTCSFeatsMarkers(TCSfeatsArr);

//Photo Ops
//Photo Ops 1 Code 10 Views - Maui County Mayor
tcs_photo_ops01_marker = L.marker([1645.618085, 5282.441209], {icon:photo_op_icon}).addTo(tcs_photo_ops_group);
tcs_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Code 10 Views - Maui County Mayor</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>The Chase Squad</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2 chase vehicle</span><br>\
                              <span>- Maui County Mayor building</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Code 10 Views - Hana Police Station
tcs_photo_ops02_marker = L.marker([537.256714, 6081.875], {icon:photo_op_icon}).addTo(tcs_photo_ops_group);
tcs_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Code 10 Views - Hana Police Station</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>The Chase Squad</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2 chase vehicle</span><br>\
                              <span>- Hana Police Station</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Code 10 Views - Maui Paniolos Mural
tcs_photo_ops03_marker = L.marker([1686.781799, 5354.212547], {icon:photo_op_icon}).addTo(tcs_photo_ops_group);
tcs_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Code 10 Views - Maui Paniolos Mural</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>The Chase Squad</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar chase vehicle</span><br>\
                              <span>- Maui Paniolos Mural in Kahului</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Code 10 Views - Chase Squad HQ
tcs_photo_ops04_marker = L.marker([1366.859382, 5353.682217], {icon:photo_op_icon}).addTo(tcs_photo_ops_group);
tcs_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Code 10 Views - Chase Squad HQ</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>The Chase Squad</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar chase vehicle</span><br>\
                              <span>- Chase Squad HQ</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Code 10 Views - Queen Ka'ahumanu Center
tcs_photo_ops05_marker = L.marker([1651.964993, 5368.177906], {icon:photo_op_icon}).addTo(tcs_photo_ops_group);
tcs_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Code 10 Views - Queen Ka'ahumanu Center</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>The Chase Squad</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2 chase vehicle</span><br>\
                              <span>- Queen Ka'ahumanu Center</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Code 10 Views - Chase Speed
tcs_photo_ops06_marker = L.marker([1213.432324, 5255.924705], {icon:photo_op_icon}).addTo(tcs_photo_ops_group);
tcs_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Code 10 Views - Chase Speed</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>The Chase Squad</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar chase vehicle</span><br>\
                              <span>- High Speed</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Code 10 - Gordon
//Collectible 1 Code 10 - Gordon
tcs_collectible01_marker = L.marker([1772.544324, 5377.193518], {icon:collectible_icon}).addTo(tcs_collectibles_group);
tcs_collectible01_marker.bindPopup("<b style=\"font-size:20px\">The Chase Squad</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Code 10 - Gordon</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Code 10 - Gordon
tcs_collectible02_marker = L.marker([1691.085142, 5376.309634], {icon:collectible_icon}).addTo(tcs_collectibles_group);
tcs_collectible02_marker.bindPopup("<b style=\"font-size:20px\">The Chase Squad</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Code 10 - Gordon</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Code 10 - Gordon
tcs_collectible03_marker = L.marker([1538.012433, 5323.983732], {icon:collectible_icon}).addTo(tcs_collectibles_group);
tcs_collectible03_marker.bindPopup("<b style=\"font-size:20px\">The Chase Squad</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Code 10 - Gordon</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Code 10 - Gordon
tcs_collectible04_marker = L.marker([1592.273781, 5212.437638], {icon:collectible_icon}).addTo(tcs_collectibles_group);
tcs_collectible04_marker.bindPopup("<b style=\"font-size:20px\">The Chase Squad</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Code 10 - Gordon</span><br>", {
    className: "hstPopup"
});

tcs_container_group.addTo(map);
tcs_events_group.addTo(map);
tcs_feats_group.addTo(map);
tcs_collectibles_group.addTo(map);
tcs_photo_ops_group.addTo(map);