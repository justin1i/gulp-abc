var gulp = require('gulp');
var changed = require('gulp-changed');
var jscs = require('gulp-jscs');
var uglify = require('gulp-uglify');

var SRC = 'src/*.js';
var DEST = 'dist';

gulp.task('default', function() {
  return gulp.src(SRC)
          .pipe(changed(DEST))
          //.pipe(jscs())
          .pipe(uglify())
          .pipe(gulp.dest(DEST));
});