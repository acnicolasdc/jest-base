const randomStrings = require('../index');

describe('Testing randomStrings functionality', () => {
    test('Getting an existent City', () => {
        expect(typeof (randomStrings())).toBe('string');
    })
    test('Checking an non-existent City', () => {
        expect(randomStrings()).not.toMatch(/Buenaventura/);
    })
})