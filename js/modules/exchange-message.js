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
