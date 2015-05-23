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

// Apply filters
$(function() {
    $('#player').css({'-webkit-filter':'blur(' + blur + 'px) grayscale(' + gray + '%) sepia(' + sepia + '%)'});
});
