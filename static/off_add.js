var oa_container_icon = L.icon({
    iconUrl: 'img/OffAdd/oa_container.png',
    iconSize: [45, 75],
    iconAnchor: [22.5,75],
    popupAnchor: [0,-60],
});

var oa_event_icon = L.icon({
    iconUrl: 'img/OffAdd/oa_event.png',
    iconSize: [35, 45],
    iconAnchor: [17.5,45],
    popupAnchor: [0,-35],
});

oa_container_group = L.featureGroup();
oa_events_group = L.featureGroup();
oa_photo_ops_group = L.featureGroup();
oa_feats_group = L.featureGroup();
oa_collectibles_group = L.featureGroup();

//CONTAINER
oa_container_marker = L.marker([1094.805329, 2108.592421], {icon:oa_container_icon}).addTo(oa_container_group);
oa_container_marker.bindPopup('<b>Off-roading Addict</b><br>\
                            <i>Container</i>', {
                        className: "hstPopup"
});


oa_container_group.addTo(map)





