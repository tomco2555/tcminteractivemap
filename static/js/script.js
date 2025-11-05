/**
 * Main global object that holds all the variables and functions
 * @namespace
 * @property {object} map
 * @property {object} map.funcs
 */
const InteractiveMap = {
    map: {
        funcs: {}
    },
    icons: {
        playlists: {},
        playlist_side: {},
        misc: {},
        rivals: {},
        challenges: {}
    },
    markers: {
        playlists: {},
        misc: {},
        rivals: {}
    },
    locations: {
        funcs: {},
        JSONData: {}
    },
    settings: {},
    challenges: {},
    features: {
        countdownTimer: {},
        colorChange: {},
        playlistSorter: {}
    },
    utils: {
        playlist: {},
        misc: {},
        rivals: {},
        icons: {}
    },
    paths: {
        pathToPlaylists: "static/data/playlists/",
        pathToData: "static/data/"
    },
    data: {
        playlists: [
            ["american_muscle", "am", "American Muscle", "American"],
            ["auto_lambo", "al", "Automobili Lamborghini", "A.L."],
            ["bike_lovers", "bl", "Bike Lovers", "Rider"],
            ["chase_squad", "tcs", "The Chase Squad", "Code 10"],
            ["donut_media", "dm", "Rule the Streets", "Donut x"],
            ["dream_cars", "dc", "Dream Cars", "Super"],
            ["drift", "de", "Drift Experience", "Burning"],
            ["drift2", "de2", "Drift Experience Vol.2", "Blazing"],
            ["dvl", "dvl", "Donk vs Lowrider", ""],
            ["ele_ody", "eo", "Electric Odyssey", "E-Feats"],
            ["gymkhana", "gym", "Gymkhana Grid Masters", "Gymkhana"],
            ["hollywood", "ha", "Hollywood Action!", "Movie Award"],
            ["hst", "hst", "Hawaii Scenic Tour", "Rainbow"],
            ["lbwk", "lbwk", "Liberty Walk", "Liberty"],
            ["mauiex", "mauiex", "Maui Expeditions", "Valley Isle"],
            ["mij", "mij", "Made in Japan", "Nihon No"],
            ["mij2", "mij2", "Made in Japan Vol.2", "Sekai No"],
            ["motorsports", "motorsports", "Motorsports", "Alpha"],
            ["off_add", "oa", "Off-roading Addict", "Wild"],
            ["off_add2", "oa2", "Off-roading Addict Vol.2", "Wilder"],
            ["ons", "ons", "Ocean\'N Sky", "ONS"],
            ["porsche", "porsche", "911 Legacy", "911"],
            ["redbull_sc", "rb", "Red Bull Speed Clash", "Apex"],
            ["redbull_wr", "rb2", "Red Bull Wild Ride", "Bold"],
            ["vin_gar", "vg", "Vintage Garage", "Retro"]
        ],
        playlistJSONData: {},
        miscJSONData: {},
        rivalsJSONData: {},
        iconJSONData: {}
    }
};

// Animation for closing filters sidebar
document.addEventListener("DOMContentLoaded", function() {
    const filters_sidebar = document.getElementById("filters_sidebar")
    const left_sidebar = document.getElementById("left_sidebar");
    const close_btn = document.getElementById("close_btn")
    const close_div = document.getElementById("close")

    // Function to get the width based on screen size
    function getLeftSidebarWidth() {
        const width = window.innerWidth;
        if (width <= 500) {
            return '85%'; // For screens 500px or less
        } else if (width > 500 && width <= 900) {
            return '55%'; // For screens between 501px and 900px
        } else {
            return '30%'; // For screens greater than 900px
        }
    }

    close_btn.addEventListener("click", function() {
        filters_sidebar.classList.toggle("close_filters")
        close_div.classList.toggle("move_button")
        
        if (close_div.classList.contains("move_button")) {
            close_btn.textContent = ">";
            setTimeout(function() {
                left_sidebar.style.width = '0';
                InteractiveMap.map.instance.invalidateSize();
                filters_sidebar.style.outline = 'none';
            }, 500);
        }
        else {
            close_btn.textContent = "<";
            left_sidebar.style.width = getLeftSidebarWidth();
            filters_sidebar.style.outline = '1px solid white';
        }
    })
});

