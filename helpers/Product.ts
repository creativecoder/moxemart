import { ProductDataInterface } from '../store';

export interface ProductInterface extends ProductDataInterface {
  tax: () => number;
  duty: () => number;
  total: () => number;
}

export function roundTax(price: number): number {
  return Math.ceil(price * 20) / 20;
}

const Product = (function(
  this: ProductInterface,
  productData: ProductDataInterface,
) {
  const taxRate = 0.1;
  const dutyRate = 0.05;

  Object.assign(this, productData);

  this.tax = () => (this.isTaxed ? roundTax(this.price * taxRate) : 0);
  this.duty = () => (this.isImported ? roundTax(this.price * dutyRate) : 0);
  this.total = () => this.price + this.tax() + this.duty();
} as any) as { new (productData: ProductDataInterface): ProductInterface };
// type assertion prevents errors when using `new` without a class

export default Product;
