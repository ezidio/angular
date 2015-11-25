'use strict';

var
  fs                 = require("fs"), 
  gulp               = require('gulp'),
  jasmine            = require('gulp-jasmine')
;

gulp.task('test', function() {
   return gulp.src('./spec/*.js')
        .pipe(jasmine());
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['test']);
});

gulp.task('default', ['watch']);