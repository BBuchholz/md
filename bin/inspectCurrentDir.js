import fs from "fs";
// import fsPromises from "fs/promises";
// import path from "path";

import { getCurrentFiles } from "./getCurrentFiles.js";

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

    try{

        if(fs.existsSync(indexFile)){

            // EACH OF THESE LOG LINES SHOULD BE
            // ATTACHED TO A LOGIC BLOCK
            console.log("found " + indexFile);
            console.log("loading from file...");
            console.log("verifying file...");
            console.log("verification finished, found X files");

        }else{

            // EACH OF THESE LOG LINES SHOULD BE
            // ATTACHED TO A LOGIC BLOCK
            console.log("couldn't find workspace file, building...");

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
    
    }catch(err){

        console.log("error accessing workspace file: " + err);
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