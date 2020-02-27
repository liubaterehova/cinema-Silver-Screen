const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CURRENT_DIRECTORY = path.resolve();

module.exports = {
  target: 'node',
  mode: 'development',
  entry: path.join(CURRENT_DIRECTORY, 'src/server/index.js'),
  output: {
    publicPath: '/assets/',
    path: path.resolve('dist'),
    filename: 'server.js',
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()],
  resolve: {
    modules: [path.resolve('src'), 'node_modules'],
    extensions: ['.js'],
    symlinks: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.resolve('src')],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: path.join(CURRENT_DIRECTORY, 'public'),
      to: path.join(CURRENT_DIRECTORY, 'dist/public'),
    }]),
  ],
};
