// Blacklist    https://github.com/gulpjs/plugins/blob/master/src/blackList.json
var gulp = require('gulp'),
	jade = require('gulp-jade'),
	pug = require('gulp-pug'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	rename = require("gulp-rename"),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	mini = require('gulp-clean-css'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	imagemin = require('gulp-imagemin'),
	runSequence = require('run-sequence');


var path = 'devel/';

var prefix = {
	browsers: ['last 10 versions'],
	cascade: false
}




///////////////////////////////////////////////////////////////////////////////////////
//									PUG
///////////////////////////////////////////////////////////////////////////////////////
gulp.task('html', function() {
	return gulp.src(path + 'code/*.{pug,jade}')
		.pipe(plumber())
		.pipe(pug({
			pretty: true
		})) //pretty - древовидная структура
		.pipe(gulp.dest(path))
});


///////////////////////////////////////////////////////////////////////////////////////
//									SASS
///////////////////////////////////////////////////////////////////////////////////////
gulp.task('sass', function() {
	return gulp.src(path + 'code/*.{scss,sass}')
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(prefix))
		.pipe(gulp.dest(path + 'css/'))
});

gulp.task('css:min', function() {
	return gulp.src([path + 'css/*.css', '!' + path + 'css/*.min.css'])
		.pipe(mini())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest(path + 'css/'))
});

gulp.task('Sass', function() {
	runSequence('sass', 'css:min');
});


///////////////////////////////////////////////////////////////////////////////////////
//									JAVASCRIPT
///////////////////////////////////////////////////////////////////////////////////////
gulp.task('js', function() {
	return gulp.src(path + 'code/*.js')
		.pipe(gulp.dest(path + 'js/'))
});


///////////////////////////////////////////////////////////////////////////////////////
//									IMAGE MIN
///////////////////////////////////////////////////////////////////////////////////////
gulp.task('imgMin', function() {
	return gulp.src(path + 'images/**/*.{png,jpg}')
		.pipe(imagemin())
		.pipe(gulp.dest(path + 'images/'))
});



///////////////////////////////////////////////////////////////////////////////////////
//									SERVER
///////////////////////////////////////////////////////////////////////////////////////
gulp.task('server', function() {
	browserSync({
		port: 9000,
		server: {
			baseDir: path
		}
	});
});


///////////////////////////////////////////////////////////////////////////////////////
// 									WATCHING
///////////////////////////////////////////////////////////////////////////////////////
gulp.task('watching', function() {
	gulp.watch(path + '**/*.{html,css,js}').on('change', browserSync.reload);
	gulp.watch(path + '**/*.{sass,scss}', ['Sass']);
	gulp.watch(path + '**/*.{jade,pug}', ['html']);
	gulp.watch(path + '**/*.js', ['js']);
});

///////////////////////////////////////////////////////////////////////////////////////
// 									RUN
///////////////////////////////////////////////////////////////////////////////////////
// dev
gulp.task('dev', ['html', 'Sass', 'js']);

// serv
gulp.task('serv', ['server', 'watching']);

// default
gulp.task('default', ['dev', 'server', 'watching']);
