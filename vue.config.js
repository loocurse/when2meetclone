module.exports = {
  devServer: {
    proxy: 'http://localhost:2000'
  },
  pluginOptions: {
    moment: {
      locales: [""],
    },
  },
};
