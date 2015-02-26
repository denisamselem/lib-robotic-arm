var THREE = require('three');

var converters = require('../converters');

function ArmVisualizer(config) {
  var material = new THREE.MeshPhongMaterial({
    color: 0x4500a4,
  });

  var pivot = new THREE.Mesh(new THREE.BoxGeometry(config.PIVOT.SIZE, config.PIVOT.SIZE, config.PIVOT.SIZE), material);
  var rod = new THREE.Mesh(new THREE.BoxGeometry(config.ROD.SIZE, config.ROD.LENGTH, config.ROD.SIZE), material);
  var finger = new THREE.Mesh(new THREE.BoxGeometry(config.FINGER.WIDTH, config.FINGER.HEIGHT, config.PLIER.BASE), material);

  var pedestral = new THREE.Mesh(new THREE.BoxGeometry(config.PEDESTRAL.SIZE, config.PEDESTRAL.SIZE, config.PEDESTRAL.SIZE), material);
  pedestral.position.y = config.PEDESTRAL.SIZE / 2;

  var pivot1 = pivot.clone();
  pivot1.position.y = config.PEDESTRAL.SIZE / 2 + config.PIVOT.SIZE / 2;
  pivot1.rotation.z = 0;
  pedestral.add(pivot1);

  var rod1 = rod.clone();
  rod1.position.y = config.ROD.LENGTH / 2;
  pivot1.add(rod1);

  var pivot2 = pivot.clone();
  pivot2.position.y = config.ROD.LENGTH / 2;
  pivot2.rotation.z = 0 + Math.PI / 2;
  rod1.add(pivot2);

  var rod2 = rod.clone();
  rod2.position.y = config.ROD.LENGTH / 2;
  pivot2.add(rod2);

  var pivot3 = pivot.clone();
  pivot3.position.y = config.ROD.LENGTH / 2;
  pivot3.rotation.z = 0;
  rod2.add(pivot3);

  var plier = new THREE.Mesh(new THREE.BoxGeometry(config.PLIER.BASE, config.PLIER.HEIGHT, config.PLIER.BASE), material);
  plier.position.y = config.PLIER.HEIGHT / 2 + config.PIVOT.SIZE / 2;
  pivot3.add(plier);

  var finger1 = finger.clone();
  finger1.position.x += config.PLIER.BASE / 2;
  finger1.position.y = config.PLIER.HEIGHT / 2 + config.FINGER.HEIGHT / 2;
  plier.add(finger1);
  var finger2 = finger.clone();
  finger2.position.x -= config.PLIER.BASE / 2;
  finger2.position.y = config.PLIER.HEIGHT / 2 + config.FINGER.HEIGHT / 2;
  plier.add(finger2);

  this.mesh = pedestral;
  this.pedestralAngle = pedestral.rotation;
  this.pivot1Angle = pivot1.rotation;
  this.pivot2Angle = pivot2.rotation;
  this.pivot3Angle = pivot3.rotation;
  this.plierAngle = plier.rotation;

  this.config = config;
}

ArmVisualizer.prototype.goToPosition = function(target) {
  var plierPosition = converters.cartesianToRobotSpace(this.config, target);
  var sph = converters.cartesianToSpherical(plierPosition);
  var ang = converters.sphericalToRobotAngles(this.config, sph);

  this.pedestralAngle.y = ang.theta;
  this.pivot1Angle.z = ang.alpha1;
  this.pivot2Angle.z = ang.alpha2 + Math.PI;
  this.pivot3Angle.z = ang.alpha3;
  this.plierAngle.y = ang.theta;
};

module.exports = ArmVisualizer;
