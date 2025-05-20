var mij2_container_icon = L.icon({
    iconUrl: 'img/MIJ2/mij2_container.png',
    iconSize: [55, 75],
    iconAnchor: [27.5,75],
    popupAnchor: [0,-60],
});

var mij2_event_icon = L.icon({
    iconUrl: 'img/MIJ2/mij2_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

mij2_container_group = [];
mij2_events_group = [];
mij2_photo_ops_group = [];
mij2_feats_group = [];
mij2_collectibles_group = [];

//Container
mij2_container_marker = L.marker([2084.289429, 3377.849094], {icon:mij2_container_icon});
mij2_container_marker.bindPopup('<b>Made in Japan Vol.2</b><br>\
                                <i>Container</i>', {
    className: "hstPopup"
})

//Events
//Event 01
mij2_event01_marker = L.marker([1821.16393, 3469.242645], {icon:mij2_event_icon});
mij2_event01_marker.bindPopup("<b style=\"font-size:20px\">Wangan Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(1/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Toyota Supra Ryūjin Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 02
mij2_event02_marker = L.marker([1714.692334, 5206.75], {icon:mij2_event_icon});
mij2_event02_marker.bindPopup("<b style=\"font-size:20px\">K-Car Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(2/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Mazda RX-7 Turbo 10th Aniversary</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
mij2_event03_marker = L.marker([1662.860549, 5328.579926], {icon:mij2_event_icon});
mij2_event03_marker.bindPopup("<b style=\"font-size:20px\">Hashiriya Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(3/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Toyota GR86</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 04
mij2_event04_marker = L.marker([1476.385564, 5435.0625], {icon:mij2_event_icon});
mij2_event04_marker.bindPopup("<b style=\"font-size:20px\">Tsuchiya Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(4/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drift Trial</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Mitsubishi Lancer Evolution VI GSR</span><br>\
                              <span><b>Category:</b> Drift</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">7,200</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">13,500</span></span><br>", {
    className: "hstPopup"
});

//Event 05
mij2_event05_marker = L.marker([1289.643157, 5599.6875], {icon:mij2_event_icon});
mij2_event05_marker.bindPopup("<b style=\"font-size:20px\">Bosozoku Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(5/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Mitsubishi 3000GT VR4</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 06
mij2_event06_marker = L.marker([707.63588, 5311.25], {icon:mij2_event_icon});
mij2_event06_marker.bindPopup("<b style=\"font-size:20px\">Touge Style</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(6/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Nissan Skyline GT-R (R32)</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 07
mij2_event07_marker = L.marker([541.573345, 6069.0625], {icon:mij2_event_icon});
mij2_event07_marker.bindPopup("<b style=\"font-size:20px\">Wangan Soul</b><br>\
                              <i>Event</i><br>\
                              <span><b>Made in Japan Vol.2(7/7)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Liberty Walk Honda NSX</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var MIJ2featsArr = [[683.589913, 5969.395447, "slalom", "Hana", "Slalom", "5,250 PTS", "2,880", "5,400"],  //Feat 01
                    [653.874578, 5570.125, "slalom", "Caldera", "Slalom", "6,720 PTS", "2,880", "5,400"],  //Feat 02
                    [961.092236, 5937.875, "slalom", "Bamboo Forest", "Slalom", "4,640 PTS", "2,880", "5,400"],  //Feat 03
                    [1297.005853, 5570.0625, "speedtrap", "Kanaha Pond", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 04
                    [1567.558571, 5409.278488, "speedtrap", "Kahului", "Speedtrap", "200.0 km/h", "960", "1,800"],  //Feat 05
                    [1682.104857, 5049.5, "escape", "Iao", "Escape", "940 m", "2,880", "5,400"],  //Feat 06
                   ]

function createMIJ2FeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["mij2_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["mij2_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Sekai No Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Made in Japan Vol.2</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createMIJ2FeatsMarkers(MIJ2featsArr);

//Photo Ops
//Photo Ops 1 Sekai No Views - Airport
mij2_photo_ops01_marker = L.marker([1475.921853, 5394.871187], {icon:photo_op_icon});
mij2_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Sekai No Views - Airport</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Drifting in fron of a plane</span><br>\
                              <span>- Kahului Airport</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Sekai No Views - Bamboo Forest
mij2_photo_ops02_marker = L.marker([924.647604, 5943.875], {icon:photo_op_icon});
mij2_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Sekai No Views - Bamboo Forest</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Drift</span><br>\
                              <span>- Pipawai Bamboo Forest</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Sekai No Views - Jodo Mission
mij2_photo_ops03_marker = L.marker([1621.871098, 4678.625], {icon:photo_op_icon});
mij2_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Sekai No Views - Jodo Mission</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Jodo Mission of Napili</span><br>\
                              <span>- Night</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Sekai No Views - Kuikahi Stairs
mij2_photo_ops04_marker = L.marker([1612.367547, 5244.375], {icon:photo_op_icon});
mij2_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Sekai No Views - Kuikahi Stairs</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 1</span><br>\
                              <span>- Kuikahi Stairs</span><br>\
                              <span>- west of Kahului</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Sekai No Views - Kepaniwai Park
mij2_photo_ops05_marker = L.marker([1707.627918, 5065.4375], {icon:photo_op_icon});
mij2_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Sekai No Views - Kepaniwai Park</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Any vehicle</span><br>\
                              <span>- Kepaniwai Park</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Sekai No Views - Hana Tree
mij2_photo_ops06_marker = L.marker([430.048785, 6053.364377], {icon:photo_op_icon});
mij2_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Sekai No Views - Hana Tree</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Made in Japan Vol.2</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2 car</span><br>\
                              <span>- Purple tree</span><br>\
                              <span>- Hana</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Sekai No Ryūjin
//Collectible 1 Sekai No Ryūjin
mij2_collectible01_marker = L.marker([1618.809459, 4679.75], {icon:collectible_icon});
mij2_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Sekai No Ryūjin</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Sekai No Ryūjin
mij2_collectible02_marker = L.marker([1697.755695, 5063.875], {icon:collectible_icon});
mij2_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Made in Japan Vol.2</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Sekai No Ryūjin</span><br>", {
    className: "hstPopup"
});

mij2_container_group.push(mij2_container_marker);

for(var i = 1; i <= 7; i++) {
    if(i < 10) {
        mij2_events_group.push(window["mij2_event0" + i + "_marker"]);
    }
    else {
        mij2_events_group.push(window["mij2_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 5; i++) {
    mij2_feats_group.push(window["mij2_feat" + i + "_marker"]);
}

for(var i = 1; i <= 6; i++) {
    if(i < 10) {
        mij2_photo_ops_group.push(window["mij2_photo_ops0" + i + "_marker"]);
    }
    else {
        mij2_photo_ops_group.push(window["mij2_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 2; i++) {
    if(i < 10) {
        mij2_collectibles_group.push(window["mij2_collectible0" + i + "_marker"]);
    }
    else {
        mij2_collectibles_group.push(window["mij2_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(mij2_container_group);
markers_canvas.addMarkers(mij2_events_group);
markers_canvas.addMarkers(mij2_collectibles_group);
markers_canvas.addMarkers(mij2_photo_ops_group);
markers_canvas.addMarkers(mij2_feats_group);