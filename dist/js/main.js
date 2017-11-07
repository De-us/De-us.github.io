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
    var xpos=e.clientX * 3 / 200,
        ypos=e.clientY * 3 / 160;

    $('.header__bg').css('left',(( 0+(xpos))+"px"));
    $('.header__bg').css('top',(( 0+(ypos))+"px"));
});

/**
 * Tabs
 */

 $("document").ready(function(){
  $(".info-tabs__tab").hide();
  $(".info-tabs__tab:first").show();
});

 $(".tabs-control li").click(function() {
  $(".info-tabs__tab").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).fadeIn();
	if($(this).attr("rel") == "tab-2"){
		$('.tab-slider--tabs').addClass('slide');
	}else{
		$('.tab-slider--tabs').removeClass('slide');
	}
  $(".tabs-control li").removeClass("active");
  $(this).addClass("active");
});