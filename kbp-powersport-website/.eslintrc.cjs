module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: false
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended"
  ],
  plugins: ["vue"],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-debugger": "warn",
    "vue/multi-word-component-names": "off"
  }
};
