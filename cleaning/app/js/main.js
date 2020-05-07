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


  // setInterval(() => {
  //   if (n > 1) {
  //     $('.slider__item:nth-child(' + (n - 1) + ')').css('opacity', 1)
  //   }
  //   if (n > 4) {
  //     n = 1
  //   }
  //   $('.slider__item:nth-child(' + n + ')').css('opacity', 0)
  //   n++
  // }, 1000)

  function mouseOver() {
    $(this).css('opacity', 0);
    $('.ui-slider-handle').css('z-index', 1);
  }

  let n = 1;
  var steps = [1, 2, 3, 4];

  $('.slider__runner-box').slider({
    value: 0,
    min: 0,
    max: steps.length - 1,
    step: 1,
    slide: function (event, ui) {
      $('.slider__runner-title:nth-child(' + n + ')').off('mouseover', mouseOver);
      $('.slider__runner-title:nth-child(' + n + ')').css('color', '#4e4e4e');
      $('.slider__item:nth-child(' + steps[ui.value] + ')').css({
        'opacity': 1,
        'visibility': 'visible'
      });
      $('.slider__runner-title:nth-child(' + steps[ui.value] + ')').css('color', '#e6e6e6');
      $('.slider__runner-title:nth-child(' + steps[ui.value] + ')').on('mouseover', mouseOver);
      n = steps[ui.value];
    }
  });

  $('.slider__item:nth-child(1)').css({
    'opacity': 1,
    'visibility': 'visible'
  })
  $('.slider__runner-title:nth-child(1)').css('color', '#e6e6e6')
  $('.slider__runner-title:nth-child(1)').on('mouseover', mouseOver);

  // $('.slider__runner-title').on('mouseover', function () {
  //   $(this).css('opacity', 0);
  //   $('.ui-slider-handle').css('z-index', 1);
  // });

  $('.ui-slider-handle').on('mouseover', function () {
    $(this).css('z-index', 1);
  });
  $('.ui-slider-handle').on('mouseout', function () {
    $(this).css('z-index', 0);
    setTimeout(() => {
      $('.slider__runner-title').css('opacity', 1);
    }, 200)

  });

  // $('.slider__runner-titles').on('mouseover', function () {
  //   $(this).css('z-index', 1);
  // });
  // $('.slider__runner-titles').on('mouseout', function () {
  //   $(this).css('z-index', 2);
  // });

  // let item = document.querySelectorAll('.services__item');
  // let itemImg = document.querySelectorAll('.services__item-img');
  // let content = document.querySelectorAll('.services__item-content');

  // for (let i = 0; i <= item.length; i++) {
  //   itemImg[i].addEventListener('mouseover', function () {
  //     content[i].style.display = 'block';
  //   });
  //   item[i].addEventListener('mouseout', () => {
  //     let timerId = setTimeout(function () {
  //       content[i].style.display = 'none';
  //     }, 1000);
  //     itemImg[i].addEventListener('mouseover', function () {
  //       content[i].style.display = 'block';
  //       clearTimeout(timerId);
  //     });
  //     content[i].addEventListener('mouseover', function () {
  //       this.style.display = 'block';
  //       clearTimeout(timerId);
  //     });
  //   });
  // };

});