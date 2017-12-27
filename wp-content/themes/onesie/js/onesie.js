jQuery(document).ready(function($){

	// add mobile class for css targeting
	if ($(window).width() < 600) {
		$('body').addClass('mobile');
	} else {
		$('body').removeClass('mobile');
	}
	
	// set height of blocks based on window height
	var win_height = $(window).height() - 100;

	if ( ! win_height )
		return;
	
	$('.block').css({ height: win_height });

	// create anchor links
	$('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 300);
				return false;
			}
		}
	});

	// magnific popup
	$('.gallery-item').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

});