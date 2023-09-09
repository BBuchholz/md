import { auditFile } from "./audit/auditFile.js";
import { auditCurrentDir } from "./audit/auditCurrentDir.js";

export async function audit(argv) {

    if(argv.filename){

        auditFile(argv.filename);
            
    }else{  
    
        auditCurrentDir(argv.CurrentDirname);
    }
}