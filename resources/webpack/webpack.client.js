const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: {
    app: './src/index.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                autoprefixer,
              ];
            },
          },
        }, {
          loader: 'sass-loader',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve('resources/templates/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,
    }),
    new ExtractTextPlugin({ filename: 'style.css' }),
  ],
};
