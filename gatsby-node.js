exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // Disable ESLint for development to avoid errors from pre-built components
  if (stage === 'develop' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            exclude: [
              /node_modules/,
              /\.cache/,
              /public/
            ],
            use: []
          }
        ]
      }
    });
  }
};