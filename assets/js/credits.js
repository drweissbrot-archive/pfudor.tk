function generateCredits() {
    $('.credits').html('');
    if(special.pfudor) {
        $('.credits').append('<a href="https://youtube.com/watch?v=eWM2joNb9NE">Song by Andrew Huang</a><br/>');

        if(special.type == 'anim') {
            $('.credits').append('<a href="https://youtube.com/watch?v=qRC4Vk6kisY">Video by FluffyMixer</a><br />');
            $('.credits').append('<a href="https://pfudor.tk#v=huang">Switch to the official video</a><br />');
        } else {
            $('.credits').append('<a href="https://pfudor.tk#v=anim">Switch to the animated video</a><br />');
        }
    }

    if(special.type !== 'gaben') {
        $('.credits').append('<a href="https://pfudor.tk#v=gaben">Praise Lord Gaben!</a><br />');
    }

    if(!special.enabled || special.type == 'gaben') {
        $('.credits').append('<a href="https://youtube.com/watch?v=' + config.id + '">Switch to the video</a>');
    }
}
