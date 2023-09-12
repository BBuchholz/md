import { expect, test } from "vitest";
import { auditUuid } from "./auditUuid.js";

test('generates audit report from test file', async () => {
    const auditedUuid = await auditUuid('test.md')
    expect(auditedUuid).toBe('[[[NEEDED]]]')
    const auditedUuid2 = await auditUuid('testWithUuid.md')
    expect(auditedUuid2).toBe('2ec59292-4365-4dd9-b91d-3495b95c2bb7')
    
})