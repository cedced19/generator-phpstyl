// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>

var pkg = require('./package.json'),
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  plumber = require('gulp-plumber'),
  rimraf = require('gulp-rimraf'),
  rename = require('gulp-rename'),
  browserify = require('gulp-browserify'),
  uglify = require('gulp-uglify'),
  stylus = require('gulp-stylus'),
  autoprefixer = require('gulp-autoprefixer'),
  csso = require('gulp-csso'),
  through = require('through'),
  path = require('path'),
  htmlmin = require('gulp-htmlmin'),
  isDist = process.argv.indexOf('serve') === -1;

gulp.task('js', ['clean:js'], function () {
  return gulp.src('src/scripts/main.js')
    .pipe(isDist ? through() : plumber())
    .pipe(browserify({ transform: ['debowerify'], debug: !isDist }))
    .pipe(isDist ? uglify() : through())
    .pipe(rename('build.js'))
    .pipe(gulp.dest('dist/build'));
});

gulp.task('html', ['clean:html'], function () {
  return gulp.src('src/**/*.php')
    .pipe(isDist ? through() : plumber())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', ['clean:css'], function () {
  return gulp.src('src/styles/main.styl')
    .pipe(isDist ? through() : plumber())
    .pipe(stylus({
      // Allow CSS to be imported from node_modules and bower_components
      'include css': true,
      'paths': ['./node_modules', './bower_components']
    }))
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(isDist ? csso() : through())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('dist/build'));
});

gulp.task('images', [], function () {
  return gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', function () {
  return gulp.src('dist')
    .pipe(rimraf());
});

gulp.task('clean:html', function () {
  return gulp.src('dist/*.html')
    .pipe(rimraf());
});

gulp.task('clean:js', function () {
  return gulp.src('dist/build/build.js')
    .pipe(rimraf());
});

gulp.task('clean:css', function () {
  return gulp.src('dist/build/build.css')
    .pipe(rimraf());
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.php', ['php']);
  gulp.watch('src/styles/**/*.styl', ['css']);
  gulp.watch('src/images/**/*', ['images']);
  gulp.watch('src/scripts/**/*.js', ['js']);
});

gulp.task('build', ['js', 'html', 'css', 'images']);
gulp.task('serve', ['watch', 'build']);
gulp.task('default', ['build']);
