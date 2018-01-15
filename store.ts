import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './products';

// DEFAULT STATE
export interface ProductDataInterface {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  isTaxed: boolean;
  isImported: boolean;
}

export interface CartDataInterface {
  productId: string;
  quantity: number;
}

interface StateInterface {
  products: { [index: string]: ProductDataInterface };
  cart: { [index: string]: CartDataInterface };
}

export const defaultState: StateInterface = {
  products,
  cart: {},
};

interface ActionTypesInterface {
  [index: string]: string;
}

export const actionTypes: ActionTypesInterface = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

export interface ActionInterface {
  type: string;
  payload?: any;
}

// REDUCERS
export const reducer = (
  state: StateInterface = defaultState,
  action: ActionInterface,
): StateInterface => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productId = action.payload;
      const cart = Object.assign({}, state.cart);
      if (state.cart.hasOwnProperty(productId)) {
        // Increase quantity if the product is already in the cart
        const newQuantity = state.cart[productId].quantity + 1;
        cart[productId].quantity = newQuantity;
      } else {
        // Add the product to the cart
        cart[productId] = { productId, quantity: 1 };
      }
      return Object.assign({}, state, { cart });
    default:
      return state;
  }
};

// ACTIONS
export const addToCart = (productId: string): ActionInterface => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: productId,
  };
};

export const initStore = (initialState: StateInterface = defaultState) => {
  return createStore(reducer, initialState, composeWithDevTools());
};
