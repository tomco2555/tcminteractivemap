var am_container_icon = L.icon({
    iconUrl: 'img/AM/am_container.png',
    iconSize: [64, 75],
    iconAnchor: [32,75],
    popupAnchor: [0,-60],
});

var am_event_icon = L.icon({
    iconUrl: 'img/AM/am_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

var am_container_group = [];
var am_events_group = [];
var am_photo_ops_group = [];
var am_feats_group = [];
var am_collectibles_group = [];

//CONTAINER
am_container_marker = L.marker([796.268069, 2303], {icon:am_container_icon});
am_container_marker.bindPopup('<b>American Muscle</b><br>\
                               <i>Container</i>', {
    className: "hstPopup"
})

am_container_group.push(am_container_marker);

//EVENTS
//Event 01
am_event01_marker = L.marker([1676.904726, 2235.606477], {icon:am_event_icon});
am_event01_marker.bindPopup("<b style=\"font-size:20px\">Jackson V8</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(1/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Mustang GT Fastback</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">8,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">15,750</span></span><br>", {
    className: "hstPopup"
});

//Event 02
am_event02_marker = L.marker([1326.382066, 2226.3125], {icon:am_event_icon});
am_event02_marker.bindPopup("<b style=\"font-size:20px\">Vegas Strip</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(2/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Drag Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Dragster</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">4,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,000</span></span><br>", {
    className: "hstPopup"
});

//Event 03
am_event03_marker = L.marker([1427.478998, 1982.197084], {icon:am_event_icon});
am_event03_marker.bindPopup("<b style=\"font-size:20px\">Denver RWD</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(3/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Outrun</span><br>\
                              <span><b>Weather:</b> Afternoon</span><br>\
                              <span><b>Car:</b> Ford Mustang GT Fastback Stunt Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 04
am_event04_marker = L.marker([1975.391554, 2814.196601], {icon:am_event_icon});
am_event04_marker.bindPopup("<b style=\"font-size:20px\">Orlando Smackdown</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(4/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Night</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Monster</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 05
am_event05_marker = L.marker([2372.434459, 2431.25], {icon:am_event_icon});
am_event05_marker.bindPopup("<b style=\"font-size:20px\">Tallahassee Melee</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(5/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Morning</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">10,800</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">20,250</span></span><br>", {
    className: "hstPopup"
});

//Event 06
am_event06_marker = L.marker([2453.114911, 2214.625], {icon:am_event_icon});
am_event06_marker.bindPopup("<b style=\"font-size:20px\">Palm Springs Riot</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(6/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Mustang Shelby GT500</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">12,000</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">22,500</span></span><br>", {
    className: "hstPopup"
});

//Event 07
am_event07_marker = L.marker([1502.005818, 1768.375], {icon:am_event_icon});
am_event07_marker.bindPopup("<b style=\"font-size:20px\">Phoenix Rumble</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(7/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunset</span><br>\
                              <span><b>Car:</b> Ford Mustang GT</span><br>\
                              <span><b>Category:</b> Rally Raid</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

//Event 08
am_event08_marker = L.marker([1363.92626, 1965.84524], {icon:am_event_icon});
am_event08_marker.bindPopup("<b style=\"font-size:20px\">Reno Roar</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(8/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Sunrise</span><br>\
                              <span><b>Car:</b> Ford Mustang Shelby GT500 Tribute Edition</span><br>\
                              <span><b>Category:</b> Street Tier 2</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">9,600</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">18,000</span></span><br>", {
    className: "hstPopup"
});

//Event 09
am_event09_marker = L.marker([652.857813, 2118.84547], {icon:am_event_icon});
am_event09_marker.bindPopup("<b style=\"font-size:20px\">Detroit Finisher</b><br>\
                              <i>Event</i><br>\
                              <span><b>American Muscle(9/9)</b></span><br>\
                              <hr style=\"background-color:white;height:0.5px\">\
                              <span><b>Event type:</b> Race</span><br>\
                              <span><b>Weather:</b> Dawn</span><br>\
                              <span><b>Car:</b> Ford Mustang Boss 429</span><br>\
                              <span><b>Category:</b> Street Tier 1</span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/blue_xp.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">14,400</span></span><br>\
                              <span style=\"display:inline-block;\"><img src=\"img/Misc/bucks.png\" style=\"vertical-align:middle; width:25%; height:25%\"> <span style=\"vertical-align:middle;\">27,000</span></span><br>", {
    className: "hstPopup"
});

for(var i = 1; i < 10; i++) {
    am_events_group.push(window["am_event0" + i + "_marker"]);
}