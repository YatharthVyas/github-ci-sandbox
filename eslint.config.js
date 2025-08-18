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
      eqeqeq: "error",       // enforce ===
      semi: ["error", "always"], // require semicolons
      "no-console": "warn",    // warn on console.log
      "no-var": "error",       // disallow var
      // additional rules can be configured here
    },
  },
];
