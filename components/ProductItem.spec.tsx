import {} from 'jest';
import { shallow } from 'enzyme';
import { ProductDataInterface } from '../store';
import ProductItem from './ProductItem';
import Price from './Price';
import Product, { ProductInterface } from '../helpers/Product';
import { fakeProductData } from '../fakeData';

const fakeProduct: ProductInterface = new Product(fakeProductData);

describe('Product component', () => {
  let productItem;
  beforeAll(() => {
    productItem = shallow(<ProductItem product={fakeProduct} />);
  });

  it('renders the product name', () => {
    expect(productItem.text()).toContain(fakeProduct.name);
  });

  it('displays an image of the product', () => {
    const img = productItem.find('img');
    expect(img.length).toBe(1);
    expect(img.html()).toContain(`src="${fakeProduct.imageUrl}"`);
  });

  it('displays the product price', () => {
    const price = productItem.find(Price);
    expect(price.html()).toContain(fakeProduct.price);
  });
});
