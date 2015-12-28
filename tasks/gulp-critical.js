var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var penthouse = require('penthouse');
var fs = require('fs');

var pages = {
	home: 'http://staging.prager-dreifuss.com',
	about: 'http://staging.prager-dreifuss.com/en/about-us/',
	lawyers: 'http://staging.prager-dreifuss.com/en/lawyers/',
	singleLawyer: 'http://staging.prager-dreifuss.com/en/lawyer/marino-baldi/',
	expertise: 'http://staging.prager-dreifuss.com/en/expertise/',
	newsAndPubs: 'http://staging.prager-dreifuss.com/en/news-publications/',
	contact: 'http://staging.prager-dreifuss.com/en/contact/'
};

/*** CRITICAL TASKS ***/

gulp.task('criticalAll', function () {
	Object.keys(pages).forEach(function(page) {
		penthouse({
			url: pages[page],
			css: 'css/dist/style.css',
			width: 400,		// viewport width
			height: 800		// viewport height
		}, function (err, data) {
			if(err) console.log(err);
			console.log(page);
			fs.writeFile('css/critical/pages/'+ page +'.css', data);
		});
	});	// end forEach
});

gulp.task('criticalMin', function () {
	return gulp.src('css/critical/pages/*.css')
		.pipe(minifyCSS())
		.pipe(gulp.dest('css/critical/min'));
}); // criticalMin
