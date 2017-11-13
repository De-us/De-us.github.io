
/**
 * Parallax in the 'header'
 */

$(window).mousemove(function(e) {
    var element = '.header__bg'
        xpos    = e.clientX * 3 / 200,
        ypos    = e.clientY * 3 / 160;

    $(element).css('left',(( 0+(xpos))+"px"));
    $(element).css('top',(( 0+(ypos))+"px"));
});