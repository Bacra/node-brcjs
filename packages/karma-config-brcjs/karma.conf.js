// npm run test-e2e Chrome
// npm run test-e2e sl_dev
// npm run test-e2e sl_pc

'use strict';

// Karma configuration
const debug = require('debug')('karma-config-brcjs');
const baseConfig = require('./config/karma.base.conf.js');
const osConfig = require('./config/karma.os.conf.js');
const sauceConfig = require('./config/karma.sauce.conf.js');
const browsers = require('./config/sl_browsers.js');

module.exports = function(config) {
	let key = process.argv[4];
	baseConfig(config);

	debug('karma key:%s', key);

	if (key == 'travis')
	{
		key = process.env.TRAVIS_BRANCH == 'master'
			&& process.env.TRAVIS_EVENT_TYPE != 'cron' ? 'sl_chrome' : 'sauce';
	}
	else if (key == 'travis-oldie')
	{
		if (process.env.TRAVIS_BRANCH == 'master'
			&& process.env.TRAVIS_EVENT_TYPE != 'cron')
		{
			process.exit();
		}
		else
		{
			key = 'sl_oldie';
		}
	}

	if (browsers.groups[key])
		sauceConfig(config, browsers.groups[key]);
	else if (browsers.list[key])
		sauceConfig(config, [key]);
	else if (!key)
		osConfig(config);
	else
		config.set({browsers: key.split(',')});
};
