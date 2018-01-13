import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './products';

// DEFAULT STATE
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  isTaxed: boolean;
  isImported: boolean;
}

interface CartItem {
  productId: string;
  quantity: number;
}

interface State {
  products: { [propName: string]: Product };
  cart: { [propName: string]: CartItem };
}

export const defaultState: State = {
  products,
  cart: {},
};

interface ActionTypes {}

export const actionTypes: ActionTypes = {};

interface Action {
  type: string;
  payload?: any;
}

// REDUCERS
export const reducer = (state: State = defaultState, action: Action): State => {
  switch (action.type) {
    default:
      return state;
  }
};

export const initStore = (initialState: State = defaultState) => {
  return createStore(reducer, initialState, composeWithDevTools());
};
