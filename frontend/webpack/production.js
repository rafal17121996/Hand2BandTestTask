const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[local]",
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash:6].css",
      chunkFilename: "style.[contenthash:6].css",
      insert: (linkTag) => {
        const preloadLinkTag = document.createElement('link')
        preloadLinkTag.rel = 'preload'
        preloadLinkTag.as = 'style'
        preloadLinkTag.href = linkTag.href
        document.head.appendChild(preloadLinkTag)
         document.head.appendChild(linkTag)
    }
    }),
    // new PreloadWebpackPlugin({
    //   rel: 'preload',
    //   as: 'script'
    // })

  ],
};
