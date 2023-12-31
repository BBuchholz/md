import { readFile } from 'fs'
import { log } from '../log.js'
import { extractMdObj } from './extractMdObj.js';
import { auditDuplicateLines } from './auditDuplicateLines.js'
import { auditUuid } from './auditUuid.js';

export async function auditFile(file) {

    


    const mdObj = extractMdObj(file)

    // mdObj should have .fm and .content
    // .fm should be a key value collection
    // .content should be an array of lines
    // const uuid = mdObj.fm['uuid']

    // [[[NEEDED]]] or xxxx-&c.
    const auditedUuid = auditUuid('xxxx')

    const auditedLines = auditDuplicateLines(mdObj)

    let auditReport = {
        // 'uuid': auditedUuid,
        'file': file,
        'report_name': '',
        'has_conflicts': false,
        'conflict_files': [],
        'duplicate_lines': auditedLines,
    }

    return auditReport
}

