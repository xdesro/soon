const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('sass');

const buildSass = () =>
  gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));

gulp.task('sass', buildSass);

gulp.task('sass:watch', () => {
  gulp.watch('./src/scss/**/*.scss', buildSass);
});
