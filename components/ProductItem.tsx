import { Product } from '../store';
import Price from './Price';

export default ({ product }: { product: Product }) => (
  <div>
    <img src={product.imageUrl} />
    <h3>{product.name}</h3>
    <div>
      <Price price={product.price} />
    </div>
  </div>
);
