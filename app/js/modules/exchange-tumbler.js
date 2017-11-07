
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


