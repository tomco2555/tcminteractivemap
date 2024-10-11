var dvl_container_icon = L.icon({
    iconUrl: 'img/DvL/dvl_container.png',
    iconSize: [90, 75],
    iconAnchor: [45,75],
    popupAnchor: [0,-60],
});

var dvl_event_d_icon = L.icon({
    iconUrl: 'img/DvL/dvl_event_d.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

var dvl_event_l_icon = L.icon({
    iconUrl: 'img/DvL/dvl_event_l.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

dvl_container_group = L.featureGroup();
dvl_events_group = L.featureGroup();
dvl_photo_ops_group = L.featureGroup();
dvl_feats_group = L.featureGroup();
dvl_collectibles_group = L.featureGroup();

//CONTAINER
dvl_container_marker = L.marker([2148.363598, 2551.06449], {icon:dvl_container_icon}).addTo(dvl_container_group);
dvl_container_marker.bindPopup('<b>Donk vs Lowrider</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01 Donk
dvl_event01_marker = L.marker([2207.235806, 2616.29509], {icon:dvl_event_d_icon}).addTo(dvl_events_group);
dvl_event01_marker.bindPopup("<b style=\"font-size:20px\">What Donk Bizness Is</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(1/12)</b></span><br>\
                              <span><b>Donk side(1/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Chevrolet Caprice</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02 Donk
dvl_event02_marker = L.marker([1011.595056, 2268], {icon:dvl_event_d_icon}).addTo(dvl_events_group);
dvl_event02_marker.bindPopup("<b style=\"font-size:20px\">The Way You Drive</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(2/12)</b></span><br>\
                              <span><b>Donk side(2/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Street Versus</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03 Donk
dvl_event03_marker = L.marker([1861.9001, 2206.75], {icon:dvl_event_d_icon}).addTo(dvl_events_group);
dvl_event03_marker.bindPopup("<b style=\"font-size:20px\">Get It Or Donk Come Back</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(3/12)</b></span><br>\
                              <span><b>Donk side(3/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Street Versus</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04 Donk
dvl_event04_marker = L.marker([1913.64894, 2530.75], {icon:dvl_event_d_icon}).addTo(dvl_events_group);
dvl_event04_marker.bindPopup("<b style=\"font-size:20px\">Ride Wit' Us</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(4/12)</b></span><br>\
                              <span><b>Donk side(4/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 05 Donk
dvl_event05_marker = L.marker([1272.921709, 3021.113723], {icon:dvl_event_d_icon}).addTo(dvl_events_group);
dvl_event05_marker.bindPopup("<b style=\"font-size:20px\">Low' Don't Dance No Mo'</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(5/12)</b></span><br>\
                              <span><b>Donk side(5/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06 Donk
dvl_event06_marker = L.marker([808.491, 2249.306671], {icon:dvl_event_d_icon}).addTo(dvl_events_group);
dvl_event06_marker.bindPopup("<b style=\"font-size:20px\">The Return Of \"D\"</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(6/12)</b></span><br>\
                              <span><b>Donk side(6/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 07 Lowrider
dvl_event07_marker = L.marker([2204.938355, 2609.577576], {icon:dvl_event_l_icon}).addTo(dvl_events_group);
dvl_event07_marker.bindPopup("<b style=\"font-size:20px\">Ridin' In My Buick</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(7/12)</b></span><br>\
                              <span><b>Lowrider side(1/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Buick GNX</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">21,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,500</span></span><br>", {
    className: "hstPopup"
});

//Event 08 Lowrider
dvl_event08_marker = L.marker([2107.763851, 2035.125], {icon:dvl_event_l_icon}).addTo(dvl_events_group);
dvl_event08_marker.bindPopup("<b style=\"font-size:20px\">Hop' Till Infinity</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(8/12)</b></span><br>\
                              <span><b>Lowrider side(2/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Car Dance</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 09 Lowrider
dvl_event09_marker = L.marker([2078.772006, 1974.625], {icon:dvl_event_l_icon}).addTo(dvl_events_group);
dvl_event09_marker.bindPopup("<b style=\"font-size:20px\">R U Still Low?</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(9/12)</b></span><br>\
                              <span><b>Lowrider side(3/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 10 Lowrider
dvl_event10_marker = L.marker([1356.998516, 3052.933528], {icon:dvl_event_l_icon}).addTo(dvl_events_group);
dvl_event10_marker.bindPopup("<b style=\"font-size:20px\">Some Car 2 Dance With</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(10/12)</b></span><br>\
                              <span><b>Lowrider side(4/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Car Dance</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 11 Lowrider
dvl_event11_marker = L.marker([1303.626968, 3106.85042], {icon:dvl_event_l_icon}).addTo(dvl_events_group);
dvl_event11_marker.bindPopup("<b style=\"font-size:20px\">Still GNX</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(11/12)</b></span><br>\
                              <span><b>Lowrider side(5/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 12 Lowrider
dvl_event12_marker = L.marker([810.434997, 2253.726088], {icon:dvl_event_l_icon}).addTo(dvl_events_group);
dvl_event12_marker.bindPopup("<b style=\"font-size:20px\">Donks, Don't Kill My Vibe</b><br>\
                              <i>Event</i><br>\
                              <span><b>Donk vs Lowrider(12/12)</b></span><br>\
                              <span><b>Lowrider side(6/6)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var DvLfeatsArr = [[1445.89082, 2877.967981, "slalom", "Kahaluu Tunnel", "Slalom", "5,220 PTS", "1,920", "3,600", "Dirty South"],  //Feat 01
                   [1272.887455, 2253.284147, "speedtrap", "Kaukonahua River", "Speedtrap", "270.0 km/h", "960", "1,800", "Dirty South"],  //Feat 02
                   [1669.442299, 2248.625, "slalom", "Wahiawa Streets", "Slalom", "5,100 PTS", "2,880", "5,400", "Dirty South"],  //Feat 03
                   [2135.811375, 1955.75, "slalom", "Haleiwa Coast", "Slalom", "3,390 PTS", "2,880", "5,400", "West Side"],  //Feat 04
                   [2195.128867, 2612.1875, "speedtrap", "Laie Village", "Speedtrap", "190.0 km/h", "960", "1,800", "West Side"],  //Feat 05
                   [825.236916, 2882.344017, "bullseye", "Kalihi Laces", "Bullseye", "6,520 PTS", "4,800", "9,000", "West Side"],  //Feat 06
                  ]

function createDvLFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["dvl_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(dvl_feats_group);
        window["dvl_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">" + featsArr[i][8] + " Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Donk vs Lowrider</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createDvLFeatsMarkers(DvLfeatsArr);

//PHOTO OPS
//Photo Ops 1 West Side Views - Haleiwa Docks
dvl_photo_ops01_marker = L.marker([2154.014288, 2002.172851], {icon:photo_op_icon}).addTo(dvl_photo_ops_group);
dvl_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">West Side Views - Haleiwa Docks</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Donk vs Lowrider</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span>- Sunrise</span><br>\
                              <span>- Haleiwa docks</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 West Side Views - Big Tree
dvl_photo_ops02_marker = L.marker([2118.132099, 1979.810599], {icon:photo_op_icon}).addTo(dvl_photo_ops_group);
dvl_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">West Side Views - Big Tree</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Donk vs Lowrider</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span>- Midday</span><br>\
                              <span>- Under the big tree</span><br>\
                              <span>- Haleiwa park</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 West Side Views - Lowrider HQ
dvl_photo_ops03_marker = L.marker([2122.727, 2030.722287], {icon:photo_op_icon}).addTo(dvl_photo_ops_group);
dvl_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">West Side Views - Lowrider HQ</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Donk vs Lowrider</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Buick GNX El Sereno Lowrider Edición</span><br>\
                              <span>- Sunset</span><br>\
                              <span>- Lowrider HQ</span><br>\
                              <span>- Haleiwa</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Dirty South Views - Donk HQ
dvl_photo_ops04_marker = L.marker([1613.77046, 2220.5], {icon:photo_op_icon}).addTo(dvl_photo_ops_group);
dvl_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Dirty South Views - Donk HQ</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Donk vs Lowrider</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hoonigan Chevrolet Caprice Donk</span><br>\
                              <span>- Night</span><br>\
                              <span>- Donk HQ</span><br>\
                              <span>- Wahiawa</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Dirty South Views - Wahiawa Bridge
dvl_photo_ops05_marker = L.marker([1636.642296, 2163.5], {icon:photo_op_icon}).addTo(dvl_photo_ops_group);
dvl_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Dirty South Views - Wahiawa Bridge</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Donk vs Lowrider</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span>- Midday</span><br>\
                              <span>- Nitro</span><br>\
                              <span>- Western bridge of Wahiawa</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Dirty South Views - Luxurious Villas
dvl_photo_ops06_marker = L.marker([1607.315453, 2347.125], {icon:photo_op_icon}).addTo(dvl_photo_ops_group);
dvl_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Dirty South Views - Luxurious Villas</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Donk vs Lowrider</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Chevrolet Caprice Weasel D. Customs Donk Edition</span><br>\
                              <span>- Dusk</span><br>\
                              <span>- Luxurious Villas</span><br>\
                              <span>- East of Wahiawa</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Dirty South V West Side
//Collectible 1 Dirty South V West Side
dvl_collectible01_marker = L.marker([574.457746, 2248.422787], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Dirty South V West Side
dvl_collectible02_marker = L.marker([1186.96901, 3241.64265], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Dirty South V West Side
dvl_collectible03_marker = L.marker([1325.908781, 3147.155506], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Dirty South V West Side
dvl_collectible04_marker = L.marker([1544.119872, 2215.121228], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Dirty South V West Side
dvl_collectible05_marker = L.marker([1546.391698, 2093.375], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Dirty South V West Side
dvl_collectible06_marker = L.marker([2103.185004, 1991.5625], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Dirty South V West Side
dvl_collectible07_marker = L.marker([2201.005132, 2606.0625], {icon:collectible_icon}).addTo(dvl_collectibles_group);
dvl_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Donk vs Lowrider</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Dirty South V West Side</span><br>", {
    className: "hstPopup"
});

dvl_container_group.addTo(map);
dvl_events_group.addTo(map);
dvl_feats_group.addTo(map);
dvl_collectibles_group.addTo(map);
dvl_photo_ops_group.addTo(map);