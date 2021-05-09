import * as webpack from 'webpack'
import 'webpack-dev-server'
import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

const Config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'renderer.[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist'],
    }),
    new webpack.DefinePlugin({}),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: ['node_modules'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  target: 'web',
}

export default Config
