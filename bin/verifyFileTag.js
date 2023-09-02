import fs from 'fs';
import { chalkLog } from './chalkLog.js';

export function verifyFileTag(indexedFileName) {
    
    const indexedFile = process.cwd() + "/" + indexedFileName;

    chalkLog('verifiying file ' + indexedFile);

    const indexedFileContents = fs.readFileSync(indexedFile, 'utf-8');

    let thisFileIsTagged = false;

    for (const line of indexedFileContents.split(/\r?\n/)) {

        if (line.includes("#current/toDo")) {

            chalkLog(`found tag in line: ` + line);
            thisFileIsTagged = true;
            break;
        }

    }
    return thisFileIsTagged;
}