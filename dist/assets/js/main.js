/*! PFUDOR.tk | MIT license | https://github.com/drweissbrot/pfudor.tk */

function applyFilters() {
    $('#player')
        .css('-webkit-filter', 'sepia(' + config.filters.sepia + '%) grayscale(' + config.filters.gray + '%) blur(' + config.filters.blur + 'px)')
        .css('filter', 'sepia(' + config.filters.sepia + '%) grayscale(' + config.filters.gray + '%) blur(' + config.filters.blur + 'px)');
}

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

$(function() {
    // Redirect
    var loc = window.location;

    // If using link with questionmark
    if(loc.href.indexOf('?') > 1) {
        location.replace(loc.href.replace('?', '#'));
    }

    // If no variables are given
    if(loc.hash === '') {
        window.location = '#';
    }

    // Promote this repo
    console.info('Looking under the hood? Why don\'t you get involved? https://github.com/drweissbrot/pfudor.tk');

    // Do the player
    getVars();
    socialLinks();

    // Update the video if hash changes
    window.onhashchange = function() {
        var oldconf = config;
        getVars();
        socialLinks();

        if(oldconf.id != config.id ||
            oldconf.ctrls != config.ctrls) {
            player.destroy();
            onYouTubeIframeAPIReady();
            return;
        }

        if(oldconf.start != config.start ||
            oldconf.end != config.end) {
            playFromStart();
        }

        if(oldconf.filters != config.filters) {
            applyFilters();
        }

        onPlayerReady();
    };

    // Mobile: start the video when clicking on the overlay
    $('.overlay').on('click', function() {
        var playerState = player.getPlayerState();
        if(playerState !== 1 &&
            playerState !== 3) {
            playFromStart();
            play();
        }
    });
});

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

$(function() {
    // Generate config vars
    var gendef = {
        id: 'anim',
        vol: 100,
        quality: 720,
        start: 0,
        end: 0,
        ctrls: 0,
        filters: {
            sepia: 0,
            gray: 0,
            blur: 0
        }
    },
    gen = {
        id: 'anim',
        vol: 100,
        quality: 720,
        start: 0,
        end: 0,
        ctrls: 0,
        filters: {
            sepia: 0,
            gray: 0,
            blur: 0
        }
    };

    // Check for user input
    // Video type
    $('input[name="vid"]').on('click', function() {
        gen.id = $(this).attr('id').replace('v-', '');

        if(gen.id == 'anim' ||
            gen.id == 'huang' ||
            gen.id == 'gaben') {
            $('#vidid-label').css('display', '');
        }

        if(gen.id == 'yt') {
            $('#vidid-label').css('display', 'block');
        }

        generateLink();
    });

    // Video id (YouTube only)
    $('#vidid').on('input', function() {
        gen.id = $(this).val();
        generateLink();
    });

    // Volume (Slide)
    $('#vol-slide').on('change', function() {
        var vol = $('#vol-slide').val();
        $('#vol').val(vol);
        gen.vol = vol;

        generateLink();
    });

    // Volume (box)
    $('#vol').on('change', function() {
        var vol = $('#vol').val();
        $('#vol-slide').val(vol);
        gen.vol = vol;

        generateLink();
    });

    // Quality
    $('input[name="quality"]').on('click', function() {
        gen.quality = $(this).attr('id').replace('q-', '');
        generateLink();
    });

    // Start at
    $('#startat').on('input', function() {
        gen.start = $(this).val();
        generateLink();
    });

    // End at
    $('#endat').on('input', function() {
        gen.end = $(this).val();
        generateLink();
    });

    // Controls
    $('#ctrls').on('click', function() {
        gen.ctrls = $(this).prop('checked');
        generateLink();
    });

    // Filters
    // Sepia
    $('#sepia').on('input', function() {
        gen.filters.sepia = $(this).val();
        generateLink();
    });

    // Grayscale
    $('#gray').on('input', function() {
        gen.filters.gray = $(this).val();
        generateLink();
    });

    // Blur
    $('#blur').on('input', function() {
        gen.filters.blur = $(this).val();
        generateLink();
    });

    function generateLink() {
        var link = 'https://pfudor.tk/#';

        // Generate the video id
        switch(gen.id) {
            case 'qRC4Vk6kisY':
            case 'anim':
            case 'yt':
                break;

            case 'eWM2joNb9NE':
            case 'huang':
                link += 'v=huang';
                break;

            case 'rP2MDtWu5t0':
            case 'gaben':
                link += 'v=gaben';
                break;

            default:
                link += 'v=' + gen.id;
                break;
        }

        // Generate the volume
        if(gen.vol !== gendef.vol) {
            link += '&t=' + gen.vol;
        }

        // Generate the quality
        switch(gen.quality) {
            case '240':
                link += '&q=240';
                break;

            case '360':
                link += '&q=360';
                break;

            case '480':
                link += '&q=480';
                break;

            default:
            case '720':
                break;

            case '1080':
                link += '&q=1080';
                break;
        }

        // Generate start time
        if(gen.start !== gendef.start) {
            link += '&s=' + gen.start;
        }

        // Generate end time
        if(gen.end !== gendef.end) {
            link += '&e=' + gen.end;
        }

        // Controls
        if(gen.ctrls) {
            link += '&c=true';
        }

        // Filters
        // Sepia
        if(gen.filters.sepia !== gendef.filters.sepia) {
            link += '&sepia=' + gen.filters.sepia;
        }

        // Grayscale
        if(gen.filters.gray !== gendef.filters.gray) {
            link += '&gray=' + gen.filters.gray;
        }

        // Blur
        if(gen.filters.blur !== gendef.filters.blur) {
            link += '&blur=' + gen.filters.blur;
        }

        // Insert the link
        $('#genlink').val(link);
    }
});

