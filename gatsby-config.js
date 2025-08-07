// Configuration with Sharp processing fix for data directory exclusion
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
  // pathPrefix: process.env.NODE_ENV === 'production' ? `/elevate-design-system-test` : '',
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
    // Disable file download caching to prevent serialization issues
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
        // Exclude backstop test images from processing
        ignore: [`**/data/**`, `**/.backstop/**`, `**/node_modules/**`],
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
          quality: 85,
          breakpoints: [320, 768, 1024, 1920],
          backgroundColor: 'transparent',
        }
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        withWebp: true,
        imageQuality: 85,
      },
    },
  ],
};