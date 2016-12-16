var gulp = require('gulp');
var htmlreplace = require('gulp-html-replace');

gulp.task('default', function() {
  gulp.src('index.html')
    .pipe(htmlreplace({
      'css': 'styles.min.css',
      'js': 'js/bundle.min.js'
    }))
    .pipe(gulp.dest('build/'));
});
