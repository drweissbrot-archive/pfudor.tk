$(function() {
    function displayNone() {
        $('.modal').css('display', 'none');
    }

    function modalShow(id) {
        $('.modal.m-' + id).css('display', '');

        setTimeout(function() {
            $('.modal.m-' + id).addClass('active');
        }, 10);
        player.pauseVideo();
    }

    function modalHide() {
        play();

        setTimeout(function() {
            displayNone();
        }, 250);
    }

    displayNone();

    $('.ref a').on('click', function(e) {
        if($(this).attr('href') == '#') {
            e.preventDefault();

            $('body').addClass('has-modal');
            modalShow($(this).attr('data-modal'));
        }
    });

    $('.closemodal').on('click', function(e) {
        e.preventDefault();
        modalHide();
    });
});
