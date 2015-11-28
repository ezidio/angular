module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: [
      'src/vendor/jquery.js',
      'src/vendor/angular.min.js',
      'angular-mocks.js',
      'src/js/*.js',
      'spec/**/*.js'
    ]
  });
};