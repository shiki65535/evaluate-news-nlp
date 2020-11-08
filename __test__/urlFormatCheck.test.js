import { urlFormatCheck } from '../src/client/js/urlFormatChecker.js'

describe('Check URL Validity', () => {
    test('URL should return true with "http://" as prefix', () => {
        const input1 = 'http://google.com';
        expect(urlFormatCheck(input1)).toBe(true);
    });
    test('URL should return true with "https://" as prefix', () => {
        const input2 = 'https://google.com';
        expect(urlFormatCheck(input2)).toBe(true);
    });
    test('URL should return false with non-"http://" or "https://" prefix', () =>{
        const input3 = 'google.com';
        expect (urlFormatCheck(input3)).toBe(false);
    });
    test('URL should return false with space character in URL', () => {
        const input4 = 'https://goog le.com';
        expect(urlFormatCheck(input4)).toBe(false);
    });
})