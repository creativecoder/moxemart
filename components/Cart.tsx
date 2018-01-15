import CartItem, { CartItemInterface } from './CartItem';
export default ({ items }: { items: CartItemInterface[] }) => (
  <div>
    <ul>
      {items.map((item: CartItemInterface) => (
        <li key={item.product.id}>
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  </div>
);
