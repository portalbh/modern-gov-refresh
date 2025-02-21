import js from "@eslint/js";
import globals from "globals";

export default {
  extends: [js.configs.recommended],
  files: ["**/*.js"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  rules: {
    "no-unused-vars": "off",
  },
};
