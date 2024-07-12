module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '/lib/**/*',
    '**/*.test.ts',
    '**/*.config.*',
    '/coverage/**',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'quotes': ['error', 'single'],
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
    'indent': [1, 2],
  },
  overrides: [
    {
      files: ['**/testData.ts', 'src/contracts/**/*.ts'],
      rules: {
        'max-len': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};
