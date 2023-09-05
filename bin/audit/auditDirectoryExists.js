import fs from "fs";
import { chalkLog } from "../chalkLog.js";

export function auditDirectoryExists(mdmdmDir) {
    let dirExists = false;

    try {

        if (fs.existsSync(mdmdmDir)) {

            dirExists = true;

        } else {

            dirExists = false;
        }

    } catch (err) {

        chalkLog("error checking directory: " + err);
    }
    return dirExists;
}
