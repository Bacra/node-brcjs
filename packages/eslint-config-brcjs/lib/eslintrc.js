/**
 * 由于overrides，直接用extend会导致basePath错误
 * 所以使用的时候，需要先创建一个tmp，将路径转到根目录
 */

module.exports = {
	parser: require.resolve('babel-eslint'),
	env: {
		node: true,
		es6: true,
	},
	extends: ['eslint:recommended'],
	globals: {
		self: false,
		global: false
	},
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		allowImportExportEverywhere: false,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
			modules: true
		}
	},
	rules: {
		'no-console': 'off',
		'no-redeclare': 'off',
		'no-var': 'error',
		'max-len': ['warn', { code: 80, ignoreUrls: true }],
		'quotes': ['error', 'single']
	},
	overrides: [{
		files: ['**/test/**/*.js'],
		env: {
			mocha: true
		}
	}],
};
