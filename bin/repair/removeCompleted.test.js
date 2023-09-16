import { expect, test } from "vitest";
import { removeCompleted } from "./removeCompleted";

test('generates audit report from test file', async () => {
    const mdObj = extractMdObj('test.md')
    const newMdObj = removeCompleted(mdObj)
    expect(newMdObj.contents[0]).toContain('A test markdown fiddle -- TODO: IMPLEMENT TEST HERE')
})