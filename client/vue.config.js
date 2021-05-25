const path = require("path");

module.exports = {
  pluginOptions: {
    moment: {
      locales: [""],
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  outputDir: path.resolve(__dirname, '../backend/public')
};
