var gulp = require('gulp');
var imagemin = require('gulp-imagemin');


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