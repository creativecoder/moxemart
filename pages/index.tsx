import * as React from 'react';
import * as withRedux from 'next-redux-wrapper';
import { initStore, Product } from '../store';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';

export const Index = ({ products }: { [index: string]: Product }) => (
  <Layout>
    <h2>Products</h2>
    <ProductList products={products} />
  </Layout>
);

export default withRedux(initStore, state => ({ products: state.products }))(
  Index,
);
