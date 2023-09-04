import { chalkLog } from "./chalkLog.js";
import { inspectFile } from "./inspectFile.js";
import { inspectCurrentDir } from "./inspectCurrentDir.js";
import { log } from "./log.js";

export async function inspect(argv) {
    
    if(argv.filename){

        log(`Inspecting ${argv.filename} `);
        inspectFile(argv.filename);
        
    }else{  
    
        log("Inspecting current directory\n\n");
        inspectCurrentDir();
    }
}