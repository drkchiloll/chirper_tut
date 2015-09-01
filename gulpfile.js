var gulp = require('gulp'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber');

gulp.task('browserify', function() {
  gulp.src('src/main.js')
    .pipe(plumber())
    .pipe(browserify({transform : 'reactify', debug : true}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['browserify']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
});
