const string = 'Hi everybody';
const array = ['apple', 'pineapple', 'banana'];
const number = 10;
const boolean = true;
const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
}

const reverseStringPromise = (str) => {
 return new Promise((resolve, reject) => {
     if(!str) reject(Error('Variable not Found'));
     resolve(str.split("").reverse().join(""));
 })
}

test('Testing Promise', () => {
    reverseStringPromise('Hello').then( string => {
        expect(string).toBe('olleH');
    })
});

test('Testing Async and Await', async () => {
    const string = await reverseStringPromise('Hello');
    expect(string).toBe('olleH');
});

test('Testing Callback', () => {
    reverseString('Hello', (str) => {
        expect(str).toBe('olleH');
    })
});

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

afterEach(()=>  console.log('After each test, show this message'));
afterAll(()=>  console.log('After all test, show this message'));

beforeEach(()=>  console.log('Before each test, show this message'));
beforeAll(()=>  console.log('Before all test, show this message'));