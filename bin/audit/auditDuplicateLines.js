import { log } from '../log.js'

/** 
 * finds duplicate lines and sends back an array of objects 
 * whose properties are line_number, and line_value
 * 
 * @param {markDownObject} mdObj - created by running 
 * extractMdObj(file) on a markdown file
 */
export function auditDuplicateLines(mdObj){

    let duplicates = []
    let originals = {}

    for(let i = 0; i < mdObj.lines.length; i++) {
        
        const line = mdObj.lines[i]

        if(!originals[line]){
            originals[line] = []
        }

        originals[line].push(i)
    }

    for(const lineValue of Object.keys(originals)){

        const lineCounts = originals[lineValue]
        
        // console.log("DUP VAL: " + lineValue)
        // console.log("DUP line nums: " + lineCounts)

        if(lineCounts.length > 1 &&
           lineValue.trim()){

            let linesDuplicated = 'line'
            
            if(lineCounts.length > 2) {
                
                linesDuplicated += 's'
            }
                
            
            linesDuplicated += ' '

            for(let i = 1; i < lineCounts.length; i++){
                
                linesDuplicated += (lineCounts[i] + 1) //line index is zero based

                if(i < lineCounts.length - 2){

                    linesDuplicated += ', '

                }else if(i < lineCounts.length - 1){

                    linesDuplicated += ', and '

                }
            }

            // this is what it should look like, in progress
            let msg = 
                linesDuplicated + ' duplicate' 
            
            if(lineCounts.length < 3){
                msg += 's' //singularize "duplicate" to "duplicates"
            }
                
            msg += ' line '

            msg += (lineCounts[0] + 1) + ": "

            msg += lineValue
            

            duplicates.push(msg)

            log(msg)
        }
    }


    return duplicates
}