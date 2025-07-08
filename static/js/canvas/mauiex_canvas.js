var mauiex_container_icon = L.icon({
    iconUrl: 'img/MauiEx/mauiex_container.png',
    iconSize: [64, 75],
    iconAnchor: [32,75],
    popupAnchor: [0,-60],
});

var mauiex_event_icon = L.icon({
    iconUrl: 'img/MauiEx/mauiex_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

mauiex_container_group = [];
mauiex_events_group = [];
mauiex_photo_ops_group = [];
mauiex_feats_group = [];
mauiex_collectibles_group = [];

//CONTAINER
mauiex_container_marker = L.marker([645.944847, 4975.9375], {icon:mauiex_container_icon});
mauiex_container_marker.bindPopup('<b>Maui Expeditions</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

//EVENTS
//Event 01
mauiex_event01_marker = L.marker([585.850198, 5174.519036], {icon:mauiex_event_icon});
mauiex_event01_marker.bindPopup("<b style=\"font-size:20px\">The Maui Big Tour</b><br>\
                              <i>Event</i><br>\
                              <span><b>Maui Expeditions(1/1)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Time Attack</span><br>\
                              <span><b>Weather:</b> Midday</span><br>\
                              <span><b>Car:</b> Porsche 178 Spyder Fitted Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">40,080</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">75,150</span></span><br>", {
    className: "hstPopup"
});

//FEATS
var AMfeatsArr = [[979.356414, 5426.514216, "escape", "Kula Reserve", "Escape", "710 m", "2,880", "5,400"],  //Feat 01
                  [1781.728186, 4719.849376, "escape", "Kahana Beach", "Escape", "900 m", "2,880", "5,400"],  //Feat 02
                  [1938.227677, 4989.375, "speedtrap", "Honokohau", "Speedtrap", "140.0 km/h", "960", "1,800"],  //Feat 03
                  [657.350849, 4936.482406, "speedtrap", "Kihei", "Speedtrap", "160.0 km/h", "960", "1,800"],  //Feat 04
                  [332.208693, 5896.534829, "speedtrap", "Ohe'o Gulch", "Speedtrap", "150.0 km/h", "960", "1,800"],  //Feat 05
                 ]

function createMauiExFeatsMarkers(featsArr) {
    for(var i = 0; i < featsArr.length; i++) {
        window["mauiex_feat" + i + "_marker"] = L.marker([featsArr[i][0], featsArr[i][1]], {icon:window[featsArr[i][2] +"_icon"]});
        window["mauiex_feat" + i + "_marker"].bindPopup("<b style=\"font-size:20px\">Valley Isle Feats - " + featsArr[i][3] + "</b><br>\
                                     <i>Feat - " + featsArr[i][4] + "</i><br>\
                                     <span><b>Maui Expeditions</b></span><br>\
                                     <hr style=\"background-color:white;height:0.5px\">\
                                     <span><b>Objective:</b> " + featsArr[i][5] + "</span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/green_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][6] + "</span></span><br>\
                                     <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">" + featsArr[i][7] + "</span></span><br>", {
            className: "hstPopup"
        });
    }
}

createMauiExFeatsMarkers(AMfeatsArr);

//PHOTO OPS
//Photo Ops 1 Valley Isle Views - Haleakala Observatory
mauiex_photo_ops01_marker = L.marker([742.835808, 5282.794762], {icon:photo_op_icon});
mauiex_photo_ops01_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Haleakala Observatory</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- beside Haleakala Observatory</span><br>\
                              <span>- Night</span><br>", {
    className: "hstPopup"
});

//Photo Ops 2 Valley Isle Views - Iao Lake Dam
mauiex_photo_ops02_marker = L.marker([1623.428856, 4987.312516], {icon:photo_op_icon});
mauiex_photo_ops02_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Iao Lake Dam</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar</span><br>\
                              <span>- Iao Lake Dam</span><br>\
                              <span>- Midday</span><br>", {
    className: "hstPopup"
});

//Photo Ops 3 Valley Isle Views - Kalepa Sunset
mauiex_photo_ops03_marker = L.marker([228.798162, 5638.292696], {icon:photo_op_icon});
mauiex_photo_ops03_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Kalepa Sunset</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 1</span><br>\
                              <span>- Kalepa Sunset Rocks</span><br>\
                              <span>- Midday</span><br>", {
    className: "hstPopup"
});

//Photo Ops 4 Valley Isle Views - Kapalua Labyrinth
mauiex_photo_ops04_marker = L.marker([1881.516443, 4726.03656], {icon:photo_op_icon});
mauiex_photo_ops04_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Kapalua Labyrinth</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 1</span><br>\
                              <span>- Kapalua Labyrinth</span><br>\
                              <span>- Dusk</span><br>", {
    className: "hstPopup"
});

