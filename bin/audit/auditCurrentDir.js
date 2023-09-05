import { auditDirectoryExists } from "./auditDirectoryExists.js";

const mdmdmDir = process.cwd() + "/.mdmdm";

export async function auditCurrentDir() {


    const mdmdmdDirExists = auditDirectoryExists(mdmdmDir);
}