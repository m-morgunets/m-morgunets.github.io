$(function () {

	for (const iterator of $('svg')) {
		var widthItr = $(iterator).attr('width');
		var heightItr = $(iterator).attr('height');
		$(iterator).attr('heightRatio', heightItr / widthItr);
	}

	resizeWindow();
	$(window).resize(resizeWindow);
	function resizeWindow() {

		for (const iterator of $('svg')) {
			var heightItr = $(iterator).attr('heightRatio');
			var width = $(iterator).width();
			$(iterator).css('height', heightItr * width);
		}

		let widthWin = $(this).width();
		if (widthWin <= 980) {
			$('.main-box').addClass('mobile');
			for (const iterator of $('.main__img')) {
				$(iterator).parent().prepend($(iterator));
			}
		} else {
			$('.main-box').removeClass('mobile');
			for (const iterator of $('.main__img')) {
				$(iterator).parent().append($(iterator));
			}
		}

	}

	// resizeWindow();
	// function resizeWindow() {
	// 	let widthWin = $(this).width();
	// 	if (widthWin <= 980) {
	// 		for (const iterator of $('.main__img')) {
	// 			$(iterator).parent().prepend($(iterator));
	// 		}
	// 	} else {
	// 		for (const iterator of $('.main__img')) {
	// 			$(iterator).parent().append($(iterator));
	// 		}
	// 	}
	// }

	$('.header__burger').on('click', function () {
		$('.header').toggleClass('active');
		$('body').toggleClass('fixed');
	});
	$(document).on("click touchstart", function (e) {
		if ($(e.target).closest('.header__menu').length) return;
		if ($(e.target).closest('.header__burger').length) return;
		if ($(e.target).closest(".map-shadow").length) return;
		$('.map-shadow').fadeIn();
		$('.header').removeClass('active');
		$('body').removeClass('fixed');
		e.stopPropagation();
	});


	$("#phone").mask("+7(999) 999-99-99");

	$('.scroll-btn').on('click', function (e) {
		$('.header').removeClass('active');
		$('body').removeClass('fixed');
		objectSelect = $(this).attr('data-onScroll');

		if ($(this).parent().hasClass('header__menu')) {
			if ($('main').hasClass('home')) {
				$('html,body').stop().animate({ scrollTop: $(objectSelect).offset().top - $('.header').height() }, 1000);
				e.preventDefault();
			} else {
				window.location.href = "../../";
				localStorage.setItem('scroll', objectSelect);
			}
		} else {
			$('html,body').stop().animate({ scrollTop: $(objectSelect).offset().top - $('.header').height() }, 1000);
			e.preventDefault();
		}
	});
	$('.map-shadow').on('click', function () {
		$(this).fadeOut();
	});
	// $(document).on("click touchstart", function (e) {
	// 	if ($(e.target).closest(".map-shadow").length) return;
	// 	$(".map-shadow").fadeIn();
	// 	e.stopPropagation();
	// });
	$('.send-btn').on('click', function () {
		let thisBtn = $(this);
		let name = $(this).parent().find('#name').val().trim();
		let phone = $(this).parent().find('#phone').val().trim();
		let mail = $(this).parent().find('#mail').val().trim();


		if (name == "" & phone == "" & mail == "") {
			return false
		} else if (name == "") {
			return false
		} else if (phone == "") {
			return false
		} else if (mail == "") {
			return false
		}

		let phpSrc;
		if ($('main').hasClass('home')) {
			phpSrc = 'app/'
		} else {
			phpSrc = '../../app/'
		}

		$.ajax({
			url: phpSrc + 'php/mail.php',
			type: 'POST',
			cache: false,
			data: { 'name': name, 'phone': phone, 'mail': mail },
			dataType: 'html',
			beforeSend: function () {
				$(this).prop('disabled', true);
			},
			success: function (data) {

				if (data) {
					$('#name').val("");
					$('#phone').val("");
					$('#mail').val("");

					if (thisBtn.parent().hasClass('second-popup')) {
						$('.section-popup').fadeIn();
					} else {
						$('.first-popup').fadeOut();
						$('.finish-popup').fadeIn();
					}
					if (thisBtn.parent().hasClass('form__box')) {
					}
				} else {
					console.log(data);
				}
				$(this).prop('disabled', false);
			},
		})
	})

	var wow = new WOW({ mobile: false });
	wow.init();

	if ($('main').hasClass('home')) {
		let heigthIndex = 501;
		let offset = 500;
		let height = $('.why__box-line').height();

		$(window).on('scroll', scroll);
		scroll();
		function scroll() {
			let scroll = $(this).scrollTop();
			let scrollInSection = scroll + $(this).height() / 2 - $('.why__box').offset().top;

			if (scrollInSection >= 0) {
				$('.why__box-dot').fadeIn();
				offset = (height - scrollInSection) / height * 500;
				if (heigthIndex > offset) {
					$('.line-animation').css('stroke-dashoffset', offset + '%');
					heigthIndex = offset;
				}
				var item1 = Number($('.why__box-item.item-1').css('top').slice(0, -2));
				var item2 = Number($('.why__box-item.item-2').css('top').slice(0, -2));
				var item3 = Number($('.why__box-item.item-3').css('top').slice(0, -2));
				var item4 = Number($('.why__box-item.item-4').css('top').slice(0, -2));
				var item5 = Number($('.why__box-item.item-5').css('top').slice(0, -2));
				if (scrollInSection >= item1) {
					$('.why__box-item.item-1').addClass('active');
				}
				if (scrollInSection >= item2) {
					$('.why__box-item.item-2').addClass('active');
				}
				if (scrollInSection >= item3) {
					$('.why__box-item.item-3').addClass('active');
				}
				if (scrollInSection >= item4) {
					$('.why__box-item.item-4').addClass('active');
				}
				if (scrollInSection >= item5) {
					$('.why__box-item.item-5').addClass('active');
				}
			}
			if (offset <= 0) {
				$('.line-animation').css('stroke-dashoffset', '0');
				$('.why__box-cup').addClass('active');
				$(window).off();
				$(window).on('scroll', function () {
					$(".map-shadow").fadeIn();
				});
			}
		}
	};

	let portfolioBoxHeight = 0;
	$('.portfolio__btn').on('click', function () {
		for (const iterator of $('.portfolio-inner .portfolio-box')) {
			portfolioBoxHeight += $(iterator).innerHeight();
		}
		$('.portfolio').addClass('showAll');
		$('.portfolio-inner').css('height', portfolioBoxHeight + 'px');
	});

	$('.about__btn').on('click', function () {
		$('.aboutUs').fadeIn();
	});
	$('.popup-click').on('click', function () {
		$('.first-popup').fadeIn();
	});
	$('.popup__shadow').on('click', function () {
		$(this).parent().fadeOut();
	});
	$('.done-popup .popup__btn').on('click', function () {
		$('.done-popup').fadeOut();
	});
	$('.aboutUs__btn').on('click', function (e) {
		$('.aboutUs').fadeOut();
		$('html,body').stop().animate({ scrollTop: $('.why').offset().top - $('.header').height() }, 1000);
		e.preventDefault();
	});


	jQuery('img.svg').each(function () {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});



	let localScroll = localStorage.getItem('scroll');
	let objectSelect;
	if ($('main').hasClass('home') && localScroll != null) {
		localStorage.clear();
		objectSelect = localScroll;
		$('html,body').stop().animate({ scrollTop: $(objectSelect).offset().top - $('.header').height() }, 1000);
	}

});