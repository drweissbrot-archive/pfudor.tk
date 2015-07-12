// PFUDOR.tk JavaScript Library -- Modals

function show_modal(id) {
    vid_pause();
    $('body').addClass('modal-active');
    $('#modal-' + id).addClass('active');
}

function hide_modal(id) {
    vid_play();
    $('body').removeClass('modal-active');
    $('#modal-' + id).removeClass('active');
}

$(function() {
    setTimeout(function() {
        $('#promo').removeClass('invisible');
    }, 15000);
});

function promo_details_show() {
    $('#promo').addClass('invisible');
    show_modal('promo-details');
}

function promo_details_hide() {
    hide_modal('promo-details');
    $('#promo').removeClass('invisible');
}
