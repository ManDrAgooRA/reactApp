const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');
require('dotenv').config();

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  devtool: 'inline-source-map',
  devServer: {
    static: './build',
  },
  plugins: [new Dotenv()],
});
