let resolve = require('rollup-plugin-node-resolve');


module.exports = function(config) {
  config.set({

    basePath: './',

    frameworks: ['qunit'],

    files: [
      { pattern: 'src/**/*.js', included: false },
       "test/index.js"
    ],
    preprocessors: {
      "test/*.js": ["rollup"]
    },
    rollupPreprocessor: {
		plugins: [resolve()],
		format: 'iife',
		moduleName: 'sjs-metadata',
		sourceMap: 'inline'
	},
    reporters: ['progress'],
    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
