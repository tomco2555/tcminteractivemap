var clawblades_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/clawblades.png',
    iconSize: [39, 50],
    iconAnchor: [19.5, 50],
    popupAnchor: [0,-35],
});

var diamond_fangs_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/diamond_fangs.png',
    iconSize: [36, 50],
    iconAnchor: [18, 50],
    popupAnchor: [0,-35],
});

var quickwhiskers_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/quickwhiskers.png',
    iconSize: [44, 50],
    iconAnchor: [22, 50],
    popupAnchor: [0,-35],
});

var nightstalkers_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/nightstalkers.png',
    iconSize: [47, 50],
    iconAnchor: [23.5, 50],
    popupAnchor: [0,-35],
});

var clawblades_chief_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/clawblades_chief.png',
    iconSize: [49, 60],
    iconAnchor: [24.5, 60],
    popupAnchor: [0,-45],
});

var diamond_fangs_chief_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/diamond_fangs_chief.png',
    iconSize: [48, 60],
    iconAnchor: [24, 60],
    popupAnchor: [0,-45],
});

var quickwhiskers_chief_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/quickwhiskers_chief.png',
    iconSize: [55, 60],
    iconAnchor: [27.5, 60],
    popupAnchor: [0,-45],
});

var nightstalkers_chief_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/nightstalkers_chief.png',
    iconSize: [68, 60],
    iconAnchor: [34, 60],
    popupAnchor: [0,-45],
});

var white_tiger_icon = L.icon({
    iconUrl: 'img/Misc/Rivals/white_tiger.png',
    iconSize: [63, 60],
    iconAnchor: [31.5, 60],
    popupAnchor: [0,-45],
});

clawblades_group = [];
diamond_fangs_group = [];
quickwhiskers_group = [];
nightstalkers_group = [];
chiefs_group = [];
mysterious_driver_group = [];

