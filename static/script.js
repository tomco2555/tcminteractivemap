//Animation for closing filters sidebar
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

//Sets width of logo pic
document.addEventListener("DOMContentLoaded", function() {
    const logo_img = document.getElementById("logo_img")
    const logo_div = document.getElementById("logo")

    var logo_div_width = logo_div.offsetWidth

    logo_img.style.width = logo_div_width / 2 + "px"


})

//Checks all the checkboxes from the beginning
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

// Functionality for the button that either hides everything or shows everything
function hideOrShowEverything(button) {
    const checkboxes = document.querySelectorAll(".filter_checkbox");
    console.log(button.innerHTML)
    
    if (button.innerHTML === "Hide all") {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
            button.innerHTML = "Show all"
        })
    }
    
    else if (button.innerHTML === "Show all") {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
            checkbox.dispatchEvent(new Event('change'));
            button.innerHTML = "Hide all"
        })
    }
}

//Adds functionality to "Playlists", "Activities" and "Misc" buttons
//When all checkboxes are checked pressing the button unchecks them
//If atleast one checkbox is unchecked it unchecks all of them
//If all are unchecked after the button press they become checked
document.addEventListener("DOMContentLoaded", function() {

    const header_buttons = document.querySelectorAll(".header")

    header_buttons.forEach(function(btn) {

        //Playlists
        if(btn.innerHTML == "Playlists") {

            const playlist_checkboxes = document.querySelectorAll(".playlist_checkbox")

            btn.addEventListener("click", function() {

                var hide_all = false;

                playlist_checkboxes.forEach(function(checkbox) {
                    if(checkbox.querySelectorAll(".filter_checkbox")[0].checked) {
                        hide_all = true;
                        return;
                    }
                })

                if(hide_all === true) {
                    playlist_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = false;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }

                else if(hide_all === false) {
                    playlist_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = true;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }
            })
        }

        //Activities
        else if(btn.innerHTML == "Activities") {
            const activities_checkboxes = document.querySelectorAll(".activity_checkbox")

            btn.addEventListener("click", function() {

                var hide_all = false;

                activities_checkboxes.forEach(function(checkbox) {
                    if(checkbox.querySelectorAll(".filter_checkbox")[0].checked) {
                        hide_all = true;
                        return;
                    }
                })

                if(hide_all === true) {
                    activities_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = false;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }

                else if(hide_all === false) {
                    activities_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = true;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }
            })
        }

        //Misc
        else if(btn.innerHTML == "Misc") {
            const misc_checkboxes = document.querySelectorAll(".misc_checkbox")

            btn.addEventListener("click", function() {

                var hide_all = false;

                misc_checkboxes.forEach(function(checkbox) {
                    if(checkbox.querySelectorAll(".filter_checkbox")[0].checked) {
                        hide_all = true;
                        return;
                    }
                })

                if(hide_all === true) {
                    misc_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = false;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }

                else if(hide_all === false) {
                    misc_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = true;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }
            })
        }

        //Rivals
        else if(btn.innerHTML == "Rivals") {
            const misc_checkboxes = document.querySelectorAll(".rivals_checkbox")

            btn.addEventListener("click", function() {

                var hide_all = false;

                misc_checkboxes.forEach(function(checkbox) {
                    if(checkbox.querySelectorAll(".filter_checkbox")[0].checked) {
                        hide_all = true;
                        return;
                    }
                })

                if(hide_all === true) {
                    misc_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = false;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }

                else if(hide_all === false) {
                    misc_checkboxes.forEach(function(checkbox) {
                        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
                        single_checkbox.checked = true;
                        single_checkbox.dispatchEvent(new Event('change'));
                    })
                }
            })
        }
    })
})

