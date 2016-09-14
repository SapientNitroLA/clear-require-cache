/**
 * ESLint Configuration
 *
 * @docs http://eslint.org/docs/user-guide/configuring
 */
const config = {};

/**
 * Parser Options
 *
 * @docs http://eslint.org/docs/user-guide/configuring#specifying-parser-options
 */
config.parserOptions = {
    'ecmaVersion': 6,
    'ecmaFeatures': {
        'impliedStrict': true,
        'experimentalObjectRestSpread': true
    }
};

/**
 * Environment
 *
 * @docs http://eslint.org/docs/user-guide/configuring#specifying-environments
 */
config.env = {
    'es6': true,
    'node': true,
    'mocha': true
};

/**
 * Rules
 *
 * All rules can be configured with a "severity" number or string:
 *  0 = 'off'
 *  1 = 'warn'
 *  2 = 'error'
 *
 * @docs http://eslint.org/docs/rules/
 */
config.rules = {};

/**
 * Rules: Possible Errors
 *
 * @docs http://eslint.org/docs/rules/#possible-errors
 */
config.rules[ 'possible-errors' ] = {
    'comma-dangle': [ 2, 'never' ],
    'no-cond-assign': 2,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': [ 2, 'functions' ],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'valid-jsdoc': [ 2, {
        // prefer use of @param, @method, @returns, @class
        'prefer': {
            'arg': 'param',
            'argument': 'param',
            'function': 'method',
            'func': 'method',
            'return': 'returns',
            'constructor': 'class',
            'const': 'constant',
            'defaultValue': 'default',
            'property': 'prop',
            'throws': 'exception',
            'augments': 'extends',
            'exception': 'throws',
            'fires': 'emits',
            'desc': '[description at top of block, not tag]',
            'description': '[description at top of block, not tag]'
        },
        // requires a description, use regular expression .+
        'matchDescription': '.+',
        // return: required if and only if the function or method has a return statement
        'requireReturn': false,
        // return: require type
        'requireReturnType': true,
        // return: require description
        'requireReturnDescription': false,
        // param: require description
        'requireParamDescription': true
    } ],
    'valid-typeof': 2
};

/**
 * Rules: Best Practices
 *
 * @docs http://eslint.org/docs/rules/#best-practices
 */
config.rules[ 'best-practices' ] = {
    'complexity': [ 0, 11 ],
    'curly': [ 2, 'multi-line' ],
    'dot-notation': [ 0, { 'allowKeywords': true } ],
    'eqeqeq': 2,
    'no-caller': 2,
    'no-fallthrough': 2,
    'no-octal': 2,
    'no-redeclare': 2,
    'no-with': 2
};

/**
 * Rules: Variables
 *
 * @docs http://eslint.org/docs/rules/#variables
 */
config.rules[ 'variables' ] = {
    'no-delete-var': 2,
    'no-undef': 2,
    'no-unused-vars': [ 2, { 'vars': 'all', 'args': 'after-used' } ]
};

/**
 * Rules: Node.js and CommonJS
 *
 * @docs http://eslint.org/docs/rules/#nodejs-and-commonjs
 */
config.rules[ 'nodejs-and-commonjs' ] = {
    'no-sync': 2
};

/**
 * Rules: Stylistic Issues
 *
 * @docs http://eslint.org/docs/rules/#stylistic-issues
 */
config.rules[ 'stylistic-issues' ] = {
    'array-bracket-spacing': [ 2, 'always' ],
    'block-spacing': 2,
    'brace-style': [ 2, 'stroustrup' ],
    'camelcase': 2,
    'comma-spacing': [ 2, { 'before': false, 'after': true } ],
    'indent': [ 2, 4, { 'SwitchCase': 1 } ],
    'key-spacing': [ 2, { 'afterColon': true, 'beforeColon': false } ],
    'keyword-spacing': [ 'error', { 'before': true, 'after': true, 'overrides': {} }  ],
    'linebreak-style': [ 2, 'unix' ],
    'max-params': [ 2, 3 ],
    'new-cap': [ 2, { 'properties': false } ],
    'newline-after-var': 2,
    'newline-before-return': 2,
    'no-bitwise': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [ 2, { 'max': 2 } ],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 2,
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [ 2, 'always' ],
    'quotes': [ 2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true } ],
    'semi': [ 2, 'always' ],
    'semi-spacing': [ 2, { 'before': false, 'after': true } ],
    'space-before-blocks': [ 2, 'always' ],
    'space-before-function-paren': [ 2, { 'anonymous': 'always', 'named': 'never' } ],
    'space-infix-ops': 2,
    'space-unary-ops': [ 2, { 'words': true, 'nonwords': false, 'overrides': { '!': false, '!!': false, '++': false }  } ],
    'spaced-comment': [ 2, 'always' ]
};

/**
 * Rules: ECMAScript 6
 *
 * @docs http://eslint.org/docs/rules/#ecmascript-6
 */
config.rules[ 'ecmascript-6' ] = {
    'no-confusing-arrow': [ 2, { 'allowParens': true } ],
    'no-const-assign': 2,
    'prefer-template': 2,
    'rest-spread-spacing': [ 2, 'never' ]
};

config.rules = Object.keys( config.rules ).reduce( ( rules, section ) => {

    Object.assign( rules, config.rules[ section ] );

    return rules;
}, {});

module.exports = config;