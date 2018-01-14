import {} from 'jest';
import { ProductDataInterface } from '../store';
import Product, { ProductInterface, roundTax } from './Product';
import { fakeProductData } from '../fakeData';

describe('roundTax', () => {
  it('rounds an odd value up to the nearest 5 cents', () => {
    const tax = 16.52;
    expect(roundTax(tax)).toBe(16.55);
  });

  it('does not round if the value is divisible by 5', () => {
    const randomNumber = Math.random() * 100;
    const tax = Math.round(randomNumber * 20) / 20;
    expect(roundTax(tax)).toBe(tax);
  });
});

describe('Product', () => {
  let product: ProductInterface;
  beforeEach(() => {
    product = new Product(fakeProductData);
  });

  it('has all product data properties', () => {
    Object.keys(fakeProductData).forEach(key => {
      expect(product).toHaveProperty(key, fakeProductData[key]);
    });
  });

  describe('.tax', () => {
    it('has 0 tax if not taxable', () => {
      product.isTaxed = false;
      expect(product.tax()).toBe(0);
    });

    it('has 10% tax if taxable', () => {
      product.isTaxed = true;
      const tax = roundTax(product.price * 0.1);
      expect(product.tax()).toEqual(tax);
    });
  });

  describe('.duty', () => {
    it('has 0 duty if not imported', () => {
      product.isImported = false;
      expect(product.duty()).toBe(0);
    });

    it('has 5% duty if imported', () => {
      product.isImported = true;
      const duty = roundTax(product.price * 0.05);
      expect(product.duty()).toEqual(duty);
    });
  });

  describe('.total', () => {
    it('has a total including tax and duty', () => {
      const total = product.price + product.duty() + product.duty();
      expect(product.total()).toEqual(total);
    });
  });
});
