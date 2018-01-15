import { ProductInterface } from '../helpers/Product';
import Price from './Price';

export interface CartItemInterface {
  product: ProductInterface;
  quantity: number;
}

export default ({ item }: { item: CartItemInterface }) => (
  <div>
    <div>
      <span className="cart__quantity">{item.quantity}</span>
      &nbsp;{item.product.name}:&nbsp;<Price
        price={item.product.total() * item.quantity}
      />
    </div>
  </div>
);
