// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
    grunt.initConfig({
          uglify: {
              options: {
                  mangle: false
              },
          build: {
              files: {
                  'inview.min.js': ['inview.js']
              }
          }
      }
    });

    grunt.registerTask('default', 'uglify:build');   

    grunt.loadNpmTasks('grunt-contrib-uglify');
};