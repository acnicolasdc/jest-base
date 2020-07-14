import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer/Footer';

describe('<Footer />', () => {
  test('Component Footer render ', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
