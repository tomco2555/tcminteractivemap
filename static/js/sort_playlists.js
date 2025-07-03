var original_order = [];

function sortPlaylists(checkbox) {
    var playlist_wrapper = document.querySelector("#playlist_filters"),
        playlists = playlist_wrapper.querySelectorAll(".playlist_checkbox");

    if(playlists.length) {
        playlists = Array.from(playlists);

        if(original_order.length === 0) {
            console.log("som tu")
            original_order = playlists.slice();
        }

        if(checkbox.checked) {
            playlists.sort(function(left_item, right_item) {
                var left_playlist = left_item.querySelector("span").textContent;
                var right_playlist = right_item.querySelector("span").textContent;

                return left_playlist.localeCompare(right_playlist);
            })
        }
        else {
            playlists = original_order.slice();
        }

        playlists.forEach(function(playlist) {
            playlist_wrapper.appendChild(playlist);
        })
        
    }
}