module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false }
    ],
    'space-before-function-paren': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'comma-dangle': ['error', 'never'],
    'no-console': 'warn',
    'no-debugger': 'error',
    eqeqeq: ['error', 'always'],
    'no-duplicate-imports': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: ['error', { properties: 'always' }],
    'comma-spacing': ['error', { before: false, after: true }],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'new-parens': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-tabs': 'error',
    'no-whitespace-before-property': 'error',
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+']
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error'],

    // Desactiva Prettier
    'prettier/prettier': 'off'
  }
}
