import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

/* eslint-disable no-console */

const json = JSON.stringify(jsf(schema));
//passing the schema we defind to json schema faker
//then convert it to a string using stringify

fs.writeFile("./src/api/db.json", json, function(err){
    if(err){
        return console.log(chalk.red(err));
    }else {
        console.log(chalk.green("Mock data generated."));
    }
});
//using node bulit-in fs to able to write our database file which will
//be placed in the api folder
