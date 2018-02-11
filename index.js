module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
    "./rules/es6",
    "./rules/node",
    "./rules/strict",
    "./rules/style",
    "./rules/variables"
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  env: {
    browser: true,
    commonjs: true,
    amd: true,
    jquery: true
  }
};
