'use strict';

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      prod: {
        files: {
          '/static/js/main.min.js': ['/source/**/*.js']
        }
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
    'jshint'
  ]);

};
