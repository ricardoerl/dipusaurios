module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {                              
      dist: {                            
        options: {                       
          style: 'compressed', // nested, compact, compressed, expanded.
          cacheLocation: 'css/.sass-cache',
          update: true,
          sourcemap: 'none'
        },
        files: {                         
          'css/dipusaurios.min.css': 'css/dipusaurios.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'css/dipusaurios.scss',
        tasks: ['sass']
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};