var hst_container_icon = L.icon({
    iconUrl: 'img/HST/hst_container.png',
    iconSize: [53, 81],
    iconAnchor: [26.5,81],
    popupAnchor: [0,-60],
});

var hst_event_icon = L.icon({
    iconUrl: 'img/HST/hst_event.png',
    iconSize: [40, 46],
    iconAnchor: [20,46],
    popupAnchor: [0,-35],
});

hst_container_group = [];
hst_events_group = [];
hst_photo_ops_group = [];
hst_feats_group = [];
hst_collectibles_group = [];

//Container
hst_container_marker = L.marker([1514.642559, 3303.776903], {icon:hst_container_icon});
hst_container_marker.bindPopup('<b>Hawaii Scenic Tour</b><br>\
                                <i>Container</i>', {
    className: "hstPopup"
})

//Event 01
hst_event01_marker = L.marker([1463.222549, 3336.483347], {icon:hst_event_icon});
hst_event01_marker.bindPopup("<b style=\"font-size:20px\">Ho'laule'a Hawai'i</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Ford GT</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
hst_event02_marker = L.marker([1474.895846, 3423.125], {icon:hst_event_icon});
hst_event02_marker.bindPopup("<b style=\"font-size:20px\">Wonders of Ko'olau Poko</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Volkswagen Kombi Dak1ne Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">21,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,500</span></span><br>", {
    className: "hstPopup"
});

