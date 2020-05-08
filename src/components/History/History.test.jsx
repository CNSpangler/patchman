import React from 'react';
import { shallow } from 'enzyme';
import History from './History.jsx';

describe('History component', () => {
  it('renders History ', () => {
    const wrapper = shallow(<History />);
    expect(wrapper).toMatchSnapshot();
  });
});
