'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

/*** JS TASKS ***/

gulp.task('watchJs', function () {
  return gulp.watch('src/js/**', ['buildJs']);
});

gulp.task('buildJs', function () {
  return gulp.src('src/js/**')
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});


/*** COMMON TASKS ***/

gulp.task('default', ['watchJs']);
