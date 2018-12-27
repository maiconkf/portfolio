var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin'),
    htmlmin = require('gulp-htmlmin'),
	stripCssComments = require('gulp-strip-css-comments'),
    newer = require('gulp-newer'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

var php  = ['./*.php',
            './en/*.php'],
    scss = ['./sass/**/*.scss'],
	css  = ['./dist/css/reset.css',
            './dist/css/blog.css',
            './dist/css/main.css'],
    js   = ['./js/vendor/particles.min.js',
            './js/particles.js',
            './js/main.js'],
    img  = './img/**/*';

gulp.task('php', function() {
  return gulp.src(php)
    .pipe(htmlmin({
        collapseWhitespace: true,
        ignoreCustomFragments: [/<\?[\s\S]*?(?:\?>|$)/],
        removeComments: true
      }))
    .pipe(gulp.dest('./dist/php'));
});

gulp.task('scss', function() {
    gulp.src(scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('styles', function() {
    gulp.src(css)
    .pipe(concat('styles.min.css'))
    .pipe(stripCssComments({all: true}))
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts', function() {
    gulp.src(js)
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('images', function() {
    gulp.src(img)
        .pipe(newer('./dist/img/'))
        .pipe(imagemin({
            progressive: true,
            verbose: true,
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./dist/img/'));
});

gulp.task('default',function() {
    gulp.watch(img, ['images']);
    gulp.watch(php, ['php']);
    gulp.watch(scss, ['scss']);
    gulp.watch(css, ['styles']);
    gulp.watch(js, ['scripts']);
});