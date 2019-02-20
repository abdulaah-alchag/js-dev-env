import express from 'express';
import path from 'path';
import open from 'open'; //used to open our site in the browser
import compression from 'compression';
//enabling gzip compression, so we can see final gzip file sizes we are serving the app locally 
//this give us a clear understand about the file sizes sent over the wire to the user
// remove webpack calls becasue we're no longer interacting with webpack with distserver
// we will be serving up static files 

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

// add support to express for serving static files
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});
