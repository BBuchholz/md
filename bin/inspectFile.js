import path from "path";

export function inspectFile(file) {

    let output = "";

    if(path.extname(file) == ".md") {
        
        output += file + " is a markdown file";

    }else{

        output += file + " is not a markdown file";
    }    

    return output;
}