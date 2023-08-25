#!/usr/bin/env node

import _yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import { displayOutputBox } from "./displayOutputBox.js";
import { inspectFile } from "./inspectFile.js";
import { inspectCurrentDir } from "./inspectCurrentDir.js";


const yargs = _yargs(hideBin(process.argv))

// using advanced commander options
// see https://github.com/yargs/yargs/blob/main/docs/advanced.md
yargs
   .scriptName("md")
   .command({
      command: '$0 inspect [filename]', 
      desc: 'inspect filename if specified, current dir if not',
      builder: {},
      handler: (argv) => {
         const greetingText = 
            "WELLcome 2 MyriaD MarkDown Matrix CLI \n" +
            "currently under construction... \n" +
            "please excuse our dust...";

         if(argv.filename){

            let output = "";    
            output += greetingText + "\n\n";
            output += `Inspection results for ${argv.filename} in progress \n\n`;
            output += inspectFile(argv.filename);
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
      }
   })
   .argv;



// if(options.filename){

//    let output = "";    
//    output += greetingText + "\n\n";
//    output += `Inspection results for ${options.filename} in progress \n\n`;
//    output += inspectFile(options.filename);
//    displayOutputBox(output);
    
// }else{

//    // let output = ''
//    // output += greetingText + "\n\n";
//    // output += "Inspecting current directory\n\n";
//    // output += inspectCurrentDir();
//    // displayOutputBox(output);   

//    inspectCurrentDir().then(inspectOutput => {

//       let finalOutput = '';
//       finalOutput += greetingText + "\n\n";
//       finalOutput += "Inspecting current directory\n\n";
//       finalOutput += inspectOutput;
//       displayOutputBox(finalOutput);
//    })
// }




