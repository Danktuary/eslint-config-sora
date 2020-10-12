const path = require('path')

module.exports = {
	env: {
		browser: true,
		node: true,
	},
	'extends': [
		'@nuxtjs',
		'plugin:nuxt/recommended',
		path.join(__dirname, './vue.js'),
	],
}
