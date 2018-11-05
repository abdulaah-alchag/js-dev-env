//webpack configured via a single object that we define here 
//webpack configured by exporting this object
import path from 'path';

export default {
  debug: true, //this enabling debug information
  devtool: 'inline-source-map',
  noInfo: false, //webpack will not display the list of the files, no noise in the command line
  entry: [ //array of entry points, good way to inject middleware for hot reloading 
    path.resolve(__dirname, 'src/index') //here is simple
    // global __dirname which is part of node to sure we get full path using path package
  ],
  target: 'web', //we could set it to 'node' if we are using wepack to build app running on node
  output: { //here we tell webpack where to creat a the bundles 
    //Webpack wont actually generate any physical files, 
    //it will just creat bundle in memory and serve it to the browser
    //we need to define path and name to simulate the file existance
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [ //handle different file types
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
