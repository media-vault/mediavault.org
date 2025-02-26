module.exports = {
  title: 'MediaVault',
  tagline: 'Your MediaVault Documentation',
  url: 'https://your-domain.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'your-github-username',
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
