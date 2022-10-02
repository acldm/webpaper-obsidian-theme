const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FixedStyleOnlyEntries = require('webpack-fix-style-only-entries')
module.exports = {
  mode: 'development',
  entry: {
    obsidian: "./theme/index.scss",
  },
  output: {
    path: '/Users/mia/OneDrive/电子书/jeff/.obsidian/themes/',
  },
  devServer: {
    contentBase: "./"
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new FixedStyleOnlyEntries(),
    new MiniCssExtractPlugin()
  ]
}
