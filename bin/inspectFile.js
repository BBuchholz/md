import path from "path";
import { log } from "./log.js"

export async function inspectFile(file) {

    if(path.extname(file) == ".md") {
        
        log(file + " is a markdown file");

    }else{

        log(file + " is not a markdown file");
    }    
    
}