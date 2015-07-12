https:// PFUDOR.tk JavaScript Library -- Credits

$(function(){
    if(pfudor == 'anim' || pfudor == 'huang') {
        $('#credits').append('<a href="https://youtube.com/watch?v=eWM2joNb9NE" target="_self">Song by Andrew Huang</a><br/>');
        if(pfudor == 'anim') {
            $('#credits').append('<a href="https://youtube.com/watch?v=qRC4Vk6kisY" target="_self">Video by FluffyMixer</a><br />');
            $('#credits').append('<a href="https://pfudor.tk?v=huang" target="_self">Switch to the official video</a><br />');
        } else {
            $('#credits').append('<a href="https://pfudor.tk?v=anim" target="_self">Switch to the animated video</a><br />');
        }
    }

    if(pfudor !== 'gaben') {
        $('#credits').append('<a href="https://pfudor.tk?v=gaben" target="_self">Praise Lord Gaben!</a><br />');
    }

    if(pfudor === false || pfudor == 'gaben') {
        $('#credits').append('<a href="https://youtube.com/watch?v=' + vidid + '" target="_self">Switch to the video</a>');
    }
});
