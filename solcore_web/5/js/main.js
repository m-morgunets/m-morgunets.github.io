$(function () {

  let widthImg;
  let heightImg;
  let topFlowers;


  link();
  $(window).resize(link);


  function link() {
    widthImg = $('.content__img').width();
    heightImg = $('.content__img').height();

    $('.content-box').width(widthImg);
    $('.content-box').height(heightImg);

    $('.menu').css({
      'font-size': widthImg * 0.029,
      'max-width': widthImg * 0.9,
      'top': $('.header').height()
    })

    $('.butterfly img').css({
      'width': widthImg * 0.12
    })
    $('.content .butterfly').css({
      'top': heightImg * 0.039,
      'width': widthImg + ($('.butterfly img').width() * 0.2) * 2
    })

    $('.content-mid').css({
      'top': heightImg * 0.426,
      'width': widthImg * 0.288
    })

    $('.content .ordernow').css('width', widthImg * 0.371);

    $('.content .horses').css({
      'top': heightImg * 0.4
    })
    $('.horses img').css({
      'width': widthImg * 0.28,
    })

    $('.roses').css({
      'width': widthImg * 0.9,
      'top': heightImg * 0.214
    })
    $('.roses img').css('width', widthImg * 0.057);

    $('.brush').css('width', widthImg * 0.244);
    $('.computer').css({
      'right': widthImg * 0.047,
      'width': widthImg * 0.19
    })

    $('.heart').css({
      'bottom': heightImg * 0.13,
      'width': widthImg * 0.07
    })
    $('.addition').css({
      'width': widthImg * 0.48,
      'bottom': heightImg * 0.208
    })
    $('.addition img:nth-child(1)').css({
      'width': widthImg * 0.036
    })
    $('.addition img:nth-child(2)').css({
      'width': widthImg * 0.046
    })


    if ($('body').width() <= 500) {
      topFlowers = 0;
      $('body').addClass('style-mobile');
      $('body').removeClass('minimal');
      $('.butterfly img').css({
        'width': widthImg * 0.3
      })
      $('.computer').css({
        'width': widthImg * 0.3
      })
      $('.horses img').css({
        'width': widthImg * 0.35,
      })
    } else if ($('body').width() - $('.header__title').width() <= 70) {
      $('body').removeClass('style-mobile');
      topFlowers = 0;
      $('body').addClass('minimal');
    } else {
      topFlowers = $('.header__line').offset().top;
      $('body').removeClass('style-mobile');
      $('body').removeClass('minimal');
    }

    $('.flowers').css('top', topFlowers);
    $('.flowers-left').css('left', ($('body').width() - widthImg) / 2);
    $('.flowers-right').css('right', ($('body').width() - widthImg) / 2);
    $('.flowers img').css('width', widthImg * 0.06);
  }

  function PopUp(btn, popup) {
    $(btn).click(function () {
      $(popup).fadeIn();
      return false;
    });

    $('.popup-close').click(function () {
      $(this).parents(popup).fadeOut();
      return false;
    });

    $(document).keydown(function (e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $(popup).fadeOut();
      }
    });

    $(popup).click(function (e) {
      if ($(e.target).closest('.bell-inner').length == 0) {
        $(this).fadeOut();
      }
    });
  }
  PopUp('.ordernow', '.popup');

});