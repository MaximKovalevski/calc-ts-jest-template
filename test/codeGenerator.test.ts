import { generateEstonianCode, generateLatvianCode, generateLithuanianCode } from '../src/codeGenerator';

describe('Code Generator', () => {
    test('Estonian code starts with "EST-" and contains 4 digits', () => {
        const code = generateEstonianCode();
        expect(code.startsWith('EST-')).toBe(true);
        expect(code.length).toBe(8);
        expect(/EST-\d{4}/.test(code)).toBe(true);
    });

    test('Latvian code starts with "LVA-" and contains 4 digits', () => {
        const code = generateLatvianCode();
        expect(code.startsWith('LVA-')).toBe(true);
        expect(code.length).toBe(8);
        expect(/LVA-\d{4}/.test(code)).toBe(true);
    });

    test('Lithuanian code starts with "LTU-" and contains 4 digits', () => {
        const code = generateLithuanianCode();
        expect(code.startsWith('LTU-')).toBe(true);
        expect(code.length).toBe(8);
        expect(/LTU-\d{4}/.test(code)).toBe(true);
    });
});