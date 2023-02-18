module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  arrowParens: 'always',
  endOfLine: 'auto',
  importOrder: [
    '^@/components(.*)$',
    '^@/pages(.*)$',
    '^@/hooks(.*)$',
    '^@/lib(.*)$',
    '^@/styles/(.*)$',
    '^@/(.*)$',
    '^[./]',
    '^'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
