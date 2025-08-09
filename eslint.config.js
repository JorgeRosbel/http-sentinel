import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  baseDirectory: import.meta.url,
});

export default [
  { ignores: ["node_modules/**", "dist/**", "*.config.js", ".github/**", "coverage/**"] },

  ...compat.extends("plugin:@typescript-eslint/recommended", "prettier"),
  {
    rules: {
      /* … */
    },
  },
];


