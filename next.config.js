const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  basePath: '/imBhmn.github.io',

})

module.exports = withNextra()
