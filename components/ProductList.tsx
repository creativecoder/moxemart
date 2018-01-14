import { ProductDataInterface } from '../store';
import ProductItem from './ProductItem';
import Product, { ProductInterface } from '../helpers/Product';

export default ({ products }: { products: ProductInterface[] }) => (
  <ul>
    {products.map((product: ProductInterface) => (
      <li key={product.id}>
        <ProductItem product={product} />
      </li>
    ))}
  </ul>
);
