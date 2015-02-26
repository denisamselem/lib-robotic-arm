var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);

var Ground = require('../visualisation/Ground');
var Repere = require('../visualisation/Repere');
var SceneLights = require('../visualisation/SceneLights');
var rendererFactory = require('../visualisation/rendererFactory');

function initScene() {
  var width = window.innerWidth,
    height = window.innerHeight;

  var scene = new THREE.Scene();

  scene.add(new Ground());
  scene.add(new Repere());
  scene.add(new SceneLights());

  var renderer = rendererFactory();
  renderer.setSize(width, height);
  renderer.setClearColor(0xFFFFFF, 1.0);
  $("#appContainer").append(renderer.domElement);

  var camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
  camera.position.set(20, 20, 20);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  var controls = new OrbitControls(camera);

  return {
    renderer: renderer,
    scene: scene,
    camera: camera,
    render: function() {
      renderer.render(scene, camera);
    }
  };
}

module.exports = initScene;
