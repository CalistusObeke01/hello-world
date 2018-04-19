var gulp = require('gulp'),
	uglify = require('gulp-uglify')
	browserify = require('gulp-browserify'),
	browserSync = require('browser-sync').create();



// from browsersync.io
// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('html-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});


// use default task to launch Browsersync and watch JS files
/*gulp.task('default', ['js'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
});*/


gulp.task('browser-syn', function() {
	// var files = [
	// 	"framework/css/**/*.css",
	// 	"framework/images/**/*.jpg",
	// 	"framework/minjs/**/*.js",
	// 	"framework/**/*.html"
	// ]

	browserSync.init( 
	{
		server: {
            baseDir: "./"
        }
	})

	gulp.watch("/*.html", ['html-watch'])
})


gulp.task('css-watch', function(){

   gulp.watch('css/*.css').on('change', browserSync.reload)
});

gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("/*.html").on("change", browserSync.reload);
});

gulp.task('default', ['css-watch', 'serve']); 