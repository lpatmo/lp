$(function() {
	$('#about').on('click', function() {
		//console.log('clicked')
		$('.about-more').fadeIn(500).removeClass('display-none').addClass('show');
	});
	$('html').on('click', function(e) {
		//console.log('html')
		if( !$(e.target).hasClass('show') && !$(e.target).hasClass('link') ) {
			$('.show').fadeOut(500).removeClass('show').addClass('display-none');
		}
	});
});
