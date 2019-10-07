KARMA-CONFIG-BRCJS
==================

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][npm-url]
[![NPM License][license-image]][npm-url]


# Install

```
npm install karma-config-brcjs --save
```

# Usage

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

[npm-image]: https://img.shields.io/npm/v/brcjs.svg
[downloads-image]: https://img.shields.io/npm/dm/brcjs.svg
[npm-url]: https://www.npmjs.org/package/brcjs
[license-image]: https://img.shields.io/npm/l/brcjs.svg
