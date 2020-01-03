module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript", "plugin:import/warnings", "plugin:import/errors"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
  ,
  settings: {
    'import/extensions': ['error', 'always', {js: 'never', vue: 'never', ts: 'never'}],
    'import/resolver': {alias: {map: [['@', './src']] , extensions: ['.js', '.ts', '.vue']}, }
  }
};
