import { ProductDataInterface } from './store';
import { CartItemInterface } from './components/CartItem';
import Product from './helpers/Product';

export const fakeProductData: ProductDataInterface = {
  id: '1',
  name: 'You know you want it',
  imageUrl: '/static/product.jpg',
  price: 999.0,
  isTaxed: false,
  isImported: false,
};

export const fakeCartProduct: CartItemInterface = {
  product: new Product(fakeProductData),
  quantity: 1,
};