// Sets width of logo pic
document.addEventListener("DOMContentLoaded", function() {
    const logo_img = document.getElementById("logo_img")
    const logo_div = document.getElementById("logo")

    var logo_div_width = logo_div.offsetWidth

    logo_img.style.width = logo_div_width / 2 + "px"
})

// Checks all the checkboxes from the beginning
// Don't check rivals checkboxes
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".filter_checkbox");
    
    checkboxes.forEach(function(checkbox) {
        if(checkbox.parentElement.classList.contains("rivals_checkbox")) {
            checkbox.checked = false;
        }

        else {
            checkbox.checked = true;
        }
    })
})

// Functionality for the buttons "Hide all" and "Show all"
InteractiveMap.map.funcs.hideOrShowEverything = function(button) {
    const checkboxes = document.querySelectorAll(".filter_checkbox");
    const mode_switch = document.getElementById("mode_switch");
    
    if (button.innerHTML === "Hide all") {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        })
    }
    
    else if (button.innerHTML === "Show all") {
        if (mode_switch.checked) {
            InteractiveMap.map.canvas.redraw();
        }
        checkboxes.forEach(function(checkbox) {

            // Prevent redrawing same markers when checkbox is checked in canvas mode
            if(mode_switch.checked && checkbox.checked) {
                return;
            }

            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
        })
    }
}

// Adds functionality to "Playlists", "Activities", "Misc" and "Rivals" buttons
// When all checkboxes are checked pressing the button unchecks them
// If atleast one checkbox is unchecked it unchecks all of them
// If all are unchecked after the button press they become checked
document.addEventListener("DOMContentLoaded", function() {

    const header_buttons = document.querySelectorAll(".header");

    function toggleCheckboxes(button, checkbox_selector) {
        const checkboxes = document.querySelectorAll(checkbox_selector);

        button.addEventListener("click", function() {

            var hide_all = false;

            checkboxes.forEach(function(checkbox) {
                if(checkbox.querySelectorAll(".filter_checkbox")[0].checked) {
                    hide_all = true;
                    return;
                }
            })

            checkboxes.forEach(function(checkbox) {
                const single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                single_checkbox.checked = !hide_all;
                single_checkbox.dispatchEvent(new Event('change'));
            })
        })
    }

    header_buttons.forEach(function(btn) {
        const buttonText = btn.innerHTML.trim();

        if (buttonText === "Playlists") {
            toggleCheckboxes(btn, ".playlist_checkbox");
        } else if (buttonText === "Activities") {
            toggleCheckboxes(btn, ".activity_checkbox");
        } else if (buttonText === "Misc") {
            toggleCheckboxes(btn, ".misc_checkbox");
        } else if (buttonText === "Rivals") {
            toggleCheckboxes(btn, ".rivals_checkbox");
        }
    });

})

// Checks/unchecks switches by default
// Takes care of mode switch, challenges switch, playlist order switch, show location names
document.addEventListener("DOMContentLoaded", function() {
    const mode_switch = document.getElementById("mode_switch");
    const challenges_switch = document.getElementById("challenges_switch");
    const playlist_order_switch = document.getElementById("playlist_order_switch");
    const locations_switch = document.getElementById("locations_switch");
    const slider_size_selector = document.getElementById("slider_size_selector");
    
    mode_switch.checked = true;
    challenges_switch.checked = false;
    playlist_order_switch.checked = false;
    locations_switch.checked = false;
    slider_size_selector.value = "100";
})

