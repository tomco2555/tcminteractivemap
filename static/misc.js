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

mf_grounds_group = L.featureGroup();
demo_royale_group = L.featureGroup();
grand_race_group = L.featureGroup();
achievements_group = L.featureGroup();
treasure_group = L.featureGroup();

//MOTORFEST GROUNDS
mf_grounds_marker = L.marker([1434.040568, 3407], {icon:mf_grounds_icon}).addTo(mf_grounds_group);
mf_grounds_marker.bindPopup('<b>Motorfest Grounds</b><br>\
                            <i>Car Meet</i>', {
                        className: "hstPopup"
});

//DEMO ROYALE
//DR 01
demo_royale_01_marker = L.marker([2799.490898, 1799.518329], {icon:demo_royale_icon}).addTo(demo_royale_group);
demo_royale_01_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Haleiwa</span>', {
                            className: "hstPopup"
});

//DR 02
demo_royale_02_marker = L.marker([2874.851303, 2731.231557], {icon:demo_royale_icon}).addTo(demo_royale_group);
demo_royale_02_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Ma\'akua Black Beach</span>', {
                            className: "hstPopup"
});

//DR 03
demo_royale_03_marker = L.marker([2172.266193, 1722.954061], {icon:demo_royale_icon}).addTo(demo_royale_group);
demo_royale_03_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Mauna Pele</span>', {
                            className: "hstPopup"
});

//DR 04
demo_royale_04_marker = L.marker([2507.259738, 2266.625], {icon:demo_royale_icon}).addTo(demo_royale_group);
demo_royale_04_marker.bindPopup('<b>Demo Royale</b><br>\
                                <span>Wahiawa Fields</span>', {
                            className: "hstPopup"
});
                        
//GRAND RACE
//GR 01
grand_race_01_marker = L.marker([2800.354437, 1806.922991], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_01_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Haleiwa</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Monster > Hypercar > AGP</span><br>\
                                <span>ST2 > ST1 > Hypercar</span>', {
                            className: "hstPopup"
});

//GR 02
grand_race_02_marker = L.marker([2875.125773, 2736.25], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_02_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Ma\'akua Black Beach</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Hypercar > AGP > Racing</span><br>\
                                <span>ST1 > RR > ST2</span>', {
                            className: "hstPopup"
});

//GR 03
grand_race_03_marker = L.marker([2172.700894, 1728.375], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_03_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Mauna Pele</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>RR > ST2 > AGP</span><br>\
                                <span>ST1 > Hypercar / Plane > Racing</span>', {
                            className: "hstPopup"
});

//GR 04
grand_race_04_marker = L.marker([2510.388077, 2270.5], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_04_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Wahiawa Fields</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Hypercar > ST1 > AGP</span><br>\
                                <span>Hypercar > ST2 > RR</span>', {
                            className: "hstPopup"
});

//GR 05
grand_race_05_marker = L.marker([1225.355913, 3359.807402], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_05_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Diamond Head</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Hypercar > Rally > AGP</span><br>\
                                <span>ST1 > RR > Hypercar</span>', {
                            className: "hstPopup"
});

//GR 06
grand_race_06_marker = L.marker([1278.401843, 1810.546913], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_06_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kalaeloa</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>RR > Rally / Plane > Drift</span><br>\
                                <span>Hypercar > AGP > Racing</span>', {
                            className: "hstPopup"
});

//GR 07
grand_race_07_marker = L.marker([2629.930045, 1012.046581], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_07_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kaena Point</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>ST2 > Rally > Motocross</span><br>\
                                <span>ST1 > ST2 > Hypercar</span>', {
                            className: "hstPopup"
});

//GR 08
grand_race_08_marker = L.marker([1212.78874, 3008], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_08_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Waikiki</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>ST2 > Hypercar > Racing</span><br>\
                                <span>ST2 > AGP > RR</span>', {
                            className: "hstPopup"
});

