// import { displayOutputBox } from "./displayOutputBox.js";
import { chalkLog } from "./chalkLog.js";
import { validateFile } from "./validateFile.js";
import { validateCurrentDir } from "./validateCurrentDir.js";

export async function validate(argv) {
    const greetingText = 
        "WELLcome 2 MyriaD MarkDown Matrix CLI \n" +
        "currently under construction... \n" +
        "please excuse our dust...";

        if(argv.filename){

        let output = "";    
        output += greetingText + "\n\n";
        output += `validateion results for ${argv.filename} in progress \n\n`;
        output += validateFile(argv.filename);
        chalkLog(output);
            
        }else{  
        
        validateCurrentDir().then(validateOutput => {
        
            let finalOutput = '';
            finalOutput += greetingText + "\n\n";
            finalOutput += "validateing current directory\n\n";
            finalOutput += validateOutput;
            chalkLog(finalOutput);
        })
    }
}