
/**
 * Main menu
 */

$(function(){
    if($(window).width() < 1024) {
        $(window).scroll(function() {
            if($(window).scrollTop() >= 50) {
                $('.main-menu').addClass('main-menu_fixed');
            } else {
                $('.main-menu').removeClass('main-menu_fixed');
            }
        });
    }
});

// For mobile

$('.open-menu').click(function () {
    $('.app-menu-block').addClass('app-menu-block_show');
});

function hideMenu() {
    $('.app-menu-block').removeClass('app-menu-block_show');
}