//Shows or hides markers based on the activity
function activitiesCheckboxTemp(elem) {

    //const start_time = performance.now();

    //Stores state of checkmark(mode switch)
    var mode_switch_status = document.getElementById("mode_switch").checked;
    //State of the activity checkbox that invoked this function
    var activity_checkbox_status = elem.checked;
    //ID of the checkbox that invoked this function
    var activity_checkbox_name

    //Since we split by "_" delimiter and photo_ops contains delimiter we have to set it to store it same way
    if(elem.id.split("_")[0] !== "photo") {
        activity_checkbox_name = elem.id.split("_")[0]
    }

    else {
        activity_checkbox_name = elem.id.split("_")[0] + "_" + elem.id.split("_")[1]
    }

    //All playlist checkboxes
    const checkboxes = document.querySelectorAll(".playlist_checkbox");

    //console.log(elem);
    //console.log(mode_switch_status)
    //console.log(activity_checkbox_status)
    //console.log(activity_checkbox_name)

    //Canvas Mode
    if(mode_switch_status) {
        checkboxes.forEach(function(checkbox) {

            single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]

            //If activity checkbox is not checked then remove markers in that category for all the playlists
            if(!activity_checkbox_status) {
                markers_canvas.removeMarkers(window[single_checkbox.id.split("_")[0] + "_" + activity_checkbox_name + "_group"]);
            }

            //If activity checkbox is checked then show markers for playlists in that category that are also checked
            //Not checked playlist checkboxes result in nothing
            else if(activity_checkbox_status) {
                if(single_checkbox.checked){
                    markers_canvas.addMarkers(window[single_checkbox.id.split("_")[0] + "_" + activity_checkbox_name + "_group"]);
                }
            }
        })
    }

    //DOM mode, remains same because old function seems fast enough
    else if(!mode_switch_status) {
        const checkboxes = document.querySelectorAll(".playlist_checkbox");

        checkboxes.forEach(function(checkbox) {
            single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
            single_checkbox.dispatchEvent(new Event('change'));
        })
    }

    //const end_time = performance.now();

    //console.log("Activity action took " + (end_time - start_time) + "ms(Temp func)")
}

function watchCheckbox(playlist_name) {

    var playlist_checkbox_status = document.getElementById(playlist_name + "_playlist").checked;
    var events_checkbox_status = document.getElementById("events_checkbox").checked;
    var container_checkbox_status = document.getElementById("container_checkbox").checked;
    var collectibles_checkbox_status = document.getElementById("collectibles_checkbox").checked;
    var photo_ops_checkbox_status = document.getElementById("photo_ops_checkbox").checked;
    var feats_checkbox_status = document.getElementById("feats_checkbox").checked

    if(!(playlist_checkbox_status)) {
        
        window[playlist_name + "_container_group"].remove();
        window[playlist_name + "_events_group"].remove();
        window[playlist_name + "_photo_ops_group"].remove();
        window[playlist_name + "_collectibles_group"].remove();
        window[playlist_name + "_feats_group"].remove();
    }

    else if(playlist_checkbox_status) {
        //Container
        if(container_checkbox_status) {
            window[playlist_name + "_container_group"].addTo(map)
        }

        else if(!(container_checkbox_status)) {
            window[playlist_name + "_container_group"].remove()
        }

        //Events
        if(events_checkbox_status) {
            window[playlist_name + "_events_group"].addTo(map)
        }

        else if(!(events_checkbox_status)) {
            window[playlist_name + "_events_group"].remove()
        }

        //Collectibles
        if(collectibles_checkbox_status) {
            window[playlist_name + "_collectibles_group"].addTo(map)
        }

        else if(!(collectibles_checkbox_status)) {
            window[playlist_name + "_collectibles_group"].remove()
        }

        //Photo Ops
        if(photo_ops_checkbox_status) {
            window[playlist_name + "_photo_ops_group"].addTo(map)
        }

        else if(!(photo_ops_checkbox_status)) {
            window[playlist_name + "_photo_ops_group"].remove()
        }

        //Feats
        if(feats_checkbox_status) {
            window[playlist_name + "_feats_group"].addTo(map)
        }

        else if(!(feats_checkbox_status)) {
            window[playlist_name + "_feats_group"].remove()
        }
    }
}

//Hides and shows Motorfest Grounds
function MFGroundsCheckbox() {

    var mf_grounds_checkbox_status = document.getElementById("mf_grounds_checkbox").checked;

    if(mf_grounds_checkbox_status) {
        mf_grounds_group.addTo(map);
    }

    else if(!mf_grounds_checkbox_status) {
        mf_grounds_group.remove();
    }
}

//Hides and shows Demo Royale starting places
function DemoRoyaleCheckbox() {

    var demo_royale_checkbox_status = document.getElementById("demo_royale_checkbox").checked;

    if(demo_royale_checkbox_status) {
        demo_royale_group.addTo(map);
    }

    else if(!demo_royale_checkbox_status) {
        demo_royale_group.remove();
    }
}

//Hides and shows Grand Races starting places
function GrandRaceCheckbox() {

    var grand_race_checkbox_status = document.getElementById("grand_race_checkbox").checked;

    if(grand_race_checkbox_status) {
        grand_race_group.addTo(map);
    }

    else if(!grand_race_checkbox_status) {
        grand_race_group.remove();
    }
}

