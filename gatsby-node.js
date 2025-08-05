
// Simplified configuration for development
exports.onPreBootstrap = ({ actions }) => {
  console.log('Starting development server with optimized image processing...');
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // Minimal webpack config - let Gatsby handle CSS modules processing
  const webpackConfig = {
    // Completely disable cache to prevent SassError serialization issues
    cache: false,
    infrastructureLogging: {
      level: 'error', // Reduce webpack warnings about cache
    },
  };

  // Only add essential configs without interfering with CSS modules
  if (stage === 'develop') {
    webpackConfig.output = {
      chunkLoadTimeout: 30000, // Increase timeout to 30 seconds
    };
  }

  actions.setWebpackConfig(webpackConfig);
};

