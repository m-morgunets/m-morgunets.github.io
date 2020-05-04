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
    }
    if ($(this).scrollTop() > $('.bonus').offset().top + 2000 && flagBonusBottom == false) {
      flagBonusBottom = true;
    }
    if ($(this).scrollTop() < $('.bonus').offset().top + 1000 && flagBonusBottom == true) {
      bonusRock.style.transform = 'translateY(0) rotate(0)';
      flagBonusBottom = false;
    }
    if ($(this).scrollTop() < $('.bonus').offset().top - 1500 && flagBonusTop == false) {
      flagBonusTop = true;
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

  $.jqCart({
    buttons: '.shop__item-hover',        // селектор кнопок, аля "Добавить в корзину"
    visibleLabel: false,         // показывать/скрывать ярлык при пустой корзине (по умолчанию: false)
    openByAdding: false,         // автоматически открывать корзину при добавлении товара (по умолчанию: false)
    currency: '₽',          // валюта: строковое значение, мнемоники (по умолчанию "$")
    cartLabel: 'body'    /* селектор элемента, где будет размещен ярлык, он же - "кнопка" для открытия корзины */
  });

  $('.jqcart-cart-label').on('click', function () {
    var addButton = $('<form method="POST" class="payment-button" action="https://money.yandex.ru/quickpay/confirm.xml"> <input type="hidden" name="receiver"value = "410018394951320" > <input type="hidden" name="formcomment" value="Магазин альпинистского снаряжения"> <input type="hidden" name="short-dest"value="Альпинистское снаряжение"> <input type="hidden" name="label"value="01"> <input type="hidden" name="quickpay-form" value="donate"> <input type="hidden" name="targets"value="Tранзакция: Да фиг его знает какая:)"> <input type="hidden" name="sum" value="4568.25" data-type="number"> <input type="hidden" name="comment" value="Оплачивая заказ вы спасаете свою жизнь от внезапного падения с горы, спасибо!"> <input type="hidden" name="need-fio" value="true"> <input type="hidden" name="need-email" value="true"> <input type="hidden" name="need-phone" value="false"> <input type="hidden" name="need-address" value="true"> <label><input type="radio" name="paymentType" value="PC">Яндекс.Деньгами</label> <label><input type="radio" name="paymentType" value="AC">Банковской картой</label> <input type="submit" value="Оплатить"></form>')
    $('.jqcart-orderform').append(addButton);

    let lastBtn = document.querySelector('input[name="sum"]');
    let totalSum = document.querySelector('.jqcart-subtotal strong')
    $('.payment-button').on('mouseover', function () {
      lastBtn.value = totalSum.innerHTML;
    });
  });
});