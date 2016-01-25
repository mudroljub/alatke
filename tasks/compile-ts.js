var gulp = require('gulp');
var typescript = require('gulp-typescript');
var tscConfig = require('./tsconfig.json');
var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var open = require('open');

var port = 9000;
var srcPaths = 'src/**/*.ts';
var app = connect().use(serveStatic(__dirname));


/*** TASKS ***/

gulp.task('compile', function () {
    var tsResult = gulp
        .src(srcPaths)
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest('dist'));
});


gulp.task('watch', ['compile'], function () {
    gulp.watch(srcPaths, ['compile']);

    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});


/*** DEFAULT ***/

gulp.task('default', ['watch']);