//GR 09
grand_race_09_marker = L.marker([1661.519716, 2745.165301], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_09_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Nuuanu - Punchbowl</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Drift > Racing > ST2</span><br>\
                                <span>Motocross > RR / Plane > Rally</span>', {
                            className: "hstPopup"
});

//GR 10
grand_race_10_marker = L.marker([2099.021803, 3026.770577], {icon:grand_race_icon}).addTo(grand_race_group);
grand_race_10_marker.bindPopup('<b>Grand Race</b><br>\
                                <span>Kaneohe</span>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Races</b></span><br>\
                                <span>Monster > Racing > ST2</span><br>\
                                <span>Hypercar > Rally > Racing</span>', {
                            className: "hstPopup"
});

//GR 11
grand_race_11_marker = L.marker([3206.067629, 2441.875], {icon:grand_race_icon}).addTo(grand_race_group);
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
achievement_01_marker = L.marker([2167.516464, 1378.50467], {icon:achievement_icon}).addTo(achievements_group);
achievement_01_marker.bindPopup('<b>Pele Shout-out</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Reach the summit of the volcano with a ground vehicle</span><br>', {
                            className: "hstPopup"
});

//Achievement 02 Local Luxuries
achievement_02_marker = L.marker([1263.644593, 2811.279785], {icon:achievement_icon}).addTo(achievements_group);
achievement_02_marker.bindPopup('<b>Local Luxuries</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Stay still for 1 minute on the beach in front of the Royal Hawaiian Hotel</span><br>', {
                            className: "hstPopup"
});

//Achievement 03 French Toast
achievement_03_marker = L.marker([2092.193402, 2183.5], {icon:achievement_icon}).addTo(achievements_group);
achievement_03_marker.bindPopup('<b>French Toast</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Perform a donut move in the Ubisoft logo</span><br>', {
                            className: "hstPopup"
});

//Achievement 04 Sweet Tooth
achievement_04_marker = L.marker([1404.352537, 2962.625], {icon:achievement_icon}).addTo(achievements_group);
achievement_04_marker.bindPopup('<b>Sweet Tooth</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Fly through the "Rule the Streets" inflatable donut with a plane</span><br>', {
                            className: "hstPopup"
});

//Achievement 05 Unholy pizza
achievement_05_marker = L.marker([2502.185783, 2224.857861], {icon:achievement_icon}).addTo(achievements_group);
achievement_05_marker.bindPopup('<b>Unholy pizza</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Perform a donut move around the pineapple shop</span><br>', {
                            className: "hstPopup"
});

//Achievement 06 Oahu Mindfulness
achievement_06_marker = L.marker([1425.49613, 3422.027962], {icon:achievement_icon}).addTo(achievements_group);
achievement_06_marker.bindPopup('<b>Oahu Mindfulness</b><br>\
                                <i>Achievement</i>\
                                <hr style=\"background-color:white;height:0.5px\">\
                                <span><b>Description:</b> Stay in a Car meet car for 10 seconds or more</span><br>', {
                            className: "hstPopup"
});

