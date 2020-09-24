$(function () {

  let overheaderHeight = $('.overheader').height();

  let scroll = $(this).scrollTop();
  if (scroll >= 175) {
    $('.header').addClass('scroll')
  } else {
    $('.header').removeClass('scroll')
  }

  $(window).scroll(function (e) {
    let scroll = $(this).scrollTop();
    console.log(scroll);

    if (scroll >= 175) {
      $('.header').addClass('scroll')
    } else {
      $('.header').removeClass('scroll')
    }
  });

  $('.select__btn').mouseenter(function () {
    $('.select').addClass('active');
  })

  $('.select').mouseenter(function () {
    $(this).addClass('active');
  })
  $('.select__btn').parent().mouseleave(function () {
    $('.select').removeClass('active');
  })

});