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
        checkbox.checked = true;
    })
})

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
    })
})

function activitiesCheckbox() {

    const checkboxes = document.querySelectorAll(".playlist_checkbox");

    checkboxes.forEach(function(checkbox) {
        single_checkbox = checkbox.querySelectorAll(".filter_checkbox")[0]
        single_checkbox.dispatchEvent(new Event('change'));
    })
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

//Checks toggle switch for performance mode
document.addEventListener("DOMContentLoaded", function() {
    const toggle_switch = document.getElementById("toggle_switch");
    
    toggle_switch.checked = true;
})

//Switches performance mode
//False - high quality, high demanding, DOM
//True - lower quality, canvas
function switchMode() {

    //Array to store paths to playlist js scripts
    var playlist_arr = [];
    //Stores state of checkmark(toggle switch)
    var toggle_switch_status = document.getElementById("toggle_switch").checked;
    //Gets all the playlist scripts
    var scripts = document.body.getElementsByClassName("playlist_script");
    //Get misc script
    var misc_script = document.getElementById("misc_script")

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
    if(!toggle_switch_status) {

        //Clears whole canvas
        markers_canvas.clear();

        //Adds path to the array and removes script from HTMLCollection
        for(var i = scripts.length - 1; i >= 0; --i) {
            playlist_arr.push(scripts[i].getAttributeNode("src").value);
            scripts[i].remove();
        }
        
        //Remove script with id misc_script
        misc_script.remove();

        //To keep original order of playlist paths
        playlist_arr = playlist_arr.reverse();

        //Function to load all the scripts
        //src is stripped of _canvas so we can use DOM mode scripts
        async function loadAllScripts(playlist_arr) {

            var playlist_checkboxes = document.querySelectorAll(".playlist_checkbox");
            var misc_checkboxes = document.querySelectorAll(".misc_checkbox");

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
        }

        loadAllScripts(playlist_arr);
    }

    //Canvas mode
    else if(toggle_switch_status) {

        //Clears whole map pane
        map.eachLayer((layer)=>{
            if(layer instanceof L.Marker){
                layer.remove();
            }
        });

        //Adds path to the array and removes script from HTMLCollection
        for(var i = scripts.length - 1; i >= 0; --i) {
            playlist_arr.push(scripts[i].getAttributeNode("src").value);
            scripts[i].remove();
        }

        //Remove script with id misc_script
        misc_script.remove();

        //To keep original order of playlist paths
        playlist_arr = playlist_arr.reverse();

        //Function to load all the scripts
        //src is stripped of _canvas so we can use DOM mode scripts
        async function loadAllScripts(playlist_arr) {

            var playlist_checkboxes = document.querySelectorAll(".playlist_checkbox");
            var misc_checkboxes = document.querySelectorAll(".misc_checkbox");

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
        }

        loadAllScripts(playlist_arr);

    }
}