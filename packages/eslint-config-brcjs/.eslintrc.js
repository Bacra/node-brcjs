module.exports = {
	env: { node: true },
	root: true,
	extends: 'eslint:recommended',
	rules: {
		'no-console': 'off',
		'no-redeclare': 'off',
	},
	overrides: [
		{
			files: ['**/test/**.js'],
			env: {
				mocha: true
			}
		}
	],
};
