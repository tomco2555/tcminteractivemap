// Loads JSON file containing information about each icon used in the interactive map
InteractiveMap.utils.icons.loadIconsJsonFile = async function () {
    const file_ext = ".json";
    const file_name = "icons";

    const json_data = await fetch(InteractiveMap.paths.pathToData + file_name + file_ext);
    InteractiveMap.data.iconJSONData = await json_data.json();
}

// Loads icons in the global object
// Each playlist is its own group that contains container icon and event icon(s)
InteractiveMap.utils.icons.loadPlaylistIcons = async function (data, attrib) {
    Object.keys(data).forEach(key => {
        InteractiveMap.icons[attrib][key] = {};
        data[key].forEach(entry => {
            var icon_to_add = L.icon({
                iconUrl: entry["path"],
                iconSize: entry["iconSize"],
                iconAnchor: entry["iconAnchor"],
                popupAnchor: entry["popupAnchor"],
                originalIconSize: entry["iconSize"],
                originalIconAnchor: entry["iconAnchor"],
                originalPopupAnchor: entry["popupAnchor"]
            });
            InteractiveMap.icons[attrib][key][entry["type"]] = icon_to_add;
        })
    })
}

// Loads all other icons into their respective subcategory
InteractiveMap.utils.icons.loadOtherIcons = async function (data, attrib) {
    for (let i = 0; i < data.length; i++) {
        var icon_to_add = L.icon({
            iconUrl: data[i]["path"],
            iconSize: data[i]["iconSize"],
            iconAnchor: data[i]["iconAnchor"],
            popupAnchor: data[i]["popupAnchor"],
            originalIconSize: data[i]["iconSize"],
            originalIconAnchor: data[i]["iconAnchor"],
            originalPopupAnchor: data[i]["popupAnchor"]
        });
        InteractiveMap.icons[attrib][data[i]["type"]] = icon_to_add;
    }
}

// Loads all the icons
InteractiveMap.utils.icons.initializeIcons = async function () {
    await InteractiveMap.utils.icons.loadIconsJsonFile();


    await InteractiveMap.utils.icons.loadPlaylistIcons(InteractiveMap.data.iconJSONData["playlists"], "playlists");
    await InteractiveMap.utils.icons.loadPlaylistIcons(InteractiveMap.data.iconJSONData["playlist_side"], "playlist_side");
    await InteractiveMap.utils.icons.loadOtherIcons(InteractiveMap.data.iconJSONData["misc"], "misc");
    await InteractiveMap.utils.icons.loadOtherIcons(InteractiveMap.data.iconJSONData["rivals"], "rivals");
    await InteractiveMap.utils.icons.loadOtherIcons(InteractiveMap.data.iconJSONData["challenges"], "challenges");
}

InteractiveMap.utils.icons.initializeIcons();