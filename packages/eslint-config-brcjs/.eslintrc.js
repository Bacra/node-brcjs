module.exports = {
	parser: 'babel-eslint',
	env: {
		node: true,
		es6: true,
	},
	root: true,
	extends: 'eslint:recommended',
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
	},
	overrides: [{
		files: ['**/test/*.js'],
		env: {
			mocha: true
		}
	}],
};