//Event 03
hst_event03_marker = L.marker([1645.748067, 2304.25], {icon:hst_event_icon});
hst_event03_marker.bindPopup("<b style=\"font-size:20px\">Bounty of 'Ewa</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> BMW Z4 M40i</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 04
hst_event04_marker = L.marker([1296.697908, 1650.475616], {icon:hst_event_icon});
hst_event04_marker.bindPopup("<b style=\"font-size:20px\">Dukes of Wai'anae</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ford Bronco Hawaii Scenic Tour Ed.</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 05
hst_event05_marker = L.marker([2566.700011, 1691], {icon:hst_event_icon});
hst_event05_marker.bindPopup("<b style=\"font-size:20px\">Giant of Ma'ili's</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Chevrolet Camaro Z28</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 06
hst_event06_marker = L.marker([3097.975445, 2052], {icon:hst_event_icon});
hst_event06_marker.bindPopup("<b style=\"font-size:20px\">Wild Heart of Ko'olau Loa</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Dodge Challenger SRT-8 392</span><br>\
                              <span><b>Category:</b> Rally</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">21,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
hst_event07_marker = L.marker([2949.543798, 2661.5], {icon:hst_event_icon});
hst_event07_marker.bindPopup("<b style=\"font-size:20px\">Explorers of Moana</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Boat:</b> Proto Offshore MK2</span><br>\
                              <span><b>Category:</b> Powerboat</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 08
hst_event08_marker = L.marker([1928.493466, 3161.120865], {icon:hst_event_icon});
hst_event08_marker.bindPopup("<b style=\"font-size:20px\">Kingdom of Lani</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Plane:</b> Northrop Grumman F4U™ Corsair®</span><br>\
                              <span><b>Category:</b> Plane</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">24,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">45,000</span></span><br>", {
    className: "hstPopup"
});

//Event 09
hst_event09_marker = L.marker([1397.15249, 2415.75], {icon:hst_event_icon});
hst_event09_marker.bindPopup("<b style=\"font-size:20px\">Art of Honolulu</b><br>\
                              <i>Event</i><br>\
                              <span><b>Hawaii Scenic Tour(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Honda Civic Type R Fitted Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var HSTfeatsArr = [[1502.130871, 3387, "slalom", "Motorfest Grounds", "Slalom", "5,810 PTS", "2,880", "5,400"],  //Feat 01
                   [1435.010546, 3286.4375, "aerobatics", "Motorfest Grounds Heights", "Aerobatics", "6,010 PTS", "8,640", "16,200"],  //Feat 02
                   [1656.742969, 3583.625, "escape", "Coconut Resort", "Escape", "1490 m", "2,880", "5,400"],  //Feat 03
                   [1640.005256, 2685.1875, "low_altitude", "National Cemetery", "Low Altitude", "8,510 PTS", "5,760", "10,800"],  //Feat 04
                   [1683.125984, 2698.875, "bullseye", "Kalihi Road", "Bullseye", "6,390 PTS", "4,800", "9,000"],  //Feat 05
                   [1563.977261, 2232.159332, "bullseye", "Waipahu", "Bullseye", "3,460 PTS", "3,840", "7,200"],  //Feat 06
                   [1647.80742, 2224.75, "slalom", "Honouliuli Farm", "Slalom", "3,690 PTS", "2,880", "5,400"],  //Feat 07
                   [1324.010423, 1725.5, "speedtrap", "Kalaeloa", "Speedtrap", "220.0 km/h", "960", "1,800"],  //Feat 08
                   [2561.250633, 1245.875, "speedtrap", "Kaena Point", "Speedtrap", "170.0 km/h", "960", "1,800"],  //Feat 09
                   [2944.067005, 2705.567322, "slalom", "Laie Point", "Slalom", "4,560 PTS", "2,880", "5,400"],  //Feat 10
                  ]

function createHSTFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["hst_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["hst_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Rainbow Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Hawaii Scenic Tour</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createHSTFeatsMarkers(HSTfeatsArr);

//Photo Ops
//Photo Ops 1 Rainbox Views - Festival
hst_photo_ops01_marker = L.marker([1475.39662, 3338.75], {icon:photo_op_icon});
hst_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Festival</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Motorfest Wheel at the Motorfest Grounds</span><br>\
                              <span>- Sunset</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Rainbox Views Festival
hst_photo_ops02_marker = L.marker([1307.858404, 3207.259583], {icon:photo_op_icon});
hst_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Lē'ahi</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Volkswagen Kombi 21 Window Bus</span><br>\
                              <span>- Midday</span><br>\
                              <span>- Diamond Head in the background</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Rainbox Views Rabbit Island
hst_photo_ops03_marker = L.marker([1677.111338, 3662.989903], {icon:photo_op_icon});
hst_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Rabbit Island</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford Bronco Hawaii Scenic Tour Ed.</span><br>\
                              <span>- Rabbit Island in the background</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Rainbox Views Painted Wreck
hst_photo_ops04_marker = L.marker([2809.371391, 1339.260244], {icon:photo_op_icon});
hst_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Painted Wreck</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford Bronco Hawaii Scenic Tour Ed.</span><br>\
                              <span>- Shipwreck with whale graffiti</span><br>\
                              <span>- Mokuleia Beach</span><br>\
                              <span>- Morning</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Rainbox Views Turtle Rock
hst_photo_ops05_marker = L.marker([3067.630932, 2039.295957], {icon:photo_op_icon});
hst_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Turtle Rock</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Bike</span><br>\
                              <span>- Turtle Rock located near Haleiwa</span><br>\
                              <span>- Sunrise</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Rainbox Views Maakua Beach
hst_photo_ops06_marker = L.marker([2772.232849, 2790.243359], {icon:photo_op_icon});
hst_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Maakua Beach</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Plane</span><br>\
                              <span>- Ma'akua Black Beach in the background</span><br>\
                              <span>- Sunset</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 Rainbox Views Shipwreck
hst_photo_ops07_marker = L.marker([2685.372504, 3060.125], {icon:photo_op_icon});
hst_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Shipwreck</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Boat</span><br>\
                              <span>- Shipwreck</span><br>\
                              <span>- Kualoa Beach</span><br>\
                              <span>- Afternoon</span><br>", {
    className: "hstPopup"
});

//Photo Ops 8 Rainbox Views Ford Island
hst_photo_ops08_marker = L.marker([1417.091438, 2243.296263], {icon:photo_op_icon});
hst_photo_ops08_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Ford Island</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Plane</span><br>\
                              <span>- Ford Island located in Pearl Harbor</span><br>", {
    className: "hstPopup"
});

//Photo Ops 9 Rainbox Views Resort
hst_photo_ops09_marker = L.marker([1407.292536, 1533.75], {icon:photo_op_icon});
hst_photo_ops09_marker.bindPopup("<b style=\"font-size:20px\">Rainbox Views - Resort</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Hawaii Scenic Tour</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Boat</span><br>\
                              <span>- Aulinaii Resort</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Rainbow Fun Treasures
//Collectible 1 Rainbox Fun Treasures
hst_collectible001_marker = L.marker([2033.940365, 3375.25], {icon:collectible_icon});
hst_collectible001_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbox Fun Treasures
hst_collectible002_marker = L.marker([2043.637023, 3198.5], {icon:collectible_icon});
hst_collectible002_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbox Fun Treasures
hst_collectible003_marker = L.marker([2896.440576, 2526.875], {icon:collectible_icon});
hst_collectible003_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbox Fun Treasures
hst_collectible004_marker = L.marker([2944.567299, 2019.25], {icon:collectible_icon});
hst_collectible004_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbox Fun Treasures
hst_collectible005_marker = L.marker([2850.313027, 2016.625], {icon:collectible_icon});
hst_collectible005_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbox Fun Treasures
hst_collectible006_marker = L.marker([2859.754394, 1973.5], {icon:collectible_icon});
hst_collectible006_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbox Fun Treasures
hst_collectible007_marker = L.marker([2899.786183, 1888.947378], {icon:collectible_icon});
hst_collectible007_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Rainbox Fun Treasures
hst_collectible008_marker = L.marker([2505.867158, 2221.375953], {icon:collectible_icon});
hst_collectible008_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Rainbox Fun Treasures
hst_collectible009_marker = L.marker([2361.374402, 2210.125], {icon:collectible_icon});
hst_collectible009_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Rainbox Fun Treasures
hst_collectible010_marker = L.marker([2384.467947, 1338.729913], {icon:collectible_icon});
hst_collectible010_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Rainbox Fun Treasures
hst_collectible011_marker = L.marker([2354.521002, 1359.76634], {icon:collectible_icon});
hst_collectible011_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Rainbox Fun Treasures
hst_collectible012_marker = L.marker([1339.516206, 1757.625], {icon:collectible_icon});
hst_collectible012_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Rainbox Fun Treasures
hst_collectible013_marker = L.marker([1265.898518, 1794.875], {icon:collectible_icon});
hst_collectible013_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Rainbox Fun Treasures
hst_collectible014_marker = L.marker([1402.884316, 2125], {icon:collectible_icon});
hst_collectible014_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Fun Treasures</span><br>", {
    className: "hstPopup"
});

//Rainbow Ocean Arts
//Collectible 1 Rainbox Ocean Arts
hst_collectible015_marker = L.marker([3288.878058, 2285.625], {icon:collectible_icon});
hst_collectible015_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbox Ocean Arts
hst_collectible016_marker = L.marker([2856.257699, 1954], {icon:collectible_icon});
hst_collectible016_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbox Ocean Arts
hst_collectible017_marker = L.marker([2651.012691, 1071.5], {icon:collectible_icon});
hst_collectible017_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbox Ocean Arts
hst_collectible018_marker = L.marker([2872.823468, 2014.9375], {icon:collectible_icon});
hst_collectible018_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbox Ocean Arts
hst_collectible019_marker = L.marker([2858.338436, 2015.254326], {icon:collectible_icon});
hst_collectible019_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbox Ocean Arts
hst_collectible020_marker = L.marker([2765.887083, 2042.566326], {icon:collectible_icon});
hst_collectible020_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbox Ocean Arts
hst_collectible021_marker = L.marker([2413.817949, 1881.75], {icon:collectible_icon});
hst_collectible021_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Rainbox Ocean Arts
hst_collectible022_marker = L.marker([2052.897006, 1937.75], {icon:collectible_icon});
hst_collectible022_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Rainbox Ocean Arts
hst_collectible023_marker = L.marker([2044.00624, 3029.6875], {icon:collectible_icon});
hst_collectible023_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Rainbox Ocean Arts
hst_collectible024_marker = L.marker([2064.257347, 3065.66145], {icon:collectible_icon});
hst_collectible024_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Rainbox Ocean Arts
hst_collectible025_marker = L.marker([1906.880836, 3539.875], {icon:collectible_icon});
hst_collectible025_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Rainbox Ocean Arts
hst_collectible026_marker = L.marker([1319.871731, 3603], {icon:collectible_icon});
hst_collectible026_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Rainbox Ocean Arts
hst_collectible027_marker = L.marker([1147.136495, 3036.25], {icon:collectible_icon});
hst_collectible027_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Rainbox Ocean Arts
hst_collectible028_marker = L.marker([1423.235072, 2827.896795], {icon:collectible_icon});
hst_collectible028_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Rainbox Ocean Arts
hst_collectible029_marker = L.marker([1340.095045, 2644.579362], {icon:collectible_icon});
hst_collectible029_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 16 Rainbox Ocean Arts
hst_collectible030_marker = L.marker([1420.764413, 2414.625], {icon:collectible_icon});
hst_collectible030_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Ocean Arts</span><br>", {
    className: "hstPopup"
});

