import { getLines } from './getLines.js';
import { log } from '../log.js'


export function extractMdObj(file) {

    const lines = getLines(file);


    let mdObj = {
        fm: {},
        contents: [],
        issues: [] ,
    }

    let inFm = false;
    let closedFm = false;

    for(const line of lines){


        log('\nprocessing line: ' + line)

        if(!closedFm){

            log('fm not closed')

            if(line.startsWith('---')){

                log('line starts with ---')

                if(!inFm){

                    log('found opening fm')
                    inFm = true

                }else{

                    log('found closing fm')
                    closedFm = true
                }

            } else {
                
            }
        }

        if(inFm){

            if(line.startsWith('uuid: ')){

                mdObj.fm['uuid'] = line.replace('uuid: ', '');

            } else if(line.trim()) {

                const issue = 'unrecognized non-empty line in front matter'
                log(issue + ', logging issue')
                mdObj.issues.push(issue)
            }

        }else{
                        
            mdObj.contents.push(line)

        }
    }


    return mdObj
}


