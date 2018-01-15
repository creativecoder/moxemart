import {} from 'jest';
import { shallow } from 'enzyme';
import Cart from './Cart';
import CartItem, { CartItemInterface } from '../components/CartItem';
import Price from '../components/Price';
import { fakeCartProduct } from '../fakeData';

fakeCartProduct.product.isTaxed = true;

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

  it('displays the total taxes for all items', () => {
    const totalTax = fakeItems
      .reduce((total, item) => total + item.product.tax(), 0)
      .toFixed(2);
    expect(
      cart
        .find(Price)
        .first()
        .html(),
    ).toContain(totalTax);
  });

  it('displays the total for all items in the cart', () => {
    const total = fakeItems
      .reduce((total, item) => total + item.product.total(), 0)
      .toFixed(2);
    expect(
      cart
        .find(Price)
        .last()
        .html(),
    ).toContain(total);
  });
});