// Set up some 'global' variables and the default config
var config      = {},
    special     = {},
    defaults    = {
        id: 'qRC4Vk6kisY',
        vol: 100,
        quality: 'hd720',
        start: 0,
        end: 0,
        ctrls: 0,
        filters: {
            sepia: 0,
            gray: 0,
            blur: 0
        }
    };

// Get the necessary variables
function getVars() {
    $.qs = function(p) {
        var results = new RegExp('[\#&]' + p + '=([^&#]*)').exec(window.location.href);
        if(results === null) {
            return null;
        } else {
            return results[1] || 0;
        }
    };

    if(window.location.hash === '') {
        config = defaults;
        special = {
            enabled: true,
            pfudor: true,
            type: 'anim'
        };
    } else {
        config = {
            id:         $.qs('v'),
            playlist:   $.qs('p'),
            vol:        $.qs('t'),
            quality:    $.qs('q'),
            start:      $.qs('s'),
            end:        $.qs('e'),
            ctrls:      $.qs('c'),
            filters: {
                sepia:  $.qs('sepia'),
                gray:   $.qs('gray'),
                blur:   $.qs('blur')
            }
        };
    }

    validateConfig();
}

function validateConfig() {
    if(config != defaults) {
        // Determine the video id
        switch(config.id) {
            // PFUDOR: Animation
            case null:
            case 'anim':
            case 'qRC4Vk6kisY':
                config.id = defaults.id;
                special = {
                    enabled: true,
                    pfudor: true,
                    type: 'anim'
                };
                break;

            // PFUDOR: Huang
            case 'huang':
            case 'eWM2joNb9NE':
                config.id = 'eWM2joNb9NE';
                special = {
                    enabled: true,
                    pfudor: true,
                    type: 'huang'
                };
                break;

            // Gaben
            case 'gaben':
            case 'rP2MDtWu5t0':
                config.id = 'rP2MDtWu5t0';
                special = {
                    enabled: true,
                    pfudor: false,
                    type: 'gaben'
                };
                break;

            // Any other YouTube video
            default:
                special = {
                    enabled: false,
                    pfudor: false,
                    type: 'yt'
                };
                break;
        }

        // Determine the playlist
        if(config.playlist === null) {
            config.playlist = config.id;
        }

        // Determine the volume
        if(config.vol > 100 ||
            config.vol < 0 ||
            config.vol === null) {
            config.vol = defaults.vol;
        } else {
            // Make the volume an integer
            config.vol = Math.round(config.vol);
        }

        // Determine the playback quality
        switch(config.quality) {
            case 240:
                config.quality = 'small';
                break;

            case 360:
                config.quality = 'medium';
                break;

            case 480:
                config.quality = 'large';
                break;

            case 720:
                config.quality = 'hd720';
                break;

            case 1080:
                config.quality = 'hd1080';
                break;

            default:
                config.quality = defaults.quality;
                break;
        }

        // Determine timings
        if(special.pfudor) {
            config.start    = 0;
            config.end      = 90.5;
        } else {
            if(config.start === null) {
                config.start = defaults.start;
            }

            if(config.end === null) {
                config.end = defaults.end;
            }
        }

        // Determine whether to display controls
        if(config.ctrls === 'true') {
            config.ctrls = 1;
            $('.overlay').css('display', 'none');
            $('.social').css('display', 'none');
        } else {
            config.ctrls = defaults.ctrls;
        }

        // Filter: sepia
        if(config.filters.sepia === null ||
            config.filters.sepia > 100 ||
            config.filters.sepia < 0) {
            config.filters.sepia = defaults.filters.sepia;
        }

        // Filter: grayscale
        if(config.filters.gray === null ||
            config.filters.gray > 100 ||
            config.filters.gray < 0) {
            config.filters.gray = defaults.filters.gray;
        }

        // Filter: blur
        if(config.filters.blur === null ||
            config.filters.blur < 0) {
            config.filters.blur = defaults.filters.blur;
        } else {
            // Make it an integer -- we don't want 1.5px (e.g.)
            config.filters.blur = Math.round(config.filters.blur);
        }
    }

    changeTitle();
}

