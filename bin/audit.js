// import { displayOutputBox } from "./displayOutputBox.js";
import { chalkLog } from "./chalkLog.js";
import { auditFile } from "./auditFile.js";
import { auditCurrentDir } from "./auditCurrentDir.js";

export async function audit(argv) {
    const greetingText = 
        "WELLcome 2 MyriaD MarkDown Matrix CLI \n" +
        "currently under construction... \n" +
        "please excuse our dust...";

        if(argv.filename){

        let output = "";    
        output += greetingText + "\n\n";
        output += `audition results for ${argv.filename} in progress \n\n`;
        output += auditFile(argv.filename);
        chalkLog(output);
            
        }else{  
        
        auditCurrentDir().then(auditOutput => {
        
            let finalOutput = '';
            finalOutput += greetingText + "\n\n";
            finalOutput += "auditing current directory\n\n";
            finalOutput += auditOutput;
            chalkLog(finalOutput);
        })
    }
}