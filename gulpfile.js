const { watch, series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const output = 'dist';

const styles = () => {
  return src('src/styles/ease.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(output));
};

const scripts = () => {
  return src('src/scripts/**/*.js')
    .pipe(dest(output));
};

const docs = () => {
  return src('dist/**/*')
    .pipe(dest('docs/dist'));
};

const watcher = cb => {

  watch('src/styles/**/*.scss', styles);
  watch('src/scripts/**/*.js', scripts);
  watch('dist', docs);

  cb();
};

const build = series(parallel(scripts, styles), docs);

exports.default = build;
exports.build = build;
exports.watch = watcher;
