$(function () {

  //Slider init in Projects page
  $('.projects__item:nth-child(odd) .projects__item-img__box').slick({
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
  });
  $('.projects__item:nth-child(even) .projects__item-img__box').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 800,
  });

  //Slider init in Barvikha page
  $('.barvikha__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    arrows: true,
    prevArrow: '<div class="slider-arrows slider-arrows__left"></div>',
    nextArrow: '<div class="slider-arrows slider-arrows__right"></div>',
  });

  //Code for Portfolio page
  if ($('.header__burger').css('display') != 'none') {
    var iterator = $('.portfolio-inner').length;
    for (var index = 1; index <= iterator; index++) {
      $(`.portfolio-inner:nth-child(${index}) .portfolio__box:first-child`).append($(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(2) .portfolio__box-item:first-child`));
      $(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(2)`).append($(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(3) .portfolio__box-item:first-child`));
      $(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(2)`).append($(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(1) .portfolio__box-item:nth-child(2)`));
      $(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(3)`).append($(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(2) .portfolio__box-item:nth-child(1)`));
      $(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(3)`).append($(`.portfolio-inner:nth-child(${index}) .portfolio__box:nth-child(3) .portfolio__box-item:nth-child(1)`));
    }

  }

  //PopUp code
  var timeID;
  $('.popup-shadow').on("click", function () {
    $('.popup').fadeOut();
    timeID = setTimeout(() => {
      $('.popup-phone').addClass('animation');
    }, 10000);
  })
  $('.popup-phone').on("click", function () {
    $('.popup').fadeIn();
    clearTimeout(timeID);
    $('.popup-phone').removeClass('animation');
    $('input#name.popup__box-input').focus();
  })
  $('.overheader-tel span').on("click", function () {
    $('.popup').fadeIn();
    clearTimeout(timeID);
    $('.popup-phone').removeClass('animation');
  });

  //Header and Wow.js init
  function scroll() {
    var scroll = $(window).scrollTop();

    if ($('.header__burger').css('display') == 'none') {

      if (scroll >= 175) {
        $('.header').addClass('scroll')
      } else {
        $('.header').removeClass('scroll')
      }
    } else {
      $('.header').removeClass('scroll');
    }
  }

  scroll();
  funcResize();

  $(window).scroll(scroll);
  $(window).resize(funcResize);

  function funcResize() {

    //PopUp in mobile
    if ($('.header__burger').css('display') != 'none') {
      $('.popup-item').css('transform', `translate(-50%, -50%) scale(${($(window).width() - 30) * (1.175 / 400)})`);
      $('.popup.twenty .popup-item').css('transform', `translate(-50%, -50%) scale(${($(window).width() - 40) * (1.175 / 400)})`);
      $('.popup.thirty .popup-item').css('transform', `translate(-50%, -50%) scale(${($(window).width() - 60) * (1.175 / 400)})`);
      $('.popup.zero .popup-item').css('transform', `translate(-50%, -50%) scale(${$(window).width() * (1.175 / 400)})`);
      $('.popup.portfolio-popup .popup-item').css('transform', `translate(-50%, -50%) scale(${($(window).width() - 32) * (1.175 / 400)})`);
    }

    //Code for Hoses page
    if ($('.header__burger').css('display') != 'none') {
      for (var index = 1; index <= $('.houses__item').length; index++) {
        $(`.houses__item:nth-child(${index})`).append($(`.houses__item:nth-child(${index}) .houses__item-box`));
      }
    }
    if ($('.header__burger').css('display') == 'none') {
      for (var index = 2; index <= $('.houses__item').length; index += 2) {
        $(`.houses__item:nth-child(${index})`).prepend($(`.houses__item:nth-child(${index}) .houses__item-box`));
      }
    }

    //Code for Projects page
    if ($('.header__burger').css('display') != 'none') {
      for (var index = 0; index <= $('.projects__item').length; index++) {
        $(`.projects__item:nth-child(${index})`).append($(`.projects__item:nth-child(${index}) .projects__item-box`))
      }
    };
    if ($('.header__burger').css('display') == 'none') {
      for (var index = 2; index <= $('.projects__item').length; index += 2) {
        $(`.projects__item:nth-child(${index})`).prepend($(`.projects__item:nth-child(${index}) .projects__item-box`));
      }
    };

    //Code for Portfolio page
    var itemWidth = $('.portfolio__box-item').width();
    $('.portfolio__box-item').height(itemWidth * 0.749974501);
    $('.portfolio-item-tall').height(itemWidth * 1.24998067);

    //Code fot Studio page
    var imgWidth = $('.command-box div').width();
    $('.command-box div').height(imgWidth);

    //Code for header
    $('.header-box *').off();

    if ($('.header__burger').css('display') == 'none') {
      $('.select__btn').mouseenter(function () {
        $('.select').addClass('active');
        $('.select__btn').addClass('active');
      })
      $('.select__btn').mouseleave(function () {
        $('.select').removeClass('active');
        $('.select__btn').removeClass('active');
      })

      $('.select').mouseenter(function () {
        $(this).addClass('active');
        $('.select__btn').addClass('active');
      })

      $('.select').mouseleave(function () {
        $(this).removeClass('active');
        $('.select__btn').removeClass('active');
      })

      $('.select-1__btn').mouseenter(function () {
        $('.select').addClass('active');
        $(this).siblings('.select-item').addClass('active');
        $(this).addClass('active');
        $('.select__btn').addClass('active');
      })

      $('.select-1__btn').mouseleave(function () {
        $('.select').removeClass('active');
        $(this).siblings('.select-item').removeClass('active');
        $(this).removeClass('active');
        $('.select__btn').removeClass('active');
      })

      $('.select-item').mouseleave(function () {
        $('.select').removeClass('active');
        $(this).removeClass('active');
        $(this).siblings('.select-1__btn').removeClass('active');
        $('.select__btn').removeClass('active');
      })

      $('.select-item').mouseenter(function () {
        $('.select').addClass('active');
        $(this).addClass('active');
        $(this).siblings('.select-1__btn').addClass('active');
        $('.select__btn').addClass('active');
      })
    } else {
      $('.header__burger').on("click touchstart", function () {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('.burger-shadow').toggleClass('active');
        return false;
      })

      $('.burger-shadow').on("click touchstart", function () {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
        $('.burger-shadow').toggleClass('active');
        return false;
      })

      $('.select__btn svg').on("click", function () {
        $('.select').toggleClass('animate1');
        $('.select').toggleClass('animate2');
        $('.select__btn').toggleClass('active');
      })

      $('.select-1__btn svg').on("click", function () {
        $(this).parent().siblings('.select-item').toggleClass('animate1');
        $(this).parent().siblings('.select-item').toggleClass('animate2');
        $(this).parent().toggleClass('active');
      })
    }
  }

  var wow = new WOW(
    {

      mobile: false,

    });
  wow.init();
});

var dist = 0

var box1 = document.getElementById('header__menu')
var burg = document.getElementById('header__burger')
var shadow = document.getElementById('burger-shadow')

var startx = 0

box1.addEventListener('touchstart', function (e) {
  var touchobj = e.changedTouches[0]; // первая точка прикосновения
  startx = parseInt(touchobj.clientX); // положение точки касания по x, относительно левого края браузера
  dist = parseInt(touchobj.clientX) - startx;
  box1.style.transition = 'none';
})

box1.addEventListener('touchmove', function (e) {
  var touchobj = e.changedTouches[0]; // первая точка прикосновения для данного события
  dist = parseInt(touchobj.clientX) - startx;
  if (dist >= 0) {
    box1.style.transform = `translateX(${dist}px)`;
  }
})

box1.addEventListener('touchend', function (e) {
  var touchobj = e.changedTouches[0] // первая точка прикосновения для данного события
  box1.style.transition = 'all 0.3s';
  if (dist >= 50) {
    box1.classList.remove("active");
    burg.classList.remove("active");
    shadow.classList.remove("active");
    box1.style.transform = '';
  } else {
    box1.style.transform = '';
  }
})