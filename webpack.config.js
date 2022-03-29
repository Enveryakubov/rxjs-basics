const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    sandbox: './src/index.js',
    scrolling: './src/index1.js',
    countdown: './src/index2.js',
    polling: './src/index3.js',
    mortgage: './src/index4.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};
