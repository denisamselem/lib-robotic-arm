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

Number.prototype.clamp = function(min, max) {
  return Math.min(Math.max(this, min), max);
};

requestAnimationFrame(render);
var frame = 0;
var SPEED_X = 0.1;
var SPEED_Y = 0.06;
var SPEED_Z = 0.05;
var AMPLITURE = 8;
function render() {
  webgl.renderer.render(webgl.scene, webgl.camera);

  frame ++;

  box.position.x = Math.cos(frame * SPEED_X) * AMPLITURE;
  box.position.y = Math.cos(frame * SPEED_Y) * AMPLITURE + 10;
  box.position.z = Math.sin(frame * SPEED_Z) * AMPLITURE;
  target.x = box.position.x;
  target.y = box.position.y;
  target.z = box.position.z;
  arm.goToPosition(target);

  requestAnimationFrame(render);
}
