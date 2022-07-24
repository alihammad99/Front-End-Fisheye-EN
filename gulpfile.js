const sourcemaps = require("gulp-sourcemaps");
const terser = require("gulp-terser");
const { src, dest, series, watch, parallel } = require("gulp");

const jsPath = "scripts/**/*.js";
const cssPath = "css/*";

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(dest("dist/scripts/"));
}

function styleTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));
}

function watchTask() {
  watch([cssPath, jsPath], { interval: 300 }, parallel(styleTask, jsTask));
}

exports.styleTask = styleTask;
exports.jsTask = jsTask;

exports.default = series(parallel(styleTask, jsTask), watchTask);
