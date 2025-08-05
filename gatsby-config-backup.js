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
    isSwitcherEnabled: true,
    homepageTheme: 'g90',
    interiorTheme: 'g10',
    navigationStyle: '',
    lang: 'en',
  },
  pathPrefix: process.env.NODE_ENV === 'production' ? `/elevate-design-system-test` : '',
  flags: {
    // Optimize development experience
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    // Removed filesystem sources for images to prevent Sharp processing
    // Temporarily disable manifest to prevent icon processing issues
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'ELEVATE Design System',
    //     icon: 'src/images/favicon.svg',
    //     short_name: 'ELEVATE',
    //     start_url: '/',
    //     display: 'browser',
    //   },
    // },
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
        // Disable image processing to prevent hanging
        withWebp: false,
        imageQuality: 100,
        gatsbyPluginSharpOptions: {
          // Minimal processing
          defaults: {
            formats: ['auto'],
            placeholder: 'none',
            quality: 100,
            breakpoints: [320],
            backgroundColor: 'transparent',
          }
        },
      },
    },
  ],
};
