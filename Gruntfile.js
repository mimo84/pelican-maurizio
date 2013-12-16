'use strict';

module.exports = function (grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    prod: {
      files: {
        '/static/js/main.min.js': [
        '/source/**/*.js'
        ]
      }
    }
  },
  jsbeautifier: {
      modify: {
        src: '/source/**/*.js',
        options: {
          config: '.jsbeautifyrc'
        }
      },
      verify: {
        src: '/source/**/*.js',
        options: {
          // mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    // Hint the JS
    jshint: {
      files: '/source/**/*.js',
      options: {
        jshintrc: '.jshintrc'
      },
    },

};

