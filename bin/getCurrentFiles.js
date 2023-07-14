import fsPromises from "fs/promises";
import path from "path";

import { verifyFileTag } from "./verifyFileTag.js";

export async function getCurrentFiles() {

    const filesList = [];

    const filenames = await fsPromises.readdir(process.cwd());
    
    filenames.forEach(file => {

        if(path.extname(file) == ".md") {
            
            filesList.push(file);
        }
    })

    console.log("found " + filesList.length + " md files");
    console.log("verifying files, this could take a while...");

    const verifiedFilesList = [];

    for(const filename of filesList){

        if(verifyFileTag(filename)){
            
            console.log('file: ' + filename + ' successfully verified for tag #current/toDo');
            verifiedFilesList.push(filename);
        }
    }

    return verifiedFilesList;
}