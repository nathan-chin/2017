// JavaScript Document
var winHeight = $(window).height();
var onlyOnce = true;
$(window).scroll(function(){
	var scrolls = $(window).scrollTop();
	if(scrolls > winHeight){
		if(onlyOnce){
			window.scrollTo(0,0);
		}
		onlyOnce = false;
		$('#intro-container').css('display', 'none');
		
	}
});