// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Portfolio | Gita Alekhya Paul",
  tagline: "A portfolio website of Gita Alekhya Paul.",
  url: "https://gitaalekhyapaul.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "gitaalekhyapaul",
  projectName: "cn-portfolio",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
        disableSwitch: true,
      },
      navbar: {
        title: "Portfolio | Gita Alekhya Paul",
        logo: {
          alt: "Portfolio Logo",
          src: "img/logo.jpeg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "about-me",
          //   position: "left",
          //   label: "About Me",
          // },
          // {
          //   type: "doc",
          //   docId: "lab-work",
          //   position: "left",
          //   label: "Lab Work",
          // },
          // {
          //   type: "doc",
          //   docId: "projects",
          //   position: "left",
          //   label: "Projects",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sitemap",
            items: [
              {
                label: "About Me",
                to: "/",
              },
              // {
              //   label: "Lab Work",
              //   to: "/lab",
              // },
              // {
              //   label: "Projects",
              //   to: "/projects",
              // },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/gitaalekhyapaul",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/gitaalekhyapaul",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gitaalekhyapaul",
              },
            ],
          },
          {
            title: "Contact Me",
            items: [
              {
                label: "E-mail",
                href: "mailto:contact@gitaalekhyapaul.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gita Alekhya Paul`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
