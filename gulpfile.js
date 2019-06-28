const gulp = require("gulp");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCss = require("gulp-clean-css");
const babel = require("gulp-babel");

gulp.task("sass", function() {
  return gulp
    .src("scss/*{.scss,.css}")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist/css"))

    .pipe(connect.reload());
});

gulp.task("uglify", function() {
  gulp
    .src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("dist/js"));
});

gulp.task("copyHtml", function() {
  gulp
    .src("*.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});

gulp.task("copyJs", function() {
  gulp
    .src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});

gulp.task("copyImgs", function() {
  gulp
    .src("imgs/**/*.{jpg,png}")
    .pipe(gulp.dest("dist/imgs"))
    .pipe(connect.reload());
});

gulp.task("copyImg", function() {
  gulp
    .src("img/**/*.{jpg,png}")
    .pipe(gulp.dest("dist/img"))
    .pipe(connect.reload());
});

// gulp.task("copyData", function() {
//   gulp
//     .src("json/*.json")
//     .pipe(gulp.dest("dist/json"))
//     .pipe(connect.reload());
// });

gulp.task("copyFonts", function() {
  gulp
    .src("fonts/*")
    .pipe(gulp.dest("dist/fonts"))
    .pipe(connect.reload());
});

gulp.task("watch", function() {
  gulp.watch("scss/*{.scss,.css}", ["sass"]);
  gulp.watch("*.html", ["copyHtml"]);
  gulp.watch("js/*.js", ["copyJs"]);
  gulp.watch("imgs/**/*.{jpg,png}", ["coptImgs"]);
  // gulp.watch("data/*.json", ["copyData"]);
  gulp.watch("fonts", ["copyFonts"]);
  gulp.watch("img/**.{jpg,png}", ["copyImg"]);
});

gulp.task("server", function() {
  connect.server({
    root: "dist",
    livereload: true,
  });
});

gulp.task(
  "build",
  ["sass", "copyHtml", "copyJs", "copyImgs", "copyFonts", "copyImg"],
  function() {
    console.log("编译成功");
  }
);
gulp.task("default", ["server", "watch"]);
