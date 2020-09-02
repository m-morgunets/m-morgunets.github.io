$(function () {

  link();
  $(window).resize(link);


  function link() {

    let winWidth = $(window).width();

    let imgWidth;
    let imgHeight;

    if (winWidth >= 600) {

      imgWidth = $('.content img').width();
      imgHeight = $('.content img').height();

      $('.content-line__item').width(imgWidth / 6);

    } else {

      imgWidth = $('.content img.mobile').width();
      imgHeight = $('.content img.mobile').height();

      $('.content-line__item').width(imgWidth / 4);

    }

    let contentWidth = $('.content').width();
    let contentHeight = $('.content').height();

    let percent = 345 / 835;

    $('.content-line__item').height(imgHeight * percent);

    let left = (contentWidth - imgWidth) / 2;
    let bottom = (contentHeight - imgHeight) / 2;

    $('.content-line').css('bottom', bottom);
    $('.content-line').css('left', left);

  }


});