//TREASURES
//OAHU
//Treasure 01 Hanauma Racetrack
treasure_01_marker = L.marker([1111.971133, 3529.700275], {icon:treasure_icon}).addTo(treasure_group);
treasure_01_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 02 Waikiki Shell(HNL)
treasure_02_marker = L.marker([1248.790404, 2983.725452], {icon:treasure_icon}).addTo(treasure_group);
treasure_02_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 03 State Capitol(HNL)
treasure_03_marker = L.marker([1451.745641, 2645.75], {icon:treasure_icon}).addTo(treasure_group);
treasure_03_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 04 Oahu Airport(HNL)
treasure_04_marker = L.marker([1248.619792, 2446.854628], {icon:treasure_icon}).addTo(treasure_group);
treasure_04_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 05 USS Submarine Museum
treasure_05_marker = L.marker([1541.93917, 2261.3125], {icon:treasure_icon}).addTo(treasure_group);
treasure_05_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 06 Ewa
treasure_06_marker = L.marker([1357.514976, 2074.125], {icon:treasure_icon}).addTo(treasure_group);
treasure_06_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 07 Barbers Point Harbor
treasure_07_marker = L.marker([1204.444286, 1806.657826], {icon:treasure_icon}).addTo(treasure_group);
treasure_07_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 08 Aulinaii Resort
treasure_08_marker = L.marker([1430.508867, 1584.272743], {icon:treasure_icon}).addTo(treasure_group);
treasure_08_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 09 Diamond Head
treasure_09_marker = L.marker([1091.994273, 3209.380903], {icon:treasure_icon}).addTo(treasure_group);
treasure_09_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 10 Makakilo River Gorge
treasure_10_marker = L.marker([1592.940664, 1847.869873], {icon:treasure_icon}).addTo(treasure_group);
treasure_10_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 11 Maili Point
treasure_11_marker = L.marker([2080.091588, 1316.898229], {icon:treasure_icon}).addTo(treasure_group);
treasure_11_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 12 Waianae
treasure_12_marker = L.marker([2390.438098, 1354.6875], {icon:treasure_icon}).addTo(treasure_group);
treasure_12_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 13 Kaena Point
treasure_13_marker = L.marker([2721.856213, 991.894037], {icon:treasure_icon}).addTo(treasure_group);
treasure_13_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 14 Mokuleia Beach
treasure_14_marker = L.marker([2805.989454, 1293.25], {icon:treasure_icon}).addTo(treasure_group);
treasure_14_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 15 Makaleha River - Peacock River
treasure_15_marker = L.marker([2681.776366, 1502.75], {icon:treasure_icon}).addTo(treasure_group);
treasure_15_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 16 Peacock Flats Farm
treasure_16_marker = L.marker([2606.691648, 1797.875], {icon:treasure_icon}).addTo(treasure_group);
treasure_16_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 17 Haleiwa Island Resort
treasure_17_marker = L.marker([2917.566226, 1779.1875], {icon:treasure_icon}).addTo(treasure_group);
treasure_17_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 18 Haleiwa Fields Farm
treasure_18_marker = L.marker([2760.853347, 2041.505666], {icon:treasure_icon}).addTo(treasure_group);
treasure_18_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 19 Pineapple Plantation
treasure_19_marker = L.marker([2551.132101, 2207.25], {icon:treasure_icon}).addTo(treasure_group);
treasure_19_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 20 Japanese Jodo
treasure_20_marker = L.marker([2181.197765, 2013.25], {icon:treasure_icon}).addTo(treasure_group);
treasure_20_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 21 Nanakuli River under the Mauna Pele
treasure_21_marker = L.marker([1838.208505, 1755.4375], {icon:treasure_icon}).addTo(treasure_group);
treasure_21_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 22 Kunia Fields Farm
treasure_22_marker = L.marker([1935.91047, 2078.375], {icon:treasure_icon}).addTo(treasure_group);
treasure_22_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 23 Multicultural Heritage
treasure_23_marker = L.marker([1958.449659, 2417.598085], {icon:treasure_icon}).addTo(treasure_group);
treasure_23_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 24 Mililani Fields Farm
treasure_24_marker = L.marker([2224.504992, 2311.5625], {icon:treasure_icon}).addTo(treasure_group);
treasure_24_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 25 Pearl Botanical Garden
treasure_25_marker = L.marker([1737.306388, 2599.147751], {icon:treasure_icon}).addTo(treasure_group);
treasure_25_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 26 Stairway To Heaven
treasure_26_marker = L.marker([1773.805232, 3051.696091], {icon:treasure_icon}).addTo(treasure_group);
treasure_26_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 27 Koko Crater
treasure_27_marker = L.marker([1396.570277, 3799.196347], {icon:treasure_icon}).addTo(treasure_group);
treasure_27_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 28 Coconut Resort
treasure_28_marker = L.marker([1677.991985, 3645.125], {icon:treasure_icon}).addTo(treasure_group);
treasure_28_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 29 Kailua
treasure_29_marker = L.marker([1867.658147, 3338.427891], {icon:treasure_icon}).addTo(treasure_group);
treasure_29_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 30 Kaneohe
treasure_30_marker = L.marker([2158.389197, 3078.300984], {icon:treasure_icon}).addTo(treasure_group);
treasure_30_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 31 Ewa Forest
treasure_31_marker = L.marker([2033.821956, 2715.125], {icon:treasure_icon}).addTo(treasure_group);
treasure_31_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 32 Hindu Monastery
treasure_32_marker = L.marker([2510.961939, 2835.409804], {icon:treasure_icon}).addTo(treasure_group);
treasure_32_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 33 Wahiawa Forest
treasure_33_marker = L.marker([2499.000949, 2499.125], {icon:treasure_icon}).addTo(treasure_group);
treasure_33_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 34 Turtle Rock
treasure_34_marker = L.marker([3063.353943, 2022.25], {icon:treasure_icon}).addTo(treasure_group);
treasure_34_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 35 Ma'akua Black Beach
treasure_35_marker = L.marker([2743.07839, 2939.442889], {icon:treasure_icon}).addTo(treasure_group);
treasure_35_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 36 Leeward Coast
treasure_36_marker = L.marker([1819.143491, 1437.375], {icon:treasure_icon}).addTo(treasure_group);
treasure_36_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 37 Laie Point
treasure_37_marker = L.marker([2945.933725, 2686.38705], {icon:treasure_icon}).addTo(treasure_group);
treasure_37_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 38 Kahuku Black Beach
treasure_38_marker = L.marker([3250.625352, 2561.625], {icon:treasure_icon}).addTo(treasure_group);
treasure_38_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 39 Waimea Hills
treasure_39_marker = L.marker([3114.835903, 2277.325777], {icon:treasure_icon}).addTo(treasure_group);
treasure_39_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 40 Turtle Bay Beach
treasure_40_marker = L.marker([3330.109146, 2260.75], {icon:treasure_icon}).addTo(treasure_group);
treasure_40_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 41 Mokapu
treasure_41_marker = L.marker([2061.000492, 3562.75], {icon:treasure_icon}).addTo(treasure_group);
treasure_41_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 42 Mauna Pele Red Hill
treasure_42_marker = L.marker([2303.344298, 1629.350801], {icon:treasure_icon}).addTo(treasure_group);
treasure_42_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 43 Koolauloa Hills
treasure_43_marker = L.marker([2816.53654, 2375.61362], {icon:treasure_icon}).addTo(treasure_group);
treasure_43_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//MAUI
//Treasure 44 Iao
treasure_44_marker = L.marker([1696.878357, 5060.75], {icon:treasure_icon}).addTo(treasure_group);
treasure_44_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 45 Kula Fields
treasure_45_marker = L.marker([1206.325384, 5384.625], {icon:treasure_icon}).addTo(treasure_group);
treasure_45_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 46 Kealaloloa Fields
treasure_46_marker = L.marker([1292.022358, 5258.5], {icon:treasure_icon}).addTo(treasure_group);
treasure_46_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 47 Queen Ka'ahumanu Center (Kahului)
treasure_47_marker = L.marker([1648.527592, 5354.389324], {icon:treasure_icon}).addTo(treasure_group);
treasure_47_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 48 Kahului Harbor
treasure_48_marker = L.marker([1550.865826, 5442.33573], {icon:treasure_icon}).addTo(treasure_group);
treasure_48_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 49 Unnamed small island north of Kahului
treasure_49_marker = L.marker([1885.468361, 5254.75], {icon:treasure_icon}).addTo(treasure_group);
treasure_49_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 50 Under Napili highway bridge
treasure_50_marker = L.marker([1747.212135, 4799.133724], {icon:treasure_icon}).addTo(treasure_group);
treasure_50_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 51 Kaonohua Falls
treasure_51_marker = L.marker([1445.3368, 5056.167039], {icon:treasure_icon}).addTo(treasure_group);
treasure_51_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 52 Tunel south of Wailea
treasure_52_marker = L.marker([425.798851, 5044.542256], {icon:treasure_icon}).addTo(treasure_group);
treasure_52_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 53 Hana
treasure_53_marker = L.marker([432.755777, 5999.270363], {icon:treasure_icon}).addTo(treasure_group);
treasure_53_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 54 Maui Arboretum
treasure_54_marker = L.marker([1016.106504, 5882.774866], {icon:treasure_icon}).addTo(treasure_group);
treasure_54_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 55 Haipua'ena Falls
treasure_55_marker = L.marker([1266.970892, 5912.25], {icon:treasure_icon}).addTo(treasure_group);
treasure_55_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 56 Jodo Mission
treasure_56_marker = L.marker([1620.913261, 4679.1875], {icon:treasure_icon}).addTo(treasure_group);
treasure_56_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 57 Awalua Beach
treasure_57_marker = L.marker([1306.175905, 4629.806275], {icon:treasure_icon}).addTo(treasure_group);
treasure_57_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 58 Tunel between Kanaio Reserve and Kahikinui Reserve
treasure_58_marker = L.marker([569.47073, 5263.876644], {icon:treasure_icon}).addTo(treasure_group);
treasure_58_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 59 Ahihi-Kinau
//Not confirmed yet
treasure_59_marker = L.marker([197.197422, 5252.23901], {icon:treasure_icon}).addTo(treasure_group);
treasure_59_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 60 First roundabout off the bridge from Oahu
treasure_60_marker = L.marker([1051.38377, 4155.666553], {icon:treasure_icon}).addTo(treasure_group);
treasure_60_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 61 Haleakala Observatory
//Not confirmed yet
treasure_61_marker = L.marker([749.185973, 5281.29216], {icon:treasure_icon}).addTo(treasure_group);
treasure_61_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 62 Makawao Reserve
//Not confirmed yet
treasure_62_marker = L.marker([814.283467, 5623.5], {icon:treasure_icon}).addTo(treasure_group);
treasure_62_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 63 Kea'a Beach
//Not confirmed yet
treasure_63_marker = L.marker([701.95729, 6081.783323], {icon:treasure_icon}).addTo(treasure_group);
treasure_63_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 64 Random ass house community between Pukalani and Haipua'ena
treasure_64_marker = L.marker([1051.38377, 4155.666553], {icon:treasure_icon}).addTo(treasure_group);
treasure_64_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 65 Next to Ma'alaea Beach
//Not confirmed yet
treasure_65_marker = L.marker([1138.4275, 5193.876085], {icon:treasure_icon}).addTo(treasure_group);
treasure_65_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 66 Next to Ma'alaea Beach
//Not confirmed yet
treasure_66_marker = L.marker([1955.038169, 5175.296988], {icon:treasure_icon}).addTo(treasure_group);
treasure_66_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 67 under Honokohau on the hill next to the highway
//Not confirmed yet
treasure_67_marker = L.marker([1890.092992, 4909.363496], {icon:treasure_icon}).addTo(treasure_group);
treasure_67_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 68 Mountain north of Iao Lake
//Not confirmed yet
treasure_68_marker = L.marker([1674.996132, 4924.709856], {icon:treasure_icon}).addTo(treasure_group);
treasure_68_marker.bindPopup('<b>Treasure Crate</b><br>\
                                <b>Not confirmed yet</b>', {
                            className: "hstPopup"
});

//Treasure 69 Lele
treasure_69_marker = L.marker([1435.856353, 4627.748718], {icon:treasure_icon}).addTo(treasure_group);
treasure_69_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

//Treasure 70 Kamanawai Gulch
treasure_70_marker = L.marker([1302.838154, 4830.069646], {icon:treasure_icon}).addTo(treasure_group);
treasure_70_marker.bindPopup('<b>Treasure Crate</b><br>', {
                            className: "hstPopup"
});

mf_grounds_group.addTo(map);
demo_royale_group.addTo(map);
grand_race_group.addTo(map);
achievements_group.addTo(map);
treasure_group.addTo(map);
