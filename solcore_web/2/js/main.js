$(function () {

  for (const item of $('.content-line__item')) {
    $(item).css('z-index', $(item).index() + 1);
  }

  link();
  $(window).resize(link);


  function link() {

    let winWidth = $(window).width();

    let imgWidth;
    let imgHeight;
    let left;

    let contentWidth = $('.content').width();
    let contentHeight = $('.content').height();

    if (winWidth >= 600) {

      imgWidth = $('.content img').width();
      imgHeight = $('.content img').height();

      $('.content-line__item').width(imgWidth / 6 - 1.7);

      left = (contentWidth - imgWidth) / 2 + 1;

    } else {

      imgWidth = $('.content img.mobile').width();
      imgHeight = $('.content img.mobile').height();

      $('.content-line__item').width(imgWidth / 4 - 1.6);
      left = (contentWidth - imgWidth) / 2;

    }

    let percent = 345 / 835;

    $('.content-line__item').height(imgHeight * percent);

    let bottom = (contentHeight - imgHeight) / 2 + 2;

    $('.content-line').css('bottom', bottom);
    $('.content-line').css('left', left);


    $('.content-line__item span').css(
      {
        'font-size': $('.content-line__item').width() * 0.2,
        'width': $('.content-line__item').height()
      }
    )
    $('#special-size span').css('font-size', $('.content-line__item').width() * 0.12)
  }


});