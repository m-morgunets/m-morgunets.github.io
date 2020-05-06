$(function () {

  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    let t_1 = scroll * 0.8;
    let t_2 = scroll * 0.5;
    let t_3 = scroll * 0.3;
    let t_4 = scroll * 0.6;

    $('.cubes-item--1').css('top', (-1 * t_1) - 60 + 'px');
    $('.cubes-item--2').css('bottom', t_2 + 140 + 'px');
    $('.cubes-item--3').css('top', (-1 * t_3) - 150 + 'px');
    $('.cubes-item--4').css('top', (-1 * t_3) + 150 + 'px');
  })

  $('.services__item-img').on('click', function () {
    $(this).toggleClass('active');
  })

});