//Rainbow Flora Arts
//Collectible 1 Rainbox Flora Arts
hst_collectible031_marker = L.marker([1408.451526, 2103.1875], {icon:collectible_icon});
hst_collectible031_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbox Flora Arts
hst_collectible032_marker = L.marker([1298.127601, 2931], {icon:collectible_icon});
hst_collectible032_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbox Flora Arts
hst_collectible033_marker = L.marker([1440.231834, 2843.806697], {icon:collectible_icon});
hst_collectible033_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbox Flora Arts
hst_collectible034_marker = L.marker([1754.003309, 2597.203207], {icon:collectible_icon});
hst_collectible034_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbox Flora Arts
hst_collectible035_marker = L.marker([2020.382136, 2197.25], {icon:collectible_icon});
hst_collectible035_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbox Flora Arts
hst_collectible036_marker = L.marker([2109.943283, 2287.5], {icon:collectible_icon});
hst_collectible036_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbox Flora Arts
hst_collectible037_marker = L.marker([3283.290695, 2490.07653], {icon:collectible_icon});
hst_collectible037_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Flora Arts</span><br>", {
    className: "hstPopup"
});

//Rainbox Portrait Arts
//Collectible 1 Rainbox Portrait Arts
hst_collectible038_marker = L.marker([1431.841578, 2962.512248], {icon:collectible_icon});
hst_collectible038_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbox Portrait Arts
hst_collectible039_marker = L.marker([1431.398717, 2938.647394], {icon:collectible_icon});
hst_collectible039_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbox Portrait Arts
hst_collectible040_marker = L.marker([1332.136738, 2830.460057], {icon:collectible_icon});
hst_collectible040_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbox Portrait Arts
hst_collectible041_marker = L.marker([1488.841249, 2706.451205], {icon:collectible_icon});
hst_collectible041_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbox Portrait Arts
hst_collectible042_marker = L.marker([1345.131802, 2626.125], {icon:collectible_icon});
hst_collectible042_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbox Portrait Arts
hst_collectible043_marker = L.marker([1372.527056, 2550.445771], {icon:collectible_icon});
hst_collectible043_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbox Portrait Arts
hst_collectible044_marker = L.marker([1373.50164, 2423.343327], {icon:collectible_icon});
hst_collectible044_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Rainbox Portrait Arts
hst_collectible045_marker = L.marker([1384.105432, 2417.686473], {icon:collectible_icon});
hst_collectible045_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Rainbox Portrait Arts
hst_collectible046_marker = L.marker([1406.151471, 2419.25], {icon:collectible_icon});
hst_collectible046_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Rainbox Portrait Arts
hst_collectible047_marker = L.marker([1419.104931, 2452.865036], {icon:collectible_icon});
hst_collectible047_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Rainbox Portrait Arts
hst_collectible048_marker = L.marker([1430.329311, 2442.928716], {icon:collectible_icon});
hst_collectible048_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Rainbox Portrait Arts
hst_collectible049_marker = L.marker([1440.68183, 2164.188692], {icon:collectible_icon});
hst_collectible049_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Rainbox Portrait Arts
hst_collectible050_marker = L.marker([1441.918596, 2174.883682], {icon:collectible_icon});
hst_collectible050_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Rainbox Portrait Arts
hst_collectible051_marker = L.marker([1702.562509, 2548.147674], {icon:collectible_icon});
hst_collectible051_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Rainbox Portrait Arts
hst_collectible052_marker = L.marker([1745.393807, 2248.875], {icon:collectible_icon});
hst_collectible052_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 16 Rainbox Portrait Arts
hst_collectible053_marker = L.marker([1767.518139, 2246], {icon:collectible_icon});
hst_collectible053_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 17 Rainbox Portrait Arts
hst_collectible054_marker = L.marker([1734.383789, 2211.8125], {icon:collectible_icon});
hst_collectible054_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 18 Rainbox Portrait Arts
hst_collectible055_marker = L.marker([2056.386091, 1338.1875], {icon:collectible_icon});
hst_collectible055_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 19 Rainbox Portrait Arts
hst_collectible056_marker = L.marker([2385.873752, 1352.4375], {icon:collectible_icon});
hst_collectible056_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 20 Rainbox Portrait Arts
hst_collectible057_marker = L.marker([2362.231519, 2125.707718], {icon:collectible_icon});
hst_collectible057_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 21 Rainbox Portrait Arts
hst_collectible058_marker = L.marker([2404.141101, 2230.125], {icon:collectible_icon});
hst_collectible058_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 22 Rainbox Portrait Arts
hst_collectible059_marker = L.marker([2734.296543, 2630.00586], {icon:collectible_icon});
hst_collectible059_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 23 Rainbox Portrait Arts
hst_collectible060_marker = L.marker([2569.375035, 2489.875], {icon:collectible_icon});
hst_collectible060_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 24 Rainbox Portrait Arts
hst_collectible061_marker = L.marker([1760.418732, 2924.375], {icon:collectible_icon});
hst_collectible061_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Portrait Arts</span><br>", {
    className: "hstPopup"
});

