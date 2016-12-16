var gulp = require('gulp');
var header = require('gulp-header');
var footer = require('gulp-footer');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var cached = require('gulp-cached');
var remember = require('gulp-remember');


/**
 * 增量打包
 */
var scriptsGlob = 'src/**/*.js';
gulp.task('scripts', function() {
  return gulp.src(scriptsGlob)
    .pipe(cached('scripts'))
    .pipe(jshint())
    .pipe(header('(function () {'))
    .pipe(footer('})();'))
    .pipe(remember('scripts'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/'));
});

gulp.task('watch', function() {
  var watcher = gulp.watch(scriptsGlob, ['scripts']);
  watcher.on('change', function(event) {
    if(event.type === 'deleted') {
      delete cached.caches.scripts[event.path];
      remember.forget('scripts', event.path);
    }
  });
});
