var gulp = require('gulp');
var ftp = require('vinyl-ftp');

/*** PARAMS ***/

var ftpAccess = {
	host: "mgew.vps.infomaniak.com",
	user: "mgew_g4m_staging",
	password: "Cop3fek5eV7koc2e"
};

var connection = ftp.create(ftpAccess);


/*** IMAGES TASKS ***/

gulp.task('deployImages', function () {
	return gulp.src('web/uploads/images/*')
		.pipe(connection.newer('/staging.go4media.ch/web/uploads/images'))
		.pipe(connection.dest('/staging.go4media.ch/web/uploads/images'));
});	// deployImages

