import fs from "fs";
import { getCurrentFiles } from "./getCurrentFiles.js";
import { chalkLog } from "./chalkLog.js";

export async function buildWorkspaceFile(indexFile) {
    const filesList = await getCurrentFiles();

    // convert filesList to Content string
    const contentString = filesList.join('\n');

    try {

        fs.writeFileSync(indexFile, contentString);

        chalkLog("workspace file built with " + filesList.length + " files found");

    } catch (err) {

        console.error("error writing workspace file: " + err);
    }
}
