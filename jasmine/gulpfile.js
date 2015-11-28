'use strict';

var
  fs                 = require("fs"), 
  gulp               = require('gulp'),
  jasmine            = require('gulp-jasmine'),
  Server             = require('karma').Server
;

gulp.task('test', function(done) {

	new Server({
		configFile : __dirname+ '/karma.conf.js',
		singleRun : true,
	}, done).start();
	
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['test']);
});

gulp.task('default', ['watch']);