import * as webpack from 'webpack'
import * as webpackMerge from 'webpack-merge'
import BaseConfig from './webpack.base.config'

const Config: webpack.Configuration = webpackMerge.merge({
	...BaseConfig,
	mode: 'production',
	devtool: false,
})

export default Config
