$(function () {

  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    let t_2 = scroll * 0.45;
    let t_1 = scroll * 0.75;
    $('.home__cubes-item--2').css('bottom', t_2 + 140 + 'px');
    $('.home__cubes-item--1').css('top', (-1 * t_1) - 60 + 'px');
  })

});