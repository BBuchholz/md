import { expect, test } from "vitest";
import { removeCompleted } from "./removeCompleted";
import { extractMdObjFromFile } from "../audit/extractMdObj";

test('generates audit report from test file', async () => {
    const mdObj = extractMdObjFromFile('testWithCompleted.md')
    expect(mdObj.lines.length).toBe(13)
    // test file has three completed lines
    const newMdObj = await removeCompleted(mdObj)
    expect(newMdObj.lines.length).toBe(10)
})