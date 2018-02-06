module.exports = {
  extends: [
    "./rules/best-practices",
    "./rules/errors",
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
    amd: true,
    jquery: true
  }
};
