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
    notify        = require('gulp-notify');

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
  .pipe(cleanCss())
  .pipe(sourceMaps.write('.'))
  .pipe(rename('bootstrap.min.css'))
  .pipe(gulp.dest('./app/plugins/bootstrap'))
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


gulp.task('watch', function () {  
  //gulp.watch(['./app/**/*'], ['ficheros']);
  gulp.watch(['./dev/screen/**/*'], ['screen']);
  gulp.watch(['./dev/screen/**/*'], ['screen-desarrollo']);
  gulp.watch(['./dev/js/**/*'], ['fichero-js']);
  gulp.watch(['./dev/bootstrap4/**/*'], ['bootstrap4']);
});

/*
Tarea por defecto de gulp.js  
*/
gulp.task('default', ['connect', 'watch', 'screen', 'screen-desarrollo', 'fichero-js', 'bootstrap4']);