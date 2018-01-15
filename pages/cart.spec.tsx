import {} from 'jest';
import { shallow } from 'enzyme';
import { ProductDataInterface, CartDataInterface } from '../store';
import CartWithStore, { CartPage } from './cart';
import Layout from '../components/Layout';
import Cart from '../components/Cart';
import { fakeProductData } from '../fakeData';

const fakeProductStore: { [index: string]: ProductDataInterface } = {
  '1': fakeProductData,
};

const fakeCartStore: { [index: string]: CartDataInterface } = {
  '1': {
    productId: '1',
    quantity: 1,
  },
};

describe('Cart page', () => {
  let cart;
  beforeAll(() => {
    cart = shallow(
      <CartPage productData={fakeProductStore} cartData={fakeCartStore} />,
    );
  });

  it('renders the Layout component', () => {
    expect(cart.find(Layout).length).toBe(1);
  });

  it('renders a Cart component', () => {
    expect(cart.find(Cart).length).toBe(1);
  });
});

describe('Cart page with store', () => {
  it('has initial store', async () => {
    const cart = await CartWithStore.getInitialProps({});
    expect(cart).toHaveProperty('store');
  });
});
