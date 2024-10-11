var vg_container_icon = L.icon({
    iconUrl: 'img/VG/vg_container.png',
    iconSize: [75, 75],
    iconAnchor: [37.5,75],
    popupAnchor: [0,-60],
});

var vg_event_icon = L.icon({
    iconUrl: 'img/VG/vg_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

vg_container_group = L.featureGroup();
vg_events_group = L.featureGroup();
vg_photo_ops_group = L.featureGroup();
vg_feats_group = L.featureGroup();
vg_collectibles_group = L.featureGroup();

//CONTAINER
vg_container_marker = L.marker([1125.44214, 3393.9375], {icon:vg_container_icon}).addTo(vg_container_group);
vg_container_marker.bindPopup('<b>Vintage Garage</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
vg_event01_marker = L.marker([1323.439627, 3600.625], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event01_marker.bindPopup("<b style=\"font-size:20px\">Back in Time</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(1/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Cadillac Eldorado Brougham</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">16,320</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 02
vg_event02_marker = L.marker([1852.6144, 2752.043743], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event02_marker.bindPopup("<b style=\"font-size:20px\">Stock Around the Clock</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(2/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Cadillac Eldorado Brougham</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,160</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 03
vg_event03_marker = L.marker([1591.850939, 3022.917501], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event03_marker.bindPopup("<b style=\"font-size:20px\">Kiss Me Kombi</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(3/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Volkswagen Kombi 21 Window Bus</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">11,700</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 04
vg_event04_marker = L.marker([2509.749051, 2297.0625], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event04_marker.bindPopup("<b style=\"font-size:20px\">Mustang Sally</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(4/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Ford Mustang Boss 429</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 05
vg_event05_marker = L.marker([1501.298192, 2351], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event05_marker.bindPopup("<b style=\"font-size:20px\">Get Dirt on It</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(5/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Nissan Fairlady Z 432 (PS30)</span><br>\
                              <span><b>Category:</b> Rally</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,160</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 06
vg_event06_marker = L.marker([825.46467, 1544.409598], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event06_marker.bindPopup("<b style=\"font-size:20px\">Stayin' Ahead</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(6/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ferrari 365 GTB4 Competizione</span><br>\
                              <span><b>Category:</b> Racing</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,160</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
vg_event07_marker = L.marker([2074.48506, 1730.3125], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event07_marker.bindPopup("<b style=\"font-size:20px\">Drive This Way</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(7/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Navigation</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Pontiac Firebird T/A</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 08
vg_event08_marker = L.marker([1265.429169, 2314.75], {icon:vg_event_icon}).addTo(vg_events_group);
vg_event08_marker.bindPopup("<b style=\"font-size:20px\">Vintage Showdown</b><br>\
                              <i>Event</i><br>\
                              <span><b>Vintage Garage(8/8)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Ferrari F40</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var VGfeatsArr = [[1505.804224, 2230.038011, "slalom", "Schofield Barracks", "Slalom", "6,430 PTS", "2,880", "5,400"],  //Feat 01
                  [1851.1974, 3010.949063, "slalom", "Kualoa Beach", "Slalom", "5,760 PTS", "2,880", "5,400"],  //Feat 02
                  [2338.998734, 2618.125, "speedtrap", "Kahuku Black Beach", "Speedtrap", "210.0 km/h", "960", "1,800"],  //Feat 03
                  [730.137972, 1685.625, "slalom", "Kahuku Black Beach", "Makakilo", "4,420 PTS", "2,880", "5,400"],  //Feat 04
                 ]

function createVGFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["vg_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]}).addTo(vg_feats_group);
        window["vg_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Retro Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Vintage Garage</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createVGFeatsMarkers(VGfeatsArr);

//PHOTO OPS
//Photo Ops 1 Retro Views - Hau'ula Forest
vg_photo_ops01_marker = L.marker([1874.621455, 2702.385341], {icon:photo_op_icon}).addTo(vg_photo_ops_group);
vg_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Retro Views - Hau'ula Forest</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Vintage Garage</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Classic Car</span><br>\
                              <span>- Drifting</span><br>\
                              <span>- Kualoa Racetrack</span><br>\
                              <span>- near Hau'ula Forest</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Retro Views - Gas Station
vg_photo_ops02_marker = L.marker([2165.23455, 2568.4375], {icon:photo_op_icon}).addTo(vg_photo_ops_group);
vg_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Retro Views - Gas Station</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Vintage Garage</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Classic Car</span><br>\
                              <span>- Gas Station</span><br>\
                              <span>- Laie</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Retro Views - Resort
vg_photo_ops03_marker = L.marker([2519.355894, 2288.8125], {icon:photo_op_icon}).addTo(vg_photo_ops_group);
vg_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Retro Views - Resort</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Vintage Garage</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Classic Car</span><br>\
                              <span>- Turtle Bay Resort</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Retro Views - Theater
vg_photo_ops04_marker = L.marker([1663.80046, 2232.75], {icon:photo_op_icon}).addTo(vg_photo_ops_group);
vg_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Retro Views - Theater</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Vintage Garage</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Classic Car</span><br>\
                              <span>- Night</span><br>\
                              <span>- Theater</span><br>\
                              <span>- Wahiawa</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Retro Views - Kaena Point
vg_photo_ops05_marker = L.marker([1956.599042, 989.271669], {icon:photo_op_icon}).addTo(vg_photo_ops_group);
vg_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Retro Views - Kaena Point</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Vintage Garage</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Volkswagen Kombi 21 Window Bus</span><br>\
                              <span>- Sunset</span><br>\
                              <span>- Kaena Point</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Retro Views - Motel
vg_photo_ops06_marker = L.marker([2079.167954, 1741.125], {icon:photo_op_icon}).addTo(vg_photo_ops_group);
vg_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Retro Views - Motel</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Vintage Garage</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Classic Car</span><br>\
                              <span>- Motel Sign</span><br>\
                              <span>- Night</span><br>\
                              <span>- between the Mokuleia Park Airport and Haleiwa</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Retro Texas
//Collectible 1 Retro Texas
vg_collectible01_marker = L.marker([2167.057121, 2569.5], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Retro Texas
vg_collectible02_marker = L.marker([2123.56475, 2012.5625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Retro Texas
vg_collectible03_marker = L.marker([2086.196165, 2023.6875], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Retro Texas
vg_collectible04_marker = L.marker([2077.380062, 1880.5625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Retro Texas
vg_collectible05_marker = L.marker([1681.326192, 2227.875], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Retro Texas
vg_collectible06_marker = L.marker([1646.69541, 2327.375], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 7 Retro Texas
vg_collectible07_marker = L.marker([1586.074171, 2292.125], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 8 Retro Texas
vg_collectible08_marker = L.marker([1606.187869, 2206.75], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 9 Retro Texas
vg_collectible09_marker = L.marker([1603.069162, 2117.25], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 10 Retro Texas
vg_collectible10_marker = L.marker([1614.563027, 1355.4375], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 11 Retro Texas
vg_collectible11_marker = L.marker([1280.31584, 2040.4375], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible11_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 12 Retro Texas
vg_collectible12_marker = L.marker([1260.067052, 2310.75], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible12_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 13 Retro Texas
vg_collectible13_marker = L.marker([1167.379218, 2320.625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible13_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 14 Retro Texas
vg_collectible14_marker = L.marker([1268.566051, 3087.375], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible14_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 15 Retro Texas
vg_collectible15_marker = L.marker([1202.697343, 3109.1875], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible15_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 16 Retro Texas
vg_collectible16_marker = L.marker([1154.072783, 3318.9375], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible16_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 17 Retro Texas
vg_collectible17_marker = L.marker([601.198714, 3016.8125], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible17_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 18 Retro Texas
vg_collectible18_marker = L.marker([637.065681, 3048.125], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible18_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 19 Retro Texas
vg_collectible19_marker = L.marker([560.083012, 2790.625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible19_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 20 Retro Texas
vg_collectible20_marker = L.marker([712.376723, 2810.75], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible20_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 21 Retro Texas
vg_collectible21_marker = L.marker([742.44084, 2670.5625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible21_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 22 Retro Texas
vg_collectible22_marker = L.marker([682.441859, 2532.5625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible22_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 23 Retro Texas
vg_collectible23_marker = L.marker([613.755168, 2469.5625], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible23_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 24 Retro Texas
vg_collectible24_marker = L.marker([705.505994, 2407], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible24_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 25 Retro Texas
vg_collectible25_marker = L.marker([834.813941, 2384.3125], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible25_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 26 Retro Texas
vg_collectible26_marker = L.marker([631.563221, 2053.4375], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible26_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

//Collectible 27 Retro Texas
vg_collectible27_marker = L.marker([579.607543, 1787.60127], {icon:collectible_icon}).addTo(vg_collectibles_group);
vg_collectible27_marker.bindPopup("<b style=\"font-size:20px\">Vintage Garage</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Retro Texas</span><br>", {
    className: "hstPopup"
});

vg_container_group.addTo(map);
vg_events_group.addTo(map);
vg_feats_group.addTo(map);
vg_collectibles_group.addTo(map);
vg_photo_ops_group.addTo(map);