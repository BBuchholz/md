import * as fs from 'fs';
import { log } from '../log.js';

export function getLines(file) {
    const fileToReadIntoLines = process.cwd() + "/" + file;

    // log('reading file ' + fileToReadIntoLines);

    let fileToReadIntoLinesContents = fs.readFileSync(fileToReadIntoLines, 'utf-8');

    let lines = [];

    for (const line of fileToReadIntoLinesContents.split(/\r?\n/)) {

        // log('processing line: ' + line);

        lines.push(line);


    }

    // log('lines processed: ' + lines.length);
    return lines;
}
