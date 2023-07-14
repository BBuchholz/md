import fs from 'fs';

export function verifyFileTag(indexedFileName) {
    
    const indexedFile = process.cwd() + "/" + indexedFileName;

    console.log('verifiying file ' + indexedFile);

    const indexedFileContents = fs.readFileSync(indexedFile, 'utf-8');

    let thisFileIsTagged = false;

    for (const line of indexedFileContents.split(/\r?\n/)) {

        if (line.includes("#current/toDo")) {

            console.log(`found tag in line: ` + line);
            thisFileIsTagged = true;
            break;
        }

    }
    return thisFileIsTagged;
}