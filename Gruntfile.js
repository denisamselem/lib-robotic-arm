module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        "src/*.js",
        "src/config/*.js",
        "src/examples/*.js",
        "src/visualisation/*.js"
      ]
    },
    browserify: {
      basic: {
        files: {
          "src/examples/build/app.js": "src/examples/basic.js"
        }
      },
      animated: {
        files: {
          "src/examples/build/app.js": "src/examples/animated.js"
        }
      },
    },
    uglify: {

    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint:all']);
  grunt.registerTask('basic-example', ['jshint:all', 'browserify:basic']);
  grunt.registerTask('animated-example', ['jshint:all', 'browserify:animated']);
};
