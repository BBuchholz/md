import { expect, test } from "vitest";
import { auditFile } from "./auditFile";

test('generates audit report from test file', async () => {
    const report = await auditFile('test.md')
    expect(report.file).toBe('test.md')
    // use: https://stackoverflow.com/a/13653180/670768 for uuid validation
    // expect(report.uuid).toBe('xxx')
    // expect(report.conflict_files).toBe('test.md')
    // expect(report.has_conflicts).toBe('test.md')
    // expect(report.report_name).toBe('test.md')
})