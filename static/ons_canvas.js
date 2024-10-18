var ons_container_icon = L.icon({
    iconUrl: 'img/ONS/ons_container.png',
    iconSize: [75, 75],
    iconAnchor: [37.5,75],
    popupAnchor: [0,-60],
});

var ons_event_icon = L.icon({
    iconUrl: 'img/ONS/ons_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

ons_container_group = [];
ons_events_group = [];
ons_photo_ops_group = [];
ons_feats_group = [];
ons_collectibles_group = [];

//CONTAINER
ons_container_marker = L.marker([1202.091024, 3586.268817], {icon:ons_container_icon});
ons_container_marker.bindPopup('<b>Ocean\'N Sky</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
ons_event01_marker = L.marker([955.68757, 3709.9375], {icon:ons_event_icon});
ons_event01_marker.bindPopup("<b style=\"font-size:20px\">Rocket Start</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(1/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Boat:</b> Proto WR1</span><br>\
                              <span><b>Category:</b> Powerboat</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
ons_event02_marker = L.marker([941.561059, 3562.1875], {icon:ons_event_icon});
ons_event02_marker.bindPopup("<b style=\"font-size:20px\">Staggering Blue</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(2/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Plane:</b> Beechcraft Model 17 Staggerwing</span><br>\
                              <span><b>Category:</b> Plane</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 03
ons_event03_marker = L.marker([515.445809, 3684.981222], {icon:ons_event_icon});
ons_event03_marker.bindPopup("<b style=\"font-size:20px\">Hanauma Waters</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(3/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Boat:</b> Ice Marine Bladerunner 35</span><br>\
                              <span><b>Category:</b> Powerboat</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
ons_event04_marker = L.marker([1282.697321, 3191.014317], {icon:ons_event_icon});
ons_event04_marker.bindPopup("<b style=\"font-size:20px\">Airwalker</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(4/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Plane:</b> Zivko Edge 540 V3</span><br>\
                              <span><b>Category:</b> Plane</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">21,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,500</span></span><br>", {
    className: "hstPopup"
});

//Event 05
ons_event05_marker = L.marker([2488.321684, 2269.264089], {icon:ons_event_icon});
ons_event05_marker.bindPopup("<b style=\"font-size:20px\">Yacht Surfin'</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(5/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Boat:</b> Lamborghini Tecnomar for Lamborghini 63</span><br>\
                              <span><b>Category:</b> Powerboat</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
ons_event06_marker = L.marker([1691.365246, 1774.594317], {icon:ons_event_icon});
ons_event06_marker.bindPopup("<b style=\"font-size:20px\">Red Winds</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(6/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Plane:</b> Grumman F8F Bearcat</span><br>\
                              <span><b>Category:</b> Plane</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
ons_event07_marker = L.marker([732.549154, 2195.160092], {icon:ons_event_icon});
ons_event07_marker.bindPopup("<b style=\"font-size:20px\">Deep Sport</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(7/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Boat:</b> DCB M31 Widebody</span><br>\
                              <span><b>Category:</b> Powerboat</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 08
ons_event08_marker = L.marker([461.957576, 2393.650946], {icon:ons_event_icon});
ons_event08_marker.bindPopup("<b style=\"font-size:20px\">Skyline Ride</b><br>\
                              <i>Event</i><br>\
                              <span><b>Ocean\'N Sky(8/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Plane:</b> Granville Brothers Aircraft Gee Bee R-1</span><br>\
                              <span><b>Category:</b> Plane</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var ONSfeatsArr = [[2233.88017, 2026.350137, "bullseye", "Haleiwa Beach", "Bullseye", "3,900 PTS", "3,840", "7,200"],  //Feat 01
                   [2110.032686, 1810.900467, "buoy_smashing", "Haleiwa Waters", "Buoy Smashing", "16,890 PTS", "5,760", "10,800"],  //Feat 02
                   [1880.887866, 1124.5, "bullseye", "Kaena", "Bullseye", "4,110 PTS", "3,840", "7,200"],  //Feat 03
                   [1298.322628, 1258.25, "slalom", "Kaimu Waters", "Slalom", "5,540 PTS", "3,840", "7,200"],  //Feat 04
                   [1410.533467, 1416, "low_altitude", "Nunui Crater", "Low Altitude", "3,660 PTS", "2,880", "5,400"],  //Feat 05
                   [1225.142155, 2090, "escape", "Kunia Fields", "Escape", "1510 m", "2,880", "5,400"],  //Feat 06
                   [611.87461, 2255.777246, "buoy_smashing", "Pearl Harbor", "Buoy Smashing", "17,420 PTS", "5,760", "10,800"],  //Feat 07
                   [666.117595, 3598.094777, "low_altitude", "Kuapa", "Low Altitude", "2,880 PTS", "2,880", "5,400"],  //Feat 08
                   [1089.071714, 3660, "slalom", "Waimanalo Bay", "Slalom", "2,350 PTS", "2,880", "5,400"],  //Feat 09
                   [1080.833198, 3448.029442, "speedtrap", "Waimanalo", "Speedtrap", "220.0 km/h", "960", "1,800"],  //Feat 10
                   [1430.494816, 2715.29004, "low_altitude", "Mililani", "Low Altitude", "3,190 PTS", "2,880", "5,400"],  //Feat 11
                   [2553.451909, 2484.75, "slalom", "Kahuku", "Slalom", "4,720 PTS", "2,880", "5,400"],  //Feat 12
                   [2047.502953, 2887.5, "buoy_smashing", "Ma'akua Waters", "Buoy Smashing", "16,990 PTS", "5,760", "10,800"],  //Feat 13
                 ]

function createONSFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["ons_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["ons_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">ONS Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Ocean\'N Sky</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createONSFeatsMarkers(ONSfeatsArr);

//PHOTO OPS
//Photo Ops 1 Ocean Views - Lighthouse
ons_photo_ops01_marker = L.marker([2357.50689, 1866.25], {icon:photo_op_icon});
ons_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Ocean Views - Lighthouse</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ocean\'N Sky</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Proto WR1</span><br>\
                              <span>- Lighthouse</span><br>\
                              <span>- Laniakea Island</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Sky Views - Stairway To Heaven
ons_photo_ops02_marker = L.marker([1013.9134, 3053.287081], {icon:photo_op_icon});
ons_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Sky Views - Stairway To Heaven</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ocean\'N Sky</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Grumman F8F Bearcat</span><br>\
                              <span>- Stairway To Heaven Antenna</span><br>\
                              <span>- south west of Kaneohe</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Ocean Views - Submarine
ons_photo_ops03_marker = L.marker([736.50225, 2249], {icon:photo_op_icon});
ons_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Ocean Views - Submarine</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ocean\'N Sky</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Proto WR1</span><br>\
                              <span>- USS Submarine Museum</span><br>\
                              <span>- Pearl Harbor</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Sky Views - Kawela Arch
ons_photo_ops04_marker = L.marker([2411.426998, 2176.121119], {icon:photo_op_icon});
ons_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Sky Views - Kawela Arch</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ocean\'N Sky</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Grumman F8F Bearcat</span><br>\
                              <span>- Natural Arch</span><br>\
                              <span>- Waimea Bay</span><br>\
                              <span>- Low Altitude</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Ocean Views - Rainbow Bridge
ons_photo_ops05_marker = L.marker([2147.716779, 2025.375], {icon:photo_op_icon});
ons_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Ocean Views - Rainbow Bridge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ocean\'N Sky</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Proto WR1</span><br>\
                              <span>- Rainbow Bridge</span><br>\
                              <span>- Haleiwa</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Sky Views - Chinaman's Hat
ons_photo_ops06_marker = L.marker([1816.405084, 3171.5], {icon:photo_op_icon});
ons_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Sky Views - Chinaman's Hat</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Ocean\'N Sky</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Grumman F8F Bearcat</span><br>\
                              <span>- Chinaman's Hat</span><br>\
                              <span>- off the coast of Kualoa</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//ONS Seeker
//Collectible 1 ONS Seeker
ons_collectible01_marker = L.marker([2295.278157, 2429.265347], {icon:collectible_icon});
ons_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 2 ONS Seeker
ons_collectible02_marker = L.marker([1098.496947, 1707.220935], {icon:collectible_icon});
ons_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 3 ONS Seeker
ons_collectible03_marker = L.marker([1327.034873, 2775.25], {icon:collectible_icon});
ons_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 4 ONS Seeker
ons_collectible04_marker = L.marker([1348.818371, 2663.125], {icon:collectible_icon});
ons_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 5 ONS Seeker
ons_collectible05_marker = L.marker([874.63639, 2752.875], {icon:collectible_icon});
ons_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 6 ONS Seeker
ons_collectible06_marker = L.marker([1045.523342, 2210.5], {icon:collectible_icon});
ons_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 7 ONS Seeker
ons_collectible07_marker = L.marker([741.322592, 1710.049362], {icon:collectible_icon});
ons_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//Collectible 8 ONS Seeker
ons_collectible08_marker = L.marker([1975.724267, 1400.25], {icon:collectible_icon});
ons_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Seeker</span><br>", {
    className: "hstPopup"
});

//ONS Lost Souls
//Collectible 1 ONS Lost Souls
ons_collectible09_marker = L.marker([815.366098, 3872.65297], {icon:collectible_icon});
ons_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 2 ONS Lost Souls
ons_collectible10_marker = L.marker([279.634654, 3547.9522], {icon:collectible_icon});
ons_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 3 ONS Lost Souls
ons_collectible11_marker = L.marker([312.267893, 3393.75], {icon:collectible_icon});
ons_collectible11_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 4 ONS Lost Souls
ons_collectible12_marker = L.marker([317.270987, 3149.5], {icon:collectible_icon});
ons_collectible12_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 5 ONS Lost Souls
ons_collectible13_marker = L.marker([458.586091, 1693.520741], {icon:collectible_icon});
ons_collectible13_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 6 ONS Lost Souls
ons_collectible14_marker = L.marker([1955.64575, 990.163574], {icon:collectible_icon});
ons_collectible14_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 7 ONS Lost Souls
ons_collectible15_marker = L.marker([2199.796906, 1751.166785], {icon:collectible_icon});
ons_collectible15_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 8 ONS Lost Souls
ons_collectible16_marker = L.marker([2368.117899, 1865], {icon:collectible_icon});
ons_collectible16_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//Collectible 9 ONS Lost Souls
ons_collectible17_marker = L.marker([2483.758718, 2560.5], {icon:collectible_icon});
ons_collectible17_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Lost Souls</span><br>", {
    className: "hstPopup"
});

//ONS Watcher
//Collectible 1 ONS Watcher
ons_collectible18_marker = L.marker([715.005565, 3728.927611], {icon:collectible_icon});
ons_collectible18_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 2 ONS Watcher
ons_collectible19_marker = L.marker([1324.633718, 1913.625], {icon:collectible_icon});
ons_collectible19_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 3 ONS Watcher
ons_collectible20_marker = L.marker([1801.187145, 1514.269172], {icon:collectible_icon});
ons_collectible20_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 4 ONS Watcher
ons_collectible21_marker = L.marker([2032.926875, 1605.662723], {icon:collectible_icon});
ons_collectible21_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 5 ONS Watcher
ons_collectible22_marker = L.marker([1638.198609, 1959.746444], {icon:collectible_icon});
ons_collectible22_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 6 ONS Watcher
ons_collectible23_marker = L.marker([1992.577791, 2672.510079], {icon:collectible_icon});
ons_collectible23_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 7 ONS Watcher
ons_collectible24_marker = L.marker([1866.002988, 2619.125], {icon:collectible_icon});
ons_collectible24_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

//Collectible 8 ONS Watcher
ons_collectible25_marker = L.marker([1585.013656, 2738.978117], {icon:collectible_icon});
ons_collectible25_marker.bindPopup("<b style=\"font-size:20px\">Ocean\'N Sky</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> ONS Watcher</span><br>", {
    className: "hstPopup"
});

ons_container_group.push(ons_container_marker);

for(var i = 1; i <= 8; i++) {
    if(i < 10) {
        ons_events_group.push(window["ons_event0" + i + "_marker"]);
    }
    else {
        ons_events_group.push(window["ons_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 12; i++) {
    ons_feats_group.push(window["ons_feat" + i + "_marker"]);
}

for(var i = 1; i <= 6; i++) {
    if(i < 10) {
        ons_photo_ops_group.push(window["ons_photo_ops0" + i + "_marker"]);
    }
    else {
        ons_photo_ops_group.push(window["ons_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 25; i++) {
    if(i < 10) {
        ons_collectibles_group.push(window["ons_collectible0" + i + "_marker"]);
    }
    else {
        ons_collectibles_group.push(window["ons_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(ons_container_group);
markers_canvas.addMarkers(ons_events_group);
markers_canvas.addMarkers(ons_collectibles_group);
markers_canvas.addMarkers(ons_photo_ops_group);
markers_canvas.addMarkers(ons_feats_group);