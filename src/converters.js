module.exports.cartesianToRobotSpace = function(robotConfig, target) {
  return {
    x: target.x,
    y: target.y - robotConfig.PEDESTRAL.SIZE + robotConfig.PLIER.HEIGHT + target.height / 2,
    z: target.z,
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
  if(isNaN(theta)) {
    theta = 0;
  }

  return {
    r: r,
    theta: theta,
    phi: (r === 0) ? 0 : Math.asin(cart.y / r),
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
