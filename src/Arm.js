var ArmVisualizer = require('./visualisation/ArmVisualizer');

var Arm = function(config) {
  this.visualisation = new ArmVisualizer(config);
};

Arm.prototype.goToPosition = function(target, targetConfig) {
  this.visualisation.goToPosition(target, targetConfig);
};

module.exports = Arm;
