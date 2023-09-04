#!/usr/bin/env node

import _yargs from "yargs";
import { hideBin } from 'yargs/helpers';

// verbs for the md command hierarchy
import { validate } from "./validate.js"
import { inspect } from "./inspect.js"
import { audit } from "./audit.js"
import { repair } from "./repair.js"

const yargs = _yargs(hideBin(process.argv))

// using advanced commander options
// see https://github.com/yargs/yargs/blob/main/docs/advanced.md
yargs
   .scriptName("md")
   .command({
      command: 'validate [filename]', 
      desc: 'validate filename if specified, current dir if not',
      builder: {},
      handler: (argv) => {
         validate(argv)
      },
   })
   .command({
      command: 'inspect [filename]', 
      desc: 'inspect filename if specified, current dir if not',
      builder: {},
      handler: (argv) => {
         inspect(argv)
      },
   })
   .command({
      command: 'audit [filename]', 
      desc: 'audit filename if specified, current dir if not',
      builder: {},
      handler: (argv) => {
         audit(argv)
      },
   })
   .command({
      command: 'repair [filename]', 
      desc: 'repair filename if specified, current dir if not',
      builder: {},
      handler: (argv) => {
         repair(argv)
      },
   })
   .argv;
