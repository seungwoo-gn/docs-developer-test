// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'GenesisNest Economy',
    tagline: 'for Developer',
    url: 'https://docs.genesisnest.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: '/img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'genesisnest', // Usually your GitHub org/user name.
    projectName: 'docs-developer-test', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/genesisnest/docs-developer-test/tree/main/website/',
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
            title: 'GenesisNest',
            logo: {
                alt: 'GenesisNest',
                src: 'img/genesisnest-logo.png',
            },
            items: [{
                    type: 'doc',
                    docId: 'welcome',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/genesisnest/docs-developer-test',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Develop Guide',
                        to: '/docs/welcome',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Discord',
                            href: 'https://discordapp.com/',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/',
                        },
                        {
                            label: 'Medium',
                            href: 'https://Medium.com/',
                        },
                        {
                            label: 'Youtube',
                            href: 'https://youtube.com/',
                        },
                        {
                            label: 'Facebook',
                            href: 'https://Facebook.com/',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GenesisNest',
                        href: 'https://genesisnest.com',
                    }, ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} GenesisNest, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;