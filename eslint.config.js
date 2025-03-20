import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  eslint.configs.recommended,
  {
    ignores: [
      "**/dist/**",
      "**/build/**",
      "**/node_modules/**",
      "**/coverage/**",
      "**/.next/**",
    ],
  },
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/jsx-uses-react": "warn",
      "react/jsx-uses-vars": "warn",
      "react-hooks/rules-of-hooks": "warn",
      "react-hooks/exhaustive-deps": "warn",
      "no-unused-vars": "warn",
      //   "react/prop-types": "warn",
      //   "no-console": "warn",
      //   "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      //   "no-undef": "error",
      //   "no-debugger": "warn",
      //   "prefer-const": "warn",
      //   "react/prop-types": "off",
      //   "react/react-in-jsx-scope": "off",
      //   "react/jsx-uses-react": "off",
      //   "react/jsx-uses-vars": "error",
      //   "react-hooks/rules-of-hooks": "error",
      //   "react-hooks/exhaustive-deps": "warn",
      //   "import/no-unresolved": "error",
      //   "import/named": "error",
      //   "import/default": "error",
      //   "prettier/prettier": [
      //     "error",
      //     {
      //       singleQuote: false,
      //       semi: true,
      //       trailingComma: "all",
      //     },
      //   ],
    },
  },
];
