import CartItem, { CartItemInterface } from './CartItem';
import Price from './Price';

export default ({
  items,
  showRemoveLink = false,
}: {
  items: CartItemInterface[];
  showRemoveLink?: boolean;
}) => {
  const salesTax = items.reduce(
    (total, item) => total + item.product.tax() + item.product.duty(),
    0,
  );
  const total = items.reduce((total, item) => total + item.product.total(), 0);
  return (
    <div>
      <ul>
        {items.map((item: CartItemInterface) => (
          <li key={item.product.id}>
            <CartItem item={item} showRemoveLink={showRemoveLink} />
          </li>
        ))}
      </ul>
      <div>
        Sales Taxes: <Price price={salesTax} />
      </div>
      <div>
        Total: <Price price={total} />
      </div>
    </div>
  );
};
