module.exports = {
  root: true,
  extends: '@react-native-community/eslint-config',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'off',
    'react-native/no-inline-styles': 'off',
    curly: 'off',
    radix: 'off',
    'no-shadow': 'off',
    'comma-dangle': 'off',
    'jsx-quotes': 'off',
    'no-catch-shadow': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-unused-state': 'warn',
    'no-nested-ternary': 'warn',
    'no-else-return': 'warn',
    'no-useless-constructor': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'no-lonely-if': 'warn',
    'no-duplicate-case': 'warn',
    'no-dupe-else-if': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'no-unneeded-ternary': [
      'warn',
      {
        defaultAssignment: false,
      },
    ],
    'no-var': 'warn',
    'prefer-const': 'warn',
    'require-await': 'warn',
    yoda: 'warn',
    'max-depth': [
      'warn',
      {
        max: 3,
      },
    ],
    'no-param-reassign': 'warn',
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        variables: false,
      },
    ],
    camelcase: 'warn',
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
    },
  ],
};
