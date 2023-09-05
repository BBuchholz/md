import { auditFile } from "./audit/auditFile.js";
import { auditCurrentDir } from "./audit/auditCurrentDir.js";

export async function audit(argv) {

    if(argv.filename){

        console.log(`auditing file ${argv.filename} in progress`);
        console.log('\n\n')
        auditFile(argv.filename);
        console.log('\n\n')
        console.log(`finished auditing file ${argv.filename}`);
            
    }else{  
    
        console.log(`auditing current directory`);
        auditCurrentDir(argv.CurrentDirname);
        console.log(`finished auditing current directory`);
    }
}