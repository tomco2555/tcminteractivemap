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
                map.invalidateSize();
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
function hideOrShowEverything(button) {
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
            markers_canvas.redraw();
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
// Takes care of mode switch, challenges switch, playlist order switch
document.addEventListener("DOMContentLoaded", function() {
    const mode_switch = document.getElementById("mode_switch");
    const challenges_switch = document.getElementById("challenges_switch");
    const playlist_order_switch = document.getElementById("playlist_order_switch");
    
    mode_switch.checked = true;
    challenges_switch.checked = false;
    playlist_order_switch.checked = false;
})

// Shows or hides markers based on the activity
function activitiesCheckboxTemp(elem) {

    // Stores state of checkmark(mode switch)
    var mode_switch_status = document.getElementById("mode_switch").checked;
    // State of the activity checkbox that invoked this function
    var activity_checkbox_status = elem.checked;
    // ID of the checkbox that invoked this function
    var activity_checkbox_name;

    // Since we split by "_" delimiter and photo_ops contains delimiter we have to set it to store it same way
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
                markers_canvas.removeMarkers(window[single_checkbox.id.split("_")[0] + "_" + activity_checkbox_name + "_group"]);
            }

            // If activity checkbox is checked then show markers for playlists in that category that are also checked
            // Not checked playlist checkboxes result in nothing
            else if(activity_checkbox_status) {
                if(single_checkbox.checked){
                    markers_canvas.addMarkers(window[single_checkbox.id.split("_")[0] + "_" + activity_checkbox_name + "_group"]);
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
function toggleGroup(group_name, checkbox_status) {

    const group = window[group_name];

    // Add markers if the checkbox from Activities section is checked
    if (checkbox_status) {
        // Check if mode switch is in canvas or dom mode
        if (mode_switch.checked) {
            markers_canvas.addMarkers(group);
        } 
        else {
            group.addTo(map);
        }
    } 
    else {
        if (mode_switch.checked) {
            markers_canvas.removeMarkers(group);
        } 
        else {
            group.remove();
        }
    }
}

// Function called when state of the playlist checkbox changes
function watchCheckbox(playlist_name) {
    // Current playlist checkbox
    var playlist_checkbox_status = document.getElementById(playlist_name + "_playlist").checked;
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
            markers_canvas.removeMarkers(window[playlist_name + "_container_group"]);
            markers_canvas.removeMarkers(window[playlist_name + "_events_group"]);
            markers_canvas.removeMarkers(window[playlist_name + "_photo_ops_group"]);
            markers_canvas.removeMarkers(window[playlist_name + "_collectibles_group"]);
            markers_canvas.removeMarkers(window[playlist_name + "_feats_group"]);
        }
        else {
            window[playlist_name + "_container_group"].remove();
            window[playlist_name + "_events_group"].remove();
            window[playlist_name + "_photo_ops_group"].remove();
            window[playlist_name + "_collectibles_group"].remove();
            window[playlist_name + "_feats_group"].remove();
        }
    }

    // Playlist checkbox is checked, add markers based on what is selected in Activities
    else if(playlist_checkbox_status) {
        toggleGroup(playlist_name + "_container_group", container_checkbox_status);
        toggleGroup(playlist_name + "_events_group", events_checkbox_status);
        toggleGroup(playlist_name + "_collectibles_group", collectibles_checkbox_status);
        toggleGroup(playlist_name + "_photo_ops_group", photo_ops_checkbox_status);
        toggleGroup(playlist_name + "_feats_group", feats_checkbox_status);
        }
}

// Function called when the status of the misc checkbox changes
// checkbox - checkbox that registered change
// filter - group that is shown/hidden
function miscCheckbox(checkbox, filter) {
    const mode_switch = document.getElementById("mode_switch");

    // Checkbox was checked
    if(checkbox.checked) {
        // Canvas mode
        if(mode_switch.checked) {
            markers_canvas.addMarkers(filter);
        }
        // DOM mode
        else {
            filter.addTo(map);
        }
    }

    // Checkbox was unchecked
    else {
        // Canvas mode
        if(mode_switch.checked) {
            markers_canvas.removeMarkers(filter);
        }
        // DOM mode
        else {
            filter.remove();
        }
    }
}

// Function called when the status of the rivals checkbox changes
// checkbox - checkbox that registered change
// filter - group that is shown/hidden
function rivalsCheckbox(checkbox, filter) {
    const mode_switch = document.getElementById("mode_switch");

    // Checkbox was checked
    if(checkbox.checked) {
        // Canvas mode
        if(mode_switch.checked) {
            markers_canvas.addMarkers(filter);
        }
        // DOM mode
        else {
            filter.addTo(map);
        }
    }

    // Checkbox was unchecked
    else {
        // Canvas mode
        if(mode_switch.checked) {
            markers_canvas.removeMarkers(filter);
        }
        // DOM mode
        else {
            filter.remove();
        }
    }
}

async function initializeMarkersPerGroup(data, mode, checkbox_type, group) {
    if(group === "playlists") {
        await initializePlaylists(data, mode, false);
    }

    else if(group === "misc") {
        await initializeMisc(mode, false);
    }

    else if(group === "rivals") {
        await initializeRivals(mode, false);
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
async function switchMode(switch_button) {
    var mode_switch_status = switch_button.checked;

    if(!mode_switch_status) {
        //Clears whole canvas
        markers_canvas.clear();

        initializeMarkersPerGroup(playlists_data, "dom", ".playlist_checkbox", "playlists");
        initializeMarkersPerGroup("", "dom", ".misc_checkbox", "misc");
        initializeMarkersPerGroup("", "dom", ".rivals_checkbox", "rivals");
    }

    else {
        //Clears whole map pane
        map.eachLayer((layer)=>{
            if(layer instanceof L.Marker){
                layer.remove();
            }
        });

        initializeMarkersPerGroup(playlists_data, "canvas", ".playlist_checkbox", "playlists");
        initializeMarkersPerGroup("", "canvas", ".misc_checkbox", "misc");
        initializeMarkersPerGroup("", "canvas", ".rivals_checkbox", "rivals");
    }
}

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


    var challenges_pane_markers = L.featureGroup({pane: "challenges"}).addTo(map);
    var challenges_pane_popups = L.featureGroup({pane: "challenges"}).addTo(map);

    function clearLayer() {
        challenges_pane_markers.clearLayers();
        challenges_pane_popups.clearLayers();
    }

    function addMarkersToGroup(dataset) {
        markers_json[dataset].forEach((marker) => {
            if(marker["icon"] === "start") {
                L.marker([marker["lat"], marker["lng"]], {icon:start_icon, pane:'challenges'}).bindPopup('<b>'+marker["name"]+'</b>', {className:"hstPopup", pane:'challenges-popup'}).addTo(challenges_pane_markers);
            }
            
            else if(marker["icon"] === "finish") {
                L.marker([marker["lat"], marker["lng"]], {icon:finish_icon, pane:'challenges'}).bindPopup('<b>'+marker["name"]+'</b>', {className:"hstPopup", pane:'challenges-popup'}).addTo(challenges_pane_markers);
            }

            else if(marker["icon"] === "challenge") {
                L.marker([marker["lat"], marker["lng"]], {icon:challenge_icon, pane:'challenges'}).bindPopup('<b>'+marker["name"]+'</b>', {className:"hstPopup", pane:'challenges-popup'}).addTo(challenges_pane_markers);
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
            map.removeLayer(markers_canvas);
            //canvas_markers[0].style.display = "none";
        }

        else if(!mode_switch_checkbox.checked) {
            dom_markers[0].style.display = "none";
        }

        popup_markers[0].style.display = "none";
        challenges_markers[0].style.display = "";
        challenges_popups[0].style.display = "";
        map.closePopup();

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
            markers_canvas.addTo(map)
            map.fire('moveend');
            markers_canvas.redraw();
        }

        else if(!mode_switch_checkbox.checked) {
            dom_markers[0].style.display = "";
        }

        popup_markers[0].style.display = "";
        challenges_markers[0].style.display = "none";
        challenges_popups[0].style.display = "none";
        map.closePopup();

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