// PFUDOR.tk JavaScript Library -- Preparations

// Parsing params
$.querystring = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if(results == null){
       return null;
    } else {
       return results[1] || 0;
    }
}

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
if(vidid == 'anim' || vidid == undefined || vidid == "" || vidid == 'qRC4Vk6kisY') {
    ytplay = false;
    pfudor = 'anim';
    vidid  = 'qRC4Vk6kisY';
} else if(vidid == 'huang' || vidid == 'eWM2joNb9NE') {
    ytplay = false;
    pfudor = 'huang';
    vidid  = 'eWM2joNb9NE';
} else {
    ytplay = true;
    pfudor = false;
}

// Check time params
if(pfudor == true) {
    start = 0;
    end   = 91;
} else {
    if(start == undefined) {
        start = 0;
    }

    if(end == undefined) {
        end = 0;
    }
}

// Check volume param
if(volume == undefined || volume >= 100) {
    volume = 100;
}

if(volume == 0) {
    var mute = true;
} else {
    var mute = false;
}

// Parse quality param
if(quality != undefined) {
    console.log('YouTube\'s iframe Player does not support the video quality to be set by the app developer. So, this function is not available anymore.');
}
/*
if(quality == undefined || quality == "720") {
    quality = "hd720";
} else if(quality == "1080") {
    quality = "hd1080";
} else {
    quality = "default";
}
*/

// Get control status
if(ctrls == "1" || ctrls == "true") {
    ctrls = 1;
} else {
    ctrls = 0;
}

// Set default filter value to 0
if(sepia == undefined) {
    sepia = 0;
}

if(gray == undefined) {
    gray = 0;
}

if(blur == undefined) {
    blur = 0;
}


// Further preparations
$(document).ready(function(){
    console.log("Everything is set.");
    warn_beta();
});

function warn_beta() {
    alert('You\'re looking at our all new JavaScript-based version of PFUDOR.tk. It\'s still a beta, so we apologize for any inconvenience in advance.');
}
