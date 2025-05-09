'use strict';

module.exports = {
  'implicit-arrow-linebreak': 'off',
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.{test,spec}.{js,ts}',
        '**/vitest.config.{js,ts}',
        'test/**/*.{ts,js}',
      ],
    },
  ],
  'import/prefer-default-export': 'off',
  'max-classes-per-file': 'off',
  'max-len': ['error', {
    code: 120,
    comments: 120,
  }],
  'no-confusing-arrow': 'off',
  'no-console': 'error',
};
