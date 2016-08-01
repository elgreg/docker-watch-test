var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = {
  "scripts": ['../src/js/*']
}

gulp.task('default', ['scripts']);

gulp.task('scripts', function(){
  return gulp.src(paths.scripts)
    .pipe(jshint())
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function(){
  gulp.watch(paths.scripts, ['scripts']);
});