//Hides and shows Achievement locations
function AchievementsCheckbox() {

    var achievements_checkbox_status = document.getElementById("achievements_checkbox").checked;

    if(achievements_checkbox_status) {
        achievements_group.addTo(map);
    }

    else if(!achievements_checkbox_status) {
        achievements_group.remove();
    }
}

//Hides and shows Treasure locations
function TreasureCheckbox() {

    var treasure_checkbox_status = document.getElementById("treasure_checkbox").checked;

    if(treasure_checkbox_status) {
        treasure_group.addTo(map);
    }

    else if(!treasure_checkbox_status) {
        treasure_group.remove();
    }
}

//Hides and shows Clawblades rivals
function ClawbladesCheckbox() {

    var clawblades_checkbox_status = document.getElementById("clawblades_checkbox").checked;

    if(clawblades_checkbox_status) {
        clawblades_group.addTo(map);
    }

    else if(!clawblades_checkbox_status) {
        clawblades_group.remove();
    }
}

//Hides and shows Diamond Fangs rivals
function DiamondFangsCheckbox() {

    var diamond_fangs_checkbox_status = document.getElementById("diamond_fangs_checkbox").checked;

    if(diamond_fangs_checkbox_status) {
        diamond_fangs_group.addTo(map);
    }

    else if(!diamond_fangs_checkbox_status) {
        diamond_fangs_group.remove();
    }
}

//Hides and shows Quickwhiskers rivals
function QuickwhiskersCheckbox() {

    var quickwhiskers_checkbox_status = document.getElementById("quickwhiskers_checkbox").checked;

    if(quickwhiskers_checkbox_status) {
        quickwhiskers_group.addTo(map);
    }

    else if(!quickwhiskers_checkbox_status) {
        quickwhiskers_group.remove();
    }
}

//Hides and shows Nightstalkers rivals
function NightstalkersCheckbox() {

    var nightstalkers_checkbox_status = document.getElementById("nightstalkers_checkbox").checked;

    if(nightstalkers_checkbox_status) {
        nightstalkers_group.addTo(map);
    }

    else if(!nightstalkers_checkbox_status) {
        nightstalkers_group.remove();
    }
}

//Hides and shows Chiefs
function ChiefsCheckbox() {

    var chiefs_checkbox_status = document.getElementById("chiefs_checkbox").checked;

    if(chiefs_checkbox_status) {
        chiefs_group.addTo(map);
    }

    else if(!chiefs_checkbox_status) {
        chiefs_group.remove();
    }
}

//Hides and shows Mysterious Driver
function MysteriousDriverCheckbox() {

    var mysterious_driver_checkbox_status = document.getElementById("mysterious_driver_checkbox").checked;

    if(mysterious_driver_checkbox_status) {
        mysterious_driver_group.addTo(map);
    }

    else if(!mysterious_driver_checkbox_status) {
        mysterious_driver_group.remove();
    }
}

//For canvas: Performance mode
function watchCanvasCheckbox(playlist_name) {

    var playlist_checkbox_status = document.getElementById(playlist_name + "_playlist").checked;
    var events_checkbox_status = document.getElementById("events_checkbox").checked;
    var container_checkbox_status = document.getElementById("container_checkbox").checked;
    var collectibles_checkbox_status = document.getElementById("collectibles_checkbox").checked;
    var photo_ops_checkbox_status = document.getElementById("photo_ops_checkbox").checked;
    var feats_checkbox_status = document.getElementById("feats_checkbox").checked

    if(!(playlist_checkbox_status)) {
        
        markers_canvas.removeMarkers(window[playlist_name + "_container_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_events_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_photo_ops_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_collectibles_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_feats_group"]);
    }

    else if(playlist_checkbox_status) {

        markers_canvas.removeMarkers(window[playlist_name + "_container_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_events_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_collectibles_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_photo_ops_group"]);
        markers_canvas.removeMarkers(window[playlist_name + "_feats_group"]);

        //Container
        if(container_checkbox_status) {
            markers_canvas.addMarkers(window[playlist_name + "_container_group"]);
        }

        else if(!(container_checkbox_status)) {
            markers_canvas.removeMarkers(window[playlist_name + "_container_group"]);
        }

        //Events
        if(events_checkbox_status) {
            markers_canvas.addMarkers(window[playlist_name + "_events_group"]);
        }

        else if(!(events_checkbox_status)) {
            markers_canvas.removeMarkers(window[playlist_name + "_events_group"]);
        }

        //Collectibles
        if(collectibles_checkbox_status) {
            markers_canvas.addMarkers(window[playlist_name + "_collectibles_group"]);
        }

        else if(!(collectibles_checkbox_status)) {
            markers_canvas.removeMarkers(window[playlist_name + "_collectibles_group"]);
        }

        //Photo Ops
        if(photo_ops_checkbox_status) {
            markers_canvas.addMarkers(window[playlist_name + "_photo_ops_group"]);
        }

        else if(!(photo_ops_checkbox_status)) {
            markers_canvas.removeMarkers(window[playlist_name + "_photo_ops_group"]);
        }

        //Feats
        if(feats_checkbox_status) {
            markers_canvas.addMarkers(window[playlist_name + "_feats_group"]);
        }

        else if(!(feats_checkbox_status)) {
            markers_canvas.removeMarkers(window[playlist_name + "_feats_group"]);
        }
    }
}

