var THREE = require('three');

function SceneLights() {
  var lights = new THREE.Object3D();

  lights.add(new THREE.AmbientLight(0x222222));

  var light1 = new THREE.PointLight(0xffffff);
  light1.position.set(+20, 20, +20);
  lights.add(light1);

  var light2 = new THREE.PointLight(0xffffff);
  light2.position.set(-20, 20, -20);
  lights.add(light2);

  return lights;
}

module.exports = SceneLights;
