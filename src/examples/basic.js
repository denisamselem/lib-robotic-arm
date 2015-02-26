var webGlFactory = require('../visualisation/webGlFactory');
var boxFactory = require('../visualisation/boxFactory.js');
var Arm = require('../Arm');

var target = require('../config/target');
var robotConfig = require('../config/robot');

// ARM IS BUILD AND GO TO TARGET JUST HERE :)
var arm = new Arm(robotConfig);
arm.goToPosition(target);
// THAT'S IT !

var webgl = webGlFactory();
webgl.scene.add(arm.visualisation.mesh);
webgl.scene.add(boxFactory(target));

requestAnimationFrame(render);
function render() {
  webgl.renderer.render(webgl.scene, webgl.camera);
  requestAnimationFrame(render);
}
