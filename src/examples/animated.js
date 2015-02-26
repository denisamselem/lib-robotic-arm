var webGlFactory = require('../visualisation/webGlFactory');
var boxFactory = require('../visualisation/boxFactory.js');
var Arm = require('../Arm');

var target = require('../config/target');
var robotConfig = require('../config/robot');

var arm = new Arm(robotConfig);
var box = boxFactory(target);

var webgl = webGlFactory();
webgl.scene.add(arm.visualisation.mesh);
webgl.scene.add(box);

var SPEED_X = 0.01;
var SPEED_Y = 0.06;
var SPEED_Z = 0.05;
var SPEED_R = 0.02;
var AMPLITURE = 8;

requestAnimationFrame(render);
var frame = 0;
function render() {
  webgl.render();

  frame ++;

  box.position.x = Math.cos(frame * SPEED_X) * AMPLITURE;
  box.position.y = Math.cos(frame * SPEED_Y) * AMPLITURE + 10;
  box.position.z = Math.sin(frame * SPEED_Z) * AMPLITURE;
  box.rotation.y = Math.sin(frame * SPEED_R) * Math.PI;

  target.x = box.position.x;
  target.y = box.position.y;
  target.z = box.position.z;
  target.rotation = box.rotation.y;

  // ARM GO TO TARGET JUST HERE :)
  arm.goToPosition(target);
  // THAT'S IT !

  requestAnimationFrame(render);
}
