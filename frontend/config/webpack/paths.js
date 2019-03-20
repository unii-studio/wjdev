import path from 'path';

module.exports = {
  root: path.resolve(__dirname, '../', '../'),
  outputPath: path.resolve(__dirname, '../', '../', 'client/build'),
  entryPath: path.resolve(__dirname, '../', '../', 'client/src/index.js'),
  templatePath: path.resolve(
    __dirname,
    '../',
    '../',
    'client/public/index.html',
  ),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
