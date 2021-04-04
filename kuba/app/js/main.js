$(function () {

  $('.gallery__slider').slick({
    dots: false,
    infinite: true,
    fade: true,
    prevArrow: '<div class="slider-arrows slider-arrows__left"><img src="../images/arrow.svg" alt=""></div>',
    nextArrow: '<div class="slider-arrows slider-arrows__right"><img src="../images/arrow.svg" alt=""></div>',
  });

  $('.car__dot-img').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.car__dot').removeClass('active');
      $(this).parent().addClass('active');
    }
  })


});