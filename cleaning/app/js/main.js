$(function () {

  // Slider на втором экране
  let itemIndex = 0;
  $('.list__item').on('mouseover', function () {
    if ($(this).index() != itemIndex) {
      $('.list__item:nth-child(' + (itemIndex + 1) + ')').toggleClass('active');
      $(this).toggleClass('active');
      $('.box__item:nth-child(' + (itemIndex + 1) + ')').toggleClass('active');
      $('.box__item:nth-child(' + ($(this).index() + 1) + ')').toggleClass('active');
    }
    itemIndex = $(this).index();
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

  // Настройка UI-слайдера со всеми переходами и анимациями
  let n = 1;
  let i = 0
  var steps = [1, 2, 3, 4];

  $('.slider__runner-box').slider({
    value: 0,
    min: 0,
    max: steps.length - 1,
    step: 1,
    slide: function addSlider(event, ui) {
      $('.slider__item:nth-child(' + n + ')').css({
        'opacity': 0,
        'visibility': 'hidden'
      });
      $('.slider__runner-title:nth-child(' + n + ')').css({
        'color': '#4e4e4e',
        'opacity': 1
      });
      $('.ui-slider-handle ul li:nth-child(' + n + ')').css('opacity', 0);
      $('.slider__item:nth-child(' + n + ')').toggleClass('active');

      $('.slider__item:nth-child(' + steps[ui.value] + ')').css({
        'opacity': 1,
        'visibility': 'visible'
      });
      $('.slider__runner-title:nth-child(' + steps[ui.value] + ')').css({
        'color': '#e6e6e6',
        'opacity': 0
      });
      $('.ui-slider-handle ul li:nth-child(' + steps[ui.value] + ')').css('opacity', 1);
      setTimeout(() => {
        $('.slider__item:nth-child(' + steps[ui.value] + ')').toggleClass('active');
      }, 300)
      n = steps[ui.value];
    }
  });


  $('.slider__runner-title').on('click', function () {
    let index = $(this).index();
    console.log(index);

    // $('.slider__runner-box').slider('steps', index);
  })
  // $('.slider__runner-box').slider('value', )


  // Добавление UL списка с заголовками в кнопку
  let addUl = $('<ul><li>Кухня</li><li>Комната</li><li>Прихожая</li><li>Туалет</li></ul>')
  $('.ui-slider-handle').html(addUl);

  // Default значения при первой загрузке страницы
  $('.slider__item:nth-child(1)').css({
    'opacity': 1,
    'visibility': 'visible'
  })
  $('.slider__runner-title:nth-child(1)').css('color', '#e6e6e6');
  $('.ui-slider-handle ul li:nth-child(1)').css('opacity', 1);
  $('.slider__item:nth-child(1)').toggleClass('active');

  // Анимация при клике на ползунок
  function mousDown() {
    $('.ui-slider-handle ul').css({
      'cursor': 'grabbing',
      'cursor': '-webkit-grabbing',
      'opacity': 0
    })
  }
  function mouseUp() {
    $('.ui-slider-handle ul').css({
      'cursor': 'grab',
      'cursor': '-webkit-grab',
      'opacity': 1
    });
  };
  $('.ui-slider-handle ul').on('mousedown', mousDown);
  $('.ui-slider-handle ul').on('mouseup', mouseUp);

  // Преобразование номера телефона
  $('.test-number__send-input input').mask("+7(999) 999 99-99");
});