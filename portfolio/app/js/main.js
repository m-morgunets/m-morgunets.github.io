$(function () {

  function homeSlider() {

    let item = document.querySelectorAll('.home-slider__item');
    let marker = document.querySelector('.home-slider__marker');
    let size = document.querySelector('.home__slider').offsetWidth * 0.36;

    let sizeNum = 0;
    let markeNum = 0;
    let itemNum = 0;
    let timerId = setInterval(slider, 3000);

    function slider() {
      item[itemNum].className = '.home-slider__item item--' + (itemNum + 1);
      itemNum++
      if (itemNum == 3) {
        itemNum = 0
      }
      item[itemNum].className += ' active'

      sizeNum++
      if (sizeNum < 3) {
        markeNum += size
      } else {
        markeNum = 0
        sizeNum = 0
      }

      marker.style.transform = "translateX(" + markeNum + "px)"
    }
  }
  homeSlider();

  $('.works-slider__img').slick({
    centerPadding: 0,
    slidesToShow: 5,
    centerMode: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt=""></img>',
    asNavFor: '.works-slider__content'
  });

  $('.works-slider__content').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    asNavFor: '.works-slider__img',
  });

});