import {} from 'jest';
import { shallow, mount } from 'enzyme';
import React from 'react';

import IndexWithStore, { Index } from './index';

describe('Index', () => {
  it('says hello', () => {
    const index = shallow(<Index />);
    expect(index.find('div').text()).toEqual('Hello');
  });
});

describe('Index with store', () => {
  it('has initial store', () => {
    const initialStore = IndexWithStore().props.store;
    expect(initialStore).toHaveProperty('getState');
  });
});
