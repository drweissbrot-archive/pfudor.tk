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
