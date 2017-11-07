
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