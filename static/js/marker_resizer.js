function resizeMarker(obj, sizeModifier) {
    const mode_switch = document.getElementById("mode_switch");
    sizeModifier = parseFloat(sizeModifier.value) / 100
    function recursiveResize(obj) {
        for (const key in obj) {
            const value = obj[key];

            if (typeof value === "object" && !(value instanceof L.Icon)) {
                recursiveResize(value);
            }
            else {
                value.options.iconSize = [value.options.originalIconSize[0] * sizeModifier, value.options.originalIconSize[1] * sizeModifier]
                value.options.iconAnchor = [value.options.originalIconAnchor[0] * sizeModifier, value.options.originalIconAnchor[1] * sizeModifier]
                value.options.popupAnchor = [value.options.originalPopupAnchor[0] * sizeModifier, value.options.originalPopupAnchor[1] * sizeModifier]
            }
        }
    }

    recursiveResize(obj);
    
    if (mode_switch.checked) {
        InteractiveMap.map.canvas.redraw();
    }

    else {
        InteractiveMap.map.instance.eachLayer((layer)=>{
            if(layer instanceof L.Marker){
                layer.setIcon(layer.options.icon);
            }
        });
    }
}