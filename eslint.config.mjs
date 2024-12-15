import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginEslintPrettier from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  pluginEslintPrettier,
  eslintConfigPrettier,
  {
    plugins: {
      pluginReact,
    },
    files: ["**/*.{js,mjs,cjs,jsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    languageOptions: { globals: globals.browser },
    ignores: ["vite.config.ts"],
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "no-undef": "off",
      "prettier/prettier": [
        "warn",
        {
          arrowParens: "always",
          bracketSameLine: false,
          bracketSpacing: true,
          semi: true,
          experimentalTernaries: false,
          singleQuote: false,
          jsxSingleQuote: false,
          quoteProps: "as-needed",
          trailingComma: "all",
          singleAttributePerLine: false,
          htmlWhitespaceSensitivity: "css",
          vueIndentScriptAndStyle: false,
          proseWrap: "preserve",
          insertPragma: false,
          requirePragma: false,
          tabWidth: 2,
          useTabs: false,
          embeddedLanguageFormatting: "auto",
          printWidth: 80,
        },
      ],
    },
  },
];