//Rainbow Word Arts
//Collectible 1 Rainbow Word Arts
hst_collectible062_marker = L.marker([1530.489324, 3360.747636], {icon:collectible_icon});
hst_collectible062_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbow Word Arts
hst_collectible063_marker = L.marker([1245.964537, 2893.480949], {icon:collectible_icon});
hst_collectible063_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbow Word Arts
hst_collectible064_marker = L.marker([1390.014426, 3009.446461], {icon:collectible_icon});
hst_collectible064_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbow Word Arts
hst_collectible065_marker = L.marker([1296.36076, 2871.383862], {icon:collectible_icon});
hst_collectible065_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbow Word Arts
hst_collectible066_marker = L.marker([1316.817541, 2545.393449], {icon:collectible_icon});
hst_collectible066_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbow Word Arts
hst_collectible067_marker = L.marker([1423.638788, 2381.182086], {icon:collectible_icon});
hst_collectible067_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbow Word Arts
hst_collectible068_marker = L.marker([1421.448644, 2398.5625], {icon:collectible_icon});
hst_collectible068_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Rainbow Word Arts
hst_collectible069_marker = L.marker([1310.015151, 1817.75], {icon:collectible_icon});
hst_collectible069_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Rainbow Word Arts
hst_collectible070_marker = L.marker([1888.624613, 1565.125], {icon:collectible_icon});
hst_collectible070_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Rainbow Word Arts
hst_collectible071_marker = L.marker([2792.859532, 1271.5], {icon:collectible_icon});
hst_collectible071_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Rainbow Word Arts
hst_collectible072_marker = L.marker([2799.989971, 1282.603313], {icon:collectible_icon});
hst_collectible072_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Rainbow Word Arts
hst_collectible073_marker = L.marker([2803.818793, 1282.5], {icon:collectible_icon});
hst_collectible073_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Rainbow Word Arts
hst_collectible074_marker = L.marker([2807.93866, 1336.5625], {icon:collectible_icon});
hst_collectible074_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Rainbow Word Arts
hst_collectible075_marker = L.marker([2810.502127, 1342.9375], {icon:collectible_icon});
hst_collectible075_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Rainbow Word Arts
hst_collectible076_marker = L.marker([2849.684507, 1951.791493], {icon:collectible_icon});
hst_collectible076_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 16 Rainbow Word Arts
hst_collectible077_marker = L.marker([2881.36637, 2015.25], {icon:collectible_icon});
hst_collectible077_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 17 Rainbow Word Arts
hst_collectible078_marker = L.marker([2940.611039, 2011.692486], {icon:collectible_icon});
hst_collectible078_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 18 Rainbow Word Arts
hst_collectible079_marker = L.marker([2947.168726, 1784.560739], {icon:collectible_icon});
hst_collectible079_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 19 Rainbow Word Arts
hst_collectible080_marker = L.marker([2399.987654, 2325.643164], {icon:collectible_icon});
hst_collectible080_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Collectible 20 Rainbow Word Arts
hst_collectible081_marker = L.marker([2684.059846, 3058.875], {icon:collectible_icon});
hst_collectible081_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Word Arts</span><br>", {
    className: "hstPopup"
});

