KARMA-CONFIG-BRCJS
==================


[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![NPM License][license-image]][npm-url]


# Install

```
npm install karma-config-brcjs --save
```

# Useage

```javascript
var commonConfig = require('karma-config-brcjs');

module.exports = function(config)
{
	commonConfig(config, require('./package.json'));

	config.set(
	{
		files: ['test_*.js'],
		preprocessors: {'test_*.js': ['browserify']},
	});
}
```

[npm-image]: http://img.shields.io/npm/v/brcjs.svg
[downloads-image]: http://img.shields.io/npm/dm/brcjs.svg
[npm-url]: https://www.npmjs.org/package/brcjs
[travis-image]: http://img.shields.io/travis/Bacra/node-brcjs/master.svg?label=linux
[travis-url]: https://travis-ci.org/Bacra/node-brcjs
[license-image]: http://img.shields.io/npm/l/brcjs.svg
