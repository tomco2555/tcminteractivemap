var collectible_icon = L.icon({
    iconUrl: 'img/Misc/collectible.png',
    iconSize: [20, 23],
    iconAnchor: [10,23],
    popupAnchor: [0,-18],
});

var photo_op_icon = L.icon({
    iconUrl: 'img/Misc/photo_op.png',
    iconSize: [34, 27],
    iconAnchor: [17,27],
    popupAnchor: [0,-22],
});

var mf_grounds_icon = L.icon({
    iconUrl: 'img/Misc/motorfest_grounds.png',
    iconSize: [82, 75],
    iconAnchor: [41,75],
    popupAnchor: [0,-60],
});

var grand_race_icon = L.icon({
    iconUrl: 'img/Misc/grand_race.png',
    iconSize: [58, 50],
    iconAnchor: [29,50],
    popupAnchor: [0,-35],
});

var demo_royale_icon = L.icon({
    iconUrl: 'img/Misc/demo_royale.png',
    iconSize: [52, 50],
    iconAnchor: [26,50],
    popupAnchor: [0,-35],
});

var achievement_icon = L.icon({
    iconUrl: 'img/Misc/achievement.png',
    iconSize: [30, 40],
    iconAnchor: [15,40],
    popupAnchor: [0,-30],
});

var treasure_icon = L.icon({
    iconUrl: 'img/Misc/treasure.png',
    iconSize: [28, 40],
    iconAnchor: [14,40],
    popupAnchor: [0,-30],
});

mf_grounds_group = [];
demo_royale_group = [];
grand_race_group = [];
achievements_group = [];
treasure_group = [];

//MOTORFEST GROUNDS
mf_grounds_marker = L.marker([668.040568, 3407], {icon:mf_grounds_icon});
mf_grounds_marker.bindPopup('<b>Motorfest Grounds</b><br>\
                            <i>Car Meet</i>', {
                        className: "hstPopup"
});

//DEMO ROYALE
//DR 01
demo_royale_01_marker = L.marker([2033.490898, 1799.518329], {icon:demo_royale_icon});
demo_royale_01_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Haleiwa</span>', {
                            className: "hstPopup"
});

//DR 02
demo_royale_02_marker = L.marker([2108.851303, 2731.231557], {icon:demo_royale_icon});
demo_royale_02_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Ma\'akua Black Beach</span>', {
                            className: "hstPopup"
});

//DR 03
demo_royale_03_marker = L.marker([1406.266193, 1722.954061], {icon:demo_royale_icon});
demo_royale_03_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Mauna Pele</span>', {
                            className: "hstPopup"
});

//DR 04
demo_royale_04_marker = L.marker([1741.259738, 2266.625], {icon:demo_royale_icon});
demo_royale_04_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Wahiawa Fields</span>', {
                            className: "hstPopup"
});
                        
//GRAND RACE
//GR 01
grand_race_01_marker = L.marker([2034.354437, 1806.922991], {icon:grand_race_icon});
grand_race_01_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Haleiwa</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Monster > Hypercar > AGP</span><br>\
                                <span>ST2 > ST1 > Hypercar</span>', {
                            className: "hstPopup"
});

//GR 02
grand_race_02_marker = L.marker([2109.125773, 2736.25], {icon:grand_race_icon});
grand_race_02_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Ma\'akua Black Beach</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Hypercar > AGP > Racing</span><br>\
                                <span>ST1 > RR > ST2</span>', {
                            className: "hstPopup"
});

//GR 03
grand_race_03_marker = L.marker([1406.700894, 1728.375], {icon:grand_race_icon});
grand_race_03_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Mauna Pele</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>RR > ST2 > AGP</span><br>\
                                <span>ST1 > Hypercar / Plane > Racing</span>', {
                            className: "hstPopup"
});

