$(function () {

  if (BrowserDetect.browser == "Explorer" || BrowserDetect.browser == "Safari" || BrowserDetect.OS == "iPhone/iPod") {
    $('.test').parallax({ imageSrc: 'images/test-bg.jpg' });
    $('.bell').parallax({ imageSrc: 'images/bell-bg.jpg' });
  } else {
    $('.test').parallax({ imageSrc: 'images/test-bg.webp' });
    $('.bell').parallax({ imageSrc: 'images/bell-bg.webp' });
  }

  // Slider на секции с отзывами
  $('.reviews__slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.png" alt=""></img>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });

  $('.slider__tools-box').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  })

  // Slider на втором экране
  let servicesItemIndex = 0;
  $('.list__item').on('mouseover', function () {
    if ($(this).index() != servicesItemIndex) {
      $('.list__item:nth-child(' + (servicesItemIndex + 1) + ')').toggleClass('active');
      $(this).toggleClass('active');
      $('.box__item:nth-child(' + (servicesItemIndex + 1) + ')').toggleClass('active');
      $('.box__item:nth-child(' + ($(this).index() + 1) + ')').toggleClass('active');
    }
    servicesItemIndex = $(this).index();
  })

  // Slider на четвертом экране
  let sliderItemIndex = 0;
  $('.slider__runner-title').on('click', function () {
    if ($(this).index() != sliderItemIndex) {
      $('.slider__runner-title:nth-child(' + (sliderItemIndex + 1) + ')').toggleClass('active');
      $(this).toggleClass('active');
      $('.slider__item:nth-child(' + (sliderItemIndex + 1) + ')').toggleClass('active');
      $('.slider__item:nth-child(' + ($(this).index() + 1) + ')').toggleClass('active');
    }
    sliderItemIndex = $(this).index();
  })

  // Slider в тесте
  let testItemIndex = 0;
  $('.popup-view__btn').on('click', function () {
    if ($(this).index() != testItemIndex) {
      $('.popup-view__btn:nth-child(' + (testItemIndex + 1) + ')').toggleClass('active');
      $(this).toggleClass('active');
      $('.popup-item:nth-child(' + (testItemIndex + 1) + ')').toggleClass('active');
      $('.popup-item:nth-child(' + ($(this).index() + 1) + ')').toggleClass('active');
    }
    testItemIndex = $(this).index();
  })

  // Slider в секции FAQ
  let FAQItemIndex = 0;
  $('.faq__item').on('click', function () {
    if ($(this).index() != FAQItemIndex) {
      $('.faq__item:nth-child(' + (FAQItemIndex + 1) + ')').removeClass('active');
      $(this).addClass('active');
    }
    if ($(this).index() == FAQItemIndex) {
      $(this).toggleClass('active');
    }
    FAQItemIndex = $(this).index();
  })

  //Параллакс эффект кубиков
  let cubesScroll = $(window).scrollTop();
  scrollCubes()
  function scrollCubes() {
    scroll = $(this).scrollTop();
    let t_1 = scroll * 0.8;
    let t_2 = scroll * 0.5;
    let t_3 = scroll * 0.3;
    let t_4 = scroll * 0.6;
    let t_5 = scroll * 0.3;
    $('.cubes-item--1').css('top', (-1 * t_1) + 30 + 'px');
    $('.cubes-item--2').css('bottom', t_2 - 20 + 'px');
    $('.cubes-item--3').css('top', (-1 * t_3) + 80 + 'px');
    $('.cubes-item--4').css('top', (-1 * t_3) + 150 + 'px');
    $('.cubes-item--5').css('top', (-1 * t_5) + 500 + 'px');
  }
  $(window).scroll(function (event) {
    scrollCubes()
  });

  // Scroll на вторую страницу (кнопка на первом экране)
  $('.scroll').on('click', function () {
    $('.services').get(0).scrollIntoView({
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

  // Преобразование полей с номера телефонов
  $('.test-number__send-input input').mask("+7(999) 999 99-99");
  $('.popup-tel').mask("+7(999) 999 99-99");
  $('#test-phone').mask("+7(999) 999 99-99");
  $('.bell-content__phone input').mask("+7(999) 999 99-99");

  //PopUP в первой секции
  $('.header__phone-btn').click(function () {
    $('.phone-popup').fadeIn();
    return false;
  });

  $('.popup-close').click(function () {
    $(this).parents('.phone-popup').fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.phone-popup').fadeOut();
    }
  });

  $('.phone-popup').click(function (e) {
    if ($(e.target).closest('.bell-inner').length == 0) {
      $(this).fadeOut();
    }
  });

  // AJAX отправка обратной связи из PopUP
  $('.phone-popup .bell__btn').on('click', function () {
    var name = $('.' + this + '#name').val().trim();
    var phone = $('#phone').val().trim();

    if (name == "" & phone == "") {
      return false
    } else if (name == "") {
      return false
    } else if (phone == "") {
      return false
    }

    $.ajax({
      url: 'php/mail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phone': phone },
      dataType: 'html',
      beforeSend: function () {
        // $('#sendMail').prop('disabled', true);
      },
      success: function (data) {
        if (data) {
          $('#phoneForm').trigger('reset');
        }
        // $('#sendMail').prop('disabled', false);
      },
    })
  })

  // AJAX отправка обратной связи из секции
  $('#sendMail').on('click', function () {
    var name = $('#name').val().trim();
    var phone = $('#phone').val().trim();


    if (name == "" & phone == "") {
      return false
    } else if (name == "") {
      return false
    } else if (phone == "") {
      return false
    }
    $('#errorMess').text("")

    $.ajax({
      url: 'php/mail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phone': phone },
      dataType: 'html',
      beforeSend: function () {
        $('#sendMail').prop('disabled', true);
      },
      success: function (data) {
        if (data) {
          $('#phoneForm').trigger('reset');
        }
        $('#sendMail').prop('disabled', false);
      },
    })
  })

  // Анимация в секции "exemples"
  let activeCheck = 0;
  let rotateRemove = 0;
  $('.examples__item').on('mouseover', function () {
    activeCheck++
    $(this).addClass('active')
  })
  $('.examples__remove').on('click', function () {
    if (activeCheck != 0) {
      rotateRemove += 180;
      $(this).css('transform', 'rotate(' + rotateRemove + 'deg)')
    }
    activeCheck = 0
    $('.examples__item').removeClass('active');
  })

  // Paralax.js в секции "exemples"
  var scene = document.querySelectorAll('.examples_paralax-item')
  for (let elem of scene) {
    var parallaxInstance = new Parallax(elem, {
      relativeInput: true
    });
  }

  // Белый цвет на клик в секции Neon
  $('.neon__item').on('click', function () {
    $(this).addClass('white');
  });

  $('.neon__item').mouseleave(function () {
    $(this).removeClass('white');
  })

  let keyQuestionNow = 1;
  let keyQuestionArr = [];
  $('.test__answer-btn').on('click', function () {
    $(`.test-question--${keyQuestionNow}`).removeClass('active');
    keyQuestionArr.push(keyQuestionNow);

    keyQuestionNow = this.dataset.answer;


    if (keyQuestionNow > 1) {
      $('.test-box').addClass('wide');
    }

    $(`.test-question--${keyQuestionNow}`).addClass('active');
  });

  $('.test__btn-back').on('click', function () {
    $(`.test-question--${keyQuestionNow}`).removeClass('active');
    keyQuestionNow = keyQuestionArr[keyQuestionArr.length - 1]

    $(`.test-question--${keyQuestionNow}`).addClass('active');
    keyQuestionArr = keyQuestionArr.slice(0, -1);


    if (keyQuestionNow == 1) {
      $('.test-box').removeClass('wide');
    }
  });

  $('.test__btn-repeat').on('click', function () {
    $(`.test-question--${keyQuestionNow}`).removeClass('active');
    keyQuestionArr = keyQuestionArr.slice(0);
    keyQuestionNow = keyQuestionArr[0];
    $(`.test-question--${keyQuestionNow}`).addClass('active');
    $('.test-box').removeClass('wide');

  });
});