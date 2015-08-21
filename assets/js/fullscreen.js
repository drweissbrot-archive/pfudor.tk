$(function() {
    // Request fullscreen
    $('.overlay').on('dblclick', function() {
        fullscreenToggle();
    });

    $('#fs-tgl').on('click', function(e) {
        e.preventDefault();
        fullscreenToggle();
    });

    // Note: I know that IE/Edge also have their own fullscreen API, but I don't actually care
    function fullscreenToggle() {
        if(!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement) {
            if(document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if(document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if(document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }

        $('#fs-tgl i').toggleClass('fa-expand')
            .toggleClass('fa-compress');
    }
});
