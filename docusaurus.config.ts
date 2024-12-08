import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Babbelaar',
    tagline: 'De eerste Nederlandse programmeertaal.',
    favicon: 'favicon.ico',

    // Set the production url of your site here
    url: 'https://babbelaar.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'babbelaar', // Usually your GitHub org/user name.
    projectName: 'website', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'nl',
        locales: ['nl'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/babbelaar/website/',
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
                        'https://github.com/babbelaar/website/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/icon2048.jpg',
        navbar: {
            title: 'Babbelaar',
            logo: {
                alt: 'My Site Logo',
                src: 'img/icon512.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Handleiding',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'documentationSidebar',
                    position: 'left',
                    label: 'Documentatie',
                },
                {
                    href: 'https://github.com/babbelaar/website',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'babbelaar.dev',
                    items: [
                        {
                            label: 'Handleiding',
                            to: '/docs/handleiding/intro',
                        },
                        {
                            label: 'Documentatie',
                            to: '/docs/documentatie/',
                        },
                    ],
                },
                {
                    title: 'Andere webpagina’s',
                    items: [
                        {
                            label: 'Babbelaars Hoofdrepertoire',
                            href: 'https://github.com/babbelaar/babbelaar',
                        },
                        {
                            label: 'VS Code in het Nederlands',
                            href: 'https://github.com/babbelaar/vscode-dutch-language',
                        },
                    ],
                },
            ],
            copyright: `Auteursrecht © ${new Date().getFullYear()} Babbelaar`,
        },
        prism: {
            theme: prismThemes.oneLight,
            darkTheme: prismThemes.oneDark,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
