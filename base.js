$(function(){
	$('.arrow-up-btn').click(function(e){
		e.preventDefault();
		$('html, body').animate({
		      scrollTop: $('.intro-background').offset().top
		    }, 500);
	});
});
