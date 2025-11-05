InteractiveMap.utils.rivals.loadRivalsJsonFile = async function () {
    const file_ext = ".json";
    const file_name = "rivals";

    const json_data = await fetch(InteractiveMap.paths.pathToData + file_name + file_ext);
    InteractiveMap.data.rivalsJSONData = await json_data.json();
}

InteractiveMap.utils.rivals.loadRivals = async function (data, mode, rival_group, icon_name, marker_type) {
    var rivals_markers;

    if(mode === "canvas") {
        rivals_markers = [];
    }
    else if(mode === "dom") {
        rivals_markers = L.featureGroup();
    }

    for (let i = 0; i < data.length; i++) {
        let current_rival_group = rival_group;
        let current_icon_name = icon_name;

        if(rival_group === "Chiefs") {
            switch(data[i]['name']) {
                case "The Lion":
                    current_rival_group = "Clawblades";
                    current_icon_name = InteractiveMap.icons.rivals["Clawblades Chief"];
                    break;
                case "The Tank":
                    current_rival_group = "Diamond Fangs";
                    current_icon_name = InteractiveMap.icons.rivals["Diamond Fangs Chief"];
                    break;
                case "Speedbolt":
                    current_rival_group = "Quickwhiskers";
                    current_icon_name = InteractiveMap.icons.rivals["Quickwhiskers Chief"];
                    break;
                case "Shade":
                    current_rival_group = "Nightstalkers";
                    current_icon_name = InteractiveMap.icons.rivals["Nightstalkers Chief"];
                    break;
            }
        }

        var rivals_marker = L.marker(data[i]['coords'], {icon:current_icon_name});
        rivals_marker.bindPopup("<b style=\"font-size:20px\">" + data[i]['name'] + "(" + current_rival_group + ")</b><br>\
                                    <i>" + marker_type + "</i><br>\
                                    <hr style=\"background-color:white;height:0.5px\">\
                                    <span><b>Rival Car:</b> " + data[i]['car'] + "</span><br>\
                                    <span><b>Chase Restriction:</b> " + data[i]['chase_restriction'] + "</span><br>\
                                    <span><b>Race Restriction:</b> " + data[i]['race_restriction'] + "</span>", {
            className: "hstPopup"
        });

        if(mode === "canvas") {
            rivals_markers.push(rivals_marker);
        }
        else if(mode === "dom") {
            rivals_marker.addTo(rivals_markers);
        }
    }

    return rivals_markers;
}

InteractiveMap.utils.rivals.loadRivalsEverything = async function (mode) {
    let clawblades_group = await InteractiveMap.utils.rivals.loadRivals(InteractiveMap.data.rivalsJSONData["Clawblades"], mode, "Clawblades", InteractiveMap.icons.rivals["Clawblades"], "Rival");

    let diamond_fangs_group = await InteractiveMap.utils.rivals.loadRivals(InteractiveMap.data.rivalsJSONData["Diamond_fangs"], mode, "Diamond Fangs", InteractiveMap.icons.rivals["Diamond Fangs"], "Rival");

    let quickwhiskers_group = await InteractiveMap.utils.rivals.loadRivals(InteractiveMap.data.rivalsJSONData["Quickwhiskers"], mode, "Quickwhiskers", InteractiveMap.icons.rivals["Quickwhiskers"], "Rival");

    let nightstalkers_group = await InteractiveMap.utils.rivals.loadRivals(InteractiveMap.data.rivalsJSONData["Nightstalkers"], mode, "Nightstalkers", InteractiveMap.icons.rivals["Nightstalkers"], "Rival");

    let chiefs_group = await InteractiveMap.utils.rivals.loadRivals(InteractiveMap.data.rivalsJSONData["Chiefs"], mode, "Chiefs", "", "Chief");

    let mysterious_driver_group = await InteractiveMap.utils.rivals.loadRivals(InteractiveMap.data.rivalsJSONData["Mysterious_driver"], mode, "The Chase Squad", InteractiveMap.icons.rivals["White Tiger"], "Mysterious Driver");

    return { clawblades_group, diamond_fangs_group, quickwhiskers_group, nightstalkers_group, chiefs_group, mysterious_driver_group }
}

InteractiveMap.utils.rivals.initializeRivals = async function (mode, first_load) {
    if(first_load) {
        await InteractiveMap.utils.rivals.loadRivalsJsonFile();
    }

    const { clawblades_group, diamond_fangs_group, quickwhiskers_group, nightstalkers_group, chiefs_group, mysterious_driver_group } = await InteractiveMap.utils.rivals.loadRivalsEverything(mode);
    InteractiveMap.markers.rivals["clawblades"] = clawblades_group;
    InteractiveMap.markers.rivals["diamond_fangs"] = diamond_fangs_group;
    InteractiveMap.markers.rivals["quickwhiskers"] = quickwhiskers_group;
    InteractiveMap.markers.rivals["nightstalkers"] = nightstalkers_group;
    InteractiveMap.markers.rivals["chiefs"] = chiefs_group;
    InteractiveMap.markers.rivals["mysterious_driver"] = mysterious_driver_group;
}

InteractiveMap.utils.rivals.initializeRivals("canvas", true);