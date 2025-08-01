module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: 'ELEVATE Design System',
    description: 'Documentation and guidelines for the ELEVATE Design System',
    keywords: 'design,system,elevate,components,guidelines',
  },
  pathPrefix: `/elevate-design-system-test`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ELEVATE Design System',
        icon: 'src/images/favicon.svg',
        short_name: 'ELEVATE',
        start_url: '/',
        display: 'browser',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sass',
    //   options: {
    //     sassOptions: {
    //       quietDeps: true,
    //       silenceDeprecations: ['mixed-decls', 'legacy-js-api'],
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/inform-elevate/elevate-design-system-docs',
          subDirectory: '',
        },
        isSwitcherEnabled: true,
      },
    },
  ],
};
