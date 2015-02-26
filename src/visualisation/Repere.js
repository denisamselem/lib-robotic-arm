var THREE = require('three');

function Repere(material) {
  if (material === undefined) {
    material = new THREE.MeshPhongMaterial({
      color: 0x0ddeed,
    });
  }

  var repere = new THREE.Object3D();

  var x = new THREE.Mesh(new THREE.BoxGeometry(10, 1, 1), material);
  x.position.x += 5;
  repere.add(x);

  var y = new THREE.Mesh(new THREE.BoxGeometry(1, 10, 1), material);
  y.position.y += 5;
  repere.add(y);

  var z = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 10), material);
  z.position.z += 5;
  repere.add(z);

  return repere;
}

module.exports = Repere;
