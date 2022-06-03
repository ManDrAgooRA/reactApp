const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
require('dotenv').config();

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.STRIPE_PUBLISH_KEY': JSON.stringify(
        process.env.STRIPE_PUBLISH_KEY
      ),
      'process.env.STRIPE_SECRET_KEY': JSON.stringify(
        process.env.STRIPE_SECRET_KEY
      ),
    }),
  ],
});
