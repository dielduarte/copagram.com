var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// Task for minifier the *.png images
gulp.task('imagemin',function () {
	gulp.src('./img/*.*')
	.pipe(imagemin(opts))
	.pipe(gulp.dest('./img/'))
});

// Taks default gulp! 
gulp.task('default',function(){
	gulp.run('imagemin');
});


// Task for minifier the *.css files 
gulp.task('minifycss', function() {
    gulp.src('./src/css/*.css')
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./src/css/'))
});

// Task for concat the *.css files 
gulp.task('concatcss', function() {
  gulp.src('./src/css/*.css')
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('./www/css/'))
});