import { TestScheduler } from 'jest'
import { scoreConverter } from '../src/client/js/formHandler.js'

describe ('Check scoreConverter Answers', () => {
    test('Strongly Positive Response', () => {
        const input1 = 'P+';
        expect(scoreConverter(input1)).toBe('Strongly Positive')
    });
    test('Positive Response', () => {
        const input2 = 'P';
        expect(scoreConverter(input2)).toBe('Positive')
    });
    test('Neutral Response', () => {
        const input3 = 'NEU';
        expect(scoreConverter(input3)).toBe('Neutral')
    });
    test('Negative Response', () => {
        const input4 = 'N';
        expect(scoreConverter(input4)).toBe('Negative')
    });
    test('Strongly Negative Response', () => {
        const input5 = 'N+';
        expect(scoreConverter(input5)).toBe('Strongly Negative')
    });
    test('Without Sentiment', () => {
        const input6 = 'NONE';
        expect(scoreConverter(input6)).toBe('Without Sentiment')
    });
    test('Invalid Response', () => {
        const input7 = 'A';
        expect(scoreConverter(input7)).toBe('Invalid')
    });
})
