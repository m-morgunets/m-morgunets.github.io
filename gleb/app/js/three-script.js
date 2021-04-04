$(function () {

  $('body').append(`
  <div class="cursor"></div>
  <div class="close">close</div>
  `);
  $('.close').on('click', function () {

    setTimeout(() => {
      $('.cursor').fadeOut();
      $('.close').fadeOut();
      $(window).off();
    }, 300);
    setTimeout(() => {
      $('.three-canvas').fadeOut();
      $('body').removeClass('active');
      $('body').removeClass('scrollBlock');
    }, 800);
  })
  $('.content__gallery').on('click', function () {
    if ($(window).width() > 1200) {
      $('body').addClass('active');
      setTimeout(() => {
        $('body').addClass('scrollBlock');
        $('.cursor').fadeIn();
        $('.close').fadeIn();
      }, 300);
      setTimeout(() => {
        $('.three-canvas').fadeIn();
        startThreeScene()
      }, 800);
    }
  });

  function startThreeScene() {


    let animate, nowPosX, nowPosZ, nowRotationY, newPosX, newPosZ, newRotationY, t, dt;
    newRotationY = 0;

    function lerp(a, b, t) { return a + (b - a) * t };
    function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t };
    function cameraAnimate() {

      animate = requestAnimationFrame(cameraAnimate);

      var newX = lerp(nowPosX, newPosX, ease(t));
      var newZ = lerp(nowPosZ, newPosZ, ease(t));
      X = (Number($('.cursor').css('left').slice(0, -2)) - documetWidth / 2) / (documetWidth / 2);
      var rotationY = lerp(nowRotationY, newRotationY - rotate90deg * X, ease(t));
      camera.position.set(newX, 0, newZ);
      camera.rotation.y = rotationY;
      t += dt;
      if (t <= 0 || t >= 1) dt = -dt;
      renderer.render(scene, camera);
      if (t <= 0 || t >= 1) {
        cancelAnimationFrame(animate);
        $(window).on('click', function () {
          pickHelper.clickPick(pickPosition, scene, camera);
        });
      }
    }

    let rotate90deg = Math.PI / 2;
    let documetWidth = window.innerWidth;
    let documetHeight = window.innerHeight;
    camera.rotation.order = 'YXZ';
    let X, Y;

    function mainFuncMousemove(e) {
      setPickPosition(e);

      X = e.clientX;
      Y = e.clientY;
      $('.cursor').css({
        'left': X,
        'top': Y
      })
      X = (X - documetWidth / 2) / (documetWidth / 2);
      Y = (Y - documetHeight / 2) / (documetHeight / 2);

      camera.rotation.x = (-rotate90deg * Y) / 2;
      camera.rotation.y = newRotationY - rotate90deg * X;
      renderer.render(scene, camera);
    }
    $(window).on('mousemove', function (e) {
      mainFuncMousemove(e);
    });


    let objectClick = scene.children[0];
    let indexClick = true;
    let canvas = document.querySelector('.three-canvas');
    class PickHelper {
      constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
      }
      pick(normalizedPosition, scene, camera) {
        if (this.pickedObject) {
          $('.cursor').removeClass('active');
          $('.cursor').removeClass('clickActive');
          this.pickedObject = undefined;
        }

        // проливаем луч через усеченную пирамиду
        this.raycaster.setFromCamera(normalizedPosition, camera);
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
          this.pickedObject = intersectedObjects[0].object;
          if (objectClick == this.pickedObject) {
            $('.cursor').addClass('clickActive');
          }
          $('.cursor').addClass('active');
        }
      }

      clickPick(normalizedPosition, scene, camera) {
        // проливаем луч через усеченную пирамиду
        this.raycaster.setFromCamera(normalizedPosition, camera);
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);

        if (intersectedObjects.length) {
          this.pickedObject = intersectedObjects[0].object;

          newRotationY = this.pickedObject.rotation.y;
          nowPosX = camera.position.x;
          nowPosZ = camera.position.z;
          nowRotationY = camera.rotation.y;
          t = 0;
          dt = 0.02;

          if (objectClick == this.pickedObject) {
            $(window).off('click');
            if (indexClick) {
              newPosX = this.pickedObject.position.x + Math.sin(newRotationY) * 0.55;
              newPosZ = this.pickedObject.position.z + Math.cos(newRotationY) * 0.55;
              indexClick = false;
              $('.cursor').addClass('clickNoActive');
              cameraAnimate();
            } else {
              newPosX = this.pickedObject.position.x + Math.sin(newRotationY);
              newPosZ = this.pickedObject.position.z + Math.cos(newRotationY);
              indexClick = true;
              $('.cursor').removeClass('clickNoActive');
              cameraAnimate();
            }
          } else if (objectClick != this.pickedObject) {
            $('.cursor').removeClass('clickNoActive');
            indexClick = true;
            $(window).off('click');

            newPosX = this.pickedObject.position.x + Math.sin(newRotationY);
            newPosZ = this.pickedObject.position.z + Math.cos(newRotationY);

            cameraAnimate();
            objectClick = this.pickedObject;
          }
        }
      }

    }

    const pickPosition = { x: 0, y: 0 };
    const pickHelper = new PickHelper();
    clearPickPosition();

    function render() {

      pickHelper.pick(pickPosition, scene, camera);

      renderer.render(scene, camera);

      requestAnimationFrame(render);
    }
    render();

    function getCanvasRelativePosition(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * canvas.width / rect.width,
        y: (event.clientY - rect.top) * canvas.height / rect.height,
      };
    }

    function setPickPosition(event) {
      const pos = getCanvasRelativePosition(event);
      pickPosition.x = (pos.x / canvas.width) * 2 - 1;
      pickPosition.y = (pos.y / canvas.height) * -2 + 1;
    }

    function clearPickPosition() {
      pickPosition.x = -100000;
      pickPosition.y = -100000;
    }

    // window.addEventListener('mousemove', setPickPosition);
    $('body').on('click', function () {
      pickHelper.clickPick(pickPosition, scene, camera);
    });
    // window.addEventListener('mouseout', clearPickPosition);
    window.addEventListener('mouseleave', clearPickPosition);

  }

});