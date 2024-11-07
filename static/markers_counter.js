let markers_count = '{ "playlist": [' +
    '{ "playlistName":"Made in Japan", "numberContainer":1, "numberEvents":7, "numberFeats":6, "numberPhotoOps":5, "numberCollectibles":5 },' +
    '{ "playlistName":"Hawaii Scenic Tour", "numberContainer":1, "numberEvents":9, "numberFeats":10, "numberPhotoOps":9, "numberCollectibles":108 },' +
    '{ "playlistName":"American Muscle", "numberContainer":1, "numberEvents":9, "numberFeats":7, "numberPhotoOps":5, "numberCollectibles":11 },' +
    '{ "playlistName":"911 Legacy", "numberContainer":1, "numberEvents":6, "numberFeats":4, "numberPhotoOps":5, "numberCollectibles":9 },' +
    '{ "playlistName":"Rule the Streets", "numberContainer":1, "numberEvents":7, "numberFeats":4, "numberPhotoOps":5, "numberCollectibles":76 },' +
    '{ "playlistName":"Off-roading Addict", "numberContainer":1, "numberEvents":8, "numberFeats":9, "numberPhotoOps":7, "numberCollectibles":35 },' +
    '{ "playlistName":"Vintage Garage", "numberContainer":1, "numberEvents":8, "numberFeats":4, "numberPhotoOps":6, "numberCollectibles":27 },' +
    '{ "playlistName":"Automobili Lamborghini", "numberContainer":1, "numberEvents":9, "numberFeats":6, "numberPhotoOps":7, "numberCollectibles":7 },' +
    '{ "playlistName":"Motorsports", "numberContainer":1, "numberEvents":8, "numberFeats":5, "numberPhotoOps":5, "numberCollectibles":5 },' +
    '{ "playlistName":"Electric Odyssey", "numberContainer":1, "numberEvents":7, "numberFeats":6, "numberPhotoOps":4, "numberCollectibles":8 },' +
    '{ "playlistName":"Dream Cars", "numberContainer":1, "numberEvents":7, "numberFeats":5, "numberPhotoOps":5, "numberCollectibles":5 },' +
    '{ "playlistName":"Bike Lovers", "numberContainer":1, "numberEvents":8, "numberFeats":6, "numberPhotoOps":5, "numberCollectibles":8 },' +
    '{ "playlistName":"Liberty Walk", "numberContainer":1, "numberEvents":10, "numberFeats":5, "numberPhotoOps":9, "numberCollectibles":5 },' +
    '{ "playlistName":"Drift Experience", "numberContainer":1, "numberEvents":8, "numberFeats":9, "numberPhotoOps":7, "numberCollectibles":13 },' +
    '{ "playlistName":"Ocean\'N Sky", "numberContainer":1, "numberEvents":8, "numberFeats":13, "numberPhotoOps":6, "numberCollectibles":25 },' +
    '{ "playlistName":"Gymkhana Grid Masters", "numberContainer":1, "numberEvents":10, "numberFeats":6, "numberPhotoOps":5, "numberCollectibles":7 },' +
    '{ "playlistName":"Drift Experience Vol.2", "numberContainer":1, "numberEvents":7, "numberFeats":6, "numberPhotoOps":8, "numberCollectibles":5 },' +
    '{ "playlistName":"Hollywood Action!", "numberContainer":1, "numberEvents":9, "numberFeats":4, "numberPhotoOps":5, "numberCollectibles":8 },' +
    '{ "playlistName":"Donk vs Lowrider", "numberContainer":1, "numberEvents":12, "numberFeats":6, "numberPhotoOps":6, "numberCollectibles":7 },' +
    '{ "playlistName":"Off-roading Addict Vol.2", "numberContainer":1, "numberEvents":9, "numberFeats":6, "numberPhotoOps":6, "numberCollectibles":8 } ],' +
                       '"misc": [' +
    '{ "miscName":"Grand Race", "numberMarkers":11 },' +                   
    '{ "miscName":"Demo Royale", "numberMarkers":4 },' +
    '{ "miscName":"Motorfest Grounds", "numberMarkers":1 },' +
    '{ "miscName":"Treasure Locations", "numberMarkers":43 },' +
    '{ "miscName":"Achievements", "numberMarkers":6 } ]}';

const markers_count_obj = JSON.parse(markers_count);

