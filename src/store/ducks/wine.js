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
  message: '',
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
      };
    case Types.ADD_WINE:
      return {
        ...state,
        cart: insert(state.cart, action.payload.item),
        quantityOnCart: state.quantityOnCart ? state.quantityOnCart + 1 : 1,
      };
    case Types.REMOVE_WINE:
      return {
        ...state,
        cart: remove(state.cart, action.payload.id),
        quantityOnCart: state.quantityOnCart ? state.quantityOnCart - 1 : 0,
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
        quantityOnCart: 0,
        message: action.payload.message,
      };
    case Types.CHECKOUT_ORDER_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.message,
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
  getWinesFailure: () => ({
    type: Types.GET_WINES_REQUEST_FAILURE,
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

  checkoutOrderSuccess: message => ({
    type: Types.CHECKOUT_ORDER_REQUEST_SUCCESS,
    payload: {
      message,
    },
  }),

  checkoutOrderFailure: message => ({
    type: Types.CHECKOUT_ORDER_REQUEST_FAILURE,
    payload: {
      message,
    },
  }),
  clear: () => ({
    type: Types.CLEAR,
  }),
};
