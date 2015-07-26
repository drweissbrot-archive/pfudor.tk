// PFUDOR.tk JavaScript Library -- Preparations

// Parsing params
$.querystring = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results === null){
       return null;
    } else {
       return results[1] || 0;
    }
};

var vidid   = $.querystring('v');
var start   = $.querystring('s');
var end     = $.querystring('e');
var volume  = $.querystring('t');
var quality = $.querystring('q');
var ctrls   = $.querystring('c');

var sepia   = $.querystring('sepia');
var gray    = $.querystring('gray');
var blur    = $.querystring('blur');


// Set defaults
// Determine which video to play
var ytplay; var pfudor;
if(vidid == 'anim' || vidid === undefined || vidid === null || vidid == 'qRC4Vk6kisY') {
    ytplay = false;
    pfudor = 'anim';
    vidid  = 'qRC4Vk6kisY';
} else if(vidid == 'huang' || vidid == 'eWM2joNb9NE') {
    ytplay = false;
    pfudor = 'huang';
    vidid  = 'eWM2joNb9NE';
} else if(vidid == 'gaben' || vidid == 'rP2MDtWu5t0') {
    ytplay = false;
    pfudor = 'gaben';
    vidid  = 'rP2MDtWu5t0';
} else {
    ytplay = true;
    pfudor = false;
}

// Check time params
if(pfudor === true) {
    start = 0;
    end   = 91;
} else {
    if(start === undefined) {
        start = 0;
    }

    if(end === undefined) {
        end = 0;
    }
}

// Check volume param
if(volume === undefined || volume >= 100 || volume < 0 || volume === null) {
    volume = 100;
}

// Get control status
if(ctrls == "1" || ctrls == "true") {
    ctrls = 1;
} else {
    ctrls = 0;
}

// Set default filter value to 0
if(sepia === undefined) {
    sepia = 0;
}

if(gray === undefined) {
    gray = 0;
}

if(blur === undefined) {
    blur = 0;
}

// Change title
$(function() {
    if(pfudor == 'anim' || pfudor == 'huang') {
        document.title = 'HAIL PFUDOR!';
    } else if(pfudor == 'gaben') {
        document.title = 'PRAISE LORD GABEN!';
    } else {
        document.title = 'PFUDOR.tk';
    }
});
