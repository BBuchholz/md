import fs from "fs/promises";
import path from "path";

// adapted async methodology from stackoverflow at:
// https://stackoverflow.com/a/72133314/670768

export async function inspectCurrentDir() {

    const filenames = await fs.readdir(process.cwd());
    
    let output = '';
    let count = 0;

    filenames.forEach(file => {
        
        if(path.extname(file) == ".md") {
            
            count++;
            
            if(count < 20){

                output += file + "\n"
            }
        }
    })

    if(count == 0){
        
        output = "No markdown files found.";

    }else{

        let outputHeader = "Markdown files found: ";
        outputHeader += count + "\n\n";
        outputHeader += "Including:\n\n"; 
        output = outputHeader + output;
    }

    return output;
}