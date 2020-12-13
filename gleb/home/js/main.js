$(function () {
    const swup = new Swup();

    var wow = new WOW();
    wow.init();

    let heigthIndex = 501;
    let offset = 500;
    let height = $('.why__box-line').height();
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
            if (scrollInSection >= 115) {
                $('.why__box-item.item-1').addClass('active');
            }
            if (scrollInSection >= 260) {
                $('.why__box-item.item-2').addClass('active');
            }
            if (scrollInSection >= 380) {
                $('.why__box-item.item-3').addClass('active');
            }
            if (scrollInSection >= 510) {
                $('.why__box-item.item-4').addClass('active');
            }
            if (scrollInSection >= 650) {
                $('.why__box-item.item-5').addClass('active');
            }
        }
        if (offset <= 0) {
            $('.line-animation').css('stroke-dashoffset', '0');
            $('.why__box-cup').addClass('active');
            $(window).off();
        }
    }

    $(window).on('scroll', scroll);

    $('.scroll-btn').on('click', function (e) {
        let objectSelect = $(this).attr('data-onScroll');
        $('html,body').stop().animate({ scrollTop: $(objectSelect).offset().top - $('.header').height() }, 1000);
        e.preventDefault();
    });

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
    $('.why__btn').on('click', function () {
        $('.first-popup').fadeIn();
    });
    $('.form__box-btn').on('click', function () {
        $('.section-popup').fadeIn();
    });
    $('.popup__shadow').on('click', function () {
        $(this).parent().fadeOut();
    });
    $('.first-popup .popup__btn').on('click', function () {
        $('.first-popup').fadeOut();
        $('.finish-popup').fadeIn();
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

});