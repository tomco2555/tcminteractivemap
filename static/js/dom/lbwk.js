var lbwk_container_icon = L.icon({
    iconUrl: 'img/LBWK/lbwk_container.png',
    iconSize: [68, 75],
    iconAnchor: [34,75],
    popupAnchor: [0,-60],
});

var lbwk_event_icon = L.icon({
    iconUrl: 'img/LBWK/lbwk_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

lbwk_container_group = L.featureGroup();
lbwk_events_group = L.featureGroup();
lbwk_photo_ops_group = L.featureGroup();
lbwk_feats_group = L.featureGroup();
lbwk_collectibles_group = L.featureGroup();

//CONTAINER
lbwk_container_marker = L.marker([1786.76132, 3465.5], {icon:lbwk_container_icon}).addTo(lbwk_container_group);
lbwk_container_marker.bindPopup('<b>Liberty Walk</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
lbwk_event01_marker = L.marker([1666.598792, 3527.755731], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event01_marker.bindPopup("<b style=\"font-size:20px\">Ground Works</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(1/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> BMW M4 Competition Coupé</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
lbwk_event02_marker = L.marker([1436.34481, 2109.122752], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event02_marker.bindPopup("<b style=\"font-size:20px\">Art Works</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(2/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> BMW M4 Liberty Walk Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
lbwk_event03_marker = L.marker([1660.259105, 2658.125], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event03_marker.bindPopup("<b style=\"font-size:20px\">Master Works</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(3/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Nissan GT-R</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
lbwk_event04_marker = L.marker([1603.25689, 2249.125], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event04_marker.bindPopup("<b style=\"font-size:20px\">Custom Nation</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(4/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Chrysler 300 SRT8</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 05
lbwk_event05_marker = L.marker([2846.115887, 1695.465285], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event05_marker.bindPopup("<b style=\"font-size:20px\">Global Nation</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(5/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Mini Cooper S</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
lbwk_event06_marker = L.marker([2820.574464, 1938.091299], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event06_marker.bindPopup("<b style=\"font-size:20px\">Elite Nation</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(6/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Mercedes-Benz C 63 S Coupé</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">33,750</span></span><br>", {
    className: "hstPopup"
});

//Event 07
lbwk_event07_marker = L.marker([2899.762991, 2006.680657], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event07_marker.bindPopup("<b style=\"font-size:20px\">Peak Performance</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(7/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Acura NSX</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 08
lbwk_event08_marker = L.marker([1176.843532, 3230.682495], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event08_marker.bindPopup("<b style=\"font-size:20px\">Punk Performance</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(8/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Lamborghini Aventador LP 700-4</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 09
lbwk_event09_marker = L.marker([2441.740104, 2281.1875], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event09_marker.bindPopup("<b style=\"font-size:20px\">Pure Performance</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(9/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Lamborghini Huracán Performante</span><br>\
                              <span><b>Category:</b> Hypercar</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 10
lbwk_event10_marker = L.marker([1434.127883, 3671.5], {icon:lbwk_event_icon}).addTo(lbwk_events_group);
lbwk_event10_marker.bindPopup("<b style=\"font-size:20px\">Liberty Territory</b><br>\
                              <i>Event</i><br>\
                              <span><b>Liberty Walk(10/10)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Multi Vehicle</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,080</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">75,150</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var LBWKfeatsArr = [[1874.025733, 3121, "speedtrap", "Kamo'oali'i", "Speedtrap", "250.0 km/h", "960", "1,800"],  //Feat 01
                    [2205.765362, 2431.375, "escape", "Mililani Mauka", "Escape", "920 m", "2,880", "5,400"],  //Feat 02
                    [3170.248805, 2425.5, "escape", "Koolauloa", "Escape", "790 m", "2,880", "5,400"],  //Feat 03
                    [2821.382769, 1846.375, "slalom", "Haleiwa", "Slalom", "6,000 PTS", "2,880", "5,400"],  //Feat 04
                    [1156.446674, 3018.207658, "slalom", "Waikiki Shell", "Slalom", "4,290 PTS", "2,880", "5,400"],  //Feat 05
                   ]

function createLBWKFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["lbwk_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(lbwk_feats_group);
        window["lbwk_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Liberty Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Liberty Walk</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createLBWKFeatsMarkers(LBWKfeatsArr);

//PHOTO OPS
//Photo Ops 1 Liberty Views - Industrial Park
lbwk_photo_ops01_marker = L.marker([1997.968473, 2140.854168], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Industrial Park</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drift Nissan</span><br>\
                              <span>- containers</span><br>\
                              <span>- Kunia Fields's industrial park</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Liberty Views - Docks
lbwk_photo_ops02_marker = L.marker([1282.662361, 1825.270781], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Docks</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Mazda</span><br>\
                              <span>- containers inside the container terminal</span><br>\
                              <span>- Barbers Point Harbor</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Liberty Views - Island
lbwk_photo_ops03_marker = L.marker([2006.499086, 3503], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Island</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Ford</span><br>\
                              <span>- island to the southeast in the background</span><br>\
                              <span>- belvedere of Mokapu</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Liberty Views - Antenna
lbwk_photo_ops04_marker = L.marker([2706.755062, 1124.25], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Antenna</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- BMW</span><br>\
                              <span>- deep space antenna</span><br>\
                              <span>- Kaena Point</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Liberty Views - Gorilla Head
lbwk_photo_ops05_marker = L.marker([2143.817996, 2887.647318], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Gorilla Head</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini</span><br>\
                              <span>- gorilla head</span><br>\
                              <span>- north of the Japanese Temple in Kaneohe</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Liberty Views - Maze
lbwk_photo_ops06_marker = L.marker([2521.500879, 2234.25], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Maze</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Porsche</span><br>\
                              <span>- Pineapple Garden</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 Liberty Views - The Golf Course
lbwk_photo_ops07_marker = L.marker([1354.34814, 2134.401819], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - The Golf Course</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Lamborghini hypercar</span><br>\
                              <span>- next to the golf flag and pond</span><br>\
                              <span>- Ewa golf course</span><br>", {
    className: "hstPopup"
});

//Photo Ops 8 Liberty Views - Tunnel
lbwk_photo_ops08_marker = L.marker([1167.133683, 3507.125], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops08_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Tunnel</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar</span><br>\
                              <span>- Nitro</span><br>\
                              <span>- Hanauma Racetrack undergroud tunnel</span><br>", {
    className: "hstPopup"
});

//Photo Ops 9 Liberty Views - Airport
lbwk_photo_ops09_marker = L.marker([1235.639202, 2295.75], {icon:photo_op_icon}).addTo(lbwk_photo_ops_group);
lbwk_photo_ops09_marker.bindPopup("<b style=\"font-size:20px\">Liberty Views - Airport</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Liberty Walk</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar</span><br>\
                              <span>- Oahu Airline plane</span><br>\
                              <span>- on the runway at Oahu Airport</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Liberty Quest
//Collectible 1 Liberty Quest
lbwk_collectible01_marker = L.marker([1430.815787, 2397.625], {icon:collectible_icon}).addTo(lbwk_collectibles_group);
lbwk_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Liberty Walk</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Liberty Quest</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Liberty Quest
lbwk_collectible02_marker = L.marker([1297.57171, 1816.5], {icon:collectible_icon}).addTo(lbwk_collectibles_group);
lbwk_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Liberty Walk</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Liberty Quest</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Liberty Quest
lbwk_collectible03_marker = L.marker([1996.728326, 2131.485004], {icon:collectible_icon}).addTo(lbwk_collectibles_group);
lbwk_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Liberty Walk</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Liberty Quest</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Liberty Quest
lbwk_collectible04_marker = L.marker([2186.25058, 2204.5625], {icon:collectible_icon}).addTo(lbwk_collectibles_group);
lbwk_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Liberty Walk</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Liberty Quest</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Liberty Quest
lbwk_collectible05_marker = L.marker([3159.194574, 2406.814706], {icon:collectible_icon}).addTo(lbwk_collectibles_group);
lbwk_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Liberty Walk</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Liberty Quest</span><br>", {
    className: "hstPopup"
});

lbwk_container_group.addTo(map);
lbwk_events_group.addTo(map);
lbwk_feats_group.addTo(map);
lbwk_collectibles_group.addTo(map);
lbwk_photo_ops_group.addTo(map);