function changeTitle() {
    if(!special.enabled) {
        document.title = 'PFUDOR.tk';
    } else {
        if(special.pfudor) {
            document.title = 'HAIL PFUDOR!';
        } else {
            document.title = 'PRAISE LORD GABEN!';
        }
    }
}

// Hide cursor if idle
$(function() {
    function setIdle() {
        return setTimeout(function() {
            $('body').addClass('idle');
        }, 2500);
    }

    var idle_timer;
    setIdle();

    $('body').mousemove(function() {
        clearTimeout(idle_timer);
        $('body').removeClass('idle');

        idle_timer = setIdle();
    });
});

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

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: config.id,
        playerVars: {
            'rel': 0,
            'modestbranding': 1,
            'iv_load_policy': 3,
            'autohide': 1,
            'showinfo': 0,
            'loop': 1,
            'playlist': config.id,
            'controls': config.ctrls,
            'autoplay': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function play() {
    $('.modal').removeClass('active');
    $('body').removeClass('has-modal');
    player.playVideo();
}

function pause() {
    player.pauseVideo();
}

function playFromStart() {
    // Seek to starting point
    player.seekTo(config.start);

    // Seek to start if ended
    if(config.end != defaults.end) {
        setInterval(function() {
            if(player.getCurrentTime() >= config.end) {
                playFromStart();
            }
        }, 500);
    }
}

function onPlayerReady() {
    player.setVolume(config.vol);
    player.setPlaybackQuality(config.quality);

    // Enable looping, generate credits and apply filters
    playFromStart();
    generateCredits();
    applyFilters();

    // Hide loading notice after five seconds
    // (working around some bug setting the player state to 3 instead of 1)
    setTimeout(function() {
        $('.loading').addClass('hide');
    }, 5000);
}

// Remove loading notice
function onPlayerStateChange() {
    if(player.getPlayerState() == 1) {
        $('.loading').addClass('hide');
    }
}

function socialLinks() {
    $('#tw').attr('href', 'https://twitter.com/intent/tweet?text=PFUDOR.tk&amp;url=' + window.location);
    $('#fb').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + window.location);
    $('#gp').attr('href', 'https://plus.google.com/share?url=' + window.location);
    $('#wa').attr('href', 'whatsapp://send?text=PFUDOR.tk%20' + window.location);
}
