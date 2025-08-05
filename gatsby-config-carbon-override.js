// Override gatsby-theme-carbon to remove gatsby-plugin-sharp
const originalConfig = require('gatsby-theme-carbon/gatsby-config.mjs');

module.exports = (themeOptions) => {
  const config = originalConfig.default(themeOptions);
  
  // Remove gatsby-plugin-sharp from plugins array
  config.plugins = config.plugins.filter(plugin => {
    if (typeof plugin === 'string') {
      return plugin !== 'gatsby-plugin-sharp';
    }
    if (plugin && plugin.resolve) {
      return plugin.resolve !== 'gatsby-plugin-sharp';
    }
    return true;
  });
  
  console.log('Removed gatsby-plugin-sharp from theme config');
  return config;
};