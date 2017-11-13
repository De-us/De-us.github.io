
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
