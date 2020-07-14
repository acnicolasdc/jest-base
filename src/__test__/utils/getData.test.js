import getData from '../../utils/getData';

describe('Fetching API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  test('Calling a API and returning data', () => {
    fetch.mockResponseOnce(JSON.stringify({ data: '1234' }));
    getData('https://google.com').then(({ data }) => {
      expect(data).toEqual('1234');
    });
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });
});