// TODO - Canvas handling of checkboxes(toggling groups)
// Shows or hides markers based on the activity
InteractiveMap.map.funcs.activitiesCheckbox = function(elem) {

    // Stores state of checkmark(mode switch)
    var mode_switch_status = document.getElementById("mode_switch").checked;
    // State of the activity checkbox that invoked this function
    var activity_checkbox_status = elem.checked;
    // ID of the checkbox that invoked this function
    var activity_checkbox_name;

    // Since we split by "_" delimiter and "photo_ops" contains delimiter we have to set it to store it same way
    if(elem.id.split("_")[0] !== "photo") {
        activity_checkbox_name = elem.id.split("_")[0]
    }

    else {
        activity_checkbox_name = elem.id.split("_")[0] + "_" + elem.id.split("_")[1]
    }

    // All playlist checkboxes
    const checkboxes = document.querySelectorAll(".playlist_checkbox");

    // Canvas Mode
    if(mode_switch_status) {
        checkboxes.forEach(function(checkbox) {

            single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]

            // If activity checkbox is not checked then remove markers in that category for all the playlists
            if(!activity_checkbox_status) {
                InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.playlists[single_checkbox.name][activity_checkbox_name]);
            }

            // If activity checkbox is checked then show markers for playlists in that category that are also checked
            // Not checked playlist checkboxes result in nothing
            else if(activity_checkbox_status) {
                if(single_checkbox.checked){
                    InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.playlists[single_checkbox.name][activity_checkbox_name]);
                }
            }
        })
    }

    // DOM mode, remains same because old function seems fast enough
    else if(!mode_switch_status) {
        const checkboxes = document.querySelectorAll(".playlist_checkbox");

        checkboxes.forEach(function(checkbox) {
            single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
            single_checkbox.dispatchEvent(new Event('change'));
        })
    }
}

// Function that add/removes markers based on mode switch position
// group_name - name of the group to be added/removed(e.g. am_container_group)
// checkbox_status - true/false of checkbox from Activities section
InteractiveMap.map.funcs.toggleGroup = function(group_name, checkbox_status) {
    // Add markers if the checkbox from Activities section is checked
    if (checkbox_status) {
        // Check if mode switch is in canvas or dom mode
        if (mode_switch.checked) {
            InteractiveMap.map.canvas.addMarkers(group_name);
        } 
        else {
            group_name.addTo(InteractiveMap.map.instance);
        }
    } 
    else {
        if (mode_switch.checked) {
            InteractiveMap.map.canvas.removeMarkers(group_name);
        } 
        else {
            group_name.remove();
        }
    }
}

// Function called when state of the playlist checkbox changes
InteractiveMap.map.funcs.watchCheckbox = function(playlist_name) {
    // Current playlist checkbox
    var playlist_checkbox_status = playlist_name.checked;
    // Status of each checkbox from Activities section
    var events_checkbox_status = document.getElementById("events_checkbox").checked;
    var container_checkbox_status = document.getElementById("container_checkbox").checked;
    var collectibles_checkbox_status = document.getElementById("collectibles_checkbox").checked;
    var photo_ops_checkbox_status = document.getElementById("photo_ops_checkbox").checked;
    var feats_checkbox_status = document.getElementById("feats_checkbox").checked
    // Status of mode switch
    const mode_switch = document.getElementById("mode_switch");

    // Playlist checkbox is not checked, remove all markers
    if(!(playlist_checkbox_status)) {
        if(mode_switch.checked) {
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.playlists[playlist_name.name]["container"]);
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.playlists[playlist_name.name]["events"]);
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.playlists[playlist_name.name]["photo_ops"]);
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.playlists[playlist_name.name]["collectibles"]);
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.playlists[playlist_name.name]["feats"]);
        }
        else {
            InteractiveMap.markers.playlists[playlist_name.name]["container"].remove();
            InteractiveMap.markers.playlists[playlist_name.name]["events"].remove();
            InteractiveMap.markers.playlists[playlist_name.name]["photo_ops"].remove();
            InteractiveMap.markers.playlists[playlist_name.name]["collectibles"].remove();
            InteractiveMap.markers.playlists[playlist_name.name]["feats"].remove();
        }
    }

    // Playlist checkbox is checked, add markers based on what is selected in Activities
    else if(playlist_checkbox_status) {
        InteractiveMap.map.funcs.toggleGroup(InteractiveMap.markers.playlists[playlist_name.name]["container"], container_checkbox_status);
        InteractiveMap.map.funcs.toggleGroup(InteractiveMap.markers.playlists[playlist_name.name]["events"], events_checkbox_status);
        InteractiveMap.map.funcs.toggleGroup(InteractiveMap.markers.playlists[playlist_name.name]["photo_ops"], collectibles_checkbox_status);
        InteractiveMap.map.funcs.toggleGroup(InteractiveMap.markers.playlists[playlist_name.name]["collectibles"], photo_ops_checkbox_status);
        InteractiveMap.map.funcs.toggleGroup(InteractiveMap.markers.playlists[playlist_name.name]["feats"], feats_checkbox_status);
        }
}

