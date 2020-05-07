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