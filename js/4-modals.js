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
