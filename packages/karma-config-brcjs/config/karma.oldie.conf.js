'use strict';

const debug = require('debug')('karma-config-brcjs:oldie');
const CORE_JS_PATH = require.resolve('core-js/client/core.js');
debug('CORE_JS_PATH:%s', CORE_JS_PATH);

function fixMocha(files) {
	files.unshift({
		pattern: CORE_JS_PATH,
		included: true,
		served: true,
		watched: false
	});
}

fixMocha.$inject = ['config.files'];

module.exports = function(config) {
	const plugins = config.plugins || [];
	plugins.push({
		'framework:inline-mocha-fix': ['factory', fixMocha]
	});

	config.set({
		// mocha不支持ie9后，需要core-js
		plugins: plugins,
		frameworks: ['mocha', 'browserify', 'inline-mocha-fix'],
	});
};
