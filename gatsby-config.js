module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: 'ELEVATE Design System',
    description: 'Documentation and guidelines for the ELEVATE Design System',
    keywords: 'design,system,elevate,components,guidelines',
    // Required fields for gatsby-theme-carbon
    repository: {
      baseUrl: 'https://github.com/owrede-inform/elevate-design-system-test',
      subDirectory: '',
      branch: 'main',
    },
    isSearchEnabled: false,
    isSwitcherEnabled: false,
    homepageTheme: 'g90',
    interiorTheme: 'g10',
    navigationStyle: '',
    lang: 'en',
  },
  pathPrefix: process.env.NODE_ENV === 'production' ? `/elevate-design-system-test` : '',
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
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'blurred',
          quality: 85,
          breakpoints: [750, 1080, 1366, 1920],
        },
        // High quality settings with persistent caching
        failOn: 'none',
        stripMetadata: true,
        defaultQuality: 85,
        useMozJpeg: true,
        // Enable persistent caching
        base64Width: 20,
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
        // Repository config moved to siteMetadata to avoid duplication
        // isSwitcherEnabled moved to siteMetadata as well
      },
    },
  ],
};
