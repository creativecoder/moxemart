import {} from 'jest';
import { defaultState, actionTypes, reducer, initStore } from './store';

describe('defaultState', () => {
  it('has products', () => {
    expect(defaultState).toHaveProperty('products');
  });

  it('has cart', () => {
    expect(defaultState).toHaveProperty('cart');
  });
});

describe('actionTypes', () => {});

describe('reducer', () => {
  it('returns default state', () => {
    const state = reducer(undefined, { type: null });
    expect(state).toEqual(defaultState);
  });
});
