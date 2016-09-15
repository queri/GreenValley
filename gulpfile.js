const gulp = require('gulp'),
      less = require('gulp-less'),
      path = require('path'),
      minify = require('gulp-clean-css'),
      rename = require('gulp-rename'),
      autoprefixer =  require('gulp-autoprefixer'),
      csscomb = require('gulp-csscomb'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');


// CSS
gulp.task('css', function(){
  return gulp.src('src/less/style.less')
  .pipe(less({
    paths: [ path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(autoprefixer({browsers: ['last 2 versions']}))
  .pipe(csscomb())
  .pipe(gulp.dest('build/css'))
  .pipe(minify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('build/css'));
});
// JS
// gulp.task('js', function(){
//   return gulp.src('src/js/**/*.js')
//   .pipe(concat('app.js'))
//   .pipe(gulp.dest('build/js'))
//   .pipe(uglify())
//   .pipe(rename({ suffix: '.min' }))
//   .pipe(gulp.dest('build/js'));
// })

// HTML
gulp.task('html', function(){
  return gulp.src('src/*.html')
  .pipe(gulp.dest('build/'));
})

// gulp.task('server', ['watch'], function(){
//  browserSync({
//     server: {
//       baseDir: "build/"
//     },
//     port: 8080,
//     open: true,
//     notify: false,
//     injectChanges: true,
//   });
// })

// Watcher
gulp.task('watch', function(){
  gulp.watch('src/less/*.less', ['css'])
  gulp.watch('src/*.html', ['html'])
});

// gulp.task('js2', function() {
//     const stream = gulp.src('src/js/app.js')

//         .pipe(gulpBrowser.browserify())
//         .pipe(gulp.dest('build/js'))

//     return stream;
// });