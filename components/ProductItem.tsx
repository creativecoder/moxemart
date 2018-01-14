import { ProductDataInterface } from '../store';
import Price from './Price';

export default ({ product }: { product: ProductDataInterface }) => (
  <div>
    <img src={product.imageUrl} />
    <h3>{product.name}</h3>
    <div>
      <Price price={product.price} />
    </div>
  </div>
);
