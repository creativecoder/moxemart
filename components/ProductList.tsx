import { Product } from '../store';
import ProductItem from './ProductItem';

export default ({ products }: { [index: string]: Product }) => (
  <ul>
    {Object.values(products).map((product: Product) => (
      <li key={product.id}>
        <ProductItem product={product} />
      </li>
    ))}
  </ul>
);
