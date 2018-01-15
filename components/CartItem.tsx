import { connect } from 'react-redux';
import Router from 'next/router';
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
  showRemoveLink = false,
}: {
  item: CartItemInterface;
  removeFromCart: Function;
  showRemoveLink?: boolean;
}) => (
  <div>
    <span className="cart__quantity">{item.quantity}</span>
    &nbsp;{item.product.name}:&nbsp;<Price
      price={item.product.total() * item.quantity}
    />
    {showRemoveLink ? (
      <div>
        <a
          id="remove-from-cart"
          href="#"
          onClick={event => {
            if (event) event.preventDefault();
            removeFromCart(item.product.id);
          }}
        >
          Remove from cart
        </a>
      </div>
    ) : (
      ''
    )}
  </div>
);

const mapStateToProps = (
  state: StateInterface,
  ownProps: { item: CartItemInterface; showRemoveLink?: boolean },
) => {
  return {
    item: ownProps.item,
    showRemoveLink: ownProps.showRemoveLink || false,
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
