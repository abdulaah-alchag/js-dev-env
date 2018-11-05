import express from 'express';
import path from 'path';
import open from 'open'; //used to open our site in the browser
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */

const port = 3000;
const app = express();
//call the webpack and pass the config
const compiler = webpack(config);

//is a way for us to tell express other things we like to use 
app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath 
    //we just referencing variable that we define when we setup our webpack config
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});
