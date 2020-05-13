$(function () {

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

  // Преобразование номера телефона
  $('.test-number__send-input input').mask("+7(999) 999 99-99");
  $('.popup-tel').mask("+7(999) 999 99-99");

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
});