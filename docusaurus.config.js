module.exports = {
  title: 'MediaVault',
  tagline: 'Your MediaVault Documentation',
  url: 'http://localhost:3000',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'garnetraven',
  projectName: 'mediavault',
  themeConfig: {
    navbar: {
      title: 'MediaVault',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
            routeBasePath: '/docs/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
