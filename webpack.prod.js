const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/styles', to: 'styles' }],
    }),

    new Dotenv({
      path: './.env',
    }),
  ],
});
