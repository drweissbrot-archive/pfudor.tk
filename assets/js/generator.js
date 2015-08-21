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
