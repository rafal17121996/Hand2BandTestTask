module.exports = {

    devServer: {
      contentBase: "./public",
      port: 3000,
    },
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.module\.scss$/,
          use: [
            "style-loader",
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
            "style-loader",
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
  };