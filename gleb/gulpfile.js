let gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  del = require('del'),
  autoprefixer = require('gulp-autoprefixer');


gulp.task('clean', async function () {
  del.sync('dist')
})

gulp.task('scss', function () {
  return gulp.src('test/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('test/css'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/animate.css/animate.css',
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('test/scss'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
  return gulp.src('test/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function () {
  return gulp.src('test/js/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js',
    'node_modules/three/build/three.min.js',
    'node_modules/wow.js/dist/wow.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('test/js'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "test/"
    }
  });
});

gulp.task('export', function () {
  let buildHtml = gulp.src('test/**/*.html')
    .pipe(gulp.dest('dist'));

  let BuildCss = gulp.src('test/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  let BuildJs = gulp.src('test/js/**/*.js')
    .pipe(gulp.dest('dist/js'));

  let BuildFonts = gulp.src('test/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

  let BuildImg = gulp.src('test/img/**/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
  gulp.watch('test/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('test/*.html', gulp.parallel('html'))
  gulp.watch('test/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));