//Photo Ops 5 Valley Isle Views - Wai'anapanapa Sea Arch
mauiex_photo_ops05_marker = L.marker([570.988531, 6124.248592], {icon:photo_op_icon});
mauiex_photo_ops05_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Wai'anapanapa Sea Arch</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Motocross</span><br>\
                              <span>- Wai'anapanapa Sea Arch</span><br>\
                              <span>- Sunset</span><br>", {
    className: "hstPopup"
});

//Photo Ops 6 Valley Isle Views - Honomanu Beach
mauiex_photo_ops06_marker = L.marker([897.863997, 6056.929138], {icon:photo_op_icon});
mauiex_photo_ops06_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Honomanu Beach</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Rally Raid</span><br>\
                              <span>- Honomanu Beach</span><br>\
                              <span>- Midday</span><br>", {
    className: "hstPopup"
});

//Photo Ops 7 Valley Isle Views - Seven Sacred Pool
mauiex_photo_ops07_marker = L.marker([371.915941, 5858.945773], {icon:photo_op_icon});
mauiex_photo_ops07_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Seven Sacred Pool</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Hypercar</span><br>\
                              <span>- on the bridge in front of Seven Sacred Pools</span><br>\
                              <span>- Midday</span><br>", {
    className: "hstPopup"
});

//Photo Ops 8 Valley Isle Views - Twin Falls
mauiex_photo_ops08_marker = L.marker([1288.141545, 5847.593672], {icon:photo_op_icon});
mauiex_photo_ops08_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Twin Falls</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Street Tier 2</span><br>\
                              <span>- Twin Falls</span><br>\
                              <span>- Sunrise</span><br>", {
    className: "hstPopup"
});

//Photo Ops 9 Valley Isle Views - Pu'u Koa'e Aech
mauiex_photo_ops09_marker = L.marker([1953.596959, 5190.748459], {icon:photo_op_icon});
mauiex_photo_ops09_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Pu'u Koa'e Aech</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Motocross</span><br>\
                              <span>- Pu'u Koa'e Aech</span><br>\
                              <span>- Afternoon</span><br>", {
    className: "hstPopup"
});

//Photo Ops 10 Valley Isle Views - Pu'Unianiau Crater
mauiex_photo_ops10_marker = L.marker([772.836601, 5815.668745], {icon:photo_op_icon});
mauiex_photo_ops10_marker.bindPopup("<b style=\"font-size:20px\">Valley Isle Views - Pu'Unianiau Crater</b><br>\
                              <i>Photo Ops</i><br>\
                              <span><b>Maui Expeditions</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Requirements</b></span><br>\
                              <span>- Monster Truck</span><br>\
                              <span>- Pu'Unianiau Crater</span><br>\
                              <span>- Sunset</span><br>", {
    className: "hstPopup"
});

//COLLECTIBLES
//Valley Isle Lighthouses
//Collectible 1 Valley Isle Lighthouses
mauiex_collectible01_marker = L.marker([1245.38748, 4919.125], {icon:collectible_icon});
mauiex_collectible01_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Lighthouses</span><br>", {
    className: "hstPopup"
});

//Collectible 2 Valley Isle Lighthouses
mauiex_collectible02_marker = L.marker([1505.255484, 4609.4375], {icon:collectible_icon});
mauiex_collectible02_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Lighthouses</span><br>", {
    className: "hstPopup"
});

//Collectible 3 Valley Isle Lighthouses
mauiex_collectible03_marker = L.marker([2037.799246, 4977.943351], {icon:collectible_icon});
mauiex_collectible03_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Lighthouses</span><br>", {
    className: "hstPopup"
});

//Collectible 4 Valley Isle Lighthouses
mauiex_collectible04_marker = L.marker([1821.145741, 5364.75], {icon:collectible_icon});
mauiex_collectible04_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Lighthouses</span><br>", {
    className: "hstPopup"
});

//Collectible 5 Valley Isle Lighthouses
mauiex_collectible05_marker = L.marker([830.918693, 6151.577726], {icon:collectible_icon});
mauiex_collectible05_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Lighthouses</span><br>", {
    className: "hstPopup"
});

//Collectible 6 Valley Isle Lighthouses
mauiex_collectible06_marker = L.marker([156.964988, 5440.074246], {icon:collectible_icon});
mauiex_collectible06_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Lighthouses</span><br>", {
    className: "hstPopup"
});

//Valley Isle Fun Hook
//Collectible 1 Valley Isle Fun Hook
mauiex_collectible07_marker = L.marker([472.53487, 6077.936338], {icon:collectible_icon});
mauiex_collectible07_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Fun Hook</span><br>", {
    className: "hstPopup"
});

