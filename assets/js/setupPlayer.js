var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: config.id,
        playerVars: {
            'rel': 0,
            'modestbranding': 1,
            'iv_load_policy': 3,
            'autohide': 1,
            'showinfo': 0,
            'loop': 1,
            'playlist': config.id,
            'controls': config.ctrls,
            'autoplay': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function play() {
    $('.modal').removeClass('active');
    $('body').removeClass('has-modal');
    player.playVideo();
}

function pause() {
    player.pauseVideo();
}

function playFromStart() {
    // Seek to starting point
    player.seekTo(config.start);

    // Seek to start if ended
    if(config.end != defaults.end) {
        setInterval(function() {
            if(player.getCurrentTime() >= config.end) {
                playFromStart();
            }
        }, 500);
    }
}

function onPlayerReady() {
    player.setVolume(config.vol);
    player.setPlaybackQuality(config.quality);

    // Enable looping, generate credits and apply filters
    playFromStart();
    generateCredits();
    applyFilters();

    // Hide loading notice after five seconds
    // (working around some bug setting the player state to 3 instead of 1)
    setTimeout(function() {
        $('.loading').addClass('hide');
    }, 5000);
}

// Remove loading notice
function onPlayerStateChange() {
    if(player.getPlayerState() == 1) {
        $('.loading').addClass('hide');
    }
}
