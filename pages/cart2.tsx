import * as withRedux from 'next-redux-wrapper';
import { initStore, ProductDataInterface, CartDataInterface } from '../store';
import Cart from '../components/Cart';
import { CartItemInterface } from '../components/CartItem';
import Layout from '../components/Layout';
import Product from '../helpers/Product';

export const CartPage = ({
  productData,
  cartData,
}: {
  productData: { [index: string]: ProductDataInterface };
  cartData: { [index: string]: CartDataInterface };
}) => {
  const items = Object.values(cartData).map((cartDatum: CartDataInterface) => {
    const product = productData[cartDatum.productId];
    return {
      ...cartDatum,
      product: new Product(product),
    };
  });
  return (
    <Layout title="MoxeMart | Cart 2">
      <h2>Cart 2</h2>
      <Cart items={items} />
    </Layout>
  );
};

export default withRedux(initStore, state => ({
  productData: state.products,
  cartData: {
    '4': {
      productId: '4',
      quantity: 1,
    },
    '5': {
      productId: '5',
      quantity: 1,
    },
  },
}))(CartPage);