//Rainbow Statues
//Collectible 1 Rainbow Statues
hst_collectible082_marker = L.marker([1224.768166, 2896.016627], {icon:collectible_icon});
hst_collectible082_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbow Statues
hst_collectible083_marker = L.marker([1247.898864, 2883.404677], {icon:collectible_icon});
hst_collectible083_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbow Statues
hst_collectible084_marker = L.marker([1423.261545, 2802.617727], {icon:collectible_icon});
hst_collectible084_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbow Statues
hst_collectible085_marker = L.marker([1434.263165, 2742.375], {icon:collectible_icon});
hst_collectible085_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbow Statues
hst_collectible086_marker = L.marker([1430.440101, 2656.25], {icon:collectible_icon});
hst_collectible086_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbow Statues
hst_collectible087_marker = L.marker([1436.695076, 2636.8125], {icon:collectible_icon});
hst_collectible087_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbow Statues
hst_collectible088_marker = L.marker([1396.218635, 2623.613872], {icon:collectible_icon});
hst_collectible088_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Rainbow Statues
hst_collectible089_marker = L.marker([1738.536517, 2599.766469], {icon:collectible_icon});
hst_collectible089_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Rainbow Statues
hst_collectible090_marker = L.marker([1722.196658, 2566.8125], {icon:collectible_icon});
hst_collectible090_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Rainbow Statues
hst_collectible091_marker = L.marker([2365.012585, 2148.875], {icon:collectible_icon});
hst_collectible091_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Rainbow Statues
hst_collectible092_marker = L.marker([2796.416436, 1804.398821], {icon:collectible_icon});
hst_collectible092_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Rainbow Statues
hst_collectible093_marker = L.marker([1184.790081, 2954.203743], {icon:collectible_icon});
hst_collectible093_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Statues</span><br>", {
    className: "hstPopup"
});

