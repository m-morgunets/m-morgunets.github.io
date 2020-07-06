$(function () {

       let topicNow = localStorage.getItem('topic');
       $(`body`).addClass(topicNow);

       $('.theme').click(function (event) {

              $('body').toggleClass('dark');
              localStorage.setItem('topic', 'dark')

              if (!$('body').is('.dark')) {
                     localStorage.setItem('topic', 'white')
              }
       });

       $('.popup-btn').click(function (event) {
              $('.overlay').fadeIn();
              $('.popup').fadeIn();
              $('#mobile-menu').removeClass('active');
       });

       $('.bg-img').click(function (event) {
              $('.overlay').fadeIn();
              $('.popup').fadeIn();
       });

       $('.bg-product').click(function (event) {
              $('.overlay').fadeIn();
              $('.popup').fadeIn();
       });

       $(document).keydown(function (e) {
              if (e.keyCode === 27) {
                     e.stopPropagation();
                     $('.popup').fadeOut();
              }
       });

       $('.popup').click(function (e) {
              if ($(e.target).closest('.bell-inner').length == 0) {
                     $(this).fadeOut();
              }
       });

       $('.close').click(function (event) {
              $('.overlay').fadeOut();
              $('.popup').fadeOut();
              $('#mobile-menu').removeClass('active');
       });

       $('.sidebar-menu nav ul li a').click(function (event) {
              $('#mobile-menu').removeClass('active');
       });

       $('.overlay').click(function (event) {
              console.log('нажатие');
              $('.popup').fadeOut();
              $('.overlay').fadeOut();

       });

       $('.service-link .popup-btn').click(function (event) {
              $('.overlay').fadeIn();
              $('.popup').fadeIn();
              event.preventDefault()
       });

       $('.mobile-btn').click(function (event) {
              $('#mobile-menu').addClass('active');
       });

       $('.close-case').click(function (event) {
              $('.popup-case').fadeOut();
              $('body').removeClass('noscroll');


       });
       $('.work-items').click(function (event) {
              var el = $(this).attr('id');
              $('.popup-case-' + el).fadeIn();
              $('body').addClass('noscroll');
       });


       $('.menu a:not(.order)').click(function (event) {
              event.preventDefault();
              var link = $(this).attr('href'), el = $(link), scrollTop = el.offset().top;
              $('html, body').animate({
                     scrollTop: scrollTop - 60  // класс объекта к которому приезжаем
              }, 500);
       });


});

