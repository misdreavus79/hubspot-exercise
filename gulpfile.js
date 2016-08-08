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
	buffer = require('vinyl-buffer');

gulp.task('clean:css', function(){ //I use Grunt as my task runner,
	del(['./build/css/style.css']);
});

gulp.task('clean:js', function(){ //please forgive me if some of these tasks are not as optimized as they should be
	del(['./build/js/index.js']);
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

gulp.task('sass', ['clean:css'], function() {
    return gulp.src("./src/scss/*.scss")
		    .pipe(sass())
		    .pipe(cssnano())
		    .pipe(gulp.dest("./build/css"))
		    .pipe(browserSync.stream());
});

gulp.task('build', ['clean:js'], function () {
  browserify({
    entries: './src/js/components/Main.jsx',
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify, {presets: ["es2015", "react"]})
  .bundle()
  .pipe(source('index.js'))
  // .pipe(buffer())
  // .pipe(uglify())
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

	//move images as well
	gulp.src("./src/images/*.png")
	.pipe(gulp.dest('./build/images'))
	
	//watch files and perform propper actions
	gulp.watch("./src/scss/*.scss", ['sass']);
	gulp.watch("./src/js/**/*.jsx", ['build']);
    gulp.watch("./build/*.html").on('change', browserSync.reload);
});
