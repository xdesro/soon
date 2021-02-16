const gulp = require('gulp');
const sass = require('gulp-sass');
const rollup = require('gulp-rollup');
sass.compiler = require('sass');

const buildSass = () =>
  gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));

const buildJS = () =>
  gulp
    .src('./src/js/**/*.js')
    .pipe(rollup({ input: './src/js/index.js', format: 'iife' }))
    .pipe(gulp.dest('./dist/js'));

gulp.task('sass', buildSass);
gulp.task('js', buildJS);

gulp.task('sass:watch', () => {
  gulp.watch('./src/scss/**/*.scss', buildSass);
});
gulp.task('js:watch', () => {
  gulp.watch('./src/js/**/*.js', buildJS);
});
gulp.task('watch', () => {
  gulp.watch('./src/scss/**/*.scss', buildSass);
  // gulp.watch('./src/js/**/*.js', buildJS);
});
