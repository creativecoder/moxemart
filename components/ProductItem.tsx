import { connect } from 'react-redux';
import { ProductDataInterface, addToCart, StateInterface } from '../store';
import Price from './Price';

export const ProductItem = ({
  product,
  addToCart,
}: {
  product: ProductDataInterface;
  addToCart: Function;
}) => (
  <div>
    <img src={product.imageUrl} />
    <h3>{product.name}</h3>
    <div>
      <Price price={product.price} />
    </div>
    <button id="add-to-cart" onClick={() => addToCart(product.id)}>
      Add to cart
    </button>
  </div>
);

const mapStateToProps = (
  state: StateInterface,
  ownProps: { product: ProductDataInterface },
) => {
  return {
    product: ownProps.product,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    addToCart: (productId: string) => {
      dispatch(addToCart(productId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
