var oa_container_icon = L.icon({
    iconUrl: 'img/OffAdd/oa_container.png',
    iconSize: [45, 75],
    iconAnchor: [22.5,75],
    popupAnchor: [0,-60],
});

var oa_event_icon = L.icon({
    iconUrl: 'img/OffAdd/oa_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

oa_container_group = L.featureGroup();
oa_events_group = L.featureGroup();
oa_photo_ops_group = L.featureGroup();
oa_feats_group = L.featureGroup();
oa_collectibles_group = L.featureGroup();

//CONTAINER
oa_container_marker = L.marker([2013.316226, 2192.5625], {icon:oa_container_icon}).addTo(oa_container_group);
oa_container_marker.bindPopup('<b>Off-roading Addict</b><br>\
                            <i>Container</i>', {
                        className: "hstPopup"
});

//EVENTS
//Event 01
oa_event01_marker = L.marker([2066.470511, 2157.382789], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event01_marker.bindPopup("<b style=\"font-size:20px\">Mud Hour</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(1/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> KTM 525 XC (Race Spec)</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
oa_event02_marker = L.marker([2580.560461, 1760.75], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event02_marker.bindPopup("<b style=\"font-size:20px\">Off-road Island</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(2/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Toyota Tacoma</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 03
oa_event03_marker = L.marker([3089.048966, 2279.875], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event03_marker.bindPopup("<b style=\"font-size:20px\">Friday Night Rides</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(3/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Bike:</b> BMW R1200GS Adventure</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 04
oa_event04_marker = L.marker([2195.056366, 1719.75], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event04_marker.bindPopup("<b style=\"font-size:20px\">Red-Hot West</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(4/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Ivory Tower IVT Falcon S-1000</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 05
oa_event05_marker = L.marker([1866.690101, 1592.375], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event05_marker.bindPopup("<b style=\"font-size:20px\">The Descent</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(5/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Land Rover Defender Works V8 Intrepid Outdoors</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 06
oa_event06_marker = L.marker([1696.321025, 2655.875], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event06_marker.bindPopup("<b style=\"font-size:20px\">Gear Valley</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(6/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Volkswagen Beetle Hoodlum Racing Crew Ed.</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
oa_event07_marker = L.marker([2460.574963, 2850.08227], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event07_marker.bindPopup("<b style=\"font-size:20px\">Car vs Wild</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(7/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Jeep Wrangler Unlimited Rubicon 392</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 08
oa_event08_marker = L.marker([3044.544343, 2284.75], {icon:oa_event_icon}).addTo(oa_events_group);
oa_event08_marker.bindPopup("<b style=\"font-size:20px\">Waimea Sky</b><br>\
                              <i>Event</i><br>\
                              <span><b>Off-roading Addict(8/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Kawasaki KX450F</span><br>\
                              <span><b>Category:</b> Motocross</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var OAfeatsArr = [[2157.059146, 2134.932149, "escape", "Kunia Fields", "Escape", "560 m", "2,880", "5,400"],  //Feat 01
                  [2208.84741, 2373.227134, "slalom", "Mililani", "Slalom", "5,880 PTS", "2,880", "5,400"],  //Feat 02
                  [2280.501828, 1851.25, "bullseye", "Volcanoes Road", "Bullseye", "8,020 PTS", "3,840", "7,200"],  //Feat 03
                  [2277.296283, 1613.264121, "speedtrap", "Mauna Pele Red Hill", "Speedtrap", "110.0 km/h", "960", "1,800"],  //Feat 04
                  [2652.367231, 2041.75, "escape", "North Fork Kaukonahua River", "Escape", "460 m", "2,880", "5,400"],  //Feat 05
                  [2795.998647, 1295.0625, "slalom", "Mokuleia Beach", "Slalom", "5,900 PTS", "2,880", "5,400"],  //Feat 06
                  [2975.753937, 2139, "speedtrap", "Waimea Road", "Speedtrap", "120.0 km/h", "960", "1,800"],  //Feat 07
                  [3148.862036, 2527.199636, "bullseye", "Koolauloa", "Bullseye", "2,950 PTS", "3,840", "7,200"],  //Feat 08
                  [1676.762304, 2063.1875, "escape", "Honouliuli Gulch", "Escape", "610 m", "2,880", "5,400"],  //Feat 09
               ]

function createOAFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["oa_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(oa_feats_group);
        window["oa_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Wild Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Off-roading Addict</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createOAFeatsMarkers(OAfeatsArr);

//PHOTO OPS
//Photo Ops 1 Wild Views - Wrecked Plane
oa_photo_ops01_marker = L.marker([2559.503667, 1519.749249], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Wrecked Plane</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid</span><br>\
                              <span>- Plane Wreck</span><br>\
                              <span>- source of Makaleha River</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Wild Views - Crater
oa_photo_ops02_marker = L.marker([2179.008291, 1390.525485], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Crater</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid</span><br>\
                              <span>- highest spike of the Mauna Pele Nunui Crater in the background</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Wild Views - Jungle Pond
oa_photo_ops03_marker = L.marker([2683.647888, 2627.255245], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Jungle Pond</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ivory Tower IVT Falcon S-1000 Adventurer Edition</span><br>\
                              <span>- Jungle Pond</span><br>\
                              <span>- Hau'ula Forest</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Wild Views - Farming
oa_photo_ops04_marker = L.marker([1616.072449, 2541.4375], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Farming</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid</span><br>\
                              <span>- Jump</span><br>\
                              <span>- Farm</span><br>\
                              <span>- countryside south of the Pearl Botanical Garden</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Wild Views - Lost Plane
oa_photo_ops05_marker = L.marker([2401.492618, 1958.25], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Lost Plane</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid</span><br>\
                              <span>- Plane wreck</span><br>\
                              <span>- western hills above Schofield Barracks</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Wild Views - Purple Tree
oa_photo_ops06_marker = L.marker([2743.2775, 1538.419992], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Purple Tree</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ivory Tower IVT Falcon S-1000 Adventurer Edition</span><br>\
                              <span>- Jacaranda Tree</span><br>\
                              <span>- Peacock Flats panel</span><br>\
                              <span>- near Mokuleia</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 Wild Views - Bunker
oa_photo_ops07_marker = L.marker([2860.316771, 2385.6875], {icon:photo_op_icon}).addTo(oa_photo_ops_group);
oa_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">Wild Views - Bunker</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Off-roading Addict</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ivory Tower IVT Falcon S-1000 Adventurer Edition</span><br>\
                              <span>- bunker under the red tree</span><br>\
                              <span>- eastern side of Koolauloa Mountain</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Wild Look
//Collectible 1 Wild Look
oa_collectible01_marker = L.marker([3108.816877, 2276.4375], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Wild Look
oa_collectible02_marker = L.marker([2524.583663, 1801.708078], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Wild Look
oa_collectible03_marker = L.marker([2560.758156, 2480.75], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Wild Look
oa_collectible04_marker = L.marker([2070.271057, 2830.375], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Wild Look
oa_collectible05_marker = L.marker([2006.642472, 3502], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Wild Look
oa_collectible06_marker = L.marker([1573.080565, 3870.348967], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Wild Look
oa_collectible07_marker = L.marker([1106.303566, 3527.931558], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Wild Look
oa_collectible08_marker = L.marker([1118.63864, 3132.5], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Look</span><br>", {
    className: "hstPopup"
});

//Wild Raider
//Collectible 1 Wild Raider
oa_collectible09_marker = L.marker([2267.616911, 1378.946612], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Wild Raider
oa_collectible10_marker = L.marker([2714.361993, 1086.25], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Wild Raider
oa_collectible11_marker = L.marker([2507.377215, 1499.25], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible11_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Wild Raider
oa_collectible12_marker = L.marker([2861.747996, 1684.125], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible12_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Wild Raider
oa_collectible13_marker = L.marker([2866.998829, 2358.643057], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible13_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Wild Raider
oa_collectible14_marker = L.marker([2860.378709, 2384.0625], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible14_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Wild Raider
oa_collectible15_marker = L.marker([2570.47653, 2499.799248], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible15_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Wild Raider
oa_collectible16_marker = L.marker([2760.511531, 2665.25], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible16_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Wild Raider
oa_collectible17_marker = L.marker([1776.065154, 3047.3125], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible17_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Wild Raider
oa_collectible18_marker = L.marker([1727.202282, 3197.375], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible18_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Wild Raider
oa_collectible19_marker = L.marker([1646.255168, 3647.6875], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible19_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Wild Raider
oa_collectible20_marker = L.marker([1347.269217, 3773.121784], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible20_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Wild Raider
oa_collectible21_marker = L.marker([2465.240249, 2913.600967], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible21_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Wild Raider
oa_collectible22_marker = L.marker([2090.678602, 3613.580817], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible22_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Raider</span><br>", {
    className: "hstPopup"
});

//Wild Tiki
//Collectible 1 Wild Tiki
oa_collectible23_marker = L.marker([1861.407332, 1656.486023], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible23_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Wild Tiki
oa_collectible24_marker = L.marker([2589.978164, 1668.41845], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible24_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Wild Tiki
oa_collectible25_marker = L.marker([2565.881468, 1534.625], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible25_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Wild Tiki
oa_collectible26_marker = L.marker([3156.733232, 2290.561554], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible26_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Wild Tiki
oa_collectible27_marker = L.marker([2472.766311, 2333.125], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible27_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Wild Tiki
oa_collectible28_marker = L.marker([1796.820076, 2912.25], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible28_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Wild Tiki
oa_collectible29_marker = L.marker([1839.640608, 3101.625], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible29_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Wild Tiki
oa_collectible30_marker = L.marker([1990.063924, 2950.5625], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible30_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Tiki</span><br>", {
    className: "hstPopup"
});

//Wild Chimney
//Collectible 1 Wild Chimney
oa_collectible31_marker = L.marker([2173.383191, 1391.8125], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible31_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Chimney</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Wild Chimney
oa_collectible32_marker = L.marker([1650.440106, 3107.027197], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible32_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Chimney</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Wild Chimney
oa_collectible33_marker = L.marker([1554.021444, 2718.375], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible33_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Chimney</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Wild Chimney
oa_collectible34_marker = L.marker([1178.517924, 3135.716186], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible34_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Chimney</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Wild Chimney
oa_collectible35_marker = L.marker([1401.086435, 3801.406056], {icon:collectible_icon}).addTo(oa_collectibles_group);
oa_collectible35_marker.bindPopup("<b style=\"font-size:20px\">Off-roading Addict</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Wild Chimney</span><br>", {
    className: "hstPopup"
});

oa_container_group.addTo(map);
oa_events_group.addTo(map);
oa_photo_ops_group.addTo(map);
oa_feats_group.addTo(map);
oa_collectibles_group.addTo(map);





