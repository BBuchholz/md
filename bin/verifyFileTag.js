import fs from 'fs';
import { log } from './log.js';

export function verifyFileTag(indexedFileName) {
    
    const indexedFile = process.cwd() + "/" + indexedFileName;

    log('verifiying file ' + indexedFile);

    const indexedFileContents = fs.readFileSync(indexedFile, 'utf-8');

    let thisFileIsTagged = false;

    for (const line of indexedFileContents.split(/\r?\n/)) {

        if (line.includes("#current/toDo")) {

            log(`found tag in line: ` + line);
            thisFileIsTagged = true;
            break;
        }

    }
    return thisFileIsTagged;
}