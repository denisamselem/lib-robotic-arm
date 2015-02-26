var THREE = require('three');

module.exports = function(target) {
  var box = new THREE.Mesh(new THREE.BoxGeometry(target.width, target.height, target.length), new THREE.MeshPhongMaterial({
    color: 0x5fd338,
  }));
  box.position.x = target.x;
  box.position.y = target.y;
  box.position.z = target.z;
  box.rotation.y = target.rotation;

  return box;
};
