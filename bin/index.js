#!/usr/bin/env node

import _yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import { displayOutputBox } from "./displayOutputBox.js";
import { inspectFile } from "./inspectFile.js";
import { inspectCurrentDir } from "./inspectCurrentDir.js";


const yargs = _yargs(hideBin(process.argv))

// using advanced commander options
// see https://github.com/yargs/yargs/blob/main/docs/advanced.md
const options = yargs
   .scriptName("md")
   .command({
      command: '$0 [filename]', 
      desc: 'inspect filename if specified, current dir if not'
   })
   .argv;

const greetingText = 
    "WELLcome 2 MyriaD MarkDown Matrix CLI \n" +
    "currently under construction... \nplease excuse our dust...";


if(options.filename){

   let output = "";    
   output += greetingText + "\n\n";
   output += `Inspection results for ${options.filename} in progress \n\n`;
   output += inspectFile(options.filename);
   displayOutputBox(output);
    
}else{

   // let output = ''
   // output += greetingText + "\n\n";
   // output += "Inspecting current directory\n\n";
   // output += inspectCurrentDir();
   // displayOutputBox(output);   

   inspectCurrentDir().then(inspectOutput => {

      let finalOutput = '';
      finalOutput += greetingText + "\n\n";
      finalOutput += "Inspecting current directory\n\n";
      finalOutput += inspectOutput;
      displayOutputBox(finalOutput);
   })
}




