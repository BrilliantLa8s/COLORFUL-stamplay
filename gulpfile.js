var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var strip = require('gulp-strip-comments');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var templates = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');
var exec = require('child_process').exec;
var shell = require('gulp-shell');
var run = require('run-sequence');
var del = require('del');

var src    = './src/'
var build  = './public/'
var vendor = require('./vendor.js');

var paths = {
  styles:  [src+'styles.scss', src+'**/*.scss'],
  scripts: [src+'**/*.js'],
  markup:  [src+'**/*.html']
};

gulp.task('build:vendor:css', function() {
  return gulp.src(vendor.styles)
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(build))
});

gulp.task('build:vendor:js', function() {
  return gulp.src(vendor.scripts)
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(build))
});

gulp.task('build:css', function() {
  return gulp.src(paths.styles[0])
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(build))
    .pipe(connect.reload());
});

gulp.task('build:js', function() {
  return gulp.src(paths.scripts)
    .pipe(strip())
    .pipe(ngAnnotate())
    .pipe(uglify({mangle:true}))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(build))
    .pipe(connect.reload());
});

gulp.task('build:html', function(){
  return gulp.src(paths.markup)
    .pipe(templates({module:'app'}))
    .pipe(gulp.dest(build))
    .pipe(connect.reload());
});

gulp.task('clean', function() {
  del.sync([
    build+'vendor.js',
    build+'app.js',
    build+'app.css',
    build+'templates.js'
  ]);
});

gulp.task('watch:styles', function() {
  gulp.watch(paths.styles[1],  ['build:css']);
});

gulp.task('watch:scripts', function() {
  gulp.watch(paths.scripts, ['build:js']);
});

gulp.task('watch:views', function() {
  gulp.watch(paths.markup,  ['build:html']);
});

gulp.task('serve', function () {
  connect.server({
    root: './public',
    port: '8080',
    livereload: true,
    fallback: './public/index.html',
  });
});

gulp.task('build', ['clean', 'build:vendor:js', 'build:vendor:css', 'build:js', 'build:css', 'build:html']);
gulp.task('default', ['build']);
gulp.task('watch', ['watch:styles','watch:scripts','watch:views']);

gulp.task('start', function(cb) {
  run('build', 'watch', 'serve', cb);
});
