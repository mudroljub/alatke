const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

/*** CONFIG ***/

const sassSrc = 'src/sass/**/*.scss';
const cssDistDir = 'dist/css';

/*** SASS/CSS TASKS ***/

gulp.task('compileSass', function () {
  return gulp.src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssDistDir));
});
