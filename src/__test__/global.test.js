const text = 'Hi everybody';
const fruits = ['apple', 'pineapple', 'banana'];

test('its must be a String', () => {
    expect(text).toMatch(/everybody/);
});

test('its must contain a banana string', ()=>{
    expect(fruits).toContain('banana');
})