//GR 04
grand_race_04_marker = L.marker([1744.388077, 2270.5], {icon:grand_race_icon});
grand_race_04_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Wahiawa Fields</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Hypercar > ST1 > AGP</span><br>\
                                <span>Hypercar > ST2 > RR</span>', {
                            className: "hstPopup"
});

//GR 05
grand_race_05_marker = L.marker([459.355913, 3359.807402], {icon:grand_race_icon});
grand_race_05_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Diamond Head</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Hypercar > Rally > AGP</span><br>\
                                <span>ST1 > RR > Hypercar</span>', {
                            className: "hstPopup"
});

//GR 06
grand_race_06_marker = L.marker([512.401843, 1810.546913], {icon:grand_race_icon});
grand_race_06_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kalaeloa</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>RR > Rally / Plane > Drift</span><br>\
                                <span>Hypercar > AGP > Racing</span>', {
                            className: "hstPopup"
});

//GR 07
grand_race_07_marker = L.marker([1863.930045, 1012.046581], {icon:grand_race_icon});
grand_race_07_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kaena Point</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>ST2 > Rally > Motocross</span><br>\
                                <span>ST1 > ST2 > Hypercar</span>', {
                            className: "hstPopup"
});

//GR 08
grand_race_08_marker = L.marker([446.78874, 3008], {icon:grand_race_icon});
grand_race_08_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Waikiki</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>ST2 > Hypercar > Racing</span><br>\
                                <span>ST2 > AGP > RR</span>', {
                            className: "hstPopup"
});

//GR 09
grand_race_09_marker = L.marker([895.519716, 2745.165301], {icon:grand_race_icon});
grand_race_09_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Nuuanu - Punchbowl</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Drift > Racing > ST2</span><br>\
                                <span>Motocross > RR / Plane > Rally</span>', {
                            className: "hstPopup"
});

//GR 10
grand_race_10_marker = L.marker([1333.021803, 3026.770577], {icon:grand_race_icon});
grand_race_10_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kaneohe</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Monster > Racing > ST2</span><br>\
                                <span>Hypercar > Rally > Racing</span>', {
                            className: "hstPopup"
});

//GR 11
grand_race_11_marker = L.marker([2440.067629, 2441.875], {icon:grand_race_icon});
grand_race_11_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kahuku</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>ST2 > RR > Racing</span><br>\
                                <span>RR > Motocross > Monster</span>', {
                            className: "hstPopup"
});

//ACHIEVEMENTS
//Achievement 01 Pele Shout-out
achievement_01_marker = L.marker([1401.516464, 1378.50467], {icon:achievement_icon});
achievement_01_marker.bindPopup('<b>Pele Shout-out</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Reach the summit of the volcano with a ground vehicle</span><br>', {
                            className: "hstPopup"
});

//Achievement 02 Local Luxuries
achievement_02_marker = L.marker([497.644593, 2811.279785], {icon:achievement_icon});
achievement_02_marker.bindPopup('<b>Local Luxuries</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Stay still for 1 minute on the beach in front of the Royal Hawaiian Hotel</span><br>', {
                            className: "hstPopup"
});

//Achievement 03 French Toast
achievement_03_marker = L.marker([1326.193402, 2183.5], {icon:achievement_icon});
achievement_03_marker.bindPopup('<b>French Toast</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Perform a donut move in the Ubisoft logo</span><br>', {
                            className: "hstPopup"
});

//Achievement 04 Sweet Tooth
achievement_04_marker = L.marker([638.352537, 2962.625], {icon:achievement_icon});
achievement_04_marker.bindPopup('<b>Sweet Tooth</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Fly through the "Rule the Streets" inflatable donut with a plane</span><br>', {
                            className: "hstPopup"
});

//Achievement 05 Unholy pizza
achievement_05_marker = L.marker([1736.185783, 2224.857861], {icon:achievement_icon});
achievement_05_marker.bindPopup('<b>Unholy pizza</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Perform a donut move around the pineapple shop</span><br>', {
                            className: "hstPopup"
});

