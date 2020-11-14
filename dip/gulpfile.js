let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer');

var mapboxgl = require('/node_modules/mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibWloYTEyMzc3MSIsImEiOiJja2hodXhlMGcwbGdrMnFvMXZ6N2N3amhtIn0.D7JYn8PUPxpO2ZnkPU2X4g';
var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/streets-v11'
});

gulp.task('clean', async function () {
  del.sync('finish')
})

gulp.task('scss', function () {
  return gulp.src('finish/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('finish/css'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'font-awesome-4.7.0/css/font-awesome.min.css',
    'node_modules/animate.css/animate.min.css'
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('finish/scss'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
  return gulp.src('finish/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function () {
  return gulp.src('finish/js/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/wow.js/dist/wow.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('finish/js'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "finish/"
    }
  });
});

gulp.task('export', function () {
  let buildHtml = gulp.src('finish/**/*.html')
    .pipe(gulp.dest('finish'));

  let BuildCss = gulp.src('finish/css/**/*.css')
    .pipe(gulp.dest('finish/css'));

  let BuildJs = gulp.src('finish/js/**/*.js')
    .pipe(gulp.dest('finish/js'));

  let BuildFonts = gulp.src('finish/fonts/**/*.*')
    .pipe(gulp.dest('finish/fonts'));

  let BuildImg = gulp.src('finish/img/**/*.*')
    .pipe(gulp.dest('finish/img'));
});

gulp.task('watch', function () {
  gulp.watch('finish/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('finish/*.html', gulp.parallel('html'))
  gulp.watch('finish/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));