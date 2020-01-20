'use strict';

const browsers = require('./sl_browsers.js');
const oldieConfig = require('./karma.oldie.conf.js');

module.exports = function(config, browserArr) {
	// master 也运行
	// if (process.env.TRAVIS_BRANCH && process.env.TRAVIS_BRANCH != 'sauce-runner') {
	// 	console.log('Run sauce only sauce-runner branch.');
	// 	process.exit();
	// }

	if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
		console.log('Make sure the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables are set.');
		process.exit(1);
	}

	if (!config.pkg)
	{
		console.log('Please set pkg info into config');
		process.exit(1);
	}

	const timeout = 300000;
	const buildId = process.env.TRAVIS_JOB_NUMBER || process.env.SAUCE_BUILD_ID || Date.now();
	const taskName = config.pkg.name+'_'+config.pkg.version;

	const customConfig = {
		// port			: 4445,
		browsers		: browserArr,
		retryLimit		: 2,
		concurrency		: 5,
		customLaunchers	: browsers.list,
		// Increase timeout in case connection in CI is slow
		captureTimeout	: timeout,
		browserNoActivityTimeout: timeout,
		reporters: process.env.CI
			? ['dots', 'saucelabs'] // avoid spamming CI output
			: ['mocha', 'saucelabs'],

		sauceLabs: {
			build				: taskName+'_'+buildId,
			public				: 'public',
			testName			: taskName,
			tunnelIdentifier	: taskName+'_'+buildId,

			// commandTimeout		: 300,
			// idleTimeout			: 90,
			// maxDuration			: 1800,

			recordScreenshots	: false,
			recordVideo			: false,

			// @see https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options
			options: {
				// recordScreenshots	: true,
				// recordVideo			: true,
				videoUploadOnPass	: false,
				recordLogs			: true,
				captureHtml			: false,
				// priority			: 0,
				extendedDebugging	: true,
				// webdriverRemoteQuietExceptions: false,
			},


			// customData: {},
			connectOptions: {
				// port: 5757,
				// logfile: 'sauce_connect.log',
				'no-ssl-bump-domains': 'all',

				// Log output from the `sc` process to stdout?
				verbose: true,
				// Enable verbose debugging (optional)
				verboseDebugging: true,
				// Together with verbose debugging will output HTTP headers as well (optional)
				vv: true,
			},
		}
	};

	// https://github.com/karma-runner/karma-sauce-launcher/issues/73
	if (process.env.TRAVIS_JOB_NUMBER) {
		customConfig.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
		customConfig.sauceLabs.startConnect = false;
	}

	config.set(customConfig);

	// 老版本ie
	if (browserArr.some(name => name == 'sl_ie9' || name == 'sl_ie10')) {
		oldieConfig(config);
	}
};