function updatePlaylistMarkerCount(elem) {

    var playlist_checkbox = elem.parentNode;
    

    var playlist_info = markers_count_obj.playlist.find(function(item) {
        return item.playlistName === playlist_checkbox_name;
    })

    const activity_checkboxes = document.querySelectorAll(".activity_checkbox");

    if(playlist_checkbox_status.checked === false) {
        playlist_marker_count.innerHTML = "";

        activity_checkboxes.forEach(function(activity_checkbox, j) {
            var activity_checkbox_name = activity_checkbox.getElementsByTagName("span")[0].innerHTML;
            var activity_marker_count = activity_checkbox.getElementsByClassName("filter_marker_count")[0];
            var activity_checkbox_status = activity_checkbox.getElementsByClassName("filter_checkbox")[0];

            if(activity_checkbox_name === "Container" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML -= playlist_info.numberContainer;
            }

            else if(activity_checkbox_name === "Events" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML -= playlist_info.numberEvents;
            }

            else if(activity_checkbox_name === "Feats" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML -= playlist_info.numberFeats;
            }

            else if(activity_checkbox_name === "Photo Ops" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML -= playlist_info.numberPhotoOps;
            }

            else if(activity_checkbox_name === "Collectibles" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML -= playlist_info.numberCollectibles;
            }
        })
    }

    else if(playlist_checkbox_status.checked === true) {

        playlist_marker_count.innerHTML = 0

        activity_checkboxes.forEach(function(activity_checkbox, i) {
            var activity_checkbox_name = activity_checkbox.getElementsByTagName("span")[0].innerHTML;
            var activity_marker_count = activity_checkbox.getElementsByClassName("filter_marker_count")[0];
            var activity_checkbox_status = activity_checkbox.getElementsByClassName("filter_checkbox")[0];

            if(activity_checkbox_name === "Container" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + playlist_info.numberContainer;
                playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + playlist_info.numberContainer;
            }

            else if(activity_checkbox_name === "Events" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + playlist_info.numberEvents;
                playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + playlist_info.numberEvents;
            }

            else if(activity_checkbox_name === "Feats" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + playlist_info.numberFeats;
                playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + playlist_info.numberFeats;
            }

            else if(activity_checkbox_name === "Photo Ops" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + playlist_info.numberPhotoOps;
                playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + playlist_info.numberPhotoOps;
            }

            else if(activity_checkbox_name === "Collectibles" && activity_checkbox_status.checked === true) {
                activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + playlist_info.numberCollectibles;
                playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + playlist_info.numberCollectibles;
            }
        })
    }
}

//When page is load add marker count to each playlist
//By default it shows value when everything is shown meaning:
//Container + Events + Feats + Photo Ops + Collectibles
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".playlist_checkbox");
    
    checkboxes.forEach(function(checkbox, i) {
        var checkbox_name = checkbox.getElementsByTagName("span")[0].innerHTML;
        var playlist_marker_count = checkbox.getElementsByClassName("filter_marker_count")[0];
        var playlist_checkbox_status = checkbox.getElementsByClassName("filter_checkbox")[0];

        if(checkbox_name === markers_count_obj.playlist[i].playlistName) {
            playlist_marker_count.innerHTML = markers_count_obj.playlist[i].numberContainer + markers_count_obj.playlist[i].numberEvents + markers_count_obj.playlist[i].numberFeats + markers_count_obj.playlist[i].numberPhotoOps + markers_count_obj.playlist[i].numberCollectibles
        }

        else {
            console.error("Name does not match, can't assign counter to the playlist")
        }

        const activity_checkboxes = document.querySelectorAll(".activity_checkbox");

        playlist_checkbox_status.addEventListener("change", function(event) {
            console.log(event.isTrusted)
            if(event.isTrusted === true) {
                if(playlist_checkbox_status.checked === false) {

                    playlist_marker_count.innerHTML = "";
                    
                    activity_checkboxes.forEach(function(activity_checkbox, j) {
                        var activity_checkbox_name = activity_checkbox.getElementsByTagName("span")[0].innerHTML;
                        var activity_marker_count = activity_checkbox.getElementsByClassName("filter_marker_count")[0];
                        var activity_checkbox_status = activity_checkbox.getElementsByClassName("filter_checkbox")[0];
            
                        if(activity_checkbox_name === "Container" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML -= markers_count_obj.playlist[i].numberContainer;
                        }
            
                        else if(activity_checkbox_name === "Events" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML -= markers_count_obj.playlist[i].numberEvents;
                        }
            
                        else if(activity_checkbox_name === "Feats" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML -= markers_count_obj.playlist[i].numberFeats;
                        }
            
                        else if(activity_checkbox_name === "Photo Ops" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML -= markers_count_obj.playlist[i].numberPhotoOps;
                        }
            
                        else if(activity_checkbox_name === "Collectibles" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML -= markers_count_obj.playlist[i].numberCollectibles;
                        }
                    })
                }

                else if(playlist_checkbox_status.checked === true) {

                    playlist_marker_count.innerHTML = "0";
            
                    activity_checkboxes.forEach(function(activity_checkbox, j) {
                        var activity_checkbox_name = activity_checkbox.getElementsByTagName("span")[0].innerHTML;
                        var activity_marker_count = activity_checkbox.getElementsByClassName("filter_marker_count")[0];
                        var activity_checkbox_status = activity_checkbox.getElementsByClassName("filter_checkbox")[0];
            
                        if(activity_checkbox_name === "Container" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + markers_count_obj.playlist[i].numberContainer;
                            playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + markers_count_obj.playlist[i].numberContainer;
                        }
            
                        else if(activity_checkbox_name === "Events" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + markers_count_obj.playlist[i].numberEvents;
                            playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + markers_count_obj.playlist[i].numberEvents;
                        }
            
                        else if(activity_checkbox_name === "Feats" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + markers_count_obj.playlist[i].numberFeats;
                            playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + markers_count_obj.playlist[i].numberFeats;
                        }
            
                        else if(activity_checkbox_name === "Photo Ops" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + markers_count_obj.playlist[i].numberPhotoOps;
                            playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + markers_count_obj.playlist[i].numberPhotoOps;
                        }
            
                        else if(activity_checkbox_name === "Collectibles" && activity_checkbox_status.checked === true) {
                            activity_marker_count.innerHTML = parseInt(activity_marker_count.innerHTML) + markers_count_obj.playlist[i].numberCollectibles;
                            playlist_marker_count.innerHTML = parseInt(playlist_marker_count.innerHTML) + markers_count_obj.playlist[i].numberCollectibles;
                        }
                    })
                }
            }
        })
    })
});

