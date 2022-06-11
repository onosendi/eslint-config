module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  ignorePatterns: [
    '.nyc_output/',
    'coverage/',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  rules: {
    'import/prefer-default-export': 'off',

    // https://eslint.org/docs/rules/max-len
    // Enforces a maximum line length.
    'max-len': 'off',

    // https://eslint.org/docs/rules/no-console
    // Disallows the use of console.
    'no-console': [
      1,
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],

    // https://eslint.org/docs/rules/sort-keys
    // Requires object keys to be sorted.
    'sort-keys': ['error', 'asc'],
  },
};
