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
      items: [
        { to: '/blog', label: 'Blog', position: 'right' },
        { to: '/downloads', label: 'Downloads', position: 'right' },
        { to: '/contribute', label: 'Contribute', position: 'right' },
        { to: '/docs', label: 'Documentation', position: 'right' },
        { to: '/contact', label: 'Contact', position: 'right' },
        { to: '/forum', label: 'Forum', position: 'right' },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer : {
        links: [
            {
                title: "Documentation",
                items: [
                    {
                        label: "Documentation",
                        to: "docs/",
                    },
                ],
            },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MediaVault`
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
  plugins: [
      [
        require.resolve('@cmfcmf/docusaurus-search-local'),
        {
            indexDocs: true,
            indexBlog: true,
            indexPages: true,
        },
      ],
  ],
};
