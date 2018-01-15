import { ProductInterface } from '../helpers/Product';
import Price from './Price';

export interface CartItemInterface {
  product: ProductInterface;
  quantity: number;
}

export default ({ item }: { item: CartItemInterface }) => (
  <div>
    <div className="cart__quantity">{item.quantity}</div>
    <div>{item.product.name}</div>
    <div className="cart__subtotal">
      <Price price={item.product.total()} />
    </div>
  </div>
);
