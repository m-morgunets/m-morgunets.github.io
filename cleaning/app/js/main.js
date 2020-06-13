
$(function () {

  if (BrowserDetect.browser == "Explorer" || BrowserDetect.browser == "Safari" || BrowserDetect.OS == "iPhone/iPod") {
    $('.test').parallax({ imageSrc: 'images/test-bg.jpg' });
    $('.bell').parallax({ imageSrc: 'images/bell-bg.jpg' });
  } else {
    $('.test').parallax({ imageSrc: 'images/test-bg.webp' });
    $('.bell').parallax({ imageSrc: 'images/bell-bg.webp' });
  }

  // Slider в секции FAQ
  $('.faq__item-title').on('click', function () {
    console.log(toggleIndex == $(this).parent().index());

    if (toggleIndex == $(this).parent().index()) {
      $(this).parent().toggleClass('active')
    } else {
      $('.faq__item-title').parent().removeClass('active')
      $(this).parent().addClass('active')
    }
  })

  let toggleIndex;
  $('.toggle').click(function (e) {
    toggleIndex = $(this).parent().index()
    if (toggleIndex != $('.faq__item-content.inner.show').parent().index()) {
      $('.faq__item-content.inner.show').slideUp(350);
      $('.faq__item-content.inner.show').removeClass('show');
    }
    e.preventDefault();

    var $this = $(this);

    if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
    } else {
      $this.parent().parent().find('li .inner').removeClass('show');
      $this.parent().parent().find('li .inner').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
    }

  });

  // Slider на секции с отзывами
  $('.reviews__people-slider').slick({
    centerMode: true,
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.png" alt=""></img>',
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 855,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  });

  $('.reviews__corp-slider').slick({
    centerMode: true,
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.png" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.png" alt=""></img>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      },
    ]
  })

  $('.slider__tools-box').slick({
    infinite: true,
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  })

  // Slider на втором экране
  let servicesItemIndex = 0;
  if (document.documentElement.clientWidth > 850) {
    $('.list__item:nth-child(1)').addClass('active');
    $('.box__item:nth-child(1)').addClass('active');

    $('.list__item').on('mouseover', function () {
      if ($(this).index() != servicesItemIndex) {
        $('.list__item:nth-child(' + (servicesItemIndex + 1) + ')').toggleClass('active');
        $(this).toggleClass('active');
        $('.box__item:nth-child(' + (servicesItemIndex + 1) + ')').toggleClass('active');
        $('.box__item:nth-child(' + ($(this).index() + 1) + ')').toggleClass('active');
      }
      servicesItemIndex = $(this).index();
    })
  } else {
    $('.list__item').on('click', function () {
      $('.box__item:nth-child(' + (servicesItemIndex + 1) + ')').removeClass('active');
      $('.box__item:nth-child(' + ($(this).index() + 1) + ')').addClass('active');

      servicesItemIndex = $(this).index();
    })

    $('.box-item__close').on('click', function () {
      $('.box__item:nth-child(' + (servicesItemIndex + 1) + ')').removeClass('active');
    })

    $('.box__item:nth-child(1) .box-item__text').html(`
    <p>Благодаря новейшему 
    оборудованию и эффективным 
    чистящим средствам, мы проведем 
    качественную уборку вашего 
    жилища в кратчайшие сроки и с 
    максимальным эффектом</p>
    
    <p>В своей работе мы доверяем только 
    профессиональной химии и 
    оборудованию, которые легко 
    и быстро справляются с 
    любыми типами загрязнений</p>`);
    $('.box__item:nth-child(2) .box-item__text').html(`
    <p>Стройка? Ремонт? Нужно оттереть
    присохший цемент  и перетаскать
    
    строительные отходы? - Легко</p>
    <p>Наша команда обученных 
    специалистов спрявится с этой 
    задачей!</p>
  
    <p>В своей работе мы доверяем 
    только профессиональной химии и 
    оборудованию, которые легко и
    быстро справляются с любыми
    типами загрязнений
    </p>`);
    $('.box__item:nth-child(3) .box-item__text').html(`
    <p>Следы от пищевых продуктов, шерсть 
    домашних животных, посторонние 
    запахи, пятна от мочевины, 
    пластилина, маркера... </p>
    
    <p>И это только малая часть того, что 
    приходится переносить мебели в
    наши дни</p>
    
    <p>Мокрая глубинная чистка, проводимая
    по немецкой технологии с 
    использованием только качественных
    гипоалергенных материалов, 
    позволит Вам вдохнуть новую жизнь 
    в Вашу любимую мебель!</p>`);
    $('.box__item:nth-child(4) .box-item__text').html(`
    <p>В наше время идеальным решением
    для любого бизнеса является
    обращение в клининговую компанию
    для наведения и поддержания чистоты
    </p>
    
    <p>Комплексное обслуживание позволяет
    Вам забыть о проблемах, связанных
    с уборкой и сосредоточиться
    непосредственно на бизнесе, в том
    числе сократив внутрифирменные
    расходы</p>`);
    $('.box__item:nth-child(5) .box-item__text').html(`
    <p>Хотите любоваться сияющим 
    видом своего дома, коттеджа или
    квартиры?</p>
    
    <p>Мы без разводов и царапин 
    очистим ваши окна, лоджии и 
    другие стеклянные поверхности 
    даже от устойчивых загрязнений 
    с помощью профессиональных 
    безопасных средств и 
    оборудования, а также начисто 
    вымоем рамы и подоконники</p>`);
  }

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

  // Slider в тесте
  let testItemIndex = 0;
  $('.popup-view__btn').on('click', function () {
    if ($(this).index() != testItemIndex) {
      $('.popup-view__btn:nth-child(' + (testItemIndex + 1) + ')').toggleClass('active');
      $(this).toggleClass('active');
      $('.popup-item:nth-child(' + (testItemIndex + 1) + ')').toggleClass('active');
      $('.popup-item:nth-child(' + ($(this).index() + 1) + ')').toggleClass('active');
    }
    testItemIndex = $(this).index();
  })

  //Параллакс эффект кубиков
  // if (document.documentElement.clientWidth > 1750) {
  let cubesScroll = $(window).scrollTop();
  scrollCubes()
  function scrollCubes() {
    scroll = $(this).scrollTop();
    let t_1 = scroll * 0.8;
    let t_2 = scroll * 0.5;
    let t_3 = scroll * 0.3;
    let t_4 = scroll * 0.6;
    let t_5 = scroll * 0.3;
    $('.cubes-item--1').css('top', (-1 * t_1) + 30 + 'px');
    $('.cubes-item--2').css('bottom', t_2 - 20 + 'px');
    $('.cubes-item--3').css('top', (-1 * t_3) + 80 + 'px');
    $('.cubes-item--4').css('top', (-1 * t_3) + 150 + 'px');
    $('.cubes-item--5').css('top', (-1 * t_5) + 500 + 'px');
  }
  $(window).scroll(function (event) {
    scrollCubes()
  });
  // }

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

  // Преобразование полей с номера телефонов
  $('.test-number__send-input input').mask("+7(999) 999 99-99");
  $('.popup-tel').mask("+7(999) 999 99-99");
  $('#test-phone').mask("+7(999) 999 99-99");
  $('.bell-content__phone input').mask("+7(999) 999 99-99");

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
    if ($(e.target).closest('.bell-inner').length == 0) {
      $(this).fadeOut();
    }
  });

  // AJAX отправка обратной связи из PopUP
  $('.phone-popup .bell__btn').on('click', function () {
    var name = $('.' + this + '#name').val().trim();
    var phone = $('#phone').val().trim();

    if (name == "" & phone == "") {
      return false
    } else if (name == "") {
      return false
    } else if (phone == "") {
      return false
    }

    $.ajax({
      url: 'php/mail.php',
      type: 'POST',
      cache: false,
      data: { 'name': name, 'phone': phone },
      dataType: 'html',
      beforeSend: function () {
        // $('#sendMail').prop('disabled', true);
      },
      success: function (data) {
        if (data) {
          $('#phoneForm').trigger('reset');
        }
        // $('#sendMail').prop('disabled', false);
      },
    })
  })

  // AJAX отправка обратной связи из секции
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
  let nowTransform = $('.examples__remove').css('transform');
  $('.examples__remove').on('click', function () {
    if (activeCheck != 0) {
      rotateRemove += 180;
      $(this).css('transform', nowTransform + 'rotate(' + rotateRemove + 'deg)')
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

  // Белый цвет на клик в секции Neon
  $('.neon__item').on('click', function () {
    $(this).addClass('white');
  });

  $('.neon__item').mouseleave(function () {
    $(this).removeClass('white');
  })

  let keyQuestionNow = 1;
  let keyQuestionArr = [];
  $('.test__answer-btn').on('click', function () {
    $(`.test-question--${keyQuestionNow}`).removeClass('active');
    keyQuestionArr.push(keyQuestionNow);

    keyQuestionNow = this.dataset.answer;


    if (keyQuestionNow > 1) {
      $('.test-box').addClass('wide');
      $('.test__btn-back').addClass('active')
    }

    $(`.test-question--${keyQuestionNow}`).addClass('active');
    if ($(`.test-question--${keyQuestionNow}`).hasClass('test__finish')) {
      $('.test__btn-repeat').addClass('active')
      $('.test__btn-back').removeClass('active')
    }
  });

  $('.test__btn-back').on('click', function () {
    $(`.test-question--${keyQuestionNow}`).removeClass('active');
    keyQuestionNow = keyQuestionArr[keyQuestionArr.length - 1]

    $(`.test-question--${keyQuestionNow}`).addClass('active');
    keyQuestionArr = keyQuestionArr.slice(0, -1);


    if (keyQuestionNow == 1) {
      $('.test-box').removeClass('wide');
      $('.test__btn-back').removeClass('active')
    }
  });

  $('.test__btn-repeat').on('click', function () {
    $(`.test-question--${keyQuestionNow}`).removeClass('active');
    keyQuestionArr = keyQuestionArr.slice(0, 1);
    keyQuestionNow = keyQuestionArr[0];

    $(`.test-question--${keyQuestionNow}`).addClass('active');
    $('.test-box').removeClass('wide');
    $('.test__btn-repeat.active').removeClass('active')
  });
  if (document.documentElement.clientWidth < 700) {
    $('.test__finish-text').html('<p>Окончательная стоимость зависит от особенностей помещения, поверхности, времени, сложности и объема работ</p>');
    $('.test__finish .bell__title').html('Предлагаем созввониться и более детально все обсудить');
  }
});

"use strict";

(function () {
  let originalPositions = [];
  let daElements = document.querySelectorAll('[data-da]');
  let daElementsArray = [];
  let daMatchMedia = [];
  //Заполняем массивы
  if (daElements.length > 0) {
    let number = 0;
    for (let index = 0; index < daElements.length; index++) {
      const daElement = daElements[index];
      const daMove = daElement.getAttribute('data-da');
      if (daMove != '') {
        const daArray = daMove.split(',');
        const daPlace = daArray[1] ? daArray[1].trim() : 'last';
        const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
        const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
        const daDestination = document.querySelector('.' + daArray[0].trim())
        if (daArray.length > 0 && daDestination) {
          daElement.setAttribute('data-da-index', number);
          //Заполняем массив первоначальных позиций
          originalPositions[number] = {
            "parent": daElement.parentNode,
            "index": indexInParent(daElement)
          };
          //Заполняем массив элементов 
          daElementsArray[number] = {
            "element": daElement,
            "destination": document.querySelector('.' + daArray[0].trim()),
            "place": daPlace,
            "breakpoint": daBreakpoint,
            "type": daType
          }
          number++;
        }
      }
    }
    dynamicAdaptSort(daElementsArray);

    //Создаем события в точке брейкпоинта
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daBreakpoint = el.breakpoint;
      const daType = el.type;

      daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
      daMatchMedia[index].addListener(dynamicAdapt);
    }
  }
  //Основная функция
  function dynamicAdapt(e) {
    for (let index = 0; index < daElementsArray.length; index++) {
      const el = daElementsArray[index];
      const daElement = el.element;
      const daDestination = el.destination;
      const daPlace = el.place;
      const daBreakpoint = el.breakpoint;
      const daClassname = "_dynamic_adapt_" + daBreakpoint;

      if (daMatchMedia[index].matches) {
        //Перебрасываем элементы
        if (!daElement.classList.contains(daClassname)) {
          let actualIndex = indexOfElements(daDestination)[daPlace];
          if (daPlace === 'first') {
            actualIndex = indexOfElements(daDestination)[0];
          } else if (daPlace === 'last') {
            actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
          }
          daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
          daElement.classList.add(daClassname);
        }
      } else {
        //Возвращаем на место
        if (daElement.classList.contains(daClassname)) {
          dynamicAdaptBack(daElement);
          daElement.classList.remove(daClassname);
        }
      }
    }
    customAdapt();
  }

  //Вызов основной функции
  dynamicAdapt();

  //Функция возврата на место
  function dynamicAdaptBack(el) {
    const daIndex = el.getAttribute('data-da-index');
    const originalPlace = originalPositions[daIndex];
    const parentPlace = originalPlace['parent'];
    const indexPlace = originalPlace['index'];
    const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
    parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
  }
  //Функция получения индекса внутри родителя
  function indexInParent(el) {
    var children = Array.prototype.slice.call(el.parentNode.children);
    return children.indexOf(el);
  }
  //Функция получения массива индексов элементов внутри родителя 
  function indexOfElements(parent, back) {
    const children = parent.children;
    const childrenArray = [];
    for (let i = 0; i < children.length; i++) {
      const childrenElement = children[i];
      if (back) {
        childrenArray.push(i);
      } else {
        //Исключая перенесенный элемент
        if (childrenElement.getAttribute('data-da') == null) {
          childrenArray.push(i);
        }
      }
    }
    return childrenArray;
  }
  //Сортировка объекта
  function dynamicAdaptSort(arr) {
    arr.sort(function (a, b) {
      if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
    });
    arr.sort(function (a, b) {
      if (a.place > b.place) { return 1 } else { return -1 }
    });
  }
  //Дополнительные сценарии адаптации
  function customAdapt() {
    //const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
}());
