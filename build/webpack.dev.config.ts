import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'
import BaseConfig from './webpack.base.config'

const Config: webpack.Configuration = webpackMerge.merge({
  ...BaseConfig,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: 8001,
    overlay: {
      errors: true,
    },
    hot: true,
  },
  plugins:[
    ...BaseConfig.plugins,
    new webpack.HotModuleReplacementPlugin(),
  ]
})

export default Config
