'use strict';

const commonRules = require('./lib/common/rules');
const commonOverrides = require('./lib/common/overrides');
const commonIgnorePatterns = require('./lib/common/ignore-patterns');

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  ignorePatterns: [
    ...commonIgnorePatterns,
  ],
  overrides: [
    ...commonOverrides,
    {
      files: ['*.spec.ts', '*.test.ts'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
      },
    },
    {
      files: ['*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    ...commonRules,
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        ignoredNodes: [
          'TSTypeParameterInstantiation',
        ],
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: true,
        },
        overrides: {
          interface: {
            multiline: {
              delimiter: 'semi',
              requireLast: true,
            },
          },
        },
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
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

