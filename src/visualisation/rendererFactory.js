var THREE = require('three');

function webglAvailable() {
  try {
    var canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

module.exports = function() {
  if (webglAvailable()) {
    return new THREE.WebGLRenderer({
      antialias: true
    });
  } else {
    return new THREE.CanvasRenderer();
  }
};
