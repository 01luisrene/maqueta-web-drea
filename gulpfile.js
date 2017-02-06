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
      port: 3000,
      livereload: false
  });
});

/*Tarea screen: compila a css, comprime, agrega auto prefixers necesarios, agrupa los media queries, ...*/
gulp.task('screen', function(){
  var processors = [
  autoprefixer({browsers: ['last 2 versions'] })
  ];
  return gulp.src('./app/dev/sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.init())
  .pipe(postCss(processors))
  .pipe(gcmq())
  .pipe(cleanCss())
  .pipe(rename('screen.css'))
  .pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('./app/css'))
  .pipe(notify("Ha finalizado la tarea screen"));
});

//Comprimir archivo app.js
gulp.task('js', function () {
  return gulp.src('./app/dev/js/*.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('./app/js/'))
  .pipe(notify('Tarea js terminada!'));
});

gulp.task('watch', function () {
  gulp.watch(['./app/dev/sass/**/*'], ['screen']);
  gulp.watch(['./app/dev/js/**/*'], ['js']);
});

/*
Tarea por defecto de gulp.js  
*/
gulp.task(
  'default',
    ['connect', 
    'watch', 
    'screen',
    'js'
    ]
  );