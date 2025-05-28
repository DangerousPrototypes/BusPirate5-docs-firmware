// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bus Pirate 5 Firmware',
  tagline: 'Universal Open Source Hacking Tool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://firmware.buspirate.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dangerousprototypes', // Usually your GitHub org/user name.
  projectName: 'buspirate5-docs-firmware', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
			    routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DangerousPrototypes',
        },
        blog:false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'old_site',
        content:
          '<b>This site is no loner maintained. <a href="https://docs.buspirate.com">Visit the new Bus Pirate docs site</a>.</b>',
        backgroundColor: '#000000',
        textColor: '#ec2a35',
        isCloseable: false,
      }, 
      // Replace with your project's social card
      image: 'img/danger.png',
      navbar: {
        //title: 'Bus Pirate v5',
        logo: {
          alt: 'Bus Pirate Docs logo',
          src: 'img/danger.png',
        },
        items: [
          {
            to: 'https://buspirate.com',
            label: 'Bus Pirate',
            position: 'left',
          },
          {
            to: 'https://buspirate.com/get',
            label: 'Get',
            position: 'left',
          },     
          {
            to: 'https://docs.buspirate.com/docs/downloads/',
            label: 'Downloads',
            position: 'left',
          },                     
          {
            to: 'https://docs.buspirate.com',
            //type: 'docSidebar',
            //sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '*New Docs*',
          },		            
          {
            to: 'https://forum.buspirate.com',
            label: 'Forum',
            position: 'left',
          },     
 
          {
            to: 'https://buspirate.com/contact',
            label: 'Contact',
            position: 'left',
          },                          
          /*{to: '/blog', label: 'Blog', position: 'left'},*/
          {
            href: 'https://github.com/DangerousPrototypes',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },   
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Distributors',
            items: [
              {
                label: 'Get Bus Pirate',
                to: 'https://buspirate.com/get',
              },
              {
                label: 'All Bus Pirate hardware',
                to: 'https://dirtypcbs.com/store/designer/browse/ian',
              },              
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: '*New Docs*',
                to: 'https://docs.buspirate.com',
              },	
              {
                to: 'https://docs.buspirate.com/docs/downloads/',
                label: 'Downloads',
              },                
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                to: 'https://forum.buspirate.com',
              },
              {
                label: 'Mastodon',
                to: 'https://mastodon.social/@buspirate',
              },   
              {
                label: 'BlueSky',
                to: 'https://bsky.app/profile/buspirate.bsky.social',
              },  
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/dangerousprototypes/',
              },                                                
              {
                label: 'Twitter',
                to: 'https://twitter.com/dangerousproto',
              },                  
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://buspirate.com',
              },
              {
                label: 'Contact',
                to: 'https://buspirate.com/contact',
              },               
              {
                label: 'GitHub',
                to: 'https://github.com/DangerousPrototypes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Where Labs, LLC. Built with Open Source.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
