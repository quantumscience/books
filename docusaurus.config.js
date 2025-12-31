// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Open Access Scientific Library',
  tagline: 'Informatics, Data Science, and Research',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://openresearch.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quantumscience', // Usually your GitHub org/user name.
  projectName: 'books', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-Z2C0Y26EPQ', // Insert your Measurement ID here
          anonymizeIP: true,
        },        
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/quantumscience/books/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenResearch',
        logo: {
          alt: 'Open Access for Science',
          src: 'img/open-access-icon.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Books',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
              {
                label: 'Discord Docusaurus (SSG)',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X Docusaurus (SSG)',
                href: 'https://x.com/docusaurus',
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
                label: 'GitHub Web',
                href: 'https://github.com/quantumscience/books',
              },
              {
                label: 'GitHub OpenResearch',
                href: 'https://github.com/openresearch-uk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Daniel Sandner. The content of this project itself is licensed under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons (CC BY-NC-ND 4.0) license</a>, and the underlying source code used to format and display that content is licensed under the <a href="https://github.com/quantumscience/books/blob/main/LICENSE">MIT license</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    // Mermaid configuration
    markdown: {
      mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
};

export default config;
