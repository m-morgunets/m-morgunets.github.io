$(function () {

  let topicNow = localStorage.getItem('topic');
  $(`body`).addClass(topicNow);

  $('.topic-btn').click(function (event) {

    $('body').toggleClass('black');
    localStorage.setItem('topic', 'black')

    if (!$('body').is('.black')) {
      localStorage.setItem('topic', 'white');
    }
  });

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

  const offsetSckills = $('.skills').offset().top;
  scrollSkill();
  scrillContacts();

  $(window).on('scroll', function () {
    scrollSkill();
  });
  $(window).on('scroll', function () {
    scrillContacts();
  });

  function scrollSkill() {
    if (offsetSckills - $(window).scrollTop() <= 100) {
      let skillsKey = 100;
      for (const iterator of $('.bg')) {
        setTimeout(() => {
          $(iterator).addClass('animate');
        }, skillsKey);
        skillsKey += 100;
      }
      $(window).off('scroll', function () {
        scrollSkill();
      });
    }
  }

  function scrillContacts() {
    if ($(window).scrollTop() >= 2400) {
      $('.contacts').addClass('animate');
      $(window).off('scroll', function () {
        scrillContacts();
      });
    }
  }

  function idGenerator(selector) {
    let idCase = 0;
    for (const iterator of $(selector)) {
      idCase++
      $(iterator).attr('id', idCase);
    }
  }
  idGenerator('.portfolio__item');
  idGenerator('.cases__item');

  // $('.portfolio__item').on('click', function () {
  //   let id = $(this).attr('id');
  //   $('.cases').fadeIn();
  //   $(`.cases__item[id='${id}']`).fadeIn();
  // })

  // $('.cases::before').on('click', function () {
  //   $('.cases__item').fadeOut();
  //   $('.cases').fadeOut();
  // })



  $('.portfolio__item').click(function () {
    let id = $(this).attr('id');
    $('.cases').fadeIn();
    $(`.cases__item[id='${id}']`).fadeIn();
    return false;
  });

  $('.cases__item-close').click(function () {
    $(this).parents('.cases').fadeOut();
    $('.cases__item').fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.cases').fadeOut();
      $('.cases__item').fadeOut();
    }
  });

  $('.cases').click(function (e) {
    if ($(e.target).closest('.cases__item').length == 0) {
      $(this).fadeOut();
      $('.cases__item').fadeOut();
    }
  });


});