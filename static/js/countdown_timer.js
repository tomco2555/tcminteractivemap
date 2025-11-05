InteractiveMap.features.countdownTimer.countdownDate = Date.UTC(2025, 10, 5, 8);

InteractiveMap.features.countdownTimer.refreshInterval = setInterval(function() {
    var now = new Date().getTime();

    var difference = InteractiveMap.features.countdownTimer.countdownDate - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown_next_season").innerHTML = "Next season drops in: <strong>" + days + "d " + hours + "h " + minutes + "m " + seconds + "s </strong>";

    if (difference < 0) {
        clearInterval(InteractiveMap.features.countdownTimer.refreshInterval);
        document.getElementById("countdown_next_season").innerHTML = "Season 7 just dropped";
    }
}, 1000);