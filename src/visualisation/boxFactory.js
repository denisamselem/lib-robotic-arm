var THREE = require('three');

module.exports = function(target, geometry) {
  var box = new THREE.Mesh(new THREE.BoxGeometry(geometry.WIDTH, geometry.HEIGHT, geometry.LENGTH), new THREE.MeshPhongMaterial({
    color: 0x5fd338,
  }));
  box.position.x = target.x;
  box.position.y = target.y;
  box.position.z = target.z;

  return box;
};
