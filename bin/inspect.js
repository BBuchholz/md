// import { displayOutputBox } from "./displayOutputBox.js";
import { chalkLog } from "./chalkLog.js";
import { inspectFile } from "./inspectFile.js";
import { inspectCurrentDir } from "./inspectCurrentDir.js";
import { log } from "./log.js";

export async function inspect(argv) {
    const greetingText = 
        "WELLcome 2 MyriaD MarkDown Matrix CLI \n" +
        "currently under construction... \n" +
        "please excuse our dust...";

    if(argv.filename){

    let output = "";    
    output += greetingText + "\n\n";
    output += `Inspection results for ${argv.filename} in progress \n\n`;
    output += inspectFile(argv.filename);
    chalkLog(output);
        
    }else{  
    
        log("Inspecting current directory\n\n");
        
        inspectCurrentDir().then(inspectOutput => {
    
            log(inspectOutput);
        })
    }
}