//Valley Isle Fun Dolphins
//Collectible 1 Valley Isle Fun Dolphins
mauiex_collectible08_marker = L.marker([591.631363, 4938], {icon:collectible_icon});
mauiex_collectible08_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Fun Dolphins</span><br>", {
    className: "hstPopup"
});

//Valley Isle Street Lava
//Collectible 1 Valley Isle Street Lava
mauiex_collectible09_marker = L.marker([1651.230841, 5296], {icon:collectible_icon});
mauiex_collectible09_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Street Lava</span><br>", {
    className: "hstPopup"
});

//Valley Isle Cowboys
//Collectible 1 Valley Isle Cowboys
mauiex_collectible10_marker = L.marker([1686.785031, 5354.831266], {icon:collectible_icon});
mauiex_collectible10_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Cowboys</span><br>", {
    className: "hstPopup"
});

//Valley Isle Jaws
//Collectible 1 Valley Isle Jaws
mauiex_collectible11_marker = L.marker([491.709747, 6089.338435], {icon:collectible_icon});
mauiex_collectible11_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Jaws</span><br>", {
    className: "hstPopup"
});

//Valley Isle Sea Turbines
//Collectible 1 Valley Isle Sea Turbines
mauiex_collectible12_marker = L.marker([1357.195323, 4799.752442], {icon:collectible_icon});
mauiex_collectible12_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Sea Turbines</span><br>", {
    className: "hstPopup"
});

//Valley Isle Mountain Tiki
//Collectible 1 Valley Isle Mountain Tiki
mauiex_collectible13_marker = L.marker([1770.029752, 4944.267391], {icon:collectible_icon});
mauiex_collectible13_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Mountain Tiki</span><br>", {
    className: "hstPopup"
});

//Valley Isle City Tiki
//Collectible 1 Valley Isle City Tiki
mauiex_collectible14_marker = L.marker([1578.727361, 5161.375], {icon:collectible_icon});
mauiex_collectible14_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle City Tiki</span><br>", {
    className: "hstPopup"
});

//Valley Isle Tree Tiki
//Collectible 1 Valley Isle Tree Tiki
mauiex_collectible15_marker = L.marker([879.995272, 5670.0625], {icon:collectible_icon});
mauiex_collectible15_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Tree Tiki</span><br>", {
    className: "hstPopup"
});

//Valley Isle Volcano Tiki
//Collectible 1 Valley Isle Volcano Tiki
mauiex_collectible16_marker = L.marker([779.745254, 5306.25], {icon:collectible_icon});
mauiex_collectible16_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Volcano Tiki</span><br>", {
    className: "hstPopup"
});

//Valley Isle Sky Tiki
//Collectible 1 Valley Isle Sky Tiki
mauiex_collectible17_marker = L.marker([665.759421, 5350.875], {icon:collectible_icon});
mauiex_collectible17_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Sky Tiki</span><br>", {
    className: "hstPopup"
});

//Valley Isle Wonders
//Collectible 1 Valley Isle Wonders
mauiex_collectible18_marker = L.marker([605.753921, 4995.115836], {icon:collectible_icon});
mauiex_collectible18_marker.bindPopup("<b style=\"font-size:20px\">Maui Expeditions</b><br>\
                              <i>Collectible</i><br>\
                              <span><b>Challenge:</b> Valley Isle Wonders</span><br>", {
    className: "hstPopup"
});

mauiex_container_group.push(mauiex_container_marker);

for(var i = 1; i <= 1; i++) {
    if(i < 10) {
        mauiex_events_group.push(window["mauiex_event0" + i + "_marker"]);
    }
    else {
        mauiex_events_group.push(window["mauiex_event" + i + "_marker"]);
    }
}

for(var i = 0; i <= 4; i++) {
    mauiex_feats_group.push(window["mauiex_feat" + i + "_marker"]);
}

for(var i = 1; i <= 10; i++) {
    if(i < 10) {
        mauiex_photo_ops_group.push(window["mauiex_photo_ops0" + i + "_marker"]);
    }
    else {
        mauiex_photo_ops_group.push(window["mauiex_photo_ops" + i + "_marker"]);
    }
}

for(var i = 1; i <= 18; i++) {
    if(i < 10) {
        mauiex_collectibles_group.push(window["mauiex_collectible0" + i + "_marker"]);
    }
    else {
        mauiex_collectibles_group.push(window["mauiex_collectible" + i + "_marker"]);
    }
}

markers_canvas.addMarkers(mauiex_container_group);
markers_canvas.addMarkers(mauiex_events_group);
markers_canvas.addMarkers(mauiex_collectibles_group);
markers_canvas.addMarkers(mauiex_photo_ops_group);
markers_canvas.addMarkers(mauiex_feats_group);