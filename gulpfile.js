var gulp          = require('gulp'), 
    connect       = require('gulp-connect'),
    sass          = require('gulp-sass'),
    cleanCss      = require('gulp-clean-css'),
    autoprefixer  = require('autoprefixer'),
    gcmq          = require('gulp-group-css-media-queries'),
    sourceMaps    = require('gulp-sourcemaps'),
    postCss       = require('gulp-postcss'),
    uglify        = require('gulp-uglify'),
    rename        = require("gulp-rename"),
    notify        = require('gulp-notify'),
    concatCss     = require('gulp-concat-css'),
    concat        = require("gulp-concat");

/*Servidor Local*/
gulp.task('connect', function() {  
  connect.server({
      root: './app',
      port: 7000,
      livereload: false
  });
});

/*Tarea screen: compila a css, comprime, agrega auto prefixers necesarios, agrupa los media queries, ...*/
gulp.task('screen', function(){
  var processors = [
  autoprefixer({browsers: ['last 2 versions'] })
  ];

  return gulp.src('./dev/screen/screen.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.init())
  .pipe(postCss(processors))
  .pipe(gcmq())
  .pipe(cleanCss())
  .pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('./app/css'))
  .pipe(notify("Ha finalizado la tarea screen"));
});

gulp.task('screen-desarrollo', function(){
  var processors = [
  autoprefixer({browsers: ['last 2 versions'] })
  ];

  return gulp.src('./dev/screen/screen.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.init())
  .pipe(postCss(processors))
  .pipe(gcmq())
  .pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('./app/css/dev'));
});

//Bootstrap 4
gulp.task('bootstrap4', function(){
  var processors = [
  autoprefixer({browsers: ['last 2 versions'] })
  ];

  return gulp.src('./dev/bootstrap4/bootstrap.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.init())
  .pipe(postCss(processors))
  .pipe(gcmq())
  .pipe(sourceMaps.write('.'))
  .pipe(rename('bootstrap.css'))
  .pipe(gulp.dest('./dev/librerias-css'))
  .pipe(notify("Ha finalizado la tarea bootstrap4"));
});

//Comprimir archivo app.js
gulp.task('fichero-js', function () {
   return gulp.src('./dev/js/*.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(notify('Tarea js terminada!'));
});

gulp.task('ficheros', function () {  
  gulp.src('./app/**/*')
    .pipe(connect.reload());
});

//Comprimir librerías css
gulp.task('librerias-css', function () {
  return gulp.src('./dev/librerias-css/**/*.css')
    .pipe(concatCss("libs.min.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest('./app/css'))
    .pipe(notify('Tarea librerias-css terminada!!!'));
});

//Comprimir archivos js
gulp.task("librerias-js", function () {
  return gulp.src(
    ["./dev/librerias-js/tether.min.js",
    "./dev/librerias-js/bootstrap.min.js",
    "./dev/librerias-js/jquery.sliderPro.min.js",
    "./dev/librerias-js/owl.carousel.min.js",
    "./dev/librerias-js/jquery.fitvids.js",
    "./dev/librerias-js/jquery.bxslider.min.js"]
    )
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./app/js/'))
  .pipe(notify('Tarea librerias-js terminada!!!'));
});

gulp.task('watch', function () {  
  //gulp.watch(['./app/**/*'], ['ficheros']);
  gulp.watch(['./dev/screen/**/*'], ['screen']);
  gulp.watch(['./dev/screen/**/*'], ['screen-desarrollo']);
  gulp.watch(['./dev/js/**/*'], ['fichero-js']);
  gulp.watch(['./dev/bootstrap4/**/*'], ['bootstrap4']);
  gulp.watch(['./dev/librerias-css/**/*.css'], ['librerias-css']);
  gulp.watch(['./dev/librerias-js/**/*.js'], ['librerias-js']);
});

/*
Tarea por defecto de gulp.js  
*/
gulp.task(
  'default',
    ['connect', 
    'watch', 
    'screen', 
    'screen-desarrollo', 
    'fichero-js', 
    'bootstrap4', 
    'librerias-css',
    'librerias-js'
    ]
  );