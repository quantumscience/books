const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
  title: 'Open Access Scientific Library',
  tagline: 'Informatics, Data Science, and Research',
  url: 'https://openresearch.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'quantumscience', // Usually your GitHub org/user name.
  projectName: 'books', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/quantumscience/books/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Project News',
          blogTitle: 'News from Open Research Project',
          blogDescription: 'Books from Open Access Research Library',
          // Please change this to your repo.
          editUrl:
            'https://github.com/quantumscience/books/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'OpenResearch',
        logo: {
          alt: 'Open Access for Science',
          src: 'img/open-access-icon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Books',
          },
          {to: '/blog', label: 'News', position: 'left'},
          {
            href: 'https://github.com/quantumscience/books',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'About the Project',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/17056688/open-research',
              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/quantumscience/books',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Daniel Sandner. The content of this project itself is licensed under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons (CC BY-NC-ND 4.0) license</a>, and the underlying source code used to format and display that content is licensed under the <a href="https://github.com/quantumscience/books/blob/main/LICENSE">MIT license</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