//Hides and shows Motorfest Grounds
function MFGroundsCanvasCheckbox() {

    var mf_grounds_checkbox_status = document.getElementById("mf_grounds_checkbox").checked;

    if(mf_grounds_checkbox_status) {
        markers_canvas.removeMarkers(mf_grounds_group);
        markers_canvas.addMarkers(mf_grounds_group);
    }

    else if(!mf_grounds_checkbox_status) {
        markers_canvas.removeMarkers(mf_grounds_group);
    }
}

//Hides and shows Demo Royale starting places
function DemoRoyaleCanvasCheckbox() {

    var demo_royale_checkbox_status = document.getElementById("demo_royale_checkbox").checked;

    if(demo_royale_checkbox_status) {
        markers_canvas.removeMarkers(demo_royale_group);
        markers_canvas.addMarkers(demo_royale_group);
    }

    else if(!demo_royale_checkbox_status) {
        markers_canvas.removeMarkers(demo_royale_group);
    }
}

//Hides and shows Grand Races starting places
function GrandRaceCanvasCheckbox() {

    var grand_race_checkbox_status = document.getElementById("grand_race_checkbox").checked;

    if(grand_race_checkbox_status) {
        markers_canvas.removeMarkers(grand_race_group);
        markers_canvas.addMarkers(grand_race_group);
    }

    else if(!grand_race_checkbox_status) {
        markers_canvas.removeMarkers(grand_race_group);
    }
}

//Hides and shows Achievement locations
function AchievementsCanvasCheckbox() {

    var achievements_checkbox_status = document.getElementById("achievements_checkbox").checked;

    if(achievements_checkbox_status) {
        markers_canvas.removeMarkers(achievements_group);
        markers_canvas.addMarkers(achievements_group);
    }

    else if(!achievements_checkbox_status) {
        markers_canvas.removeMarkers(achievements_group);
    }
}

//Hides and shows Treasure locations
function TreasureCanvasCheckbox() {

    var treasure_checkbox_status = document.getElementById("treasure_checkbox").checked;

    if(treasure_checkbox_status) {
        markers_canvas.removeMarkers(treasure_group);
        markers_canvas.addMarkers(treasure_group);
    }

    else if(!treasure_checkbox_status) {
        markers_canvas.removeMarkers(treasure_group);
    }
}

//Hides and shows Clawblades Rivals
function ClawbladesCanvasCheckbox() {

    var clawblades_checkbox_status = document.getElementById("clawblades_checkbox").checked;

    if(clawblades_checkbox_status) {
        markers_canvas.removeMarkers(clawblades_group);
        markers_canvas.addMarkers(clawblades_group);
    }

    else if(!clawblades_checkbox_status) {
        markers_canvas.removeMarkers(clawblades_group);
    }
}

//Hides and shows Diamond Fangs Rivals
function DiamondFangsCanvasCheckbox() {

    var diamond_fangs_checkbox_status = document.getElementById("diamond_fangs_checkbox").checked;

    if(diamond_fangs_checkbox_status) {
        markers_canvas.removeMarkers(diamond_fangs_group);
        markers_canvas.addMarkers(diamond_fangs_group);
    }

    else if(!diamond_fangs_checkbox_status) {
        markers_canvas.removeMarkers(diamond_fangs_group);
    }
}

//Hides and shows Quickwhiskers Rivals
function QuickwhiskersCanvasCheckbox() {

    var quickwhiskers_checkbox_status = document.getElementById("quickwhiskers_checkbox").checked;

    if(quickwhiskers_checkbox_status) {
        markers_canvas.removeMarkers(quickwhiskers_group);
        markers_canvas.addMarkers(quickwhiskers_group);
    }

    else if(!quickwhiskers_checkbox_status) {
        markers_canvas.removeMarkers(quickwhiskers_group);
    }
}

