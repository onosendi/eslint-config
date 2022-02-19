module.exports = {
  env: {
    es2021: true,
  },
  ignorePatterns: [
    '.nyc_output/',
    'coverage/',
  ],
  root: true,
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'no-console': [
      1,
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
  },
};
