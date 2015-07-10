// PFUDOR.tk JavaScript Library -- Player

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '480',
        width: '853',
        videoId: vidid,
        playerVars: {
            'rel': 0,
            'modestbranding': 1,
            'iv_load_policy': 3,
            'autohide': 1,
            'showinfo': 0,
            'loop': 1,
            'playlist': vidid,
            'controls': ctrls,
            'autoplay': 1,
            'start': start,
            'end': end
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function vid_play(){
    $('#modal').remove();
    $('#credits').css({'display':'inline'});
    $('#ref').css({'display':'inline'});
    player.playVideo();
}

function vid_pause(){
    player.pauseVideo();
}

function onPlayerReady() {
    $('#loading').remove();
}

// Apply filters
$(function() {
    $('#player').css({'-webkit-filter':'blur(' + blur + 'px) grayscale(' + gray + '%) sepia(' + sepia + '%)'});
});

// Hide cursor if idle
$(function() {
    var mouse_idle_timer;
    $('body').removeClass('idle');
    $("body").mousemove(function() {
            $("body").removeClass('idle');
            clearTimeout(mouse_idle_timer);

            mouse_idle_timer = setTimeout(function() {
                $("body").addClass('idle');

                var mouse_force_hide = true;
                setTimeout(function() {
                    mouse_force_hide = false;
                }, 200);
            }, 1000);
        }
    );
});

// Enable looping on non-PFUDOR videos
function onPlayerStateChange() {
    if(start !== null) {
        player.seekTo(start);

        if(end !== null) {
            var playtime = (end - start) * 1000;

            setTimeout(function() {
                player.seekTo(start);
            }, playtime);
        }
    }
}
