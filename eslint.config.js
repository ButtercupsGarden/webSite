import pluginJs from "@eslint/js";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import esLintConfigPrettier from "eslint-config-prettier";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),
  esLintConfigPrettier,
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
  {
    rules: {
      "vue/require-default-prop": "off",
      "vue/singleline-html-element-content-newline": 0,
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
    },
  },
];
