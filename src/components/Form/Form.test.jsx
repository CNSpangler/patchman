import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form.jsx';
import { StateProvider } from '../../hooks/StateProvider.jsx';

describe('Form component', () => {
  it('renders Form ', () => {
    const wrapper = shallow(
      <StateProvider>  
        <Form />
      </StateProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
