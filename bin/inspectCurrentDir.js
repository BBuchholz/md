import fs from "fs";
import fsPromises from "fs/promises";
import path from "path";

import { log } from "./log.js";
import { verifyFileTag } from "./verifyFileTag.js";
import { chalkLog } from "./chalkLog.js";
import { buildWorkspaceFile } from "./buildWorkspaceFile.js";

// adapted async methodology from stackoverflow at:
// https://stackoverflow.com/a/72133314/670768

export async function inspectCurrentDir() {

    const mdmdmDir = process.cwd() + "/.mdmdm";

    let dirExists = false;

    try{

        if(fs.existsSync(mdmdmDir)){

            dirExists = true;

        }else{

            dirExists = false;
        }
    
    }catch(err){

        chalkLog("error checking directory: " + err);
    }

    if(!dirExists){

        log("creating dir " + mdmdmDir);

        try{
            
            fs.mkdirSync(mdmdmDir);
            log("directory created");

        }catch(err){

            chalkLog("error creating directory: " + err);
        }

    }else{

        log("found dir " + mdmdmDir);
    }
    

    const indexFileName = "workspace.txt";
    const indexFile = mdmdmDir + "/" + indexFileName;
    log("checking for " + indexFile);

    let fileNeedsBuilding = false;

    try{

        if(fs.existsSync(indexFile)){

            // EACH OF THESE LOG LINES SHOULD BE
            // ATTACHED TO A LOGIC BLOCK
            log("found " + indexFile);
            log("loading indexeds files for analysis...");

            const workspaceList = loadIndexedFiles(indexFile);

            log("analysing files...");

            //TODO: check each file contains the text "#current/toDo"

            //////////////////////////////////////////////////
            /// COPY THE BLOCK ABOVE FOR indexedFileContents
            //////////////////////////////////////////////////
            
            var { 
                verifiedList, 
                allVerified 
            }   = analyzeFiles(workspaceList);



            //if is, continue
            //if any are found out of sync,
            //delete workspace file and recommend
            //rerunning to recreate

            log("verification finished, found " + verifiedList.length + " files");

            if(!allVerified){

                log('inconsistencies were found during verification (some files listed as tagged were not tagged) and so the list will be rebuilt (this may take a few moments)');
                fileNeedsBuilding = true;
                // await buildWorkspaceFile(indexFile);
                // chalkLog('file rebuilt');
            }

        }else{

            // EACH OF THESE LOG LINES SHOULD BE
            // ATTACHED TO A LOGIC BLOCK
            log("couldn't find workspace file, building...");

            fileNeedsBuilding = true;
            // await buildWorkspaceFile(indexFile);

        }
    
    }catch(err){

        chalkLog("error accessing workspace file: " + err);
    }

    if(fileNeedsBuilding){

        try{

            await buildWorkspaceFile(indexFile);

        }catch(err){
            
            chalkLog("error building file: " + err);
        }
    }

    const filenames = await fsPromises.readdir(process.cwd());
    
    let output = '';
    let count = 0;

    filenames.forEach(file => {
        
        if(path.extname(file) == ".md") {
            
            count++;
            log('found ' + count + ' files');
            
            if(count < 20){

                output += file + "\n"
            }
        }
    })

    if(count == 0){
        
         log("No markdown files found.");

    }else{

        log("Markdown files found: " + count);
        log("Including:"); 
        log(output);

    }

}


function analyzeFiles(workspaceList) {
    const verifiedList = [];
    let allVerified = true; //assume all will pass

    for (const indexedFileName of workspaceList) {

        let thisFileIsTagged = verifyFileTag(indexedFileName);

        if (!thisFileIsTagged) {

            allVerified = false;

        } else {

            verifiedList.push(indexedFileName);
        }
    }
    return { verifiedList, allVerified };
}

function loadIndexedFiles(indexFile) {

    //TODO: read each file into a workspace list
    const workspaceList = [];
    const indexFileContents = fs.readFileSync(indexFile, 'utf-8');

    indexFileContents.split(/\r?\n/).forEach(line => {

        log(`found file: ${line}`);
        workspaceList.push(line);
    });
    return workspaceList;
}

