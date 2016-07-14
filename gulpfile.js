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
	gutil = require('gulp-util');

gulp.task('clean:css', function(){ //I use Grunt as my task runner,

});

gulp.task('clean:js', function(){ //please forgive me if some of these tasks are not as optimized as they should be

});

gulp.task('css', ['clean:css'], function() { 
	//since sass task was being called below, I made a sass task above to match (instead of changing this task to sass)
});

gulp.task('js', ['clean:js'], function() {
	//using build task below to bundle files
});

gulp.task('html', function() {
	//task not needed due to using React commponents
});

gulp.task('ejs', function() {
	return gulp.src("./src/views/pages/*.ejs")
			.pipe(ejs({},
			{
				ext: '.html' //compile into html 
			}
			)).on('error', gutil.log)
			.pipe(gulp.dest("./build"));
});

gulp.task('sass', function() {
    return gulp.src("./src/scss/*.scss")
		    .pipe(sass())
		    .pipe(gulp.dest("./build/css"))
		    .pipe(browserSync.stream());
});

gulp.task('build', function () {
  browserify({
    entries: './src/js/components/Main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('index.js'))
  .pipe(gulp.dest('./build/js'));
});

gulp.task('serve', function() {
	browserSync.init({
        server: "./build"
    });
});

// The default task (called when we run `gulp` from cli)
gulp.task('default', ['ejs', 'build', 'sass', 'serve'], function() { 

	//move the data file to the build directory
	gulp.src("./src/js/data/data.json")
	.pipe(gulp.dest('./build/js/data'))
	
	//watch files and perform propper actions
	gulp.watch("./src/scss/*.scss", ['sass']);
	gulp.watch("./src/js/**/*.jsx", ['build']);
    gulp.watch("./build/*.html").on('change', browserSync.reload);
});
