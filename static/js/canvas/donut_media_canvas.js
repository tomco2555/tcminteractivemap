var dm_container_icon = L.icon({
    iconUrl: 'img/Donut_Media/dm_container.png',
    iconSize: [75, 75],
    iconAnchor: [37.5,75],
    popupAnchor: [0,-60],
});

var dm_event_icon = L.icon({
    iconUrl: 'img/Donut_Media/dm_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

dm_container_group = [];
dm_events_group = [];
dm_photo_ops_group = [];
dm_feats_group = [];
dm_collectibles_group = [];

//CONTAINER
dm_container_marker = L.marker([1405.025416, 2956.375], {icon:dm_container_icon});
dm_container_marker.bindPopup('<b>Rule the Streets</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
dm_event01_marker = L.marker([1455.767718, 2920.875], {icon:dm_event_icon});
dm_event01_marker.bindPopup("<b style=\"font-size:20px\">Legendary x Rivalry</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
dm_event02_marker = L.marker([1402.353388, 3062.965193], {icon:dm_event_icon});
dm_event02_marker.bindPopup("<b style=\"font-size:20px\">American x Wrestle</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 03
dm_event03_marker = L.marker([1348.383156, 2679.4375], {icon:dm_event_icon});
dm_event03_marker.bindPopup("<b style=\"font-size:20px\">Hi x Low</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Nissan 370Z Nismo</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 04
dm_event04_marker = L.marker([1448.98755, 2481.237695], {icon:dm_event_icon});
dm_event04_marker.bindPopup("<b style=\"font-size:20px\">Mo x Powa</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
dm_event05_marker = L.marker([1185.508033, 3184.875], {icon:dm_event_icon});
dm_event05_marker.bindPopup("<b style=\"font-size:20px\">Screw x Drifter</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Mitsubishi Lancer Evolution X</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
dm_event06_marker = L.marker([1324.972186, 2452.953424], {icon:dm_event_icon});
dm_event06_marker.bindPopup("<b style=\"font-size:20px\">Raptor x Delicacy</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Speed Parkour</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Ford F-150 SVT Raptor</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
dm_event07_marker = L.marker([1460.190084, 2826.4375], {icon:dm_event_icon});
dm_event07_marker.bindPopup("<b style=\"font-size:20px\">German x Qualität</b><br>\
                              <i>Event</i><br>\
                              <span><b>Rule the Streets(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var DMfeatsArr = [[1405.798946, 2959.416231, "speedtrap", "Moiliili Heights", "Speedtrap", "210.0 km/h", "960", "1,800"],  //Feat 01
                [1105.534267, 3231.373033, "speedtrap", "Diamond Head", "Speedtrap", "120.0 km/h", "960", "1,800"],  //Feat 02
                [1370.299809, 2507.9375, "slalom", "Chinatown", "Slalom", "5,130 PTS", "2,880", "5,400"],  //Feat 03
                [1403.24939, 2851.718662, "bullseye", "Convention Center", "Bullseye", "5,870 PTS", "4,800", "9,000"],  //Feat 04
               ]

function createDMFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["dm_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["dm_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Donut x Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Rule the Streets</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createDMFeatsMarkers(DMfeatsArr);

//PHOTO OPS
//Photo Ops 1 Donut x Views - Swimming Pool
dm_photo_ops01_marker = L.marker([1384.696373, 2886.205668], {icon:photo_op_icon});
dm_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Donut x Views - Swimming Pool</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Rule the Streets</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Boat</span><br>\
                              <span>- Swimming Pool</span><br>\
                              <span>- High School near Convention Center of Honolulu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Donut x Views - Roadworks
dm_photo_ops02_marker = L.marker([1338.322456, 2611.256955], {icon:photo_op_icon});
dm_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Donut x Views - Roadworks</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Rule the Streets</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Donut</span><br>\
                              <span>- Near the barrier ring of construction site</span><br>\
                              <span>- Honolulu's Waterfront Plaza</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Donut x Views - Football field
dm_photo_ops03_marker = L.marker([1385.130642, 2901.8125], {icon:photo_op_icon});
dm_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Donut x Views - Football Field</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Rule the Streets</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Modern Vehicle</span><br>\
                              <span>- Burn</span><br>\
                              <span>- Football Field</span><br>\
                              <span>- High School near Convention Center of Honolulu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Donut x Views - Artsy Shopping Mall
dm_photo_ops04_marker = L.marker([1331.083361, 2708.395749], {icon:photo_op_icon});
dm_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Donut x Views - Artsy Shopping Mall</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Rule the Streets</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Moana Center</span><br>\
                              <span>- Graffiti Mural</span><br>\
                              <span>- Jump from roof to roof</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Donut x Views - Street Art
dm_photo_ops05_marker = L.marker([1179.317024, 3128.765337], {icon:photo_op_icon});
dm_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Donut x Views - Street Art</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Rule the Streets</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Turbo graffiti</span><br>\
                              <span>- Inside the Diamond Head tunnel</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Donut x Lifeguard
//Collectible 1 Donut x Lifeguard
dm_collectible01_marker = L.marker([1208.525404, 2903.615322], {icon:collectible_icon});
dm_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Donut x Lifeguard
dm_collectible02_marker = L.marker([1237.116803, 2684.707671], {icon:collectible_icon});
dm_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Donut x Lifeguard
dm_collectible03_marker = L.marker([1295.365619, 2246.036302], {icon:collectible_icon});
dm_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Donut x Lifeguard
dm_collectible04_marker = L.marker([1396.466226, 1541.152905], {icon:collectible_icon});
dm_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Donut x Lifeguard
dm_collectible05_marker = L.marker([1302.632803, 1572.959035], {icon:collectible_icon});
dm_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Donut x Lifeguard
dm_collectible06_marker = L.marker([2382.943142, 1334.125], {icon:collectible_icon});
dm_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Donut x Lifeguard
dm_collectible07_marker = L.marker([2918.445058, 1795.125], {icon:collectible_icon});
dm_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Donut x Lifeguard
dm_collectible08_marker = L.marker([2965.185183, 1853.857204], {icon:collectible_icon});
dm_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Donut x Lifeguard
dm_collectible09_marker = L.marker([2950.194074, 2001], {icon:collectible_icon});
dm_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Donut x Lifeguard
dm_collectible10_marker = L.marker([3134.247293, 2109.5], {icon:collectible_icon});
dm_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Donut x Lifeguard
dm_collectible11_marker = L.marker([3233.535873, 2228.648459], {icon:collectible_icon});
dm_collectible11_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Donut x Lifeguard
dm_collectible12_marker = L.marker([3332.124824, 2260.4375], {icon:collectible_icon});
dm_collectible12_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Donut x Lifeguard
dm_collectible13_marker = L.marker([2938.029972, 2601.313061], {icon:collectible_icon});
dm_collectible13_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Donut x Lifeguard
dm_collectible14_marker = L.marker([2521.012005, 2992.25], {icon:collectible_icon});
dm_collectible14_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Donut x Lifeguard
dm_collectible15_marker = L.marker([2279.81932, 3050.375], {icon:collectible_icon});
dm_collectible15_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 16 Donut x Lifeguard
dm_collectible16_marker = L.marker([2073.93161, 3184.790061], {icon:collectible_icon});
dm_collectible16_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 17 Donut x Lifeguard
dm_collectible17_marker = L.marker([2038.067685, 3358.875], {icon:collectible_icon});
dm_collectible17_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Collectible 18 Donut x Lifeguard
dm_collectible18_marker = L.marker([1813.023202, 3479.25], {icon:collectible_icon});
dm_collectible18_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Lifeguard</span><br>", {
    className: "hstPopup"
});

//Donut x Drone
//Collectible 1 Donut x Drone
dm_collectible19_marker = L.marker([1398.641768, 2956.0625], {icon:collectible_icon});
dm_collectible19_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Drone</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Donut x Drone
dm_collectible20_marker = L.marker([1284.206407, 2873.421692], {icon:collectible_icon});
dm_collectible20_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Drone</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- On the roof in the dome</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Donut x Drone
dm_collectible21_marker = L.marker([1282.269089, 2767], {icon:collectible_icon});
dm_collectible21_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Drone</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- On the roof</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Donut x Drone
dm_collectible22_marker = L.marker([1327.383331, 2698.0625], {icon:collectible_icon});
dm_collectible22_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Drone</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- On the bridge between roofs</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Donut x Drone
dm_collectible23_marker = L.marker([1401.715395, 2594.37478], {icon:collectible_icon});
dm_collectible23_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Drone</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- On the roof of the white skyscraper</span><br>", {
    className: "hstPopup"
});

//Donut x Jasper Wong
//Collectible 1 Donut x Jasper Wong
dm_collectible24_marker = L.marker([1310.126424, 2928.747899], {icon:collectible_icon});
dm_collectible24_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Donut x Jasper Wong
dm_collectible25_marker = L.marker([1459.62224, 2752.4375], {icon:collectible_icon});
dm_collectible25_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Donut x Jasper Wong
dm_collectible26_marker = L.marker([1475.147394, 2658.191167], {icon:collectible_icon});
dm_collectible26_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- Entrance to the tunnel</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Donut x Jasper Wong
dm_collectible27_marker = L.marker([1412.654471, 2692.574234], {icon:collectible_icon});
dm_collectible27_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Donut x Jasper Wong
dm_collectible28_marker = L.marker([1328.44722, 2712.3125], {icon:collectible_icon});
dm_collectible28_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Donut x Jasper Wong
dm_collectible29_marker = L.marker([1388.065576, 2069.5625], {icon:collectible_icon});
dm_collectible29_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Donut x Jasper Wong
dm_collectible30_marker = L.marker([1518.868479, 2163.375], {icon:collectible_icon});
dm_collectible30_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Donut x Jasper Wong
dm_collectible31_marker = L.marker([1620.716192, 2228.623798], {icon:collectible_icon});
dm_collectible31_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Donut x Jasper Wong
dm_collectible32_marker = L.marker([1601.993572, 2541.341772], {icon:collectible_icon});
dm_collectible32_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Donut x Jasper Wong
dm_collectible33_marker = L.marker([1755.857948, 2792.629844], {icon:collectible_icon});
dm_collectible33_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Donut x Jasper Wong
dm_collectible34_marker = L.marker([1234.819162, 1702.25], {icon:collectible_icon});
dm_collectible34_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Donut x Jasper Wong
dm_collectible35_marker = L.marker([1285.199393, 1735.063264], {icon:collectible_icon});
dm_collectible35_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Donut x Jasper Wong
dm_collectible36_marker = L.marker([1310.36472, 1768.128004], {icon:collectible_icon});
dm_collectible36_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Donut x Jasper Wong
dm_collectible37_marker = L.marker([1304.890222, 1771.375], {icon:collectible_icon});
dm_collectible37_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Donut x Jasper Wong
dm_collectible38_marker = L.marker([1299.506468, 1774.5], {icon:collectible_icon});
dm_collectible38_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 16 Donut x Jasper Wong
dm_collectible39_marker = L.marker([1232.708299, 1809.1327], {icon:collectible_icon});
dm_collectible39_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- On the side of the boat</span><br>", {
    className: "hstPopup"
});

//Collectible 17 Donut x Jasper Wong
dm_collectible40_marker = L.marker([1359.771163, 3243.625], {icon:collectible_icon});
dm_collectible40_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 18 Donut x Jasper Wong
dm_collectible41_marker = L.marker([2490.466084, 2143.682596], {icon:collectible_icon});
dm_collectible41_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- Under the bridge</span><br>", {
    className: "hstPopup"
});

//Collectible 19 Donut x Jasper Wong
dm_collectible42_marker = L.marker([1985.267788, 2121.375], {icon:collectible_icon});
dm_collectible42_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 20 Donut x Jasper Wong
dm_collectible43_marker = L.marker([2831.933282, 1582.1875], {icon:collectible_icon});
dm_collectible43_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 21 Donut x Jasper Wong
dm_collectible44_marker = L.marker([2243.528194, 2186.875], {icon:collectible_icon});
dm_collectible44_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 22 Donut x Jasper Wong
dm_collectible45_marker = L.marker([1925.8183, 2319], {icon:collectible_icon});
dm_collectible45_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 23 Donut x Jasper Wong
dm_collectible46_marker = L.marker([2394.719827, 2269.017272], {icon:collectible_icon});
dm_collectible46_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 24 Donut x Jasper Wong
dm_collectible47_marker = L.marker([2266.195181, 2347.9375], {icon:collectible_icon});
dm_collectible47_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 25 Donut x Jasper Wong
dm_collectible48_marker = L.marker([2375.686621, 2108.5], {icon:collectible_icon});
dm_collectible48_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 26 Donut x Jasper Wong
dm_collectible49_marker = L.marker([2687.630836, 2425.3125], {icon:collectible_icon});
dm_collectible49_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 27 Donut x Jasper Wong
dm_collectible50_marker = L.marker([2876.187377, 2014.1875], {icon:collectible_icon});
dm_collectible50_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 28 Donut x Jasper Wong
dm_collectible51_marker = L.marker([2780.644457, 2133.959877], {icon:collectible_icon});
dm_collectible51_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 29 Donut x Jasper Wong
dm_collectible52_marker = L.marker([2687.944003, 1163.5], {icon:collectible_icon});
dm_collectible52_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 30 Donut x Jasper Wong
dm_collectible53_marker = L.marker([2704.367122, 1117.236], {icon:collectible_icon});
dm_collectible53_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 31 Donut x Jasper Wong
dm_collectible54_marker = L.marker([2648.770111, 1072.769375], {icon:collectible_icon});
dm_collectible54_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 32 Donut x Jasper Wong
dm_collectible55_marker = L.marker([2395.135968, 1347], {icon:collectible_icon});
dm_collectible55_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 33 Donut x Jasper Wong
dm_collectible56_marker = L.marker([1754.186897, 3762.073241], {icon:collectible_icon});
dm_collectible56_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 34 Donut x Jasper Wong
dm_collectible57_marker = L.marker([1747.134597, 3763.25], {icon:collectible_icon});
dm_collectible57_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 35 Donut x Jasper Wong
dm_collectible58_marker = L.marker([1765.755203, 3697.75], {icon:collectible_icon});
dm_collectible58_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 36 Donut x Jasper Wong
dm_collectible59_marker = L.marker([1762.683016, 3700.996893], {icon:collectible_icon});
dm_collectible59_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 37 Donut x Jasper Wong
dm_collectible60_marker = L.marker([1649.363164, 3679.606913], {icon:collectible_icon});
dm_collectible60_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span>- Second floor</span><br>", {
    className: "hstPopup"
});

