import fs from "fs";
import path from "path";

export function inspectCurrentDir() {

    const filenames = fs.readdirSync(process.cwd());
    
    let output = '';
    let count = 0;

    filenames.forEach(file => {
        if(path.extname(file) == ".md") {
            count++;
            output += file + "\n"
        }
    })

    if(count == 0){
        output = "No markdown files found.";
    }else{
        output = "Markdown files found: " + count + "\n\n" + output; 
    }

    return output;
}