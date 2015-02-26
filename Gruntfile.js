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
          "build/armVisualisation.js": "src/examples/basic.js"
        }
      },
      annimated: {
        files: {
          "build/armVisualisation.js": "src/examples/annimated.js"
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
  grunt.registerTask('annimated-example', ['jshint:all', 'browserify:annimated']);
};
