import React from 'react';
import { shallow } from 'enzyme';
import Results from './Results.jsx';
import { StateProvider } from '../../hooks/StateProvider.jsx';

describe('Results component', () => {
  it('renders Results ', () => {
    const wrapper = shallow(
      <StateProvider>  
        <Results />
      </StateProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
