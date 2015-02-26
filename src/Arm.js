var ArmVisualizer = require('./visualisation/ArmVisualizer');

var Arm = function(config) {
  this.visualisation = new ArmVisualizer(config);
};

Arm.prototype.goToPosition = function(target) {
  this.visualisation.goToPosition(target);
};

module.exports = Arm;
