import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Component Footer render ', () => {
    expect(footer.length).toEqual(1);
  });
  test('Component Footer title ', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Jest Testing Store');
  });
});
