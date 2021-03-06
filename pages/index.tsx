import * as withRedux from 'next-redux-wrapper';
import { initStore, ProductDataInterface } from '../store';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import Product, { ProductInterface } from '../helpers/Product';

export const IndexPage = ({
  productData,
}: {
  productData: { [index: string]: ProductDataInterface };
}) => {
  const products = Object.values(productData).map(
    (productDatum: ProductDataInterface): ProductInterface =>
      new Product(productDatum),
  );
  return (
    <Layout title="MoxeMart | Products">
      <h2>Products</h2>
      <ProductList products={products} />
    </Layout>
  );
};

export default withRedux(initStore, state => ({ productData: state.products }))(
  IndexPage,
);
