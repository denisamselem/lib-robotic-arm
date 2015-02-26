var THREE = require('three');

function Ground() {
  var ground = new THREE.Mesh(new THREE.BoxGeometry(50, 1, 50), new THREE.MeshPhongMaterial({
    color: 0x4b4324,
  }));
  ground.position.y -= 0.5;

  return ground;
}

module.exports = Ground;
