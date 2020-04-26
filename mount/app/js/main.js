$(function () {


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
});