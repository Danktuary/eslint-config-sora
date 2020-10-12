module.exports = {
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
	},
	env: {
		browser: true,
		node: false,
	},
	rules: {
		'vue/attribute-hyphenation': 'off',
		'vue/html-closing-bracket-newline': ['warn', {
			singleline: 'never',
			multiline: 'always',
		}],
		'vue/html-indent': ['warn', 'tab'],
		'vue/html-self-closing': ['warn', {
			html: {
				'void': 'always',
				normal: 'never',
				component: 'always',
			},
		}],
		'vue/max-attributes-per-line': ['warn', {
			singleline: 5,
			multiline: { max: 1 },
		}],
		'vue/require-default-prop': 'off',
		'vue/require-prop-types': 'off',
		'vue/singleline-html-element-content-newline': 'off',
	},
}
