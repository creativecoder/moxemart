import {} from 'jest';
import { shallow } from 'enzyme';
import { Product } from '../store';
import ProductItem from './ProductItem';
import Price from './Price';

const mockProduct: Product = {
  id: '1',
  name: 'You know you want it',
  imageUrl: '/static/product.jpg',
  price: 999.0,
  isTaxed: false,
  isImported: false,
};

describe('Product component', () => {
  let productItem;
  beforeAll(() => {
    productItem = shallow(<ProductItem product={mockProduct} />);
  });

  it('renders the product name', () => {
    expect(productItem.text()).toContain(mockProduct.name);
  });

  it('displays an image of the product', () => {
    const img = productItem.find('img');
    expect(img.length).toBe(1);
    expect(img.html()).toContain(`src="${mockProduct.imageUrl}"`);
  });

  it('displays the product price', () => {
    const price = productItem.find(Price);
    expect(price.html()).toContain(mockProduct.price);
  });
});
