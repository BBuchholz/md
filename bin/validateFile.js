import path from "path";

export async function validateFile(file) {

    if(path.extname(file) == ".md") {
        
        console.log(file + " is a markdown file");

    }else{

        console.log(file + " is not a markdown file");
    }    

}