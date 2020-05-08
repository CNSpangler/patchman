import React from 'react';
import { shallow } from 'enzyme';
import History from './History.jsx';
import { StateProvider } from '../../hooks/StateProvider.jsx';

describe('History component', () => {
  it('renders History ', () => {
    const wrapper = shallow(
      <StateProvider>  
        <History />
      </StateProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
