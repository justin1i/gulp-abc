var gulp = require('gulp');
var del = require('del');
var stripDebug = require('gulp-strip-debug');
var vinylPaths = require('vinyl-paths');


/**
 * 删除文件和文件夹
 */
gulp.task('clean:mobile', function(cb){
  del([
    'dist/report.csv',
    'dist/mobile/**/*',
    '!dist/mobile/deploy.json'
  ], cb);
});

gulp.task('clean:tmp', function() {
  return gulp.src('tmp/*')
    .pipe(stripDebug())
    .pipe(gulp.dest('dist'))
    .pipe(vinylPaths(del));
});


/**
 * 执行
 */
gulp.task('default', ['clean:mobile', 'clean:tmp']);