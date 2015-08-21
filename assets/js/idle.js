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
