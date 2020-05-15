$(function () {

  // Slider на секции с отзывами
  $('.reviews__slider').slick({
    // centerMode: true,
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.png" alt=""></img>',
  });

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
  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    let t_1 = scroll * 0.8;
    let t_2 = scroll * 0.5;
    let t_3 = scroll * 0.3;
    let t_4 = scroll * 0.6;
    let t_5 = scroll * 0.3;

    $('.cubes-item--1').css('top', (-1 * t_1) - 60 + 'px');
    $('.cubes-item--2').css('bottom', t_2 + 140 + 'px');
    $('.cubes-item--3').css('top', (-1 * t_3) + 80 + 'px');
    $('.cubes-item--4').css('top', (-1 * t_3) + 150 + 'px');
    $('.cubes-item--5').css('top', (-1 * t_5) + 500 + 'px');
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
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });

  // PopUp-тест
  $('.test__popup-btn').click(function () {
    $('.test-popup').fadeIn();
    return false;
  });

  $('.home__btn').click(function () {
    $('.test-popup').fadeIn();
    return false;
  });

  $('.popup-close').click(function () {
    $(this).parents('.test-popup').fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.test-popup').fadeOut();
    }
  });

  $('.test-popup').click(function (e) {
    if ($(e.target).closest('.popup').length == 0) {
      $(this).fadeOut();
    }
  });

  // AJAX отправка обратной связи
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

  // Выпадающий список в тесте
  const selectSingleOne = document.querySelector('.__select--1');
  const selectSingle_titleOne = selectSingleOne.querySelector('.__select__title');
  const selectSingle_labelsOne = selectSingleOne.querySelectorAll('.__select__label');

  const selectSingleTwo = document.querySelector('.__select--2');
  const selectSingle_titleTwo = selectSingleTwo.querySelector('.__select__title');
  const selectSingle_labelsTwo = selectSingleTwo.querySelectorAll('.__select__label');

  const selectSingleThree = document.querySelector('.__select--3');
  const selectSingle_titleThree = selectSingleThree.querySelector('.__select__title');
  const selectSingle_labelsThree = selectSingleThree.querySelectorAll('.__select__label');

  const selectSingleFour = document.querySelector('.__select--4');
  const selectSingle_titleFour = selectSingleFour.querySelector('.__select__title');
  const selectSingle_labelsFour = selectSingleFour.querySelectorAll('.__select__label');

  const selectSingleFive = document.querySelector('.__select--5');
  const selectSingle_titleFive = selectSingleFive.querySelector('.__select__title');
  const selectSingle_labelsFive = selectSingleFive.querySelectorAll('.__select__label');

  const selectSingleSix = document.querySelector('.__select--6');
  const selectSingle_titleSix = selectSingleSix.querySelector('.__select__title');
  const selectSingle_labelsSix = selectSingleSix.querySelectorAll('.__select__label');

  select(selectSingleOne, selectSingle_titleOne, selectSingle_labelsOne);
  select(selectSingleTwo, selectSingle_titleTwo, selectSingle_labelsTwo);
  select(selectSingleThree, selectSingle_titleThree, selectSingle_labelsThree);
  select(selectSingleFour, selectSingle_titleFour, selectSingle_labelsFour);
  select(selectSingleFive, selectSingle_titleFive, selectSingle_labelsFive);
  select(selectSingleSix, selectSingle_titleSix, selectSingle_labelsSix);

  function select(single, title, label) {
    // Toggle menu
    title.addEventListener('click', () => {
      if ('active' === single.getAttribute('data-state')) {
        single.setAttribute('data-state', '');
      } else {
        single.setAttribute('data-state', 'active');
      }
    });

    // Close when click to option
    for (let i = 0; i < label.length; i++) {
      label[i].addEventListener('click', (evt) => {
        title.textContent = evt.target.textContent;
        single.setAttribute('data-state', '');
      });
    }
  }

  formFocus($('.popup-bell__form-input input'));
  formFocus($('.bell-content__input input'));
  function formFocus(elem) {
    let Value = "";
    elem.keyup(function () {
      Value = $(this).val();
      if (Value.length > 0) {
        $(this).addClass('active');
      }
    });
    elem.focus(function () {
      $(this).addClass('active');
    });
    elem.blur(function () {
      if (Value.length <= 0) {
        $(this).removeClass('active');
      }
    });
  }


  // Белый цвет на клик в секции Neon
  $('.neon__item').on('click', function () {
    $(this).addClass('white');
  });

  $('.neon__item').mouseleave(function () {
    $(this).removeClass('white');
  })
});