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
  return gulp.src('portfolio/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 8 versions']
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('portfolio/css'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css', function () {
  return gulp.src([
    'node_modules/normalize.css/normalize.css',
    'node_modules/animate.css/animate.min.css'
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('portfolio/scss'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('html', function () {
  return gulp.src('portfolio/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('script', function () {
  return gulp.src('portfolio/js/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('js', function () {
  return gulp.src([
    'node_modules/wow.js/dist/wow.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('portfolio/js'))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "portfolio/"
    }
  });
});

gulp.task('export', function () {
  let buildHtml = gulp.src('portfolio/**/*.html')
    .pipe(gulp.dest('dist'));

  let BuildCss = gulp.src('portfolio/css/**/*.css')
    .pipe(gulp.dest('dist/css'));

  let BuildJs = gulp.src('portfolio/js/**/*.js')
    .pipe(gulp.dest('dist/js'));

  let BuildFonts = gulp.src('portfolio/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));

  let BuildImg = gulp.src('portfolio/img/**/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('watch', function () {
  gulp.watch('portfolio/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('portfolio/*.html', gulp.parallel('html'))
  gulp.watch('portfolio/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'))

gulp.task('default', gulp.parallel('css', 'scss', 'js', 'browser-sync', 'watch'));