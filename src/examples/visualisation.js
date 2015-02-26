var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE);

var Arm = require('../Arm');
var Repere = require('../visualisation/Repere');
var Ground = require('../visualisation/Ground');
var SceneLights = require('../visualisation/SceneLights');
var rendererFactory = require('../visualisation/rendererFactory');
var boxFactory = require('../visualisation/boxFactory.js');

var robotConfig = require('../config/robot');
var targetConfig = require('../config/target');

var renderer = null,
  scene = null,
  camera = null;

var target = {
  x: Math.random() * 20 - 10,
  y: Math.random() * 20,
  z: Math.random() * 20 - 10,
};

function initScene() {
  var width = window.innerWidth,
    height = window.innerHeight;

  scene = new THREE.Scene();

  scene.add(new Ground());
  scene.add(new Repere());
  scene.add(new SceneLights());
  scene.add(boxFactory(target, targetConfig));

  // HERE WE GO FOR ROBOTIC ARM
  var arm = new Arm(robotConfig);
  scene.add(arm.visualisation.mesh);
  arm.goToPosition(target, targetConfig);
  // END OF ROBOTIC ARM CONFIG AND ACTION

  renderer = rendererFactory();
  renderer.setSize(width, height);
  renderer.setClearColor(0xFFFFFF, 1.0);
  $("#appContainer").append(renderer.domElement);

  camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
  camera.position.set(20, 20, 20);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  scene.add(camera);

  var controls = new OrbitControls(camera);

  requestAnimationFrame(render);
}

function render() {
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

window.onload = initScene;
