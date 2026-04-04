$(document).ready(function () {
	"use strict"; // start of use strict

	/*==============================
	Product
	==============================*/
	$('.product__img').each( function() {
		if ($(this).attr("data-bg")){
			$(this).css({
				'background': 'url(' + $(this).data('bg') + ')',
				'background-position': 'center center',
				'background-repeat': 'no-repeat',
				'background-size': 'cover'
			});
		}
	});

	/*==============================
	Shuffle
	==============================*/
	var Shuffle = window.Shuffle;
	var element = document.querySelector('.row--grid');

	var shuffleInstance = new Shuffle(element, {
	  itemSelector: '.col-12',
	});

	$('.section__sort button').on('click', function () {

		$('.section__sort button').removeClass('active');
		$(this).addClass('active');

		var group = $(this).attr('data-group');

		shuffleInstance.filter(group);
	});

	/*==============================
	Smooth scroll
	==============================*/
	var scroll = new SmoothScroll('[data-scroll]', {
		ignore: '[data-scroll-ignore]',
		topOnEmptyHash: true,
		updateURL: false,
		speed: 700,
		speedAsDuration: true,
		offset: -50,
		easing: 'easeInOutQuad',
	});
});