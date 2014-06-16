var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

// Task for minifier the *.png images
gulp.task('imagemin',function () {
	gulp.src('./src/img/*.*')
	.pipe(imagemin(opts))
	.pipe(gulp.dest('./www/img/'))
});




// Task for minifier the *.css files 
gulp.task('minifycss', function() {
    gulp.src('./src/css/*.css')
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./www/css/'))
});

// Task for concat the *.css files 
gulp.task('concatcss', function() {
  gulp.src('./www/css/*.css')
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('./www/css/'))
});


// Task for minifier the *.js files 
gulp.task('minifyjs',function(){
    gulp.src('./src/js/*.js')
    .pipe(jsmin())
    .pipe(gulp.dest('./www/js/'))
});

// Task for concat the *.js files
gulp.task('concatjs', function() {
  gulp.src('./www/js/*.js')
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('./www/js/'))
});


// Taks default gulp! 
gulp.task('default',function(){
    gulp.run('imagemin');
});