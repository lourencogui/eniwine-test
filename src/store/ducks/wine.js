import { insert, remove, countCart } from '~/utils';

export const Types = {
  GET_WINES_REQUEST: 'wine/GET_WINES_REQUEST',
  GET_WINES_REQUEST_SUCCESS: 'wine/GET_WINES_REQUEST_SUCCESS',
  GET_WINES_REQUEST_FAILURE: 'wine/GET_WINES_REQUEST_FAILURE',
  ADD_WINE: 'wine/ADD_WINE',
  REMOVE_WINE: 'wine/REMOVE_WINE',
  CHECKOUT_ORDER_REQUEST: 'wine/CHECKOUT_ORDER_REQUEST',
  CHECKOUT_ORDER_REQUEST_SUCCESS: 'wine/CHECKOUT_ORDER_REQUEST_SUCCESS',
  CHECKOUT_ORDER_REQUEST_FAILURE: 'wine/CHECKOUT_ORDER_REQUEST_FAILURE',
  CLEAR: 'wine/CLEAR',
};

export const INITIAL_STATE = {
  wines: [],
  cart: [],
  loading: false,
  error: '',
  quantityOnCart: 0,
};

export default function wine(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_WINES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_WINES_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        wines: action.payload.items,
      };
    case Types.GET_WINES_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.ADD_WINE:
      return {
        ...state,
        cart: insert(state.cart, action.payload.item),
        quantityOnCart: countCart(state.cart),
      };
    case Types.REMOVE_WINE:
      return {
        ...state,
        cart: remove(state.cart, action.payload.id),
        quantityOnCart: countCart(state.cart),
      };
    case Types.CHECKOUT_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.CHECKOUT_ORDER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [],
      };
    case Types.CHECKOUT_ORDER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.CLEAR:
      return {
        wines: [],
        cart: [],
      };
    default:
      return state;
  }
}

export const Creators = {
  getWines: () => ({
    type: Types.GET_WINES_REQUEST,
  }),
  getWinesSuccess: items => ({
    type: Types.GET_WINES_REQUEST_SUCCESS,
    payload: { items },
  }),
  getWinesFailure: error => ({
    type: Types.GET_WINES_REQUEST_FAILURE,
    payload: { error },
  }),
  addWine: item => ({
    type: Types.ADD_WINE,
    payload: {
      item,
    },
  }),
  removeWine: ({ id }) => ({
    type: Types.REMOVE_WINE,
    payload: {
      id,
    },
  }),
  checkoutOrder: () => ({
    type: Types.CHECKOUT_ORDER_REQUEST,
  }),

  checkoutOrderSuccess: () => ({
    type: Types.CHECKOUT_ORDER_REQUEST_SUCCESS,
  }),

  checkoutOrderFailure: error => ({
    type: Types.CHECKOUT_ORDER_REQUEST_FAILURE,
    payload: {
      error,
    },
  }),
  clear: () => ({
    type: Types.CLEAR,
  }),
};
