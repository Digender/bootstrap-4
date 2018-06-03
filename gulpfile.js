const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const gulpSass = require('gulp-sass');


gulp.task('sass', function() {
	return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
		.pipe(gulpSass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src([
	'node_modules/bootstrap/dist/js/bootstrap.min.js',
	'node_modules/jquery/dist/jquery.min.js',
	'node_modules/tether/dist/js/tether.min.js',
	])
	  .pipe(sass())
	  .pipe(gulp.dest('src/js'))
	  .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'],function() {
	browserSync.init({
		server: './src',
	});
	gulp.watch([
		'node_modules/bootstrap/scss/bootstrap.scss',
		'src/scss/*.scss'
	], ['sass']);
	gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['js', 'serve']);