'use strict';

const commonRules = require('./lib/common/rules');
const commonOverrides = require('./lib/common/overrides');
const commonIgnorePatterns = require('./lib/common/ignore-patterns');

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  ignorePatterns: [
    ...commonIgnorePatterns,
  ],
  overrides: [
    ...commonOverrides,
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  root: true,
  rules: {
    ...commonRules,
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
    }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '#*/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
  },
};
