$(function () {

    var wow = new WOW();
    wow.init();

    let heigthIndex = 501;
    let offset = 500;
    let height = $('.why__box-line').height();
    scroll();
    function scroll() {
        // if (scroll + $(window).height() * 0.25 >= $('.why').offset().top) {
        //     lineAnimate();
        // }

        let scroll = $(this).scrollTop();
        let scrollInSection = scroll + $(this).height() / 3 - $('.why__box').offset().top;

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
    function lineAnimate() {
        $('.why__box-dot').fadeIn();
        setTimeout(() => {
            $('.why__box-line path').addClass('animate');
        }, 300);
        setTimeout(() => {
            $('.why__box-item.item-1').fadeIn();
        }, 1500);
        setTimeout(() => {
            $('.why__box-item.item-2').fadeIn();
        }, 2500);
        setTimeout(() => {
            $('.why__box-item.item-3').fadeIn();
        }, 3500);
        setTimeout(() => {
            $('.why__box-item.item-4').fadeIn();
        }, 4500);
        setTimeout(() => {
            $('.why__box-item.item-5').fadeIn();
        }, 6100);
        setTimeout(() => {
            $('.why__box-cup').addClass('visible');
        }, 7800);
    }


    // function bgAnimate() {
    //     var leftIndex = 0;
    //     var widthTrack = $('.main__bg-track').width();
    //     for (var i = 1; i <= 2; i++) {
    //         newBgBox();
    //     }
    //     var transformTrack = 0;
    //     var trackIndicator = 0;
    //     var indexItem = 1;
    //     setInterval(() => {
    //         $('.main__bg-track').css('transform', 'translateX(' + transformTrack + 'px)');
    //         transformTrack -= 15;
    //         trackIndicator += 15;
    //         if (-(transformTrack / indexItem) >= widthTrack) {
    //             indexItem++;
    //             $('.main__bg-box:first-child').detach();
    //             trackIndicator = 0;
    //             newBgBox();
    //         }
    //     }, 100);
    //     function newBgBox() {
    //         $('.main__bg .main__bg-track').append('<div class="main__bg-box"></div>');
    //         for (var j = 0; j < 30; j++) {
    //             $('.main__bg .main__bg-box:last-child').append('<div class="main__bg-item"></div>');
    //         }
    //         $('.main__bg .main__bg-box:last-child').css('transform', 'translateX(' + (widthTrack * leftIndex) + 'px)');
    //         leftIndex += 1;
    //         for (var iterator of $('.main__bg-box:last-child .main__bg-item')) {
    //             randomStyles(iterator);
    //         }
    //     }

    //     function randomStyles(object) {
    //         var arrColor = ['rgba(255, 0, 0, ', 'rgba(255, 170, 0, ', 'rgba(0, 255, 170, ', 'rgba(153, 0, 255, ']
    //         var positionX = randomInteger(0, 1) * $('.main__bg').width();
    //         var positionY = randomInteger(0, 1) * $('.main__bg').height();
    //         var opacity = randomInteger(0.1, 0.6);
    //         var blur = randomInteger(1, 10);
    //         var colorIndex = Math.round(randomInteger(0, 3));
    //         var animate = Math.round(randomInteger(0, 1));
    //         var timeOut = Math.round(randomInteger(1, 1000));
    //         if (animate) {
    //             setTimeout(() => {
    //                 $(object).addClass('animate');
    //             }, timeOut);
    //         }
    //         $(object).css({
    //             'left': positionX,
    //             'top': positionY,
    //             'filter': 'blur(' + blur + 'px)',
    //             'background': arrColor[colorIndex] + opacity + ')',
    //         })
    //     }
    // }
    // function randomInteger(min, max) {
    //     // случайное число от min до (max)
    //     let rand = min + Math.random() * (max - min);
    //     return rand;
    // }

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