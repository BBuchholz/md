import { repairFile } from "./repairFile.js";
import { repairCurrentDir } from "./repairCurrentDir.js";
import { log } from "./log.js"

export async function repair(argv) {

    log('NB: repair not implemented yet')
    log('these are mockup notes for functionality')

    if(argv.filename){

        repairFile(argv.filename)

    }else{  

        repairCurrentDir()
    }

}