//Hides and shows Nightstalkers Rivals
function NightstalkersCanvasCheckbox() {

    var nightstalkers_checkbox_status = document.getElementById("nightstalkers_checkbox").checked;

    if(nightstalkers_checkbox_status) {
        markers_canvas.removeMarkers(nightstalkers_group);
        markers_canvas.addMarkers(nightstalkers_group);
    }

    else if(!nightstalkers_checkbox_status) {
        markers_canvas.removeMarkers(nightstalkers_group);
    }
}

//Hides and shows Chiefs
function ChiefsCanvasCheckbox() {

    var chiefs_checkbox_status = document.getElementById("chiefs_checkbox").checked;

    if(chiefs_checkbox_status) {
        markers_canvas.removeMarkers(chiefs_group);
        markers_canvas.addMarkers(chiefs_group);
    }

    else if(!chiefs_checkbox_status) {
        markers_canvas.removeMarkers(chiefs_group);
    }
}

//Hides and shows Mysterious Driver
function MysteriousDriverCanvasCheckbox() {

    var mysterious_driver_checkbox_status = document.getElementById("mysterious_driver_checkbox").checked;

    if(mysterious_driver_checkbox_status) {
        markers_canvas.removeMarkers(mysterious_driver_group);
        markers_canvas.addMarkers(mysterious_driver_group);
    }

    else if(!mysterious_driver_checkbox_status) {
        markers_canvas.removeMarkers(mysterious_driver_group);
    }
}

//Checks mode switch for performance mode
document.addEventListener("DOMContentLoaded", function() {
    const mode_switch = document.getElementById("mode_switch");
    const challenges_switch = document.getElementById("challenges_switch");
    
    mode_switch.checked = true;
    challenges_switch.checked = false;
})

