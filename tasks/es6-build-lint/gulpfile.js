'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');

/*** CONFIG ***/

const jsSrc = 'js/app.js';
const jsSrcAll = ['js/app.js', 'js/src/*.js'];
const jsDistDir = 'js/dist';

/*** JS TASKS ***/

gulp.task('buildJs', ['lint'], function() {
	browserify({
    	entries: jsSrc,
  	})
    .transform(babelify)
    .on('error',gutil.log)
    .bundle()
    .on('error',gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(jsDistDir));
});

gulp.task('lint', function () {
  return gulp.src(jsSrcAll)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', ['build'], function () {
  gulp.watch(jsSrcAll, ['buildJs']);
});

/*** MAIN TASKS ***/

gulp.task('build', ['buildJs']);

gulp.task('default', ['watch']);
