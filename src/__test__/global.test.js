const text = 'Hi everybody';

test('its must be a String', () => {
    expect(text).toMatch(/everybody/);
});