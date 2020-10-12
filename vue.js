const path = require('path');
const vueConfig = require('./vue-config.js')

module.exports = {
	'extends': [
		'plugin:vue/recommended',
		path.join(__dirname, 'index.js'),
	],
	...vueConfig,
};
