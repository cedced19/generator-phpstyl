// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>

module.exports = function(grunt) {

  var config = {
    clean: {
      public: 'public/**/*'
    },
    stylus: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/styles/',
          src: '**/*.styl',
          dest: 'public/styles/',
          ext: '.css'
        }],
        options: {
          compress: false
        }
      }
    },
    coffee: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/scripts/',
          src: '**/*.coffee',
          dest: 'public/scripts/',
          ext: '.js'
        }]
      }
    },
    copy: {
      src: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: [
            'bower_components/**/*',
            'scripts/*.js',
            '*.php',
            'src/styles/*.styl',
            'src/scripts/*.coffee'
          ],
          dest: 'public/'
        }]
      }
    },
    watch: {
      stylus: {
        files: 'src/styles/*.styl',
        tasks: 'stylus'
      },
      coffee: {
        files: '**/*.coffee',
        tasks: 'coffee'
      },
      copy: {
        files: [
          'src/scripts/*.js',
          'src/*.php',
          'src/scripts/*.coffee',
          'src/styles/*.styl'
        ],
        tasks: 'copy:src'
      },
      public: {
        files: [
          'public/**/*',
          '!public/bower_components/**/*'
        ],
        options: {
          livereload: 35729
        }
      }
    },
    concurrent: {
      compile: {
        tasks: [
          'stylus',
          'coffee',
          'copy'
        ],
        options: {
          logConcurrentOutput: false
        }
      },
      server: {
        tasks: [
          'watch:stylus',
          'watch:coffee',
          'watch:copy',
          'watch:public'
        ],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    useminPrepare: {
      html: 'public/index.php',
      options: {
        dest: 'public'
      }
    },
    usemin: {
      html: 'public/index.php'
    },
    'gh-pages': {
      public: {
        options: {
          base: 'public',
          message: 'Generated by generator-phpstyl'
        },
        src: '**/*'
      }
    }<% if (htmlmin) { %>,
    htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'public/index.html': 'public/index.html'
          }
      }
    }
  <% } %>
  };

  grunt.initConfig(config);

  // Load all Grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['compile', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin'<% if (htmlmin) { %>, 'htmlmin'<% } %>])
  grunt.registerTask('compile', ['clean', 'concurrent:compile']);
  grunt.registerTask('server', ['compile', 'concurrent:server']);
  grunt.registerTask('deploy', ['default', 'gh-pages:public']);

};
