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

gulp.task('css', ['clean:css'], function() { //I'm assuming this task (css)

});

gulp.task('js', ['clean:js'], function() {

});

gulp.task('ejs', function() {

});

gulp.task('html', function() {

});

gulp.task('serve', function() {

});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['ejs', 'js', 'sass'], function() { //refers to this task (sass)?

});
