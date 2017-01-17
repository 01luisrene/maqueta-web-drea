var gulp = require('gulp'); 
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var sourceMaps = require('gulp-sourcemaps');
var postCss = require('gulp-postcss');
var notify = require('gulp-notify');

/*Servidor Local*/
gulp.task('connect', function() {  
  connect.server({
      root: './app',
      port: 7000,
      livereload: true
  });
});

/*Tarea screen: compila a css, comprime, agrega auto prefixers necesarios, agrupa los media queries, ...*/
gulp.task('screen', function(){
  var processors = [
  autoprefixer({browsers: ['last 2 versions'] })
  ];

  return gulp.src('./screen/screen.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.init())
  .pipe(postCss(processors))
  .pipe(gcmq())
  .pipe(cleanCss())
  .pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('./app/assets/css'))
  .pipe(notify("Ha finalizado la tarea screen"));
});

gulp.task('screen-desarrollo', function(){
  var processors = [
  autoprefixer({browsers: ['last 2 versions'] })
  ];

  return gulp.src('./screen/screen.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(sourceMaps.init())
  .pipe(postCss(processors))
  .pipe(gcmq())
  .pipe(sourceMaps.write('.'))
  .pipe(gulp.dest('./app/assets/css/dev'))
  .pipe(notify("Ha finalizado la tarea screen desarrollo"));
});

gulp.task('ficheros', function () {  
  gulp.src('./app/**/*')
    .pipe(connect.reload());
});


gulp.task('watch', function () {  
  gulp.watch(['./app/**/*'], ['ficheros']);
  gulp.watch(['./screen/**/*'], ['screen']);
  gulp.watch(['./screen/**/*'], ['screen-desarrollo']);
});

/*
Tarea por defecto de gulp.js  
*/
gulp.task('default', ['connect', 'watch', 'screen', 'screen-desarrollo']);  