$(function () {

  let windowWidth = $(window).width();
  let windowHeight = $(window).height();
  let X, Y;
  let hairLineOffset = $('.hair-line').offset();
  let hairLineOffsetLeft = hairLineOffset.left;

  let hairAdditionOffset = $('.hair-addition').offset();
  let hairAdditionOffsetLeft = hairAdditionOffset.left;

  let faceBoxOffset = $('.face-box').offset();
  let faceBoxOffsetTop = faceBoxOffset.top;
  let faceBoxOffsetLeft = faceBoxOffset.left;

  let eyesOffset = $('.face-pupil').offset();
  let eyesOffsetTop = eyesOffset.top;
  let eyesOffsetLeft = eyesOffset.left;

  setTimeout(mousemoveOn, 1000)
  function mousemoveOn() {
    $('.face-sleepEye').css('opacity', 0)
    setTimeout(() => {
      $(document).mousemove(function (e) {
        X = e.pageX;
        Y = e.pageY;
        if (X<(windowWidth/2)-600) {
          X = (windowWidth/2)-600;
        }
        if (X>(windowWidth/2)+600) {
          X = (windowWidth/2)+600;
        }
        mouseMove()
      });
    }, 500)
  }

  let offEyeRandom = randomInteger(3, 7) * 1000;
  setTimeout(wink, offEyeRandom)

  function wink() {
    offEyeRandom = randomInteger(3, 7) * 1000
    $('.face-sleepEye').css('opacity', 1)

    setTimeout(() => {
      $('.face-sleepEye').css('opacity', 0)
    }, 150);
    setTimeout(wink, offEyeRandom)
  };



  function mouseMove() {
    let hairLine = (hairLineOffsetLeft - X) / 25 + 60;
    let hairAddition = -(hairAdditionOffsetLeft - X) / 25 + 55;
    let faceBoxTop = -(faceBoxOffsetTop - Y) / 25 + 50;
    let faceBoxLeft = -(faceBoxOffsetLeft - X) / 25 + 37;
    let eyesTop = -(eyesOffsetTop - Y) / 40 + 30;
    let eyesLeft = -(eyesOffsetLeft - X) / 40 + 30;
    let headBoxTop = -(eyesOffsetTop - Y) / 20;
    let headBoxLeft = -(eyesOffsetLeft - X) / 70 + 48;
    let faceLeftEars = (eyesOffsetLeft - X) / 150;
    let faceRightEars = -(eyesOffsetLeft - X) / 150;



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