var rivals_json_data;

async function loadRivalsJsonFile() {
    const path_to_folder = "static/data/";
    const file_ext = ".json";
    const file_name = "rivals";

    const json_data = await fetch(path_to_folder + file_name + file_ext);
    rivals_json_data = await json_data.json();
}

async function loadRivals(data, mode, rival_group, icon_name, marker_type) {
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
                    current_icon_name = clawblades_chief_icon;
                    break;
                case "The Tank":
                    current_rival_group = "Diamond Fangs";
                    current_icon_name = diamond_fangs_chief_icon;
                    break;
                case "Speedbolt":
                    current_rival_group = "Quickwhiskers";
                    current_icon_name = quickwhiskers_chief_icon;
                    break;
                case "Shade":
                    current_rival_group = "Nightstalkers";
                    current_icon_name = nightstalkers_chief_icon;
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

async function loadRivalsEverything(mode) {
    let clawblades_group = await loadRivals(rivals_json_data["Clawblades"], mode, "Clawblades", clawblades_icon, "Rival");

    let diamond_fangs_group = await loadRivals(rivals_json_data["Diamond_fangs"], mode, "Diamond Fangs", diamond_fangs_icon, "Rival");

    let quickwhiskers_group = await loadRivals(rivals_json_data["Quickwhiskers"], mode, "Quickwhiskers", quickwhiskers_icon, "Rival");

    let nightstalkers_group = await loadRivals(rivals_json_data["Nightstalkers"], mode, "Nightstalkers", nightstalkers_icon, "Rival");

    let chiefs_group = await loadRivals(rivals_json_data["Chiefs"], mode, "Chiefs", "", "Chief");

    let mysterious_driver_group = await loadRivals(rivals_json_data["Mysterious_driver"], mode, "The Chase Squad", white_tiger_icon, "Mysterious Driver");

    return { clawblades_group, diamond_fangs_group, quickwhiskers_group, nightstalkers_group, chiefs_group, mysterious_driver_group }
}

async function initializeRivals(mode, first_load) {
    if(first_load) {
        await loadRivalsJsonFile();
    }

    const { clawblades_group, diamond_fangs_group, quickwhiskers_group, nightstalkers_group, chiefs_group, mysterious_driver_group } = await loadRivalsEverything(mode);
    window["clawblades_group"] = clawblades_group;
    window["diamond_fangs_group"] = diamond_fangs_group;
    window["quickwhiskers_group"] = quickwhiskers_group;
    window["nightstalkers_group"] = nightstalkers_group;
    window["chiefs_group"] = chiefs_group;
    window["mysterious_driver_group"] = mysterious_driver_group;
}

initializeRivals("canvas", true);