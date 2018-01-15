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
  <div className="product-item">
    <style jsx>{`
      .product-item {
        margin-bottom: 2rem;
      }

      .product-item__name {
        margin-top: 0.5rem;
        margin-bottom: 0.25rem;
      }

      .product-item__cost {
        float: left;
      }

      #add-to-cart {
        margin-left: 1rem;
      }

      img {
        max-width: 200px;
      }
    `}</style>
    <img src={product.imageUrl} />
    <h3 className="product-item__name">{product.name}</h3>
    <div className="product-item__cost">
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
