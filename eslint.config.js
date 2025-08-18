import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser, // ✅ browser globals like window, document
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    },
  },
];
