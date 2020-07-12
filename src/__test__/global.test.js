const text = 'Hi everybody';
const fruits = ['apple', 'pineapple', 'banana'];
const number = 10;

test('its must be a String', () => {
    expect(text).toMatch(/everybody/);
});

test('its must contain a banana string', ()=>{
    expect(fruits).toContain('banana');
})

test('Greater than', ()=>{
    expect(number).toBeGreaterThan(9);
});