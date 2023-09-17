import { extractMdObjFromLines } from "../audit/extractMdObj";

/**
 * 
 * @param {Object} mdObj - should be of the type returned by extractMdObj() 
 * @returns a new mdObj with all completed task lines removed
 */
export async function removeCompleted(mdObj) {


  let newLines = []

  for(const line of mdObj.lines){
    if(!line.trim().startsWith('- [x] ')){
      newLines.push(line)
    }
  }
  
  let newMdObj = extractMdObjFromLines(newLines)


  return newMdObj;
}
