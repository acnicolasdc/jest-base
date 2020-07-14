import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Redux Actions', () => {
  test('Testing theAction ADD_TO_CART', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('Testing theAction REMOVE_FROM_CART', () => {
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
