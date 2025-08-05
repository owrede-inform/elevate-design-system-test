
// Simplified configuration for development
exports.onPreBootstrap = ({ actions }) => {
  console.log('Starting development server with optimized image processing...');
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // Only configure essential timeout settings - let Gatsby handle the rest
  const webpackConfig = {};

  // Development-specific timeout fix
  if (stage === 'develop' || stage === 'develop-html') {
    webpackConfig.output = {
      chunkLoadTimeout: 120000, // 2 minute timeout for slow connections
    };
  }

  actions.setWebpackConfig(webpackConfig);
};

