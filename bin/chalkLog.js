import boxen from "boxen";
import chalk from "chalk";

export async function chalkLog(inputText) {

    const outputText = chalk.white.bold(inputText);

    const boxenOptions = {
        padding: 2,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
        backgroundColor: "#555555"
    };


    const msgBox = boxen(outputText, boxenOptions);

    console.log(msgBox);
}
