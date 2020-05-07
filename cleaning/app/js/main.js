$(function () {

  $(window).scroll(function (event) {
    let scroll = $(this).scrollTop();
    let t_1 = scroll * 0.8;
    let t_2 = scroll * 0.5;
    let t_3 = scroll * 0.3;
    let t_4 = scroll * 0.6;

    $('.cubes-item--1').css('top', (-1 * t_1) - 60 + 'px');
    $('.cubes-item--2').css('bottom', t_2 + 140 + 'px');
    $('.cubes-item--3').css('top', (-1 * t_3) - 150 + 'px');
    $('.cubes-item--4').css('top', (-1 * t_3) + 150 + 'px');
  })

  // $('.services__item-img').on('click', function () {
  //   $(this).toggleClass('active');
  // })

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

  let n = 1;
  var steps = [1, 2, 3, 4];

  $('.slider__runner-box').slider({
    value: 0,
    min: 0,
    max: steps.length - 1,
    step: 1,
    slide: function (event, ui) {
      $('.slider__item:nth-child(' + n + ')').css({
        'opacity': 0,
        'visibility': 'hidden'
      });
      $('.slider__runner-title:nth-child(' + n + ')').css({
        'color': '#4e4e4e',
        'opacity': 1
      });
      $('.ui-slider-handle ul li:nth-child(' + n + ')').css('opacity', 0);

      $('.ui-slider-handle ul li:nth-child(' + steps[ui.value] + ')').css('opacity', 1);
      $('.slider__item:nth-child(' + steps[ui.value] + ')').css({
        'opacity': 1,
        'visibility': 'visible'
      });
      $('.slider__runner-title:nth-child(' + steps[ui.value] + ')').css({
        'color': '#e6e6e6',
        'opacity': 0
      });
      n = steps[ui.value];
    }
  });

  let addUl = $('<ul><li>Кухня</li><li>Комната</li><li>Прихожая</li><li>Туалет</li></ul>')
  $('.ui-slider-handle').html(addUl);

  $('.ui-slider-handle ul').on('mousedown', () => {
    $('.ui-slider-handle ul').css({
      'cursor': 'grabbing',
      'cursor': '-webkit-grabbing',
      'opacity': 0
    })
  })
  $('.ui-slider-handle ul').on('mouseup', () => {
    $('.ui-slider-handle ul').css({
      'cursor': 'grab',
      'cursor': '-webkit-grab',
      'opacity': 1
    })
  })

  $('.slider__item:nth-child(1)').css({
    'opacity': 1,
    'visibility': 'visible'
  })
  $('.slider__runner-title:nth-child(1)').css('color', '#e6e6e6');
  $('.ui-slider-handle ul li:nth-child(1)').css('opacity', 1);
});