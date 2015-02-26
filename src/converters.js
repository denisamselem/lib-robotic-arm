module.exports.cartesianToRobotSpace = function(robotConfig, targetConfig, position) {
  return {
    x: position.x,
    y: position.y - robotConfig.PEDESTRAL.SIZE + robotConfig.PLIER.HEIGHT + targetConfig.HEIGHT / 2,
    z: position.z,
  };
};

module.exports.cartesianToSpherical = function(cart) {
  var x2 = (cart.x * cart.x);
  var y2 = (cart.y * cart.y);
  var z2 = (cart.z * cart.z);

  var r = Math.sqrt(x2 + y2 + z2);

  var theta = -Math.acos(cart.x / Math.sqrt(z2 + x2));
  if (cart.z < 0) {
    theta = 2 * Math.PI - theta;
  }

  return {
    r: r,
    theta: theta,
    phi: Math.asin(cart.y / r),
  };
};

module.exports.sphericalToRobotAngles = function(robotConfig, spherical) {
  var alpha2 = 2 * Math.asin(spherical.r / (2 * robotConfig.ROD.LENGTH));
  var alpha1 = spherical.phi - alpha2 / 2;

  return {
    theta: spherical.theta,
    alpha1: alpha1,
    alpha2: alpha2,
    alpha3: -spherical.phi - alpha2 / 2,
  };
};
