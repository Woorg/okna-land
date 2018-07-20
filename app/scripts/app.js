import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
import slick from 'slick-carousel';
import 'magnific-popup';
import mask from "jquery-mask-plugin";
import 'jquery-validation';
// import printThis from "print-this";
// import WOW from 'wowjs/dist/wow';

(function ($) {
	svg4everybody();

	var styles = [
		'padding: 2px 9px',
		'background: #82B93C',
		'color: #fff',
		'display: inline-block',
		'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
		'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
		'line-height: 1.56',
		'text-align: left',
		'font-size: 18px',
		'font-weight: 400'
	].join(';');

	console.log('%c developed by igor gorlov https://webjeb.ru', styles);


	$(function() {

		/*
		 Popup
		*/

		$('.popup-open').magnificPopup({
			type: 'inline',
			midClick: false,
			mainClass: 'order-form'
		});

		$('.callback-open').magnificPopup({
			type: 'inline',
			midClick: false,
			mainClass: 'callback-form'
		});



		/*
		 Hero slider
		*/

		let $slider = $('.hero__slider');

		if ($slider.length) {

			$slider.slick({
				slidesToShow: 1,
				dots: true,
				arrows: true,
				speed: 300,
				waitForAnimate: true,
				adaptiveHeight: true
			});

		}

		// Reviews carousel

		// let $reviewsCarousel = $('.reviews__list');

		// if ($reviewsCarousel.length) {

		// 	$reviewsCarousel.slick({
		// 		loop: true,
		// 		infinite: true,
		// 		speed: 900,
		// 		slidesToShow: 3,
		// 		slidesToScroll: 1,
		// 		dots: true,
		// 		centerMode: true,
		// 		centerPadding: '28px',
		// 		focusOnSelect: true,
		// 		variableWidth: false,
		// 		waitForAnimate: true,
		// 		responsive: [
		// 			{
		// 				breakpoint: 1025,
		// 				settings: {
		// 					arrows: true,
		// 					centerMode: true,
		// 					centerPadding: '0',
		// 					slidesToShow: 1
		// 				}
		// 			},
		// 			{
		// 				breakpoint: 992,
		// 				settings: {
		// 					arrows: true,
		// 					centerMode: true,
		// 					centerPadding: '0',
		// 					slidesToShow: 1
		// 				}
		// 			},
		// 			{
		// 				breakpoint: 769,
		// 				settings: {
		// 					arrows: true,
		// 					centerMode: true,
		// 					centerPadding: '0',
		// 					slidesToShow: 1
		// 				}
		// 			},
		// 			{
		// 				breakpoint: 426,
		// 				settings: {
		// 					arrows: false,
		// 					centerMode: true,
		// 					centerPadding: '0',
		// 					slidesToShow: 1
		// 				}
		// 			}
		// 		]
		// 	});

		// }

		/*
		 Tabs gallery
		*/

		var tabsNavLink = $('.what__tabs-link');
		var tabsNavLinkActive = 'what__tabs-link_active';
		var tab = $('.what__tab');
		var tabActive = 'what__tab_active';

		tabsNavLink.click(function (event) {
			event.preventDefault();
			$(this).addClass(tabsNavLinkActive);
			$(this).siblings().removeClass(tabsNavLinkActive);
			var tabCurrent = $(this).attr('href');
			tab.not(tabCurrent).removeClass(tabActive).hide();
			$(tabCurrent).fadeIn(50).addClass(tabActive).show();
		});


		/*
		 Gallery
		*/

		$('.works__link').click(function (e) {
			// e.preventDefault();
		});



		$('.life__link').click(function () {
			if ($(this).prev('.life__gallery').length > 0) {

				$(this).prev('.life__gallery').magnificPopup({
					delegate: 'a',
					type:'image',
					gallery: {
						enabled: true
					}
				}).magnificPopup('open');

			}
		});


		$('.maps__item').on('click', function (e) {
			e.preventDefault();
			$('.maps__item').siblings().removeClass('maps__item_active');
			$(this).toggleClass('maps__item_active');
		});

		/*
		 Scroll to element
		*/

		$('.contacts__item_address .contacts__link, .header__scroll').on('click', function(e) {
			var _scroll = $(this).attr('href');
			if (_scroll != '#' && $(_scroll).length) {
				$('html, body').animate({ scrollTop: $(_scroll).offset().top  }, 800);
			}
		});


		/*
		 Phone Mask
		*/

		$('.order-form .popup__field_phone input').mask("+ 7(999)999-99-99", {
			placeholder: "+7(___)___-__-__"
		});

		$('.popup_callback .popup__field_phone input').mask("+ 7(999)999-99-99", {
			placeholder: "Контактный телефон"
		});

		$('img').removeAttr('width').removeAttr('height');

	});

})(jQuery);




