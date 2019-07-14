module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: false,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-undef': 'off', // Currently does not work with typescript https://github.com/eslint/typescript-eslint-parser/issues/416
    'no-unused-vars': 'off', // Currently mistakes imported interfaces for unused variables
    'no-console': 'off', // Already caught by tslint
    'react/no-find-dom-node': 'off', // We need to do this with d3
    'react/display-name': 'off', // Seems lame
  },
  settings: {
    react: {
      version: '16.8', // React version, default to the latest React stable release
    },
  },
};
