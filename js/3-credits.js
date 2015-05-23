// PFUDOR.tk JavaScript Library -- Credits

$(function(){
    if(pfudor == 'anim' || pfudor == 'huang') {
        $('#credits').append("<a href=\"https://youtube.com/watch?v=eWM2joNb9NE\">Song by Andrew Huang</a><br/>");
        if(pfudor == 'anim') {
            $('#credits').append('<a href="https://youtube.com/watch?v=qRC4Vk6kisY">Video by FluffyMixer</a><br />');
            $('#credits').append('<a href="//pfudor.tk?v=huang">Switch to the official video</a>');
        } else {
            $('#credits').append('<a href="//pfudor.tk?v=anim">Switch to the animated video</a>');
        }
    } else {
        $('#credits').append('<a href="//youtube.com/watch?v=' + vidid + '">Switch to the video</a>');
    }
});
