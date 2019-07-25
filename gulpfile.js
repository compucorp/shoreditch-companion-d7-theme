const { dest, series, src, watch } = require('gulp');

function sass () {
  const sass = require('gulp-sass');
  sass.compiler = require('node-sass');

  return src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(dest('./css'));
}

function sassWatch () {
  watch('./scss/**/*.scss', sass);
}

Object.assign(exports, {
  'default': sass,
  'sass': sass,
  'sass:watch': sassWatch
});
