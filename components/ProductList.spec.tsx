import {} from 'jest';
import { shallow } from 'enzyme';
import { ProductDataInterface } from '../store';
import ProductList from './ProductList';
import ProductItem from './ProductItem';
import Product, { ProductInterface } from '../helpers/Product';
import { fakeProductData } from '../fakeData';

const fakeProductList: ProductInterface[] = [
  new Product(fakeProductData),
  new Product(fakeProductData),
  new Product(fakeProductData),
];

describe('ProductList component', () => {
  it('renders a list of products', () => {
    const productList = shallow(<ProductList products={fakeProductList} />);
    const productItems = productList.find(ProductItem);
    expect(productItems.length).toBe(3);
  });
});
