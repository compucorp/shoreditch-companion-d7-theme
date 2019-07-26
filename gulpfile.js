const { dest, series, src, watch } = require('gulp');
const civicrmScssRoot = require('civicrm-scssroot')();

function sass () {
  const sass = require('gulp-sass');
  sass.compiler = require('node-sass');

  return src('./scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: civicrmScssRoot.getPath(),
    }).on('error', sass.logError))
    .pipe(dest('./css'));
}

function sassRootSync (cb) {
  civicrmScssRoot.updateSync();
  cb();
}

function sassWatch () {
  watch('./scss/**/*.scss', sass);
}

Object.assign(exports, {
  'default': sass,
  'sass': series(sassRootSync, sass),
  'sass:watch': series(sassRootSync, sassWatch),
});
