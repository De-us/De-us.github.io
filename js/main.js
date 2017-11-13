$(function() {
    $(".anchor").click(function(e) {
        e.preventDefault();
        var idElement  = $(this).attr('href'),
            hScroll = $(idElement).offset().top -22;

        $('body,html').animate({scrollTop: hScroll}, 1500);
    });
});



/**
 * owl
 */
$(function(){
    $('.text-carousel').owlCarousel({
        responsiveClass:true,
        loop: 1,
        autoplay: 1,
        autoplayTimeout: 3000,

        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });
});
/**
 * Exchange alert
 */

function messageShow() {
    $('.exchange-message').addClass('exchange-message_show');
    $('.main-wrapper').addClass('bg-blur');
}

function messageHide() {
    $('.exchange-message').removeClass('exchange-message_show');
    $('.main-wrapper').removeClass('bg-blur');
}

$('.exchange__item .btn').click(function () {
    messageShow();
    return false;
});


$('.exchange-message_close').click(function () {
    messageHide();
});

$(document).keydown(function(eventObject){
    if (eventObject.which == 27){
        messageHide();
    }
});


/**
 * Exchange Tumbler
 */

$(function(){
    var exchangeState = 1;
    $('.checkbox').click(function(){
        if(exchangeState === 1) {
            $('.exchange_state-2').addClass('exchange-active');
            $('.exchange_state-1').removeClass('exchange-active');
            exchangeState = 2
        } else {
            $('.exchange_state-1').addClass('exchange-active');
            $('.exchange_state-2').removeClass('exchange-active');
            exchangeState = 1;
        }

        $(this).toggleClass('checked');
        var cb = $(this).find("input");
        cb.prop("checked", !cb.prop("checked"));
    });
});




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

/**
 * Tabs
 */

$(function(){
    var controlId = '.tabs-control li',
        tabId     = '.info-tabs__tab';

    $(tabId).hide();
    $(tabId+':first').show();

    $(controlId).click(function() {
        var activeTab = $(this).attr('rel');

        $(tabId).hide();
        $('#' + activeTab).fadeIn();

        $(controlId).removeClass('active');
        $(this).addClass('active');
    });
});

// Background fix
$(function(){
    $('.block-bg_fix').css('min-height', $(window).height() + 'px');

    $(window).resize(function(){
        $('.block-bg_fix').css('min-height', $(window).height() + 'px');
    })
});
