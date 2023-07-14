import fs from "fs";
// import fsPromises from "fs/promises";
// import path from "path";

import { getCurrentFiles } from "./getCurrentFiles.js";
import { verifyFileTag } from "./verifyFileTag.js";

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

        console.log("error checking directory: " + err);
    }

    if(!dirExists){

        console.log("creating dir " + mdmdmDir);

        try{
            
            fs.mkdirSync(mdmdmDir);
            console.log("directory created");

        }catch(err){

            console.log("error creating directory: " + err);
        }

    }else{

        console.log("found dir " + mdmdmDir);
    }
    

    const indexFileName = "workspace.txt";
    const indexFile = mdmdmDir + "/" + indexFileName;
    console.log("checking for " + indexFile);

    let fileNeedsBuilding = false;

    try{

        if(fs.existsSync(indexFile)){

            // EACH OF THESE LOG LINES SHOULD BE
            // ATTACHED TO A LOGIC BLOCK
            console.log("found " + indexFile);
            console.log("loading from file...");

            //TODO: read each file into a workspace list

            const workspaceList = [];
            const indexFileContents = fs.readFileSync(indexFile, 'utf-8');
            
            indexFileContents.split(/\r?\n/).forEach(line =>  {
                
                console.log(`found file: ${line}`);
                workspaceList.push(line);
            });

            console.log("verifying files...");

            //TODO: check each file contains the text "#current/toDo"

            //////////////////////////////////////////////////
            /// COPY THE BLOCK ABOVE FOR indexedFileContents
            //////////////////////////////////////////////////
            
            const verifiedList = [];
            let allVerified = true; //assume all will pass
            
            for(const indexedFileName of workspaceList) {

                let thisFileIsTagged = verifyFileTag(indexedFileName);

                if(!thisFileIsTagged){

                    allVerified = false;

                }else{

                    verifiedList.push(indexedFileName);
                }
            }



            //if is, continue
            //if any are found out of sync,
            //delete workspace file and recommend
            //rerunning to recreate

            console.log("verification finished, found " + verifiedList.length + " files");

            if(!allVerified){

                console.log('inconsistencies were found during verification (some files listed as tagged were not tagged) and so the list will be rebuilt (this may take a few moments)');
                fileNeedsBuilding = true;
                // await buildWorkspaceFile(indexFile);
                // console.log('file rebuilt');
            }

        }else{

            // EACH OF THESE LOG LINES SHOULD BE
            // ATTACHED TO A LOGIC BLOCK
            console.log("couldn't find workspace file, building...");

            fileNeedsBuilding = true;
            // await buildWorkspaceFile(indexFile);

        }
    
    }catch(err){

        console.log("error accessing workspace file: " + err);
    }

    if(fileNeedsBuilding){

        try{

            await buildWorkspaceFile(indexFile);

        }catch(err){
            
            console.log("error building file: " + err);
        }
    }

    // const filenames = await fsPromises.readdir(process.cwd());
    
    let output = 'output needs revision';
    // let count = 0;

    // filenames.forEach(file => {
        
    //     if(path.extname(file) == ".md") {
            
    //         count++;
            
    //         if(count < 20){

    //             output += file + "\n"
    //         }
    //     }
    // })

    // if(count == 0){
        
    //     output = "No markdown files found.";

    // }else{

    //     let outputHeader = "Markdown files found: ";
    //     outputHeader += count + "\n\n";
    //     outputHeader += "Including:\n\n"; 
    //     output = outputHeader + output;

    // }

    return output;
}


async function buildWorkspaceFile(indexFile) {
    const filesList = await getCurrentFiles();

    // convert filesList to Content string
    const contentString = filesList.join('\n');

    try {

        fs.writeFileSync(indexFile, contentString);

        console.log("workspace file built with " + filesList.length + " files found");

    } catch (err) {

        console.error("error writing workspace file: " + err);
    }
}
