//webpack configured via a single object that we define here 
//webpack configured by exporting this object
import path from 'path';
import webpack from 'webpack';
//we are calling specific webpack feature
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true, //this enabling debug information
  devtool: 'source-map', //that recommended for production, provides highest quality sourcemap 
  noInfo: false, //webpack will not display the list of the files, no noise in the command line
  entry: { //object instead of array of entry points, good way to inject middleware for hot reloading 
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index') //here is simple
    // global __dirname which is part of node to sure we get full path using path package
  },
  target: 'web', //we could set it to 'node' if we are using wepack to build app running on node
  output: { //here we tell webpack where to creat a the bundles 
    //Webpack wont actually generate any physical files, 
    //it will just creat bundle in memory and serve it to the browser
    //we need to define path and name to simulate the file existance
    path: path.resolve(__dirname, 'dist'), //distribution
    publicPath: '/',
    filename: '[name].[chunkhash].js' //updating the file name format to use the hash 
  },
  plugins: [
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),

    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(), 

    // Use CommonsChunkPlugin to create separate bundle
    // of vendor libraries so that they're cached separately
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Create HTML file that includes reference to bundle JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true,
      // Properties we define here are available in index.html
      // using htmlWebpackPlugin.options.varName
      trackJSToken: '6891fece31c8488c98207d4e69d8dba3'
    }),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),
    
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [ //handle different file types
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
      //we dont need the 'style' loader anymore 
      //update css loader so it will call the extract text plugin
    ]
  }
}
