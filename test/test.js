'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var JadestylGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous Phpstyl generator!'));

    var prompts = [{
      name: 'title',
      message: 'What is the title of your application?',
      default: 'Hello World'
    },{
      type: 'confirm',
      name: 'jQuery',
      message: 'Would you like jQuery ?',
      default: true
    },{
      type: 'confirm',
      name: 'htmlmin',
      message: 'Would you like minify your html ?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.title = props.title;
      this.jQuery = props.jQuery;
      this.htmlmin = props.htmlmin;

      done();

  var extractGeneratorName = function (_, appname) {
    var slugged = _.slugify(title);
    var match = slugged.match(/^$/);

    if (match && match.length === 2) {
      return match[1].toLowerCase();
  }

  return slugged;
  };
    }.bind(this));
  },

    bower: function () {
        var bower = {
          name: this._.slugify(this.title + '-phpstyl'),
          private: true,
          dependencies: {}
        };

        if (this.jQuery) {
         bower.dependencies.jquery = '1.11.0'
        }

        this.write('bower.json', JSON.stringify(bower, null, 2));
      },

  app: function () {
    this.mkdir('src');
    this.mkdir('src/scripts');
    this.mkdir('src/styles');

    this.template('src/index.php', 'src/index.php');
    this.template('src/scripts/main.js', 'src/scripts/main.js');
    this.template('src/styles/main.styl', 'src/styles/main.styl');
    this.copy('_package.json', 'package.json');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('bowerrc', '.bowerrc');
    this.copy('jshintrc', '.jshintrc');
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('README.md', 'README.md');
  },


  projectfiles: function () {
  }
});

module.exports = JadestylGenerator;