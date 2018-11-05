//This file isn't transpiled, so must use CommonJS and ES5

//This will tell Mocha that first babel should transpile our test before mocha run this test 
require('babel-register')();


//Disable any webpack specific features that Mocha doesn't understand
//in this case .css becasue in index.js we are requiring index.css
require.extensions['.css'] = function() {};
