
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'app/css/style.css': 'sass/style.scss'
            }
        }
    },
    watch: {
        css: {
          files: ['./sass/**/*.scss'],
          tasks: ['default']
        },
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
}
