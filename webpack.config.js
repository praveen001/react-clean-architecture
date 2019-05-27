const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'),
  HappyPack = require('happypack');

module.exports = {
  mode: 'development',

  entry: './src/index.tsx',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: {
      index: '/index.html'
    }
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'happypack/loader?id=ts'
      }
    ]
  },

  plugins: [
    new HappyPack({
      id: 'ts',
      threads: 2,
      loaders: [
        {
          path: 'ts-loader',
          query: { happyPackMode: true }
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};