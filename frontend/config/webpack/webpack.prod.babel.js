import CleanWebpackPlugin from 'clean-webpack-plugin';
import webpack from 'webpack';

import paths from './paths';
import rules from './rules';
import envs from './envs';

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsFolder}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin([paths.outputPath.split('/').pop()], {
      root: paths.root,
    }),
    new webpack.DefinePlugin(envs),
  ],
  devtool: 'source-map',
};
