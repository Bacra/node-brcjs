'use strict';

module.exports = function(config)
{
	var customConfig =
	{
		// pkg: require('../package.json'),

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: 'test/',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'browserify'],


		// list of files / patterns to load in the browser
		files:
		[
			// 'test_*.js',
			'test_base.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors:
		{
			// 'test_*.js': ['browserify'],
			'test_base.js': ['browserify'],
		},

		browserify:
		{
			debug: true,
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		// reporters: ['progress'],
		reporters: ['mocha'],


		// web server port
		// port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		customLaunchers:
		{
			ChromeHeadlessNoSandbox:
			{
				base: 'ChromeHeadless',
				flags: ['--no-sandbox']
			},
			FirefoxHeadless:
			{
				base: 'Firefox',
				flags: ['-headless']
			},
		},

		plugins:
		[
			'karma-*',
			// 写完整路径，否则以karma安装路径为准
			'karma-browserify',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-ie-launcher',
			'karma-mocha',
			'karma-mocha-reporter',
			'karma-safari-launcher',
			'karma-sauce-launcher'
			// require.resolve('karma-browserify'),
			// require.resolve('karma-chrome-launcher'),
			// require.resolve('karma-firefox-launcher'),
			// require.resolve('karma-ie-launcher'),
			// require.resolve('karma-mocha'),
			// require.resolve('karma-mocha-reporter'),
			// require.resolve('karma-safari-launcher'),
			// require.resolve('karma-sauce-launcher')
		],
	};

	config.set(customConfig);
};
