module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'indent': [1, 2],
    'react/react-in-jsx-scope': 'off',
  },
}
