// Adds function to the settings button
document.addEventListener("DOMContentLoaded", function() {
    // Settings menu div
    var settings_menu = document.getElementById("settings_menu");
    // "Settings" button
    var settings_menu_btn = settings_menu.querySelector("#settings_btn");
    // Gear icon
    var gear_icon = settings_menu.querySelector("#gear");
    // Arrow pointer up/down to show in what state the settings are(pressed/not pressed)
    var arrow_pointer = settings_menu.querySelector("#arrow_pointer");
    // Points to the content of the settings
    var settings_content = settings_menu.nextElementSibling;

    // Adds event listener to the whole div
    settings_menu.addEventListener("click", function(event) {
        // Make only button, gear icon and arrow pointer clickable, not the whole div
        if (event.target === settings_menu_btn || event.target === gear_icon || event.target === arrow_pointer) {

            // Submenu is opened
            if(settings_content.style.maxHeight) {
                // Set max height to null so the whole menu can retract
                // Add class to elements so the appropriate transformation can occur
                settings_content.style.maxHeight = null;
                settings_content.classList.remove("open");
                arrow_pointer.classList.remove("open");
                gear_icon.classList.remove("open");
            }

            //Submenu is not opened
            else {
                settings_content.style.maxHeight = settings_content.scrollHeight + "px";
                settings_content.classList.add("open");
                arrow_pointer.classList.add("open");
                gear_icon.classList.add("open");
            }
        }
    })
})

// Adds functionality to checkboxes for choosing primary and secondary color
document.addEventListener("DOMContentLoaded", function() {
    var primary_color_div = document.getElementById("primary_color");
    var secondary_color_div = document.getElementById("secondary_color");

    var primary_color_options = primary_color_div.querySelector(".checkmark-flexbox");
    var secondary_color_options = secondary_color_div.querySelector(".checkmark-flexbox");

    var primary_color_checkboxes = primary_color_options.querySelectorAll(".square")
    var secondary_color_checkboxes = secondary_color_options.querySelectorAll(".square")

    // By default first option is chosen
    primary_color_checkboxes[0].setAttribute('data-chosen', 'true');
    primary_color_checkboxes[0].classList.add('bigger-square');
    secondary_color_checkboxes[0].setAttribute('data-chosen', 'true');
    secondary_color_checkboxes[0].classList.add('bigger-square');
})

// Function to change colors of UI
// Handles selection of only one checkbox per color option(primary)
function changeColor(checkbox) {
    if (checkbox.getAttribute('data-chosen') === 'true') {
        return;
    }

    var root = document.querySelector(":root");

    switch(checkbox.id) {
        case "primary_black_color":
            root.style.setProperty('--primary-color', 'black');
            root.style.setProperty('--border-font-color', 'white');
            root.style.setProperty('--tertiary-color', 'rgb(70, 70, 70)');
            root.style.setProperty('--slider-bg-color', '#ccc');
            break;
        case "primary_lightgray_color":
            root.style.setProperty('--primary-color', 'lightgray');
            root.style.setProperty('--border-font-color', 'black');
            root.style.setProperty('--tertiary-color', 'gray');
            root.style.setProperty('--slider-bg-color', '#5F9EA0');
            break;
        case "secondary_red_color":
            root.style.setProperty('--secondary-color', 'red');
            break;
        case "secondary_blue_color":
            root.style.setProperty('--secondary-color', '#2D68C4');
            break;
        case "secondary_green_color":
            root.style.setProperty('--secondary-color', '#0BDA51');
            break;
        case "secondary_yellow_color":
            root.style.setProperty('--secondary-color', '#ffce1b');
            break;
        case "secondary_purple_color":
            root.style.setProperty('--secondary-color', '#c11c84');
            break;
        case "secondary_orange_color":
            root.style.setProperty('--secondary-color', '#FF7518');
            break;
        case "secondary_cyan_color":
            root.style.setProperty('--secondary-color', '#00cec8');
            break;
        case "secondary_indigo_color":
            root.style.setProperty('--secondary-color', '#6c3baa');
            break;
    }

    checkbox.parentElement.querySelectorAll(".square").forEach(function(checkbox_to_check) {
        if(checkbox_to_check === checkbox) {
            checkbox.setAttribute('data-chosen', 'true');
            checkbox.classList.add('bigger-square');
        }
        else {
            checkbox_to_check.setAttribute('data-chosen', 'false');
            checkbox_to_check.classList.remove('bigger-square');
        }
    })
}