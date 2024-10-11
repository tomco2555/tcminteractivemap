//Animation for closing filters sidebar
document.addEventListener("DOMContentLoaded", function() {
    const filters_sidebar = document.getElementById("filters_sidebar")
    const close_btn = document.getElementById("close_btn")
    const close_div = document.getElementById("close")

    close_btn.addEventListener("click", function() {
        filters_sidebar.classList.toggle("close_filters")
        close_div.classList.toggle("move_button")
        
        if (close_div.classList.contains("move_button")) {
            close_btn.textContent = ">";
        }
        else {
            close_btn.textContent = "<";
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