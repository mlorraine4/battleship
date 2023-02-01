const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.json$/,
        include: /(lottie)/,
        loader: 'lottie-web-webpack-loader',
        options: {
          assets: {
            scale: 0.5 // proportional resizing multiplier
          }
        }
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
