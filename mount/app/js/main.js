$(function () {


  let shopRock = document.querySelector('.shop-rock');
  let bonusRock = document.querySelector('.bonus-rock')
  let flagShopTop = true,
    flagShopBottom = false,
    flagBonusTop = true,
    flagBonusBottom = false;

  $(window).scroll(function () {
    animShopRock();
    animBonusRock();
  });


  function animShopRock() {
    if ($(this).scrollTop() > $('.shop').offset().top - 400 && flagShopTop == true) {
      shopRock.style.transform = 'translate(400%, 1000px) rotate(900deg)';
      flagShopTop = false;
    }
    if ($(this).scrollTop() > $('.shop').offset().top + 1500 && flagShopBottom == false) {
      flagShopBottom = true;
    }
    if ($(this).scrollTop() < $('.shop').offset().top && flagShopBottom == true) {
      shopRock.style.transform = 'translate(0, 0) rotate(0)';
      flagShopBottom = false;
    }
    if ($(this).scrollTop() < $('.shop').offset().top - 1500 && flagShopTop == false) {
      flagShopTop = true;
    }
  }

  function animBonusRock() {
    if ($(this).scrollTop() > $('.bonus').offset().top && flagBonusTop == true) {
      bonusRock.style.transform = 'translateY(2200px) rotate(900deg)';
      flagBonusTop = false;
      console.log(flagBonusTop, flagBonusBottom);

    }
    if ($(this).scrollTop() > $('.bonus').offset().top + 2000 && flagBonusBottom == false) {
      flagBonusBottom = true;
      console.log(flagBonusTop, flagBonusBottom);

    }
    if ($(this).scrollTop() < $('.bonus').offset().top + 1000 && flagBonusBottom == true) {
      bonusRock.style.transform = 'translateY(0) rotate(0)';
      flagBonusBottom = false;
      console.log(flagBonusTop, flagBonusBottom);

    }
    if ($(this).scrollTop() < $('.bonus').offset().top - 1500 && flagBonusTop == false) {
      flagBonusTop = true;
      console.log(flagBonusTop, flagBonusBottom);

    }
  }


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

  let btn = document.querySelectorAll('.shop__item-btn');

  for (let elem of btn) {
    elem.addEventListener('mousemove', () => {
      elem.innerHTML = "INFO";
    })
    elem.addEventListener('mouseout', () => {
      elem.innerHTML = "ПОДРОБНЕЕ";
    })
  }
});