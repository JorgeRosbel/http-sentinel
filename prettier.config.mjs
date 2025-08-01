/** @type {import("prettier").Options} */
export default {
    semi: true,
    singleQuote: true,
    printWidth: 100,
    tabWidth: 2,
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "avoid",
    overrides: [
      {
        files: "*.ts",
        options: { parser: "typescript" }
      }
    ]
  };