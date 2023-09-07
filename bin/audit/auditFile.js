import { readFile } from 'fs'
import { log } from '../log.js'
import { extractMdObj } from './extractMdObj.js';

export async function auditFile(file) {

    
    log('audit file goes here')


    const mdObj = extractMdObj(file)

    // mdObj should have .fm and .content
    // .fm should be a key value collection
    // .content should be an array of lines
    // const uuid = mdObj.fm['uuid']

    // [[[NEEDED]]] or xxxx-&c.
    const auditedUuid = auditUuid('xxxx')

    let auditReport = {
        'uuid': auditedUuid,
        'file': file,
        'report_name': '',
        'has_conflicts': false,
        'conflict_files': [],
    }

    return auditReport
}

export async function auditUuid(uuid) { 

    return '[[[NEEDED]]]'
}