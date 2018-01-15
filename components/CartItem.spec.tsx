import {} from 'jest';
import { shallow } from 'enzyme';
import { CartItem, CartItemInterface } from './CartItem';
import Price from './Price';
import Product from '../helpers/Product';
import { fakeProductData, fakeCartProduct } from '../fakeData';

const mockRemoveFromCart = jest.fn();

describe('CartItem component', () => {
  let cartItem;

  beforeAll(() => {
    cartItem = shallow(
      <CartItem
        item={fakeCartProduct}
        removeFromCart={mockRemoveFromCart}
        showRemoveLink={true}
      />,
    );
  });

  it('displays the name of a product', () => {
    expect(cartItem.text()).toContain(fakeCartProduct.product.name);
  });

  it('displays the quantity of the product', () => {
    expect(
      cartItem
        .find('.cart__quantity')
        .first()
        .text(),
    ).toBe(fakeCartProduct.quantity.toString());
  });

  it('displays a subtotal', () => {
    const subtotal = fakeCartProduct.product.total();
    expect(
      cartItem
        .find(Price)
        .first()
        .html(),
    ).toContain(subtotal.toFixed(2));
  });

  it('calls an removeFromCart action when button is clicked', () => {
    cartItem
      .find('#remove-from-cart')
      .first()
      .simulate('click');
    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
    expect(mockRemoveFromCart).toHaveBeenCalledWith(fakeCartProduct.product.id);
  });
});