//When page is load add marker count to each activity in Activities
//By default it shows value when all check marks are checked
//Value is hardcoded in JSON
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".activity_checkbox");
    var total_number_containers = 0;
    var total_number_events = 0;
    var total_number_feats = 0;
    var total_number_photo_ops = 0;
    var total_number_collectibles = 0;

    for(var i = 0; i < markers_count_obj.playlist.length; i++) {
        total_number_containers += markers_count_obj.playlist[i].numberContainer
        total_number_events += markers_count_obj.playlist[i].numberEvents
        total_number_feats += markers_count_obj.playlist[i].numberFeats
        total_number_photo_ops += markers_count_obj.playlist[i].numberPhotoOps
        total_number_collectibles += markers_count_obj.playlist[i].numberCollectibles
    }
    
    checkboxes.forEach(function(checkbox, i) {
        var checkbox_name = checkbox.getElementsByTagName("span")[0].innerHTML;
        var activity_marker_count = checkbox.getElementsByClassName("filter_marker_count")[0];

        if(checkbox_name === "Container") {
            activity_marker_count.innerHTML = total_number_containers
        }

        else if(checkbox_name === "Events") {
            activity_marker_count.innerHTML = total_number_events
        }

        else if(checkbox_name === "Feats") {
            activity_marker_count.innerHTML = total_number_feats
        }

        else if(checkbox_name === "Photo Ops") {
            activity_marker_count.innerHTML = total_number_photo_ops
        }

        else if(checkbox_name === "Collectibles") {
            activity_marker_count.innerHTML = total_number_collectibles
        }
    })
});

//When page is load add marker count to each Misc filter
//By default it shows value when every check mark is checked
//Value is hardcoded in JSON
//When unchecked the value is replace with empty string
document.addEventListener("DOMContentLoaded", function() {
    //Array of misc checkboxes
    const checkboxes = document.querySelectorAll(".misc_checkbox");
    
    //Setting each individual checkbox
    checkboxes.forEach(function(checkbox, i) {
        var checkbox_name = checkbox.getElementsByTagName("span")[0].innerHTML;
        var misc_marker_count = checkbox.getElementsByClassName("filter_marker_count")[0];
        var misc_checkbox_status = checkbox.getElementsByClassName("filter_checkbox")[0];

        if(checkbox_name === markers_count_obj.misc[i].miscName) {
            misc_marker_count.innerHTML = markers_count_obj.misc[i].numberMarkers;
        }

        else {
            console.error("Name does not match, can't assign counter to the misc filter");
        }

        misc_checkbox_status.addEventListener("change", function() {
            if(misc_checkbox_status.checked === false) {
                misc_marker_count.innerHTML = "";
            }

            else if(misc_checkbox_status.checked === true) {
                misc_marker_count.innerHTML = markers_count_obj.misc[i].numberMarkers;;
            }
        })
    })
});