//Achievement 06 Oahu Mindfulness
achievement_06_marker = L.marker([659.49613, 3422.027962], {icon:achievement_icon});
achievement_06_marker.bindPopup('<b>Oahu Mindfulness</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Stay in a Car meet car for 10 seconds or more</span><br>', {
                            className: "hstPopup"
});

//TREASURES
//Treasure 01 Hanauma Racetrack
treasure_01_marker = L.marker([345.971133, 3529.700275], {icon:treasure_icon});
treasure_01_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 02 Waikiki Shell(HNL)
treasure_02_marker = L.marker([482.790404, 2983.725452], {icon:treasure_icon});
treasure_02_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 03 State Capitol(HNL)
treasure_03_marker = L.marker([685.745641, 2645.75], {icon:treasure_icon});
treasure_03_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 04 Oahu Airport(HNL)
treasure_04_marker = L.marker([482.619792, 2446.854628], {icon:treasure_icon});
treasure_04_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 05 USS Submarine Museum
treasure_05_marker = L.marker([775.93917, 2261.3125], {icon:treasure_icon});
treasure_05_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 06 Ewa
treasure_06_marker = L.marker([591.514976, 2074.125], {icon:treasure_icon});
treasure_06_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 07 Barbers Point Harbor
treasure_07_marker = L.marker([438.444286, 1806.657826], {icon:treasure_icon});
treasure_07_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 08 Aulinaii Resort
treasure_08_marker = L.marker([664.508867, 1584.272743], {icon:treasure_icon});
treasure_08_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 09 Diamond Head
treasure_09_marker = L.marker([325.994273, 3209.380903], {icon:treasure_icon});
treasure_09_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 10 Makakilo River Gorge
treasure_10_marker = L.marker([826.940664, 1847.869873], {icon:treasure_icon});
treasure_10_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 11 Maili Point
treasure_11_marker = L.marker([1314.091588, 1316.898229], {icon:treasure_icon});
treasure_11_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 12 Waianae
treasure_12_marker = L.marker([1624.438098, 1354.6875], {icon:treasure_icon});
treasure_12_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 13 Kaena Point
treasure_13_marker = L.marker([1955.856213, 991.894037], {icon:treasure_icon});
treasure_13_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 14 Mokuleia Beach
treasure_14_marker = L.marker([2039.989454, 1293.25], {icon:treasure_icon});
treasure_14_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 15 Makaleha River - Peacock River
treasure_15_marker = L.marker([1915.776366, 1502.75], {icon:treasure_icon});
treasure_15_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 16 Peacock Flats Farm
treasure_16_marker = L.marker([1840.691648, 1797.875], {icon:treasure_icon});
treasure_16_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 17 Haleiwa Island Resort
treasure_17_marker = L.marker([2151.566226, 1779.1875], {icon:treasure_icon});
treasure_17_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 18 Haleiwa Fields Farm
treasure_18_marker = L.marker([1994.853347, 2041.505666], {icon:treasure_icon});
treasure_18_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 19 Pineapple Plantation
treasure_19_marker = L.marker([1785.132101, 2207.25], {icon:treasure_icon});
treasure_19_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 20 Japanese Jodo
treasure_20_marker = L.marker([1415.197765, 2013.25], {icon:treasure_icon});
treasure_20_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 21 Nanakuli River under the Mauna Pele
treasure_21_marker = L.marker([1072.208505, 1755.4375], {icon:treasure_icon});
treasure_21_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 22 Kunia Fields Farm
treasure_22_marker = L.marker([1169.91047, 2078.375], {icon:treasure_icon});
treasure_22_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 23 Multicultural Heritage
treasure_23_marker = L.marker([1192.449659, 2417.598085], {icon:treasure_icon});
treasure_23_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 24 Mililani Fields Farm
treasure_24_marker = L.marker([1458.504992, 2311.5625], {icon:treasure_icon});
treasure_24_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 25 Pearl Botanical Garden
treasure_25_marker = L.marker([971.306388, 2599.147751], {icon:treasure_icon});
treasure_25_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 26 Stairway To Heaven
treasure_26_marker = L.marker([1007.805232, 3051.696091], {icon:treasure_icon});
treasure_26_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 27 Koko Crater
treasure_27_marker = L.marker([630.570277, 3799.196347], {icon:treasure_icon});
treasure_27_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 28 Coconut Resort
treasure_28_marker = L.marker([911.991985, 3645.125], {icon:treasure_icon});
treasure_28_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 29 Kailua
treasure_29_marker = L.marker([1101.658147, 3338.427891], {icon:treasure_icon});
treasure_29_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 30 Kaneohe
treasure_30_marker = L.marker([1392.389197, 3078.300984], {icon:treasure_icon});
treasure_30_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 31 Ewa Forest
treasure_31_marker = L.marker([1267.821956, 2715.125], {icon:treasure_icon});
treasure_31_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 32 Hindu Monastery
treasure_32_marker = L.marker([1744.961939, 2835.409804], {icon:treasure_icon});
treasure_32_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 33 Wahiawa Forest
treasure_33_marker = L.marker([1733.000949, 2499.125], {icon:treasure_icon});
treasure_33_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 34 Turtle Rock
treasure_34_marker = L.marker([2297.353943, 2022.25], {icon:treasure_icon});
treasure_34_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 35 Ma'akua Black Beach
treasure_35_marker = L.marker([1977.07839, 2939.442889], {icon:treasure_icon});
treasure_35_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 36 Leeward Coast
treasure_36_marker = L.marker([1053.143491, 1437.375], {icon:treasure_icon});
treasure_36_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 37 Laie Point
treasure_37_marker = L.marker([2179.933725, 2686.38705], {icon:treasure_icon});
treasure_37_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 38 Kahuku Black Beach
treasure_38_marker = L.marker([2484.625352, 2561.625], {icon:treasure_icon});
treasure_38_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 39 Waimea Hills
treasure_39_marker = L.marker([2348.835903, 2277.325777], {icon:treasure_icon});
treasure_39_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 40 Turtle Bay Beach
treasure_40_marker = L.marker([2564.109146, 2260.75], {icon:treasure_icon});
treasure_40_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 41 Mokapu
treasure_41_marker = L.marker([1295.000492, 3562.75], {icon:treasure_icon});
treasure_41_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 42 Mauna Pele Red Hill
treasure_42_marker = L.marker([1537.344298, 1629.350801], {icon:treasure_icon});
treasure_42_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 43 Koolauloa Hills
treasure_43_marker = L.marker([2050.53654, 2375.61362], {icon:treasure_icon});
treasure_43_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

mf_grounds_group.push(mf_grounds_marker);

for(var i = 1; i <= 4; i++) {
    if(i < 10) {
        demo_royale_group.push(window["demo_royale_0" + i + "_marker"]);
    }
    else {
        demo_royale_group.push(window["demo_royale_" + i + "_marker"]);
    }
}

for(var i = 1; i <= 11; i++) {
    if(i < 10) {
        grand_race_group.push(window["grand_race_0" + i + "_marker"]);
    }
    else {
        grand_race_group.push(window["grand_race_" + i + "_marker"]);
    }
}

for(var i = 1; i <= 6; i++) {
    if(i < 10) {
        achievements_group.push(window["achievement_0" + i + "_marker"]);
    }
    else {
        achievements_group.push(window["achievement_" + i + "_marker"]);
    }
}

for(var i = 1; i <= 43; i++) {
    if(i < 10) {
        treasure_group.push(window["treasure_0" + i + "_marker"]);
    }
    else {
        treasure_group.push(window["treasure_" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(mf_grounds_group);
markers_canvas.addMarkers(demo_royale_group);
markers_canvas.addMarkers(grand_race_group);
markers_canvas.addMarkers(achievements_group);
markers_canvas.addMarkers(treasure_group);