import fsPromises from "fs/promises";
import path from "path";

export async function getCurrentFiles() {

    const filesList = [];

    const filenames = await fsPromises.readdir(process.cwd());
    
    filenames.forEach(file => {

        if(path.extname(file) == ".md") {
            
            filesList.push(file);
        }
    })

    console.log(filesList);

    return filesList
}