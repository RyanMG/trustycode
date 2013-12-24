module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    coffee: {
      build: {
        expand: true,
        cwd: 'resources/coffeescript',
        src: ['**/*.coffee'],
        dest: 'public/javascript',
        ext: '.js'
      }
    },
    stylus: {
      compile: {
        expand: true,
        cwd: 'resources/stylus',
        src:['**/*.styl'],
        dest: 'public/stylesheets',
        ext: '.css'
      }
    },
    jade: {
      compile: {
        expand: true,
        cwd: 'views/templates',
        src: ['**/*.jade'],
        dest: 'public/templates',
        ext: '.html'
      }
    },
    watch: {
      compileCoffee: {
        files: [ 'resources/coffeescript/**/*.coffee' ],
        tasks: [ 'compileCoffee' ],
        options: {
          livereload: true
        }
      },
      compileStylus: {
        files: [ 'resources/stylus/**/*.styl' ],
        tasks: [ 'compileStylus' ],
        options: {
          livereload: true
        }
      },
      compileJade: {
        files: [ 'views/templates/**/*.jade' ],
        tasks: [ 'compileJade' ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('compileJade', ['jade']);
  grunt.registerTask('compileStylus', ['stylus']);
  grunt.registerTask('compileCoffee', ['coffee']);
  grunt.registerTask('default', ['watch']);
  
};
