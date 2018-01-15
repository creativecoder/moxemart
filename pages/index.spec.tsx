import {} from 'jest';
import { shallow } from 'enzyme';
import { ProductDataInterface } from '../store';
import IndexWithStore, { IndexPage } from './index';
import Layout from '../components/Layout';
import { fakeProductData } from '../fakeData';

const fakeProductStore: { [index: string]: ProductDataInterface } = {
  '1': fakeProductData,
};

describe('Index page', () => {
  it('renders the Layout component', () => {
    const index = shallow(<IndexPage productData={fakeProductStore} />);
    expect(index.find(Layout).length).toBe(1);
  });
});

describe('Index page with store', () => {
  it('has initial store', async () => {
    const index = await IndexWithStore.getInitialProps({});
    expect(index).toHaveProperty('store');
  });
});
