const string = 'Hi everybody';
const array = ['apple', 'pineapple', 'banana'];
const number = 10;
const boolean = true;

test('Its must be a String', () => {
    expect(string).toMatch(/everybody/);
});

test('Its must contain a banana string', ()=>{
    expect(array).toContain('banana');
})

test('Greater than', ()=>{
    expect(number).toBeGreaterThan(9);
});

test('Its must be true', ()=>{
    expect(boolean).toBeTruthy();
});