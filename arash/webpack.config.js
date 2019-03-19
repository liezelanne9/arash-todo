const path = require('path'); //step 1

module.exports ={
  mode: 'development',
  entry: path.resolve(__dirname, './client/src'),
  output: {
    path: path.resolve(__dirname, './client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js[x]?/, //regex.. looking for anything with js or jsx extension
        exclude: /node_modules/,
        options: {
          presets: ['react', 'env'] //npm dependicies that you will install
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'] //these are the kind of file output that you will be testing
  }
}