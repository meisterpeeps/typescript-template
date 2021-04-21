const path = require("path");
const { DefinePlugin } = require('webpack');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    main: ["./src/main.tsx"],
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../dist/scripts"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
};
