$(function () {

  $('.home__btn').click(function () {
    var destination = $('.prices').offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });

  new WOW().init();

  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }
      // Replace image with new SVG
      $img.replaceWith($svg);
    }, 'xml');
  });

  let top1 = $('.skills-box--1 .skills__item:nth-child(1)').offset().top;
  let top2 = $('.skills-box--1 .skills__item:nth-child(3)').offset().top;
  let top3 = $('.skills-box--2 .skills__item:nth-child(2)').offset().top;
  let top4 = $('.skills-box--2 .skills__item:nth-child(4)').offset().top;
  let leading = $('.leading-box').offset().top;
  let whom = $('.whom-box').offset().top;

  function scroll() {

    let scroll = $(this).scrollTop();

    if (scroll + ($(window).height() * 0.5) >= top1) {
      $('.skills-box--1 .skills__item:nth-child(1)').addClass('animate');
      setTimeout(() => {
        $('.skills-box--1 .skills__item:nth-child(2)').addClass('animate');
      }, 200);
    }
    if (scroll + ($(window).height() * 0.5) >= top2) {
      $('.skills-box--1 .skills__item:nth-child(3)').addClass('animate');
      setTimeout(() => {
        $('.skills-box--1 .skills__item:nth-child(4)').addClass('animate');
      }, 200);
    }
    if (scroll + ($(window).height() * 0.5) >= top3) {
      $('.skills-box--2 .skills__item:nth-child(2)').addClass('animate');
      setTimeout(() => {
        $('.skills-box--2 .skills__item:nth-child(3)').addClass('animate');
      }, 200);
    }
    if (scroll + ($(window).height() * 0.5) >= top4) {
      $('.skills-box--2 .skills__item:nth-child(4)').addClass('animate');
      setTimeout(() => {
        $('.skills-box--2 .skills__item:nth-child(5)').addClass('animate');
      }, 200);
    }

    if (scroll + $(window).height() * 0.5 >= whom) {
      $('.whom__item:nth-child(1)').addClass('animate');
      setTimeout(() => {
        $('.whom__item:nth-child(2)').addClass('animate');
      }, 200);
      setTimeout(() => {
        $('.whom__item:nth-child(3)').addClass('animate');
      }, 400);
      setTimeout(() => {
        $('.whom__item:nth-child(4)').addClass('animate');
      }, 600);
    }

    if (scroll + $(window).height() >= leading) {
      $(window).off();


      let typed1 = new Typed('.leading__item-text.text-1', {
        strings: ["", "Владелец дизайн-студии, сфокусированной на работе с молодёжью"],
        typeSpeed: 30
      });
      setTimeout(() => {
        let typed2 = new Typed('.leading__item-text.text-2', {
          strings: ["", "Работал с блоггерами разных масштабов"],
          typeSpeed: 30
        });
      }, 1500);
      setTimeout(() => {
        let typed3 = new Typed('.leading__item-text.text-3', {
          strings: ["", "Во время коронавируса привлёк больше 117.000 рублей дополнительной прибыли фирме партнёров за счёт ютуба"],
          typeSpeed: 30
        });
      }, 3000);
      setTimeout(() => {
        let typed4 = new Typed('.leading__item-text.text-4', {
          strings: ["", "Привлекал живых подписчиков на каналы партнёров по цене 2р/шт. (При средней цене по рынку 11р/шт)"],
          typeSpeed: 30
        });
      }, 4500);
      setTimeout(() => {
        let typed5 = new Typed('.leading__item-text.text-5', {
          strings: ["", "Опыт работы с Ютубом >7 лет"],
          typeSpeed: 30
        });
      }, 6000);
      setTimeout(() => {
        let typed6 = new Typed('.leading__item-text.text-6', {
          strings: ["", "При помощи SEO-оптимизации ютуб-каналов партнёров привлекал до +98.000 просмотров"],
          typeSpeed: 30
        });
      }, 7500);

      $(window).on('scroll', function () {
        let scroll = $(this).scrollTop();

        if (scroll + ($(window).height() * 0.5) >= $('.leading__video-tv').offset().top) {
          $('.leading__video-tv video').append(`
          <source src="images/video-short.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
          `);

          $(window).off();
          if ($(window).width() <= 930) {
            let videoWidth = $('.leading__video-tv video').width();
            $('.leading__video-tv video').height(videoWidth * 0.57);
            $(window).resize(function () {
              let videoWidth = $('.leading__video-tv video').width();
              $('.leading__video-tv video').height(videoWidth * 0.57);
            })

            $('.prices-box').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
              nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
            });
          }
        }
      })
    }
  }

  scroll();
  $(window).on('scroll', scroll);
});

