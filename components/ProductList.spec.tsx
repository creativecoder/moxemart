import {} from 'jest';
import { shallow } from 'enzyme';
import { Product } from '../store';
import ProductList from './ProductList';
import ProductItem from './ProductItem';

const mockProduct: Product = {
  id: '1',
  name: 'You know you want it',
  imageUrl: '/static/product.jpg',
  price: 999.0,
  isTaxed: false,
  isImported: false,
};

const mockProductList: { [index: string]: Product } = {
  '1': mockProduct,
  '2': mockProduct,
  '3': mockProduct,
};

describe('ProductList component', () => {
  it('renders a list of products', () => {
    const productList = shallow(<ProductList products={mockProductList} />);
    const productItems = productList.find(ProductItem);
    expect(productItems.length).toBe(3);
  });
});
