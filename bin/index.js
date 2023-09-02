#!/usr/bin/env node

import _yargs from "yargs";
import { hideBin } from 'yargs/helpers';
import { inspect } from "./inspect.js"

const yargs = _yargs(hideBin(process.argv))

// using advanced commander options
// see https://github.com/yargs/yargs/blob/main/docs/advanced.md
yargs
   .scriptName("md")
   .command({
      command: '$0 inspect [filename]', 
      desc: 'inspect filename if specified, current dir if not',
      builder: {},
      handler: inspect
   })
   .argv;
