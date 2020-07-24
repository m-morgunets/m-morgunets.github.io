$(function () {

  $('img.svg').each(function () {
    var $img = $(this);
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    $.get(imgURL, function (data) {
      var $svg = $(data).find('svg');
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }
      $svg = $svg.removeAttr('xmlns:a');
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      $img.replaceWith($svg);
    }, 'xml');
  });


  $('.scroll').on('click', function () {
    let elem = $(this).attr('id');
    console.log(elem);
    $('.' + elem).get(0).scrollIntoView({
      block: "start",
      behavior: "smooth"
    });
  });

  function scrollToElement(element, parent) {
    $(parent)[0].scrollIntoView(true);
    $(parent).animate({
      scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
    }, {
      duration: 'slow',
      easing: 'swing'
    });
  }

  $('.topic-btn').on('click', function () {
    $('body').toggleClass('black');
  });

  const offsetSckills = $('.skills').offset().top;
  scrollAnim();

  $(window).scroll(function () {
    scrollAnim()
  });

  function scrollAnim() {
    if (offsetSckills - $(window).scrollTop() <= 100) {
      $('.bg').addClass('animate')
    }
    if ($(window).scrollTop() >= 2400) {
      $('.contacts').addClass('animate');
    }
  }

});