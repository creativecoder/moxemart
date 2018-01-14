import {} from 'jest';
import { shallow } from 'enzyme';
import Price from './Price';

describe('Price component', () => {
  it('renders a price as a string', () => {
    const cost = 2.34;
    const price = shallow(<Price price={cost} />);
    expect(price.text()).toContain(cost.toString());
  });

  it('adds a currency symbol to the price', () => {
    const cost = 54.76;
    const price = shallow(<Price price={cost} />);
    expect(price.text()).toBe(`$${cost}`);
  });

  it('pads the price 0s after the decimal point', () => {
    const cost = 45.8;
    const price = shallow(<Price price={cost} />);
    expect(price.text()).toBe(`$${cost}0`);
  });

  it('adds a decimal point if the price does not have one', () => {
    const cost = 4325;
    const price = shallow(<Price price={cost} />);
    expect(price.text()).toBe(`$${cost}.00`);
  });
});