// Function called when the status of the misc checkbox changes
// checkbox - checkbox that registered change
// filter - group that is shown/hidden
InteractiveMap.map.funcs.miscCheckbox = function(checkbox, filter) {
    const mode_switch = document.getElementById("mode_switch");

    // Checkbox was checked
    if(checkbox.checked) {
        // Canvas mode
        if(mode_switch.checked) {
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.misc[filter]);
        }
        // DOM mode
        else {
            InteractiveMap.markers.misc[filter].addTo(InteractiveMap.map.instance);
        }
    }

    // Checkbox was unchecked
    else {
        // Canvas mode
        if(mode_switch.checked) {
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.misc[filter]);
        }
        // DOM mode
        else {
            InteractiveMap.markers.misc[filter].remove();
        }
    }
}

// Function called when the status of the rivals checkbox changes
// checkbox - checkbox that registered change
// filter - group that is shown/hidden
InteractiveMap.map.funcs.rivalsCheckbox = function(checkbox, filter) {
    const mode_switch = document.getElementById("mode_switch");

    // Checkbox was checked
    if(checkbox.checked) {
        // Canvas mode
        if(mode_switch.checked) {
            InteractiveMap.map.canvas.addMarkers(InteractiveMap.markers.rivals[filter]);
        }
        // DOM mode
        else {
            InteractiveMap.markers.rivals[filter].addTo(InteractiveMap.map.instance);
        }
    }

    // Checkbox was unchecked
    else {
        // Canvas mode
        if(mode_switch.checked) {
            InteractiveMap.map.canvas.removeMarkers(InteractiveMap.markers.rivals[filter]);
        }
        // DOM mode
        else {
            InteractiveMap.markers.rivals[filter].remove();
        }
    }
}

InteractiveMap.map.funcs.initializeMarkersPerGroup = async function(data, mode, checkbox_type, group) {
    if(group === "playlists") {
        await InteractiveMap.utils.playlist.initializePlaylists(data, mode, false);
    }

    else if(group === "misc") {
        await InteractiveMap.utils.misc.initializeMisc(mode, false);
    }

    else if(group === "rivals") {
        await InteractiveMap.utils.rivals.initializeRivals(mode, false);
    }

    let checkboxes = document.querySelectorAll(checkbox_type);
    checkboxes.forEach(function(checkbox) {
        let checkbox_func = checkbox.querySelector(".filter_checkbox");
        checkbox_func.dispatchEvent(new Event('change'));
    })
}

// Switches performance mode
// False - high quality, more demanding, DOM
// True - lower quality, less demanding, canvas
// Calls function that take care of the change of markers and location names
InteractiveMap.map.funcs.switchMode = async function(switch_button) {
    var mode_switch_status = switch_button.checked;

    if(!mode_switch_status) {
        //Clears whole canvas
        InteractiveMap.map.canvas.clear();

        InteractiveMap.map.funcs.initializeMarkersPerGroup(InteractiveMap.data.playlists, "dom", ".playlist_checkbox", "playlists");
        InteractiveMap.map.funcs.initializeMarkersPerGroup("", "dom", ".misc_checkbox", "misc");
        InteractiveMap.map.funcs.initializeMarkersPerGroup("", "dom", ".rivals_checkbox", "rivals");
        InteractiveMap.locations.funcs.modeSwitchWhileLocationsOn();
    }

    else {
        //Clears whole map pane
        InteractiveMap.map.instance.eachLayer((layer)=>{
            if(layer instanceof L.Marker){
                layer.remove();
            }
        });

        InteractiveMap.map.funcs.initializeMarkersPerGroup(InteractiveMap.data.playlists, "canvas", ".playlist_checkbox", "playlists");
        InteractiveMap.map.funcs.initializeMarkersPerGroup("", "canvas", ".misc_checkbox", "misc");
        InteractiveMap.map.funcs.initializeMarkersPerGroup("", "canvas", ".rivals_checkbox", "rivals");
        InteractiveMap.locations.funcs.modeSwitchWhileLocationsOn();
    }
}

