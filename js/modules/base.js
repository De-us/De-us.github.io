
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