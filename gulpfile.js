var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	source = require('vinyl-source-stream'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	ejs = require('gulp-ejs'),
	browserSync = require("browser-sync").create(),
	gutil = require('gulp-util'),
	json = require('./src/js/data/data.json'); //simply reading the data in, unless there's a requirement to load it asynchronously

gulp.task('clean:css', function(){ //I use Grunt as my task runner,

});

gulp.task('clean:js', function(){ //please forgive me if some of these tasks are not as optimized as they should be

});

gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
		    .pipe(sass())
		    .pipe(gulp.dest("./build/css"))
		    .pipe(browserSync.stream());
});

gulp.task('css', ['clean:css'], function() { 

});

gulp.task('js', ['clean:js'], function() {

});

gulp.task('ejs', function() {
	return gulp.src("./src/views/pages/*.ejs")
			.pipe(ejs(
			{
				data: json
			}, 
			{
				ext: '.html' //compile into html 
			}
			)).on('error', gutil.log)
			.pipe(gulp.dest("./build"));
});

gulp.task('html', function() {
	//not really using this since 
	//I'm compiling to html from the get go
});

gulp.task('serve', function() {
	browserSync.init({
        server: "./build"
    });
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['ejs', 'js', 'sass', 'serve'], function() { 

	//watch files and perform propper actions
	gulp.watch("./src/scss/*.scss", ['sass']);
	gulp.watch("./src/views/**/*.ejs", ['ejs']);
    gulp.watch("./build/*.html").on('change', browserSync.reload);
});
