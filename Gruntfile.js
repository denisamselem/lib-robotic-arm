module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        "src/*.js",
        "src/examples/*.js",
        "src/visualisation/*.js"
      ]
    },
    browserify: {
      examples: {
        files: {
          "build/armVisualisation.js": "src/examples/visualisation.js"
        }
      }
    },
    uglify: {

    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint:all', 'browserify:examples']);
  grunt.registerTask('dev', ['browserify:examples']);

};
