#!/usr/bin/env node

import _yargs from "yargs";
import { hideBin } from 'yargs/helpers';

// verbs for the md command hierarchy
import { validate } from "./validate.js"
import { inspect } from "./inspect.js"
import { audit } from "./audit.js"

const yargs = _yargs(hideBin(process.argv))

// using advanced commander options
// see https://github.com/yargs/yargs/blob/main/docs/advanced.md
yargs
   .scriptName("md")
   .command({
      command: '$0 validate [filename]', 
      desc: 'validate filename if specified, current dir if not',
      builder: {},
      handler: validate
   })
   .command({
      command: '$0 inspect [filename]', 
      desc: 'inspect filename if specified, current dir if not',
      builder: {},
      handler: inspect
   })
   .command({
      command: '$0 audit [filename]', 
      desc: 'audit filename if specified, current dir if not',
      builder: {},
      handler: audit
   })
   .argv;
