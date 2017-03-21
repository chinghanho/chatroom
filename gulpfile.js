const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const notify = require("gulp-notify")
const concat  = require('gulp-concat')

gulp.task('vendor', function () {
  return gulp
    .src([
      './node_modules/zepto/dist/zepto.js',
      './node_modules/vue/dist/vue.js'
    ])
    .pipe(concat('vendor.js', { newLine: ';' }))
    .pipe(gulp.dest('./public/scripts'))
})

gulp.task('script', function () {
    return browserify('./app/frontend/scripts/main.js', { debug: true })
            .transform("babelify", { presets: ["es2015"], sourceMaps: true })
            .bundle()
            .on('error', function onBundleError(err) {
                console.error(err.message)
                this.emit('end')
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./public/scripts'))
})

// notify
function showErrorNotify(error) {
  var args = Array.prototype.slice.call(arguments);
  // Show notification
  notify.logLevel(0);
  notify.onError({
      title: '[' + error.relativePath + '] Error',
      message: '<%= error.messageOriginal %>',
      sound: 'Pop'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
}

gulp.task('sass', function() {
  return gulp.src('./app/frontend/sass/**/*.+(scss|sass)')
    .pipe(plumber({
      errorHandler: showErrorNotify
    }))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('watch', ['sass', 'vendor', 'script'], function () {
    gulp.watch('./app/frontend/scripts/**/*.js', ['script'])
    gulp.watch('./app/frontend/sass/**/*.+(scss|sass)', ['sass']);
})
