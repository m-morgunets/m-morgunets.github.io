$(function () {

  function scroll() {
    if ($(this).scrollTop() >= 100) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  }
  $(window).scroll(scroll);
  scroll();


  $('.scroll').on('click', function (e) {
    let thisItem = $(this).attr('data-scroll');
    $('html,body').stop().animate({ scrollTop: $(thisItem).offset().top - $('.header').innerHeight() }, 1000);
    e.preventDefault();
  });

});