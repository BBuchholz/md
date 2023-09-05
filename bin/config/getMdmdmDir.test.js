import { expect, test } from 'vitest'
import { getMdmdmDir } from './getMdmdmDir'

test('adds 1 + 2 to equal 3', () => {
    expect(getMdmdmDir()).toBe(process.cwd() + '/.mdmdm')
}) 