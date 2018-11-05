import {expect} from 'chai';
//Mocha doesn't come with assertion library 
import jsdom from 'jsdom';
import fs from 'fs';
//fs come along with node stand for file system

// ()=> is a function
describe('Our first test', () =>{
    it('should pass', ()=>{
        expect(true).to.equal(true);
    });

});

describe('index.html', () =>{
    it('should say hello', (done) =>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        //get a reference to index.html and hold it in memory
        jsdom.env(index, function(err,window){
        //the way of defining jsdom environment
        //if we want to run js in jsdom env we can pass array of js files as second parameter
        //call back function runs after jsdom, window is the window in the browser
        const h1 = window.document.getElementsByTagName('h1')[0];
        //will bring back an array, [0] is the first one 
        expect(h1.innerHTML).to.equal('Hello World!');
        done();
        //when we call jsdom there's an asynchronous call occur to set it up we put done
        window.close();
        });
         
    });
});
