const path = require("path");

module.exports = {
  entry: "./src/js/articleSearch.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static"),
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
