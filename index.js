module.exports = {
	parserOptions: {
		ecmaVersion: 2019,
	},
	env: {
		es6: true,
		node: true,
	},
	rules: {
		'accessor-pairs': 'off',
		'array-bracket-newline': ['warn', 'consistent'],
		'array-bracket-spacing': ['warn', 'never', {
			singleValue: false,
			objectsInArrays: false,
			arraysInArrays: false,
		}],
		'array-callback-return': 'off',
		'array-element-newline': 'off',
		'arrow-body-style': 'off',
		'arrow-parens': ['warn', 'as-needed', { requireForBlockBody: false }],
		'arrow-spacing': ['warn', { before: true, after: true }],
		'block-scoped-var': 'warn',
		'block-spacing': ['warn', 'always'],
		'brace-style': ['warn', '1tbs', { allowSingleLine: true }],
		'callback-return': 'off',
		camelcase: 'off',
		'capitalized-comments': 'off',
		'class-methods-use-this': 'off',
		'comma-dangle': ['warn', 'always-multiline'],
		'comma-spacing': ['warn', { before: false, after: true }],
		'comma-style': ['warn', 'last'],
		complexity: 'off',
		'computed-property-spacing': ['warn', 'never'],
		'consistent-return': 'off',
		'consistent-this': ['warn', 'self'],
		'constructor-super': 'error',
		curly: ['warn', 'multi-line', 'consistent'],
		'default-case': 'off',
		'dot-location': ['warn', 'property'],
		'dot-notation': ['warn', {
			allowKeywords: true,
			allowPattern: '(^[A-Z])|(^[a-z]+(_[a-z]+)+$)',
		}],
		'eol-last': ['warn', 'always'],
		eqeqeq: ['warn', 'smart'],
		'for-direction': 'off',
		'func-call-spacing': ['warn', 'never'],
		'func-name-matching': ['warn', 'always'],
		'func-names': ['warn', 'as-needed'],
		'func-style': 'off',
		'function-paren-newline': ['warn', 'consistent'],
		'generator-star-spacing': ['warn', 'before'],
		'getter-return': 'off',
		'global-require': 'off',
		'guard-for-in': 'warn',
		'handle-callback-err': 'off',
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		indent: ['warn', 'tab', { SwitchCase: 1 }],
		'init-declarations': 'off',
		'jsx-quotes': ['warn', 'prefer-double'],
		'key-spacing': ['warn', {
			beforeColon: false,
			afterColon: true,
			mode: 'strict',
		}],
		'keyword-spacing': ['warn', {
			before: true,
			after: true,
			overrides: {
				'if': { after: true },
				'for': { after: true },
				'while': { after: true },
				'catch': { after: true },
				'switch': { after: true },
			},
		}],
		'line-comment-position': 'off',
		'linebreak-style': ['warn', 'unix'],
		'lines-around-comment': 'off',
		'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
		'max-depth': 'off',
		'max-len': 'off',
		'max-lines': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': ['warn', { max: 1 }],
		'multiline-comment-style': 'off',
		'multiline-ternary': ['warn', 'always-multiline'],
		'new-cap': 'off',
		'new-parens': 'warn',
		'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
		'no-alert': 'warn',
		'no-array-constructor': 'off',
		'no-await-in-loop': 'off',
		'no-bitwise': 'off',
		'no-buffer-constructor': 'error',
		'no-caller': 'error',
		'no-case-declarations': 'warn',
		'no-catch-shadow': 'error',
		'no-class-assign': 'warn',
		'no-compare-neg-zero': 'warn',
		'no-cond-assign': 'warn',
		'no-confusing-arrow': 'off',
		'no-console': 'off',
		'no-const-assign': 'error',
		'no-control-regex': 'off',
		'no-debugger': 'error',
		'no-delete-var': 'error',
		'no-div-regex': 'off',
		'no-dupe-args': 'error',
		'no-dupe-class-members': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-duplicate-imports': ['warn', { includeExports: false }],
		'no-else-return': 'warn',
		'no-empty': 'off',
		'no-empty-character-class': 'error',
		'no-empty-function': 'off',
		'no-empty-pattern': 'off',
		'no-eq-null': 'warn',
		'no-eval': 'warn',
		'no-ex-assign': 'off',
		'no-extend-native': 'warn',
		'no-extra-bind': 'off',
		'no-extra-boolean-cast': 'off',
		'no-extra-label': 'warn',
		'no-extra-parens': 'off',
		'no-extra-semi': 'warn',
		'no-fallthrough': 'off',
		'no-floating-decimal': 'warn',
		'no-func-assign': 'off',
		'no-global-assign': 'off',
		'no-implicit-coercion': 'warn',
		'no-implicit-globals': 'off',
		'no-implied-eval': 'error',
		'no-inline-comments': 'off',
		'no-inner-declarations': 'off',
		'no-invalid-regexp': 'warn',
		'no-invalid-this': 'off',
		'no-irregular-whitespace': ['warn', {
			skipStrings: true,
			skipComments: true,
			skipRegExps: true,
			skipTemplates: true,
		}],
		'no-iterator': 'off',
		'no-label-var': 'error',
		'no-labels': 'off',
		'no-lone-blocks': 'off',
		'no-lonely-if': 'error',
		'no-loop-func': 'off',
		'no-magic-numbers': 'off',
		'no-mixed-operators': 'error',
		'no-mixed-requires': 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-multi-assign': 'warn',
		'no-multi-spaces': ['error', { ignoreEOLComments: true }],
		'no-multi-str': 'off',
		'no-multiple-empty-lines': 'error',
		'no-nested-ternary': 'off',
		'no-new': 'off',
		'no-new-func': 'warn',
		'no-new-object': 'error',
		'no-new-require': 'error',
		'no-new-symbol': 'warn',
		'no-new-wrappers': 'warn',
		'no-obj-calls': 'warn',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': 'off',
		'no-path-concat': 'warn',
		'no-plusplus': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'off',
		'no-proto': 'off',
		'no-prototype-builtins': 'off',
		'no-redeclare': 'error',
		'no-regex-spaces': 'warn',
		'no-restricted-globals': 'off',
		'no-restricted-imports': 'off',
		'no-restricted-modules': 'off',
		'no-restricted-properties': 'off',
		'no-restricted-syntax': 'off',
		'no-return-assign': 'off',
		'no-return-await': 'warn',
		'no-script-url': 'off',
		'no-self-assign': 'error',
		'no-self-compare': 'warn',
		'no-sequences': 'error',
		'no-shadow': 'warn',
		'no-shadow-restricted-names': 'error',
		'no-sparse-arrays': 'warn',
		'no-sync': 'off',
		'no-tabs': 'off',
		'no-template-curly-in-string': 'off',
		'no-ternary': 'off',
		'no-this-before-super': 'error',
		'no-throw-literal': 'warn',
		'no-trailing-spaces': 'warn',
		'no-undef': 'error',
		'no-undef-init': 'off',
		'no-undefined': 'off',
		'no-underscore-dangle': 'off',
		'no-unexpected-multiline': 'error',
		'no-unneeded-ternary': 'off',
		'no-unreachable': 'warn',
		'no-unsafe-finally': 'warn',
		'no-unsafe-negation': 'error',
		'no-unused-expressions': 'off',
		'no-unused-labels': 'warn',
		'no-unused-vars': 'warn',
		'no-use-before-define': 'error',
		'no-useless-call': 'off',
		'no-useless-computed-key': 'error',
		'no-useless-concat': 'warn',
		'no-useless-constructor': 'error',
		'no-useless-escape': 'off',
		'no-useless-rename': 'error',
		'no-useless-return': 'warn',
		'no-var': 'warn',
		'no-void': 'off',
		'no-warning-comments': 'off',
		'no-whitespace-before-property': 'error',
		'no-with': 'error',
		'nonblock-statement-body-position': 'off',
		'object-curly-newline': ['error', { multiline: true, consistent: true }],
		'object-curly-spacing': ['error', 'always'],
		'object-property-newline': 'off',
		'object-shorthand': ['error', 'always'],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': 'off',
		'operator-assignment': ['error', 'always'],
		'operator-linebreak': ['error', 'before'],
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': 'off',
		'prefer-arrow-callback': 'warn',
		'prefer-const': ['error', { destructuring: 'all' }],
		'prefer-destructuring': ['warn', {
			VariableDeclarator: {
				array: false,
				object: true,
			},
			AssignmentExpression: {
				array: true,
				object: false,
			},
		}],
		'prefer-numeric-literals': 'off',
		'prefer-promise-reject-errors': 'warn',
		'prefer-rest-params': 'warn',
		'prefer-spread': 'warn',
		'prefer-template': 'warn',
		'quote-props': ['error', 'as-needed', { keywords: true, numbers: false }],
		quotes: ['error', 'single', {
			avoidEscape: true,
			allowTemplateLiterals: true,
		}],
		radix: ['error', 'as-needed'],
		'require-await': 'off',
		'require-jsdoc': 'off',
		'require-yield': 'warn',
		'rest-spread-spacing': ['error', 'never'],
		semi: ['warn', 'never'],
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		'sort-imports': 'off',
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always',
		}],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': ['error', { int32Hint: true }],
		'space-unary-ops': ['error', { words: true, nonwords: false }],
		'spaced-comment': ['error', 'always'],
		strict: ['error', 'never'],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'symbol-description': 'warn',
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'unicode-bom': ['error', 'never'],
		'use-isnan': 'error',
		'valid-jsdoc': ['warn', {
			requireReturn: false,
			requireReturnDescription: false,
			preferType: {
				String: 'string',
				Number: 'number',
				Boolean: 'boolean',
				Symbol: 'symbol',
				'function': 'Function',
				object: 'Object',
				date: 'Date',
				error: 'Error',
			},
		}],
		'valid-typeof': 'error',
		'vars-on-top': 'off',
		'wrap-iife': ['error', 'inside'],
		'wrap-regex': 'off',
		'yield-star-spacing': ['warn', 'before'],
		yoda: 'warn',
	},
}
