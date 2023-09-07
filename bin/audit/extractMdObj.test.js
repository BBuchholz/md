import { expect, test } from "vitest";
import { extractMdObj } from "./extractMdObj";

test('generates audit report from test file', async () => {
    const mdObj = extractMdObj('test.md')
    expect(mdObj.contents[0]).toContain('A test markdown file')
    const mdObj2 = extractMdObj('testWithFM.md')
    expect(mdObj2.fm['uuid']).toBe('NOTSET')
})