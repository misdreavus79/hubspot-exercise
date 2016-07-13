var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	source = require('vinyl-source-stream'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	concat = require('gulp-concat'),
	ejs = require('gulp-ejs');

 

gulp.task('clean:css', function(){ //I use Grunt as my task builder,

});

gulp.task('clean:js', function(){ //please forgive me if some of these tasks are not as optimized as they should be

});

gulp.task('css', ['clean:css'], function() { //I'm assuming this task (css)

});

gulp.task('js', ['clean:js'], function() {

});

gulp.task('ejs', function() {
	gulp.src("./src/views/pages/*.ejs")
	.pipe(ejs()) //pass the ext: html option if you want to output html
	.pipe(gulp.dest("./build"));
});

gulp.task('html', function() {

});

gulp.task('serve', function() {

});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['ejs', 'js', 'sass'], function() { //refers to this task (sass)?

});
