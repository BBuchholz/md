import { log } from "./log.js"
import { repairFile } from "./repairFile.js"

export async function repairCurrentDir() {

    log('repair directory goes here')
    log('go through each file from audti log and repair')
    //simulate once through so it shows
    repairFile('demoFile.md')
}