//Clawblades rivals
//Flash
clawblades_marker01 = L.marker([1391.263754, 2405.25], {icon:clawblades_icon});
clawblades_marker01.bindPopup('<b style=\"font-size:20px\">Flash(Clawblades)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Chevrolet Camaro ZL1</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Leapfrog
clawblades_marker02 = L.marker([818.482583, 4693.598037], {icon:clawblades_icon});
clawblades_marker02.bindPopup('<b style=\"font-size:20px\">Leapfrog(Clawblades)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Dodge Challenger SRT Demon</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Hunter-Killer
clawblades_marker03 = L.marker([1620.428947, 5368.266294], {icon:clawblades_icon});
clawblades_marker03.bindPopup('<b style=\"font-size:20px\">Hunter-Killer(Clawblades)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Dodge Charger SRT Hellcat Redeye Widebody</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Killjoy
clawblades_marker04 = L.marker([318.747224, 5308.780936], {icon:clawblades_icon});
clawblades_marker04.bindPopup('<b style=\"font-size:20px\">Killjoy(Clawblades)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Ford Mustang Shelby GT500</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Diamond Fangs rivals
//Catseye
diamond_fangs_marker01 = L.marker([1251.415734, 1758.221011], {icon:diamond_fangs_icon});
diamond_fangs_marker01.bindPopup('<b style=\"font-size:20px\">Catseye(Diamond Fangs)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> BMW M2 Beehive Edition</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Blaze
diamond_fangs_marker02 = L.marker([2389.600859, 2244.375], {icon:diamond_fangs_icon});
diamond_fangs_marker02.bindPopup('<b style=\"font-size:20px\">Blaze(Diamond Fangs)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Porsche Cayman GT4</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Daydream
diamond_fangs_marker03 = L.marker([1272.249014, 5488.209282], {icon:diamond_fangs_icon});
diamond_fangs_marker03.bindPopup('<b style=\"font-size:20px\">Daydream(Diamond Fangs)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Porsche 911 Turbo 3.6</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Stalker
diamond_fangs_marker04 = L.marker([462.506338, 6032.875], {icon:diamond_fangs_icon});
diamond_fangs_marker04.bindPopup('<b style=\"font-size:20px\">Stalker(Diamond Fangs)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Volkswagen Golf GTI Dash Edition</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Quickwhiskers rivals
//Cinnamon
quickwhiskers_marker01 = L.marker([1622.004254, 4988.75], {icon:quickwhiskers_icon});
quickwhiskers_marker01.bindPopup('<b style=\"font-size:20px\">Cinnamon(Quickwhiskers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Saleen S1</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Silver
quickwhiskers_marker02 = L.marker([671.141382, 5502.875], {icon:quickwhiskers_icon});
quickwhiskers_marker02.bindPopup('<b style=\"font-size:20px\">Silver(Quickwhiskers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Dodge Viper SRT-10 GTS</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Paws
quickwhiskers_marker03 = L.marker([1239.915469, 2973.384015], {icon:quickwhiskers_icon});
quickwhiskers_marker03.bindPopup('<b style=\"font-size:20px\">Paws(Quickwhiskers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Ford GT 2005</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Catnip
quickwhiskers_marker04 = L.marker([3172.427862, 2465.327793], {icon:quickwhiskers_icon});
quickwhiskers_marker04.bindPopup('<b style=\"font-size:20px\">Catnip(Quickwhiskers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Pontiac Firebird 1982</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 1 vehicle</span>', {
    className: "hstPopup"
})

//Nightstalkers rivals
//Furrball
nightstalkers_marker01 = L.marker([1436.261601, 2647.5], {icon:nightstalkers_icon});
nightstalkers_marker01.bindPopup('<b style=\"font-size:20px\">Furrball(Nightstalkers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Abarth 500</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 1 vehicle</span>', {
    className: "hstPopup"
})

//Devilcat
nightstalkers_marker02 = L.marker([1469.204985, 3349.741599], {icon:nightstalkers_icon});
nightstalkers_marker02.bindPopup('<b style=\"font-size:20px\">Devilcat(Nightstalkers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Abarth 500</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 1 vehicle</span>', {
    className: "hstPopup"
})

//Pretty-Boi
nightstalkers_marker03 = L.marker([1951.378164, 4912.375], {icon:nightstalkers_icon});
nightstalkers_marker03.bindPopup('<b style=\"font-size:20px\">Pretty-Boi(Nightstalkers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Abarth 500</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 1 vehicle</span>', {
    className: "hstPopup"
})

//Blue-eyes
nightstalkers_marker04 = L.marker([598.767788, 4986.375], {icon:nightstalkers_icon});
nightstalkers_marker04.bindPopup('<b style=\"font-size:20px\">Blue-eyes(Nightstalkers)</b><br>\
                               <i>Rival</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Abarth 500</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 1 vehicle</span>', {
    className: "hstPopup"
})

//Chiefs
//The Lion
chiefs_marker01 = L.marker([2829.629113, 1854.9375], {icon:clawblades_chief_icon});
chiefs_marker01.bindPopup('<b style=\"font-size:20px\">The Lion(Clawblades)</b><br>\
                               <i>Chief</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Pontiac GTO Rival Ed.</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//The Tank
chiefs_marker02 = L.marker([1762.647066, 5364.553984], {icon:diamond_fangs_chief_icon});
chiefs_marker02.bindPopup('<b style=\"font-size:20px\">The Tank(Diamond Fangs)</b><br>\
                               <i>Chief</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> BMW M5 CS Rival Ed.</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Speedbolt
chiefs_marker03 = L.marker([2016.388499, 3104.875], {icon:quickwhiskers_chief_icon});
chiefs_marker03.bindPopup('<b style=\"font-size:20px\">Speedbolt(Quickwhiskers)</b><br>\
                               <i>Chief</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> DeLorean DMC-12 Rival Ed.</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Street Tier 2</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Shade
chiefs_marker04 = L.marker([2319.885617, 1734], {icon:nightstalkers_chief_icon});
chiefs_marker04.bindPopup('<b style=\"font-size:20px\">Shade(Nightstalkers)</b><br>\
                               <i>Chief</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Alfa Romeo Giulia GTAm Rival Ed.</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Any Street Tier 2 vehicle</span>', {
    className: "hstPopup"
})

//Mysterious Driver
//Sam
mysterious_driver_marker01 = L.marker([1458.04875, 5387.25], {icon:white_tiger_icon});
mysterious_driver_marker01.bindPopup('<b style=\"font-size:20px\">Sam(The Chase Squad)</b><br>\
                               <i>Mysterious Driver</i><br>\
                               <hr style=\"background-color:white;height:0.5px\">\
                               <span><b>Rival Car:</b> Creators Tempesta Rival Ed.</span><br>\
                               <span><b>Chase Restriction:</b> Any Chase Squad Hypercar</span><br>\
                               <span><b>Race Restriction:</b> Hypercars</span>', {
    className: "hstPopup"
})

for(var i = 1; i <= 4; i++) {
    clawblades_group.push(window["clawblades_marker0" + i]);
}

for(var i = 1; i <= 4; i++) {
    diamond_fangs_group.push(window["diamond_fangs_marker0" + i]);
}

for(var i = 1; i <= 4; i++) {
    quickwhiskers_group.push(window["quickwhiskers_marker0" + i]);
}

for(var i = 1; i <= 4; i++) {
    nightstalkers_group.push(window["nightstalkers_marker0" + i]);
}

for(var i = 1; i <= 4; i++) {
    chiefs_group.push(window["chiefs_marker0" + i]);
}

mysterious_driver_group.push(mysterious_driver_marker01);

//markers_canvas.addMarkers(clawblades_group);
//markers_canvas.addMarkers(diamond_fangs_group);
//markers_canvas.addMarkers(quickwhiskers_group);
//markers_canvas.addMarkers(nightstalkers_group);
//markers_canvas.addMarkers(chiefs_group);
//markers_canvas.addMarkers(mysterious_driver_group);