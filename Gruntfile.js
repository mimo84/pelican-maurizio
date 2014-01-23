'use strict';

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['source/scss/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'autoprefixer']
      },
    },
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: {
          'static/css/style.css': 'source/scss/main.scss'
        }
      }
    },
    uglify: {
      prod: {
        files: {
          '/static/js/main.min.js': ['/source/**/*.js']
        }
      }
    },
    // Add brower vendor specific prefixes
    autoprefixer: {
      options: {
        browsers: ['last 3 version', '> 1%', 'ff > 15', 'ie 8', 'ie 7']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'static/css',
          src: '{,*/}*.css',
          dest: 'static/css/'
        }]
      }
    },
    jsbeautifier: {
      modify: {
        src: ['/source/**/*.js', 'Gruntfile.js'],
        options: {
          config: '.jsbeautifyrc'
        }
      },
      verify: {
        src: ['/source/**/*.js', 'Gruntfile.js'],
        options: {
          // mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    // Hint the JS
    jshint: {
      files: ['/source/**/*.js', 'Gruntfile.js'],
      options: {
        jshintrc: '.jshintrc'
      },
    }
  });

  grunt.registerTask('default', [
    'jsbeautifier',
    'jshint',
    'autoprefixer',
    'watch'
  ]);

};
