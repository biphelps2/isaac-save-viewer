// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    // The linter base is the shared IsaacScript config:
    // https://github.com/IsaacScript/isaacscript/blob/main/packages/eslint-config-isaacscript/base.js
    "eslint-config-isaacscript/base",
  ],

  // Don't bother linting the compiled output.
  // @template-ignore-next-line
  /// ignorePatterns: [],
  // @template-customization-start
  ignorePatterns: [
    "**/dist/**",
    "static/main.js",
    "static/lib/KaitaiStream.js",
    "static/lib/IsaacSaveFile.js",
  ],
  // @template-customization-end

  parserOptions: {
    // ESLint needs to know about the project's TypeScript settings in order for TypeScript-specific
    // things to lint correctly. We do not point this at "./tsconfig.json" because certain files
    // (such at this file) should be linted but not included in the actual project output.
    project: "./tsconfig.eslint.json",
  },

  rules: {
    // Insert changed or disabled rules here, if necessary.

    // @template-customization-start
    "no-param-reassign": "off",
    "isaacscript/no-number-enums": "off",
    // @template-customization-end
  },
};

module.exports = config;
