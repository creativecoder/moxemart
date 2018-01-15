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

interface ActionTypesInterface {}

export const actionTypes: ActionTypesInterface = {};

interface ActionInterface {
  type: string;
  payload?: any;
}

// REDUCERS
export const reducer = (
  state: StateInterface = defaultState,
  action: ActionInterface,
): StateInterface => {
  switch (action.type) {
    default:
      return state;
  }
};

export const initStore = (initialState: StateInterface = defaultState) => {
  return createStore(reducer, initialState, composeWithDevTools());
};
