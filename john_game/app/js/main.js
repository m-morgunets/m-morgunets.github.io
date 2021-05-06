$(function () {

  let windowHeight = $(window).height();
  let X, Y;
  let hairLineOffset;
  let hairLineOffsetLeft;

  let hairAdditionOffset;
  let hairAdditionOffsetLeft;

  let faceBoxOffset;
  let faceBoxOffsetTop;
  let faceBoxOffsetLeft;

  let eyesOffset;
  let eyesOffsetTop;
  let eyesOffsetLeft;
  let containeroffsetLeft;
  let timeoutWink, timeoutShot, requestId, timeoutWinkMore;
  let score, hpVal;

  $('.start-btn').on('click', function () {

    $('body').addClass('start');
    hpVal = 100;
    $('.hp__container-fill').css('width', hpVal+'%');
    score = 0;
    $('.score span').html(score);
    $('.hp__container-fill').css('background-color', '#0075ff');
    $('.count').addClass('active');
    $('.gameover').fadeOut(300);

    setTimeout(mousemoveOn, 1000)
    function mousemoveOn() {
      $('.face-sleepEye').css('opacity', 0);
      
      hairLineOffset = $('.hair-line').offset();
      hairLineOffsetLeft = hairLineOffset.left;

      hairAdditionOffset = $('.hair-addition').offset();
      hairAdditionOffsetLeft = hairAdditionOffset.left;

      faceBoxOffset = $('.face-box').offset();
      faceBoxOffsetTop = faceBoxOffset.top;
      faceBoxOffsetLeft = faceBoxOffset.left;

      eyesOffset = $('.face-pupil').offset();
      eyesOffsetTop = eyesOffset.top;
      eyesOffsetLeft = eyesOffset.left;


      setTimeout(() => {
        $(document).on('mousemove', function (e) {
          X = e.pageX;
          Y = e.pageY;
          if (X>750) {
            X = 750;
          }
          mouseMove()
        });
        containeroffsetLeft = $('.head-box').offset().left +  310;
      }, 500)
    }

    let i = 5;
    $('.count').html(i)
    let interval = setInterval(() => {
      if(i == 0){
        clearInterval(interval);
        $('.count').removeClass('active');
      } else{
        $('.count').html(--i);
      }
    }, 1000);

  
    let offEyeRandom = randomInteger(3, 7) * 1000;
    timeoutWink = setTimeout(wink, offEyeRandom);

    setTimeout(() => {
      // intervalShot = setInterval(() => {
      //   let shotsItemTop = randomInteger($('.container').offset().top, $('.container').offset().top + $('.container').height());
      //   $('.shots').append('<div class="shots-item"></div>');
      //   $('.shots-item:last-child').css('top', shotsItemTop + 'px')
      // }, 1000 - score*2);
      timeoutShot = setTimeout(funcTimeoutShot, (1000 - score*2));
      requestId = requestAnimationFrame(shotFly);
      $('.wall').fadeIn(300);
    }, 6000);
    
  })

  function wink() {
    offEyeRandom = randomInteger(3, 7) * 1000;
    $('.face-sleepEye').css('opacity', 1);

    timeoutWinkMore = setTimeout(() => {
      $('.face-sleepEye').css('opacity', 0)
    }, 150);
    timeoutWink = setTimeout(wink, offEyeRandom);
  };

  function funcTimeoutShot() {
    newShot();
    timeoutShot = setTimeout(funcTimeoutShot, (1000 - score*2));
  }

  function newShot() {
    let shotsItemTop = randomInteger($('.container').offset().top, $('.container').offset().top + $('.container').height());
    $('.shots').append('<div class="shots-item"></div>');
    $('.shots-item:last-child').css('top', shotsItemTop + 'px');
  }

  function shotFly() {
    for (const iterator of $('.shots-item')) {
      let itrLeft = $(iterator).offset().left;
      let itrTop = $(iterator).offset().top;

      let wallLeft = $('.wall').offset().left;
      let wallTop = $('.wall').offset().top;

      if(itrLeft >= wallLeft && itrLeft <= wallLeft + 30 && itrTop >= wallTop - 15 && itrTop <= wallTop + 165){
        $(iterator).remove();
        $('.score span').html(++score);
      }

      if(itrLeft <= containeroffsetLeft){
        $(iterator).remove();
        hpVal = hpVal - 10;
        console.log(hpVal);
        $('.hp__container-fill').css('width', hpVal+'%');
        if(hpVal == 30){
          $('.hp__container-fill').css('background-color', 'red');
        }
      }

      let thisRight = $(iterator).css('right').slice(0, -2);
      thisRight = Number(thisRight) + 3 + (3 * score/50);
      $(iterator).css('right', thisRight + 'px');
    }
    requestId = requestAnimationFrame(shotFly);
    if(hpVal == 0){
      $('.shots').empty();
      $(document).off();
      clearTimeout(timeoutWink);
      clearTimeout(timeoutShot);
      cancelAnimationFrame(requestId);
      $('.face-sleepEye').css('opacity', 1);
      $('.wall').fadeOut(300);
      $('body').removeClass('start');
      $('.start-btn.first').css('display', 'none');
      $('.gameover').fadeIn(300);

    }
  }


  function mouseMove() {
    $('.wall').css('top', Y)

    let hairLine = (hairLineOffsetLeft - X) / 25 + 60;
    let hairAddition = -(hairAdditionOffsetLeft - X) / 25 + 55;
    let faceBoxTop = -(faceBoxOffsetTop - Y) / 25 + 50;
    let faceBoxLeft = -(faceBoxOffsetLeft - X) / 25 + 37;
    let eyesTop = -(eyesOffsetTop - Y) / 40 + 30;
    let eyesLeft = -(eyesOffsetLeft - X) / 40 + 30;
    let headBoxTop = -(eyesOffsetTop - Y) / 20;
    let headBoxLeft = -(eyesOffsetLeft - X) / 100 + 48;
    let faceLeftEars = (eyesOffsetLeft - X) / 200;
    let faceRightEars = -(eyesOffsetLeft - X) / 200;



    $('.hair-line').css('right', `${hairLine}px`);
    $('.hair-addition').css('left', `${hairAddition}px`);
    $('.face-leftEars').css('left', `${faceLeftEars}px`)
    $('.face-rightEars').css('right', `${faceRightEars}px`)

    $('.face-box').css(
      {
        'top': `${faceBoxTop}px`,
        'left': `${faceBoxLeft}px`
      }
    );

    $('.face-pupil').css(
      {
        'top': `${eyesTop}px`,
        'left': `${eyesLeft}px`
      }
    );

    $('.head-box').css(
      {
        'top': `${headBoxTop}px`,
        'left': `${headBoxLeft}px`
      }
    )
    $('.face-addition').css('left', `${headBoxLeft}px`)
  }

  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return rand;
  }

});