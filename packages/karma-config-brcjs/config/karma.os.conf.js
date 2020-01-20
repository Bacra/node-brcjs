'use strict';

const os = require('os');

module.exports = function(config) {
	const browsers = ['Chrome', 'Firefox'];
	const platform = os.platform();

	if (platform == 'win32')
		browsers.push('IE');
	else if (platform == 'darwin')
		browsers.push('Safari');

	config.set({browsers: browsers});
};
