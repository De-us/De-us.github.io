$(function() {
    $(".anchor").click(function(e) {
        e.preventDefault();
        var idElement  = $(this).attr('href'),
            hScroll = $(idElement).offset().top -22;

        $('body,html').animate({scrollTop: hScroll}, 1500);
    });
});

