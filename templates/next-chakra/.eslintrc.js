module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: [
    'simple-import-sort',
    '@typescript-eslint',
    'import',
    'react',
    'jsx-a11y',
  ],
  rules: {
    // jsx-a11y rules
    'jsx-a11y/accessible-emoji': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    // react-hooks rules
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'off',

    // react rules
    'react/display-name': 'off',
    'react/jsx-sort-props': 'off',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    // import rules
    'import/extensions': [
      'warn',
      'never',
      {
        css: 'ignorePackages',
        graphql: 'ignorePackages',
      },
    ],
    'import/newline-after-import': 'warn',
    'import/order': 'off',
    'sort-imports': 'off',

    // simple import rules
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // React imports
          ['^react$', '^@?\\w'],
          // CSS/SCSS imports
          ['^.+\\.s?css$'],
          // Side effect imports
          ['^\\u0000'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],

    // other rules
    'func-names': 'off',
  },
  overrides: [
    {
      files: ['**/*.d.ts', '**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    es6: true,
  },
};