// TODO - Rework challenges
//Adds functionality to each accordion menu and accordion submenu button
//Allows to have only one opened challenge throughout all the challenges
document.addEventListener("DOMContentLoaded", async function() {

    let markers_json;

    try {
        const markers_json_file = await fetch("static/data/challenges.json");
        markers_json = await markers_json_file.json();
    }
    catch(error) {
        console.log("Markers JSON data could not be found: ", error)
    }


    var challenges_pane_markers = L.featureGroup({pane: "challenges"}).addTo(InteractiveMap.map.instance);
    var challenges_pane_popups = L.featureGroup({pane: "challenges"}).addTo(InteractiveMap.map.instance);

    function clearLayer() {
        challenges_pane_markers.clearLayers();
        challenges_pane_popups.clearLayers();
    }

    function addMarkersToGroup(dataset) {
        markers_json[dataset].forEach((marker) => {
            if(marker["icon"] === "start") {
                L.marker([marker["lat"], marker["lng"]], {icon:InteractiveMap.icons.challenges["Start"], pane:'challenges'}).bindPopup('<b>'+marker["name"]+'</b>', {className:"hstPopup", pane:'challenges-popup'}).addTo(challenges_pane_markers);
            }
            
            else if(marker["icon"] === "finish") {
                L.marker([marker["lat"], marker["lng"]], {icon:InteractiveMap.icons.challenges["Finish"], pane:'challenges'}).bindPopup('<b>'+marker["name"]+'</b>', {className:"hstPopup", pane:'challenges-popup'}).addTo(challenges_pane_markers);
            }

            else if(marker["icon"] === "challenge") {
                L.marker([marker["lat"], marker["lng"]], {icon:InteractiveMap.icons.challenges["Challenge"], pane:'challenges'}).bindPopup('<b>'+marker["name"]+'</b>', {className:"hstPopup", pane:'challenges-popup'}).addTo(challenges_pane_markers);
            }
        })
    }
    var accordion_menu = document.getElementsByClassName("accordion_menu");

    //Functionality for accordion menu buttons
    for(var i = 0; i < accordion_menu.length; i++) {
        accordion_menu[i].addEventListener("click", function() {

            var submenu = this.nextElementSibling;
            //Submenu is opened
            if(submenu.style.maxHeight) {
                submenu.style.maxHeight = null;
                this.classList.remove("active");
            }

            //Submenu is not opened
            else {
                submenu.style.maxHeight = submenu.scrollHeight + "px";
                this.classList.add("active");
            }
        })
    }

    var accordion_submenu = document.getElementsByClassName("accordion_submenu");

    //Tracking opened challenge so we can close it if we click on another challenge
    var active_accordion_submenu = null;

    //Functionality for accordion submenu buttons
    for(var j = 0; j < accordion_submenu.length; j++) {
        accordion_submenu[j].addEventListener("click", function() {

            var challenge_details = this.nextElementSibling;
            var submenu = this.parentElement.parentElement;
            //console.log(submenu);
            //Challenge details are opened
            if(challenge_details.style.maxHeight) {
                challenge_details.style.maxHeight = null;
                submenu.style.maxHeight = submenu.scrollHeight - challenge_details.scrollHeight + "px";
                active_accordion_submenu = null;
                this.classList.remove("accordion_submenu_active");
                clearLayer();
            }

            //Challenge details are not opened
            else {
                //Check if there is any challenge opened and if so then close it
                if(active_accordion_submenu) {
                    active_accordion_submenu.classList.remove("accordion_submenu_active");
                    var challenge_details_active = active_accordion_submenu.nextElementSibling;
                    challenge_details_active.style.maxHeight = null;
                    
                    //Check if submenu button we are trying to press is in the same submenu
                    //If it is the case then we need to substract height of the content that is about to be hidden
                    if(active_accordion_submenu.parentElement.parentElement === this.parentElement.parentElement) {
                        //console.log(submenu.scrollHeight)
                        //console.log(challenge_details_active.scrollHeight)
                        submenu.style.maxHeight = submenu.scrollHeight - challenge_details_active.scrollHeight + "px";
                    }
                    
                    //Case that submenu item is in different submenu
                   else if(active_accordion_submenu.parentElement.parentElement !== this.parentElement.parentElement) {
                        //We need to take care of situtaion that the other submenu is closed
                        //Trying to change the height of open submenu will force it to open in order to calculate max-height
                        if(active_accordion_submenu.parentElement.parentElement.style.maxHeight !== "") {
                            active_accordion_submenu.parentElement.parentElement.style.maxHeight = active_accordion_submenu.parentElement.parentElement.scrollHeight - challenge_details_active.scrollHeight + "px";
                        }
                    }
                }

                challenge_details.style.maxHeight = challenge_details.scrollHeight + "px";

                //There is is no submenu item active
                if(!active_accordion_submenu) {
                    submenu.style.maxHeight = submenu.scrollHeight + challenge_details.scrollHeight + "px";
                }
                //There is submenu item active
                else {
                    submenu.style.maxHeight = parseInt(submenu.style.maxHeight.split("p")[0]) + challenge_details.scrollHeight + "px";
                }
                active_accordion_submenu = this;
                //console.log(active_accordion_submenu)
                this.classList.add("accordion_submenu_active");
                //console.log(this.getAttribute("data-markers"))
                clearLayer();
                addMarkersToGroup(this.getAttribute("data-markers"))
            }
        })
    }
})

