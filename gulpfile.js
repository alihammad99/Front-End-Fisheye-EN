const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const { src, dest, series, watch, parallel } = require("gulp");

const jsPath = "scripts/**/*.js";
const cssPath = "css/*";

function copyHTML() {
  return src("*.html").pipe(dest("dist"));
}

function imageTask() {
  return src("./assets/**/**/*").pipe(imagemin()).pipe(dest("dist/assets/"));
}

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
    .pipe(concat("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));
}

function watchTask() {
  watch([cssPath, jsPath], { interval: 100 }, parallel(styleTask, jsTask));
}

exports.styleTask = styleTask;
exports.jsTask = jsTask;
exports.imageTask = imageTask;
exports.copyHTML = copyHTML;

exports.default = series(
  parallel(copyHTML, imageTask, styleTask, jsTask),
  watchTask
);
