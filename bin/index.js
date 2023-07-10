#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";


import _yargs from "yargs";
import { hideBin } from 'yargs/helpers';

const yargs = _yargs(hideBin(process.argv))

const options = yargs
 .usage("Usage: -n <name>")
 .option("n", { 
    alias: "name", 
    describe: "Your name", 
    type: "string", 
    demandOption: true })
 .argv;

const greetingText = 
    `Hello, ${options.name}! ` +
    "WELLcome to MyriaD MarkDown Matrix CLI " +
    "currently under construction... please excuse our dust...";

const greeting = chalk.white.bold(greetingText);

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);