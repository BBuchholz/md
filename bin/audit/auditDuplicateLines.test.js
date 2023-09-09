import { expect, test } from "vitest";
import { extractMdObj } from "./extractMdObj";
import { auditDuplicateLines } from "./auditDuplicateLines";

test('generates audit report from test file', async () => {
    const mdObj = extractMdObj('test.md')
    expect(mdObj.contents[0]).toContain('A test markdown file')
    const dLineReport = auditDuplicateLines(mdObj);
    expect(dLineReport.length).toBe(2)
    expect(dLineReport[0]).toBe(
        'lines 8, and 10 duplicate line 4: a duplicated line')
    expect(dLineReport[1]).toBe(
        'line 12 duplicates line 6: another duplicate')

    // const mdObj2 = extractMdObj('testWithFM.md')
    // expect(mdObj2.fm['uuid']).toBe('NOTSET')
    // const mdObj3 = extractMdObj('testWithUnRecFM.md')
    // expect(mdObj3.issues[0]).toContain('unrecognized')
})