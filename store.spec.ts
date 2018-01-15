import {} from 'jest';
import {
  defaultState,
  actionTypes,
  reducer,
  initStore,
  addToCart,
  removeFromCart,
  ActionInterface,
} from './store';

const productId: string = '1';

const addToCartAction: ActionInterface = {
  type: actionTypes.ADD_TO_CART,
  payload: productId,
};

const removeFromCartAction: ActionInterface = {
  type: actionTypes.REMOVE_FROM_CART,
  payload: productId,
};

describe('defaultState', () => {
  it('has products', () => {
    expect(defaultState).toHaveProperty('products');
  });

  it('has cart', () => {
    expect(defaultState).toHaveProperty('cart');
  });
});

describe('reducer', () => {
  it('returns default state', () => {
    const state = reducer(undefined, { type: null });
    expect(state).toEqual(defaultState);
  });

  it('adds a product to the cart', () => {
    const state = reducer(undefined, addToCartAction);
    const cartProduct = {
      productId,
      quantity: 1,
    };
    expect(state.cart).toHaveProperty(productId);
    expect(state.cart[productId]).toEqual(cartProduct);
  });

  it('increases the quantity if the item is already in the cart', () => {
    const state = reducer(undefined, addToCartAction);
    const state2 = reducer(state, addToCartAction);
    const cartProduct = {
      productId,
      quantity: 2,
    };
    expect(state2.cart[productId]).toEqual(cartProduct);
  });

  it('removes a product from the cart', () => {
    const stateWithProductInCart = reducer(undefined, addToCartAction);
    const stateWithoutProductInCart = reducer(
      stateWithProductInCart,
      removeFromCartAction,
    );
    expect(stateWithoutProductInCart.cart[productId]).toBe(undefined);
  });
});

describe('actions', () => {
  it('creates action to add a product to the cart', () => {
    expect(addToCart(productId)).toEqual(addToCartAction);
  });

  it('creates and action to remove a product from the cart', () => {
    expect(removeFromCart(productId)).toEqual(removeFromCartAction);
  });
});
