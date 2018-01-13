import {} from 'jest';
import { shallow } from 'enzyme';

import IndexWithStore, { Index } from './index';
import Layout from '../components/Layout';

describe('Index page', () => {
  it('renders the Layout component', () => {
    const index = shallow(<Index />);
    expect(index.find(Layout).length).toBe(1);
  });
});

describe('Index page with store', () => {
  it('has initial store', () => {
    const initialStore = IndexWithStore().props.store;
    expect(initialStore).toHaveProperty('getState');
  });
});
