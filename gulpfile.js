// Copyright 2018 Zachary Mayhew <mayhew.zachary2003@gmail.com>
// Licenced under the MIT Licence

const { watch, series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserify = require('browserify');
const errorify = require('errorify');
const tsify = require('tsify');
const fs = require('fs');

const output = 'dist';

const styles = () => {
  return src('src/styles/ease.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(output));
};

const scripts = () => {
  return browserify({
    entries: 'src/scripts/ease.ts',
    debug: true
  })
    .plugin(tsify)
    .plugin(errorify)
    .bundle()
    .pipe(fs.createWriteStream('dist/ease.js', {flags: 'w'}));
};

const docs = () => {
  return src('dist/**/*')
    .pipe(dest('docs/dist'));
};

const watcher = cb => {

  watch('src/styles/**/*.scss', styles);
  watch('src/scripts/**/*.ts', scripts);
  watch('dist', docs);

  cb();
};

const build = series(parallel(scripts, styles), docs);

exports.default = build;
exports.build = build;
exports.watch = watcher;
