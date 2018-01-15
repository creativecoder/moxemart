import {} from 'jest';
import { shallow } from 'enzyme';
import Cart from './Cart';
import CartItem, { CartItemInterface } from '../components/CartItem';
import { fakeCartProduct } from '../fakeData';

const fakeItems: CartItemInterface[] = [
  fakeCartProduct,
  fakeCartProduct,
  fakeCartProduct,
];

describe('Cart component', () => {
  let cart;
  beforeAll(() => {
    cart = shallow(<Cart items={fakeItems} />);
  });

  it('renders a list of CartItems', () => {
    expect(cart.find(CartItem).length).toBe(fakeItems.length);
  });

  it('displays the total taxes for all items', () => {});
});
