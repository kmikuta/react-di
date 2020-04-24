const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const mockServer = require("./mock-server");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    setup: mockServer,
    hot: true,
  },
});
