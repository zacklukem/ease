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

const watcher = cb => {

  watch('src/styles/**/*.scss', styles);
  watch('src/scripts/**/*.js', scripts);

  cb();
};

const build = parallel(scripts, styles);

exports.default = build;
exports.build = build;
exports.watch = watcher;
