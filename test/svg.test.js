/* eslint-disable */
import SVG from '../src/svg';

const svg = SVG;

describe('test for deleleBtn', () => {
    test('should use delete button', () => {
        const theButton = svg.deleleBtn;
        expect(theButton).toBe(theButton);
    });
});

describe('test for editBtn', () => {
    test('should use edit button', () => {
        const theButton = svg.editBtn;
        expect(theButton).toBe(theButton);
    });
});
/* eslint-enable */