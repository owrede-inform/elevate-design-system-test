// Minimal configuration to test dev server startup
module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: 'ELEVATE Design System',
    description: 'Documentation and guidelines for the ELEVATE Design System',
    keywords: 'design,system,elevate,components,guidelines',
    repository: {
      baseUrl: 'https://github.com/owrede-inform/elevate-design-system-test',
      subDirectory: '',
      branch: 'main',
    },
    isSearchEnabled: false,
    isSwitcherEnabled: true,
    homepageTheme: 'g90',
    interiorTheme: 'g10',
    navigationStyle: '',
    lang: 'en',
  },
  pathPrefix: process.env.NODE_ENV === 'production' ? `/elevate-design-system-test` : '',
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        withWebp: false,
        imageQuality: 100,
      },
    },
  ],
};