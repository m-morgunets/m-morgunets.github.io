$(function () {

  $('.popup__btn.btn-further').on("click touchstart", function () {

    if ($('.popup__box-input#name').val().length < 2) {
      return false;
    }
    if ($('.popup__box-input#tel').val().length < 2) {
      return false;
    }

    $('.popup-item').removeClass('active');
    var popupItem = $('.popup-item:nth-child(2) .popup__box-radio:checked').attr('value');
    $(`.popup-item.${popupItem}`).addClass('active');

  })

  $('.popup__btn.btn-back').on("click touchstart", function () {
    $('.popup-item').removeClass('active');
    $('.popup-item:nth-child(2)').addClass('active');
  })

  $('.popup-shadow').on("click touchstart", function () {
    $('.popup').fadeOut('active');
  })
  $('.popup-phone').on("click touchstart", function () {
    $('.popup').fadeIn('active');
  })

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
      $('.header__burger ul').on("click touchstart", function () {
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

      $('.select__btn svg').on("click touchstart", function () {
        $('.select').toggleClass('animate1');
        $('.select').toggleClass('animate2');
        $('.select__btn').toggleClass('active');
        return false;
      })

      $('.select-1__btn svg').on("click touchstart", function () {
        $(this).parent().siblings('.select-item').toggleClass('animate1');
        $(this).parent().siblings('.select-item').toggleClass('animate2');
        $(this).parent().toggleClass('active');
        return false;
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