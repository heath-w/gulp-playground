var gulp = require( 'gulp' );
var sass = require( 'gulp-sass' );
var concat = require( 'gulp-concat' );

// This is simple example
gulp.task( 'task-name', function() {
	console.log( 'Hello there!' );
});

// This task compiles .scss files in /app/scss to /app/css
gulp.task( 'sass', function() {
	console.log( 'gulp sass' );
	return gulp.src( 'app/scss/*.scss' )
		.pipe( sass() )

		// .pipe( concat( 'dist/css/all.css' ) );
		.pipe( gulp.dest( 'app/css' ) );
});

gulp.task( 'concatenate', function() {
	console.log( 'gulp sass concatenate' );
	return gulp.src( 'app/css/*.css' )
		.pipe( concat( 'all.css' ) )
		.pipe( gulp.dest( 'dist/css/' ) );
});

gulp.task( 'delete-old-css', function() {
	console.log( 'gulp delete older css-related files' );
});
	