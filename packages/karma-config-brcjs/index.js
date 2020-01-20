'use strict';

const commonConfig = require('./karma.conf.js');

module.exports = function(config, pkg) {
	if (pkg) config.set({pkg: pkg});
	commonConfig(config);
};
