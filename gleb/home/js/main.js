$(function () {

    var leftIndex = 0;
    var widthTrack = $('.main__bg-track').width();
    for (var i = 1; i <= 3; i++) {
        newBgBox();
        setTimeout(() => {
            $('.main__bg').fadeIn();
        }, 500);
    }
    var transformTrack = 0;
    var trackIndicator = -100;
    setInterval(() => {
        $('.main__bg-track').css('transform', 'translateX(' + transformTrack + 'px)');
        transformTrack -= 15;
        trackIndicator += 15;
        if (trackIndicator >= widthTrack) {
            $('.main__bg-box:first-child').detach();
            trackIndicator = -100;
            newBgBox();
        }
    }, 100);
    function newBgBox() {
        $('.main__bg .main__bg-track').append('<div class="main__bg-box"></div>');
        for (var j = 0; j < 30; j++) {
            $('.main__bg .main__bg-box:last-child').append('<div class="main__bg-item"></div>');
        }
        $('.main__bg .main__bg-box:last-child').css('transform', 'translateX(' + (widthTrack * leftIndex) + 'px)');
        leftIndex += 1;
        for (var iterator of $('.main__bg-box:last-child .main__bg-item')) {
            randomStyles(iterator);
        }
    }

    function randomStyles(object) {
        var arrColor = ['rgba(255, 0, 0, ', 'rgba(255, 170, 0, ', 'rgba(0, 255, 170, ', 'rgba(153, 0, 255, ']
        var positionX = randomInteger(0, 1) * $('.main__bg').width();
        var positionY = randomInteger(0, 1) * $('.main__bg').height();
        var opacity = randomInteger(0.3, 0.8);
        var blur = randomInteger(1, 10);
        var colorIndex = Math.round(randomInteger(0, 3));
        var animate = Math.round(randomInteger(0, 1));
        var timeOut = Math.round(randomInteger(1, 1000));
        if (animate) {
            setTimeout(() => {
                $(object).addClass('animate');
            }, timeOut);
        }
        $(object).css({
            'left': positionX,
            'top': positionY,
            // 'opacity': opacity,
            'filter': 'blur(' + blur + 'px)',
            'background': arrColor[colorIndex] + opacity + ')',
        })
    }


    // var arrColor = ['rgba(255, 0, 0, 1)', 'rgba(255, 170, 0, 1)', 'rgba(170, 255, 0, 1)', 'rgba(0, 255, 0, 1)', 'rgba(0, 255, 170, 1)', 'rgba(0, 170, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(170, 0, 255, 1)']
    // for (var box of $('.main__bg-box')) {
    //     $(box).css('transform', 'translateX(' + $('.main__bg-box').width() * leftIndex + 'px)');
    //     leftIndex += 1;
    //     for (var iterator of $(box).find('.main__bg-item')) {
    //         randomStyles(iterator);
    //     }
    // }

    // for (const iterator of $('.cursor svg')) {
    //     var blurIndex = randomInteger(1, 5);
    //     var scaleIndex = randomInteger(0.7, 1.2);
    //     $(iterator).css({
    //         'filter': 'blur(' + blurIndex + 'px)',
    //         'transform': 'scale(' + scaleIndex + ')',
    //     });
    // }

    function randomInteger(min, max) {
        // случайное число от min до (max)
        let rand = min + Math.random() * (max - min);
        return rand;
    }

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