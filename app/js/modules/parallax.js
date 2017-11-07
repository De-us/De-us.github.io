
/**
 * Parallax in the 'header'
 */

$(window).mousemove(function(e) {
    var xpos=e.clientX * 3 / 200,
        ypos=e.clientY * 3 / 160;

    $('.header__bg').css('left',(( 0+(xpos))+"px"));
    $('.header__bg').css('top',(( 0+(ypos))+"px"));
});