//Rainbow Cultural Treasures
//Collectible 1 Rainbow Cultural Treasures
hst_collectible094_marker = L.marker([1162.782004, 3138.670225], {icon:collectible_icon});
hst_collectible094_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Rainbow Cultural Treasures
hst_collectible095_marker = L.marker([1391.033396, 3795.75], {icon:collectible_icon});
hst_collectible095_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Rainbow Cultural Treasures
hst_collectible096_marker = L.marker([1829.856544, 2984.125], {icon:collectible_icon});
hst_collectible096_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Rainbow Cultural Treasures
hst_collectible097_marker = L.marker([2445.319144, 2989.5625], {icon:collectible_icon});
hst_collectible097_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Rainbow Cultural Treasures
hst_collectible098_marker = L.marker([2582.494305, 3029.5], {icon:collectible_icon});
hst_collectible098_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Rainbow Cultural Treasures
hst_collectible099_marker = L.marker([2958.760823, 2671.095866], {icon:collectible_icon});
hst_collectible099_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Rainbow Cultural Treasures
hst_collectible100_marker = L.marker([3080.373348, 2591.125], {icon:collectible_icon});
hst_collectible100_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Rainbow Cultural Treasures
hst_collectible101_marker = L.marker([3191.029915, 2179.3031], {icon:collectible_icon});
hst_collectible101_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Rainbow Cultural Treasures
hst_collectible102_marker = L.marker([3066.701403, 2030.9375], {icon:collectible_icon});
hst_collectible102_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Rainbow Cultural Treasures
hst_collectible103_marker = L.marker([2719.947426, 980.798568], {icon:collectible_icon});
hst_collectible103_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Rainbow Cultural Treasures
hst_collectible104_marker = L.marker([2252.906866, 1326.532322], {icon:collectible_icon});
hst_collectible104_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- Down in the cave</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Rainbow Cultural Treasures
hst_collectible105_marker = L.marker([2159.137972, 1285.5], {icon:collectible_icon});
hst_collectible105_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Rainbow Cultural Treasures
hst_collectible106_marker = L.marker([2042.327719, 1383.791129], {icon:collectible_icon});
hst_collectible106_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Rainbow Cultural Treasures
hst_collectible107_marker = L.marker([1992.078319, 1412.875], {icon:collectible_icon});
hst_collectible107_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Rainbow Cultural Treasures
hst_collectible108_marker = L.marker([2219.684055, 1616.75], {icon:collectible_icon});
hst_collectible108_marker.bindPopup("<b style=\"font-size:20px\">Hawaii Scenic Tour</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Rainbow Cultural Treasures</span><br>", {
    className: "hstPopup"
});

hst_container_group.push(hst_container_marker);

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        hst_events_group.push(window["hst_event0" + i + "_marker"]);
    }
    else {
        hst_events_group.push(window["hst_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 9; i++) {
    hst_feats_group.push(window["hst_feat" + i + "_marker"]);
}

for(var i = 1; i <= 9; i++) {
    if(i < 10) {
        hst_photo_ops_group.push(window["hst_photo_ops0" + i + "_marker"]);
    }
    else {
        hst_photo_ops_group.push(window["hst_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 108; i++) {
    if(i < 10) {
        hst_collectibles_group.push(window["hst_collectible00" + i + "_marker"]);
    }
    else if(10 <= i && i < 100) {
        hst_collectibles_group.push(window["hst_collectible0" + i + "_marker"]);
    }
    else {
        hst_collectibles_group.push(window["hst_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(hst_container_group);
markers_canvas.addMarkers(hst_events_group);
markers_canvas.addMarkers(hst_collectibles_group);
markers_canvas.addMarkers(hst_photo_ops_group);
markers_canvas.addMarkers(hst_feats_group);