var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('script', function() {

  gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
});

gulp.task('styles', function() {
	console.log('Run Styles');
});


gulp.task('watch', function(){
	gulp.watch('js/*.js', ['script']);
});



gulp.task('default', ['script', 'styles', 'watch']);