//Collectible 38 Donut x Jasper Wong
dm_collectible61_marker = L.marker([1652.271795, 3660.25], {icon:collectible_icon});
dm_collectible61_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 39 Donut x Jasper Wong
dm_collectible62_marker = L.marker([1678.115016, 3642.625], {icon:collectible_icon});
dm_collectible62_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 40 Donut x Jasper Wong
dm_collectible63_marker = L.marker([1665.289895, 3679.076583], {icon:collectible_icon});
dm_collectible63_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 41 Donut x Jasper Wong
dm_collectible64_marker = L.marker([2352.246906, 2829.75], {icon:collectible_icon});
dm_collectible64_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 42 Donut x Jasper Wong
dm_collectible65_marker = L.marker([1751.581581, 3429.114335], {icon:collectible_icon});
dm_collectible65_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 43 Donut x Jasper Wong
dm_collectible66_marker = L.marker([1937.324919, 3452.006917], {icon:collectible_icon});
dm_collectible66_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 44 Donut x Jasper Wong
dm_collectible67_marker = L.marker([1925.070269, 3308.9375], {icon:collectible_icon});
dm_collectible67_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 45 Donut x Jasper Wong
dm_collectible68_marker = L.marker([1872.364927, 3129.566225], {icon:collectible_icon});
dm_collectible68_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 46 Donut x Jasper Wong
dm_collectible69_marker = L.marker([1871.380572, 2944.375], {icon:collectible_icon});
dm_collectible69_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 47 Donut x Jasper Wong
dm_collectible70_marker = L.marker([1965.820058, 3126.625], {icon:collectible_icon});
dm_collectible70_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 48 Donut x Jasper Wong
dm_collectible71_marker = L.marker([1998.563115, 3117.3125], {icon:collectible_icon});
dm_collectible71_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 49 Donut x Jasper Wong
dm_collectible72_marker = L.marker([1727.590804, 3198.597525], {icon:collectible_icon});
dm_collectible72_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 50 Donut x Jasper Wong
dm_collectible73_marker = L.marker([1773.519194, 3049.25], {icon:collectible_icon});
dm_collectible73_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 51 Donut x Jasper Wong
dm_collectible74_marker = L.marker([2276.659697, 2842.375], {icon:collectible_icon});
dm_collectible74_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 52 Donut x Jasper Wong
dm_collectible75_marker = L.marker([3218.122996, 2440.25], {icon:collectible_icon});
dm_collectible75_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

//Collectible 53 Donut x Jasper Wong
dm_collectible76_marker = L.marker([1523.940928, 1783.6875], {icon:collectible_icon});
dm_collectible76_marker.bindPopup("<b style=\"font-size:20px\">Rule the Streets</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Donut x Jasper Wong</span><br>", {
    className: "hstPopup"
});

dm_container_group.push(dm_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        dm_events_group.push(window["dm_event0" + i + "_marker"]);
    }
    else {
        dm_events_group.push(window["dm_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 3; i++) {
    dm_feats_group.push(window["dm_feat" + i + "_marker"]);
}

for(var i = 1; i <= 5; i++) {
    if(i < 10) {
        dm_photo_ops_group.push(window["dm_photo_ops0" + i + "_marker"]);
    }
    else {
        dm_photo_ops_group.push(window["dm_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 76; i++) {
    if(i < 10) {
        dm_collectibles_group.push(window["dm_collectible0" + i + "_marker"]);
    }
    else {
        dm_collectibles_group.push(window["dm_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(dm_container_group);
markers_canvas.addMarkers(dm_events_group);
markers_canvas.addMarkers(dm_collectibles_group);
markers_canvas.addMarkers(dm_photo_ops_group);
markers_canvas.addMarkers(dm_feats_group);