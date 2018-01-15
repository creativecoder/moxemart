import { connect } from 'react-redux';
import { removeFromCart, StateInterface } from '../store';
import { ProductInterface } from '../helpers/Product';
import Price from './Price';

export interface CartItemInterface {
  product: ProductInterface;
  quantity: number;
}

export const CartItem = ({
  item,
  removeFromCart,
}: {
  item: CartItemInterface;
  removeFromCart: Function;
}) => (
  <div>
    <span className="cart__quantity">{item.quantity}</span>
    &nbsp;{item.product.name}:&nbsp;<Price
      price={item.product.total() * item.quantity}
    />
    <a
      id="remove-from-cart"
      href="#"
      onClick={event => {
        event.preventDefault();
        removeFromCart(item.product.id);
      }}
    >
      Remove from cart
    </a>
  </div>
);

const mapStateToProps = (
  state: StateInterface,
  ownProps: { item: CartItemInterface },
) => {
  return {
    item: ownProps.item,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    removeFromCart: (productId: string) => {
      dispatch(removeFromCart(productId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
