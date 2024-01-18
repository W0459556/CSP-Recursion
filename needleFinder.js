"use strict";
const fs = require('fs');
const { dirname } = require('path');
const { start } = require('repl');

/*
Breanna Young
Jan 18 2024
find needle in haystack
*/

function main(findFileName, directoryToSearch){
    let directoryContents = (fs.readdirSync(directoryToSearch));

    for(let i = 0; i < directoryContents.length; i++){
        let info = fs.statSync((directoryToSearch + "/" + directoryContents[i]));

        if(info.isDirectory()){
            main(findFileName, directoryToSearch + "/" + directoryContents[i]);
        }

        else if((directoryContents[i].toLowerCase()) === findFileName.toLowerCase()){
            console.log(directoryToSearch + "/" + directoryContents[i]);
            console.log(`Found ${directoryContents[i]}`);
            console.log(fs.readFileSync((directoryToSearch + "/" + directoryContents[i]), {encoding: 'utf-8'}));
            return;
        }
    }
}

const startDirectory = (__dirname + "/haystack");
  
if (require.main ===module){
    main("needle.txt", startDirectory);
}