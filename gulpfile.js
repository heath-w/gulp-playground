var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var concat = require( 'gulp-concat' );
var clean = require( 'gulp-clean' );

// This is simple example
gulp.task( 'say-hi', function() {
	console.log( 'Hello there!' );
});

// This task compiles .scss files in /app/scss to /app/css
gulp.task( 'sass', [ 'cleanup' ], function() {
	console.log( 'gulp sass' );
	return gulp.src( 'app/scss/*.scss' )
		.pipe( sass() )
		.pipe( gulp.dest( 'app/css' ) );
});

gulp.task( 'concatenate', [ 'sass' ], function() {
	console.log( 'gulp sass concatenate' );
	return gulp.src( 'app/css/*.css' )
		.pipe( concat( 'all.css' ) )
		.pipe( gulp.dest( 'dist/css/' ) );
});

gulp.task( 'cleanup', function() {
	console.log( 'gulp delete older dev/dist-related files' );
	return gulp.src([ 'app/css/*.css', 'dist/css/*.css' ], {read: false})
		.pipe( clean() );
});
	
gulp.task( 'test-chain', [ 'concatenate' ] );