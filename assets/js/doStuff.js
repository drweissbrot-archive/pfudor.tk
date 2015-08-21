$(function() {
    // Redirect
    var loc = window.location;

    // If using link with questionmark
    if(loc.href.indexOf('?') > 1) {
        location.replace(loc.href.replace('?', '#'));
    }

    // If no variables are given
    if(loc.hash === '') {
        window.location = '#';
    }

    // Promote this repo
    console.info('Looking under the hood? Why don\'t you get involved? https://github.com/drweissbrot/pfudor.tk');

    // Do the player
    getVars();
    socialLinks();

    // Update the video if hash changes
    window.onhashchange = function() {
        var oldconf = config;
        getVars();
        socialLinks();

        if(oldconf.id != config.id ||
            oldconf.ctrls != config.ctrls) {
            player.destroy();
            onYouTubeIframeAPIReady();
            return;
        }

        if(oldconf.start != config.start ||
            oldconf.end != config.end) {
            playFromStart();
        }

        if(oldconf.filters != config.filters) {
            applyFilters();
        }

        onPlayerReady();
    };

    // Mobile: start the video when clicking on the overlay
    $('.overlay').on('click', function() {
        var playerState = player.getPlayerState();
        if(playerState !== 1 &&
            playerState !== 3) {
            playFromStart();
            play();
        }
    });
});
