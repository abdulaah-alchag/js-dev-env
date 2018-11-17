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

app.get('/users', function(req, res){
    // Hard coding for simplicity, Pretend this hits a real database
    res.json([
        {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
        {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
    ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
});
