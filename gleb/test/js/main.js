$(function () {

  let camera, scene, renderer, geometry, material, mesh, renderObject, allObject;

  init();

  function init() {
    const loadManager = new THREE.LoadingManager();
    const loader = new THREE.TextureLoader(loadManager);

    loadManager.onLoad = () => {
      renderer.render(scene, camera);
      $('.three-canvas').addClass('active');
    };

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1;

    scene = new THREE.Scene();

    allObject = [
      {
        nameImg: 'three-img-3.jpg',
        positionX: 0,
        positionZ: 0,
        rotationY: 0,
      },
      {
        nameImg: 'three-img-1.jpg',
        positionX: 1.3,
        positionZ: 0.54,
        rotationY: -Math.PI / 4,
      },
      {
        nameImg: 'three-img-2.jpg',
        positionX: -1.3,
        positionZ: 0.54,
        rotationY: Math.PI / 4,
      },
    ]

    geometry = new THREE.CubeGeometry(1.5, 0.85, 0.1);

    for (const iterator of allObject) {
      let materials = [
        new THREE.MeshBasicMaterial({ color: 0x242424, flatShading: true }),
        new THREE.MeshBasicMaterial({ color: 0x242424, flatShading: true }),
        new THREE.MeshBasicMaterial({ color: 0x242424, flatShading: true }),
        new THREE.MeshBasicMaterial({ color: 0x242424, flatShading: true }),
        new THREE.MeshBasicMaterial({ map: loader.load('./images/' + iterator.nameImg) }),
        new THREE.MeshBasicMaterial({ color: 0x242424, flatShading: true }),
      ];
      mesh = new THREE.Mesh(geometry, materials);
      scene.add(mesh);
      mesh.position.x = iterator.positionX;
      mesh.position.y = 0;
      mesh.position.z = iterator.positionZ;
      mesh.rotation.x = 0;
      mesh.rotation.y = iterator.rotationY;
      mesh.rotation.z = 0;
    }


    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderObject = document.body.appendChild(renderer.domElement);
    $(renderObject).addClass('three-canvas');

    renderer.render(scene, camera);
  }

  let animate, nowPosX, nowPosZ, nowRotationY, newPosX, newPosZ, newRotationY, t, dt;
  newRotationY = 0;

  function lerp(a, b, t) { return a + (b - a) * t };
  function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t };
  function cameraAnimate() {
    // animate = requestAnimationFrame(cameraAnimate);
    // if (camera.position.x == newPosX && camera.position.z == newPosZ && camera.rotation.y == newRotationY) {
    //   cancelAnimationFrame(animate);
    // }
    // camera.position.x += (newPosX + Math.sin(newRotationY) - nowPosX) / 100;
    // camera.position.z += (newPosZ + Math.cos(newRotationY) - nowPosY) / 100;
    // camera.rotation.y += (newRotationY - nowRotationY) / 100;
    // console.log(Math.cos(newRotationY));
    // renderer.render(scene, camera);

    animate = requestAnimationFrame(cameraAnimate);

    var newX = lerp(nowPosX, newPosX, ease(t));
    var newZ = lerp(nowPosZ, newPosZ, ease(t));
    X = (Number($('.cursor').css('left').slice(0, -2)) - documetWidth / 2) / (documetWidth / 2);
    console.log(Number($('.cursor').css('left').slice(0, -2)));
    var rotationY = lerp(nowRotationY, newRotationY - rotate90deg * X, ease(t));
    camera.position.set(newX, 0, newZ);
    camera.rotation.y = rotationY;
    t += dt;
    if (t <= 0 || t >= 1) dt = -dt;
    renderer.render(scene, camera);
    if (newX == newPosX && newZ == newPosZ) {
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

  $(window).mousemove(function (e) {
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
  })





  let canvas = document.querySelector('.three-canvas');
  class PickHelper {
    constructor() {
      this.raycaster = new THREE.Raycaster();
      this.pickedObject = null;
      this.pickedObjectSavedColor = 0;
    }
    pick(normalizedPosition, scene, camera) {
      if (this.pickedObject) {
        $('.cursor').removeClass('active');
        this.pickedObject = undefined;
      }

      // проливаем луч через усеченную пирамиду
      this.raycaster.setFromCamera(normalizedPosition, camera);
      const intersectedObjects = this.raycaster.intersectObjects(scene.children);
      if (intersectedObjects.length) {
        this.pickedObject = intersectedObjects[0].object;
        $('.cursor').addClass('active');
      }
    }

    clickPick(normalizedPosition, scene, camera) {
      // проливаем луч через усеченную пирамиду
      this.raycaster.setFromCamera(normalizedPosition, camera);
      const intersectedObjects = this.raycaster.intersectObjects(scene.children);
      if (intersectedObjects.length) {
        $(window).off('click');

        this.pickedObject = intersectedObjects[0].object;

        newRotationY = this.pickedObject.rotation.y;
        newPosX = this.pickedObject.position.x + Math.sin(newRotationY);
        newPosZ = this.pickedObject.position.z + Math.cos(newRotationY);

        nowPosX = camera.position.x;
        nowPosZ = camera.position.z;
        nowRotationY = camera.rotation.y;
        t = 0;
        dt = 0.02;
        cameraAnimate()
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
  $(window).on('click', function () {
    pickHelper.clickPick(pickPosition, scene, camera);
  });
  // window.addEventListener('mouseout', clearPickPosition);
  window.addEventListener('mouseleave', clearPickPosition);

});