import fs from 'fs'
import { log } from '../log.js'

export async function auditFile(file) {

    log('audit file goes here')

    let auditReport = {
        'uuid': '',
        'file': '',
        'report_name': '',
        'has_conflicts': false,
        'conflict_files': [],
    }

    return auditReport
}