//Switches performance mode
//False - high quality, high demanding, DOM
//True - lower quality, canvas
function switchMode() {

    //Array to store paths to playlist js scripts
    var playlist_arr = [];
    //Stores state of checkmark(mode switch)
    var mode_switch_status = document.getElementById("mode_switch").checked;
    //Gets all the playlist scripts
    var scripts = document.body.getElementsByClassName("playlist_script");
    //Get misc script
    var misc_script = document.getElementById("misc_script")
    //Get rivals script
    var rivals_script = document.getElementById("rivals_script")

    //Function for loading every script through promise
    //src is an argument - "static/{playlist_name}_canvas.js"
    //We are setting class so we can use those scripts again when toggling the switch
    function loadScript(src, filter) {

        return new Promise((resolve, reject) => {

            //Creating new script element
            const script = document.createElement("script");
            script.setAttribute("src", src);
            if(filter === "playlist") {
                script.setAttribute("class", filter+"_script");
            }

            else if(filter === "misc") {
                script.setAttribute("id", filter+"_script");
            }

            else if(filter === "rivals") {
                script.setAttribute("id", filter+"_script");
            }

            script.onload = () => {
                resolve();
            }

            script.onerror = () => {
                reject();
            }

            document.body.appendChild(script);
        })
    }

    //DOM Mode
    if(!mode_switch_status) {

        //Clears whole canvas
        markers_canvas.clear();

        //Remove script with id misc_script
        misc_script.remove();

        //Remove script with id rivals_script
        rivals_script.remove();

        //Adds path to the array and removes script from HTMLCollection
        for(var i = scripts.length - 1; i >= 0; --i) {
            playlist_arr.push(scripts[i].getAttributeNode("src").value);
            scripts[i].remove();
        }

        //To keep original order of playlist paths
        playlist_arr = playlist_arr.reverse();

        //Function to load all the scripts
        //src is stripped of _canvas so we can use DOM mode scripts
        async function loadAllScripts(playlist_arr) {

            var playlist_checkboxes = document.querySelectorAll(".playlist_checkbox");
            var misc_checkboxes = document.querySelectorAll(".misc_checkbox");
            var rivals_checkboxes = document.querySelectorAll(".rivals_checkbox");

            for (let i = 0; i < playlist_arr.length; i++) {

                const src = playlist_arr[i].replace("_canvas", "");
                await loadScript(src, "playlist");

                //We change onchange function to one that handles DOM mode, see watchCheckbox
                //We need to send change event so we keep filters when mode is switched
                var playlist_checkbox = playlist_checkboxes[i].querySelector(".filter_checkbox");
                playlist_checkbox.attributes.onchange.nodeValue = playlist_checkbox.attributes.onchange.nodeValue.replace("Canvas", "");
                playlist_checkbox.dispatchEvent(new Event('change'));
            }

            const src_misc = misc_script.getAttributeNode("src").value.replace("_canvas", "");
            await loadScript(src_misc, "misc");
            
            for (let i = 0; i < misc_checkboxes.length; i++) {
                var misc_checkbox = misc_checkboxes[i].querySelector(".filter_checkbox");
                misc_checkbox.attributes.onchange.nodeValue = misc_checkbox.attributes.onchange.nodeValue.replace("Canvas", "");
                misc_checkbox.dispatchEvent(new Event('change'));
            }

            const src_rivals = rivals_script.getAttributeNode("src").value.replace("_canvas", "");
            await loadScript(src_rivals, "rivals");

            for (let i = 0; i < rivals_checkboxes.length; i++) {
                var rivals_checkbox = rivals_checkboxes[i].querySelector(".filter_checkbox");
                rivals_checkbox.attributes.onchange.nodeValue = rivals_checkbox.attributes.onchange.nodeValue.replace("Canvas", "");
                rivals_checkbox.dispatchEvent(new Event('change'));
            }
        }

        loadAllScripts(playlist_arr);
    }

    //Canvas mode
    else if(mode_switch_status) {

        //Clears whole map pane
        map.eachLayer((layer)=>{
            if(layer instanceof L.Marker){
                layer.remove();
            }
        });

        //Remove script with id misc_script
        misc_script.remove();

        //Remove script with id rivals_script
        rivals_script.remove();

        //Adds path to the array and removes script from HTMLCollection
        for(var i = scripts.length - 1; i >= 0; --i) {
            playlist_arr.push(scripts[i].getAttributeNode("src").value);
            scripts[i].remove();
        }

        //To keep original order of playlist paths
        playlist_arr = playlist_arr.reverse();

        //Function to load all the scripts
        //src is stripped of _canvas so we can use DOM mode scripts
        async function loadAllScripts(playlist_arr) {

            var playlist_checkboxes = document.querySelectorAll(".playlist_checkbox");
            var misc_checkboxes = document.querySelectorAll(".misc_checkbox");
            var rivals_checkboxes = document.querySelectorAll(".rivals_checkbox");

            for (let i = 0; i < playlist_arr.length; i++) {

                const src = playlist_arr[i].replace(".js", "_canvas.js");
                await loadScript(src, "playlist");

                //We change onchange function to one that handles DOM mode, see watchCheckbox
                //We need to send change event so we keep filters when mode is switched
                var playlist_checkbox = playlist_checkboxes[i].querySelector(".filter_checkbox");
                playlist_checkbox.attributes.onchange.nodeValue = playlist_checkbox.attributes.onchange.nodeValue.replace("Checkbox", "CanvasCheckbox");
                playlist_checkbox.dispatchEvent(new Event('change'));
            }

            const src_misc = misc_script.getAttributeNode("src").value.replace(".js", "_canvas.js");
            await loadScript(src_misc, "misc");
            
            for (let i = 0; i < misc_checkboxes.length; i++) {
                var misc_checkbox = misc_checkboxes[i].querySelector(".filter_checkbox");
                misc_checkbox.attributes.onchange.nodeValue = misc_checkbox.attributes.onchange.nodeValue.replace("Checkbox", "CanvasCheckbox");
                misc_checkbox.dispatchEvent(new Event('change'));
            }

            const src_rivals = rivals_script.getAttributeNode("src").value.replace(".js", "_canvas.js");
            await loadScript(src_rivals, "rivals");

            for (let i = 0; i < rivals_checkboxes.length; i++) {
                var rivals_checkbox = rivals_checkboxes[i].querySelector(".filter_checkbox");
                rivals_checkbox.attributes.onchange.nodeValue = rivals_checkbox.attributes.onchange.nodeValue.replace("Checkbox", "CanvasCheckbox");
                rivals_checkbox.dispatchEvent(new Event('change'));
            }
        }

        loadAllScripts(playlist_arr);

    }
}

//Adds functionality to each accordion menu and accordion submenu button
//Allows to have only one opened challenge throughout all the challenges
document.addEventListener("DOMContentLoaded", async function() {

    let markers_json;

    try {
        const markers_json_file = await fetch("static/challenges.json");
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