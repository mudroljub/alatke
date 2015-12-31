'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var ftp = require('vinyl-ftp');


/*** PARAMS ***/

var stagingAccess = {
	host: "staging.prager-dreifuss.com",
	user: "webmaster@prager-dreifuss.com",
	password: "R1pUnQlj++"
};

var liveAccess = {
	host: "prager-dreifuss.com",
	user: "all@prager-dreifuss.com",
	password: "UJxnUVsr"
};

var stagingPaths = {
	themeRoot: 'wp-content/themes/prager',
	themeJs: 'wp-content/themes/prager/js'
};

var livePaths = {
	themeRoot: 'www/pragerdr.myhostpoint.ch/wp-content/themes/prager',
	themeJs: 'www/pragerdr.myhostpoint.ch/wp-content/themes/prager/js'
};

// set staging or live
var connection = ftp.create(liveAccess);
var paths = livePaths;


/*** CSS TASKS ***/

gulp.task('watchCss', function () {
	gulp.watch('css/dev/*.css', ['uglifyCss', 'buildWpStyle', 'deployCss']);
}); // watchCss

gulp.task('concatCss', function () {
	return gulp.src('css/dev/*.css')
		.pipe(concat('style.css'))
		.pipe(gulp.dest('css/dist'));
}); // concatCss

gulp.task('uglifyCss', ['concatCss'], function () {
	return gulp.src('css/dist/style.css')
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
		.pipe(minifyCSS())
		.pipe(rename('minified.css'))
		.pipe(gulp.dest('css/dist'));
}); // uglifyCss

gulp.task('buildWpStyle', ['uglifyCss'], function () {
	return gulp.src(['css/style-info.css', 'css/dist/minified.css'])
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./'));
}); // buildWpStyle

gulp.task('deployCss', ['uglifyCss', 'buildWpStyle'], function () {
	return gulp.src('style.css')
		.pipe(connection.newer(paths.themeRoot)) // only if newer
		.pipe(connection.dest(paths.themeRoot));
}); // deployCss


/*** JS TASKS ***/

gulp.task('watchJs', function () {
	gulp.watch('js/dev/**', ['buildJs', 'deployJs']);
});

gulp.task('buildJs', function () {
	gulp.src('js/dev/**')
		.pipe(uglify())
		.pipe(gulp.dest('js/dist'));
});

gulp.task('deployJs', function () {
	return gulp.src('js/**/*')
		.pipe(connection.newer(paths.themeJs))
		.pipe(connection.dest(paths.themeJs));
});


/*** PHP TASKS ***/

gulp.task('watchPhp', function () {
	gulp.watch('**/*.php', ['deployPhp']);
});

gulp.task('deployPhp', function () {
	return gulp.src('**/*.php')
		.pipe(connection.newer(paths.themeRoot))
		.pipe(connection.dest(paths.themeRoot));
});


/*** COMMON TASKS ***/

gulp.task('deployAll', ['deployCss', 'deployJs', 'deployPhp']);

gulp.task('default', ['watchCss', 'watchJs', 'watchPhp']);
