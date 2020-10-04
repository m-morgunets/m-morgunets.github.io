let scene, camera, renderer, hlight, room;

function init() {

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd)

  scene = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);

  hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load('untitled.gltf', function (gltf) {
    room = gltf.scene.children[0];
    room.scale.set(0.001, 0.001, 0.001)
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
}

init();