//When Challenges checkbox is checked remove all the markers and popups from the map if not checked behave normally
//If Challenges checkbox is checked then disable Performance mode checkbox
function challengesMode() {
    //Stores state of checkmark(challenges switch)
    var challenges_switch_status = document.getElementById("challenges_switch").checked;

    //Mode switch checkbox
    var mode_switch_checkbox = document.getElementById("mode_switch");

    var show_all_btn = document.getElementById("show_all_btn");
    var hide_all_btn = document.getElementById("hide_all_btn");

    //Map div
    var interactive_map = document.getElementById("map");

    //Marker pane with all DOM markers
    var dom_markers = interactive_map.getElementsByClassName("leaflet-marker-pane");
    //Popup pane with all popups
    var popup_markers = interactive_map.getElementsByClassName("leaflet-popup-pane");
    //Challenges pane with all DOM markers
    var challenges_markers = interactive_map.getElementsByClassName("leaflet-challenges-pane");
    //Challenges popup pane with all challenges popups
    var challenges_popups = interactive_map.getElementsByClassName("leaflet-challenges-popup-pane");

    //Get all the DIVs for each filter type containing checkboxes
    var all_checkboxes = document.querySelectorAll(".event_filters");

    //Get all the headers for each menu with checkboxes
    var all_event_headers = document.querySelectorAll(".event_header");

    //DIV with Challenges menu
    var challenges_menu = document.getElementById("challenges_menu");

    //Challenges checkbox checked
    if(challenges_switch_status) {
        mode_switch_checkbox.disabled = true;
        show_all_btn.disabled = true;
        hide_all_btn.disabled = true;

        //Checks states of performance mode
        if(mode_switch_checkbox.checked) {
            InteractiveMap.map.instance.removeLayer(InteractiveMap.map.canvas);
            //canvas_markers[0].style.display = "none";
        }

        else if(!mode_switch_checkbox.checked) {
            dom_markers[0].style.display = "none";
        }

        popup_markers[0].style.display = "none";
        challenges_markers[0].style.display = "";
        challenges_popups[0].style.display = "";
        InteractiveMap.map.instance.closePopup();

        all_checkboxes.forEach(function(checkbox) {
            checkbox.style.display = "none";
        })

        all_event_headers.forEach(function(header) {
            if(header.children[0].innerHTML === "Challenges") {
                header.style.display = "";
            }
            else {
                header.style.display = "none";
            }
        })

        challenges_menu.hidden = false;
    }

    //Challenges checkbox not checked
    else if(!challenges_switch_status) {
        mode_switch_checkbox.disabled = false;
        show_all_btn.disabled = false;
        hide_all_btn.disabled = false;

        //Checks states of performance mode
        if(mode_switch_checkbox.checked) {
            InteractiveMap.map.canvas.addTo(InteractiveMap.map.instance)
            InteractiveMap.map.instance.fire('moveend');
            InteractiveMap.map.canvas.redraw();
        }

        else if(!mode_switch_checkbox.checked) {
            dom_markers[0].style.display = "";
        }

        popup_markers[0].style.display = "";
        challenges_markers[0].style.display = "none";
        challenges_popups[0].style.display = "none";
        InteractiveMap.map.instance.closePopup();

        all_checkboxes.forEach(function(checkbox) {
            checkbox.style.display = "";
        })

        all_event_headers.forEach(function(header) {
            if(header.children[0].innerHTML === "Challenges") {
                header.style.display = "none";
            }
            else {
                header.style.display = "";
            }
        })

        challenges_menu.hidden = true;
    }
}