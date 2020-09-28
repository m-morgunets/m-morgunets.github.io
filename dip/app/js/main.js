var dist = 0

window.addEventListener('load', function () {

  var box1 = document.getElementById('header__menu')
  var startx = 0

  box1.addEventListener('touchstart', function (e) {
    var touchobj = e.changedTouches[0] // первая точка прикосновения
    startx = parseInt(touchobj.clientX) // положение точки касания по x, относительно левого края браузера
    // console.log('Status: touchstart ClientX: ' + startx + 'px');
    e.preventDefault()
  }, false)

  box1.addEventListener('touchmove', function (e) {
    var touchobj = e.changedTouches[0] // первая точка прикосновения для данного события
    var dist = parseInt(touchobj.clientX) - startx
    console.log('Событие: touchmove Гориз. перемещение: ' + dist + 'px');
    e.preventDefault()
  }, false)

  box1.addEventListener('touchend', function (e) {
    var touchobj = e.changedTouches[0] // первая точка прикосновения для данного события
    // console.log('Событие: touchend Координаты точки x: ' + touchobj.clientX + 'px');
    e.preventDefault()
  }, false)

}, false)


$(function () {
  alert(dist)

  if ($(this).scrollTop() > $('.about__title').offset().top) {

    function animate() {
      if ($(this).scrollTop() < $('.about__title').offset().top) {
        $('.about__title').addClass('animate')
      }
    }

  } else {

    function animate() {

      if ($(this).scrollTop() + $(window).height() > $('.about__title').offset().top) {
        $('.about__title').addClass('animate')
      }
    }

  }

  function scroll() {
    let overheaderHeight = $('.overheader').height();

    let scroll = $(this).scrollTop();


    if ($(window).width() >= 845) {
      animate();

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

  $(window).scroll(scroll);


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

  $('.header__burger').click(function () {
    $(this).toggleClass('active');
    $('.header__menu').toggleClass('active');
    $('.burger-shadow').toggleClass('active');
  })

});