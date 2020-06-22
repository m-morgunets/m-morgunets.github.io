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


  $(document).mousemove(function (e) {
    X = e.pageX; // положения по оси X
    Y = e.pageY; // положения по оси Y
    // console.log("X: " + X + " Y: " + Y); // вывод результата в консоль

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
  });

  var x_letter, y_letter;
  $('#game-letter').mousemove(function (e) {
    e = e || window.event;
    x_letter = e.offsetX == undefined ? e.layerX : e.offsetX;
    y_letter = e.offsetY == undefined ? e.layerY : e.offsetY;
    console.log(x_letter + ' ' + y_letter);

  });

});