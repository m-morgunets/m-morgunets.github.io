$(function () {

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > el.offset().top - 200) {
  //     el.addClass('animation');
  //   }
  // });


  let windowWidth = document.documentElement.clientWidth;
  if (windowWidth > 584) {
    $('.home').parallax({ imageSrc: 'images/home-bg.jpg' });
  }
  if (windowWidth <= 584) {
    $('.home').parallax({ imageSrc: 'images/home-miniBg.jpg' });
  }

  $('.home__content-btn').on('click', function () {
    $('.service').get(0).scrollIntoView({
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

  let items = document.querySelectorAll('.shop__item')
  let btn = document.querySelectorAll('.shop__item-btn');

  for (let i = 0; i <= 4; i++) {
    items[i].addEventListener('mousemove', () => {
      btn[i].innerHTML = "INFO";
    })
    items[i].addEventListener('mouseout', () => {
      btn[i].innerHTML = "ПОДРОБНЕЕ";
    })
  }
});