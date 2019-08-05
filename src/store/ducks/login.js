export const Types = {
  CALL_AUTH_REQUEST: 'login/CALL_AUTH_REQUEST',
  CALL_AUTH_REQUEST_SUCCESS: 'login/CALL_AUTH_REQUEST_SUCCESS',
  CALL_AUTH_REQUEST_FAILURE: 'login/CALL_AUTH_REQUEST_FAILURE',
  CALL_SIGNUP_REQUEST: 'login/CALL_SIGNUP_REQUEST',
  CALL_SIGNUP_REQUEST_SUCCESS: 'login/CALL_SIGNUP_REQUEST_SUCCESS',
  CALL_SIGNUP_REQUEST_FAILURE: 'login/CALL_SIGNUP_REQUEST_FAILURE',
  CLEAR: 'login/CLEAR',
};

export const INITIAL_STATE = {
  user: {
    id: 0,
    email: '',
    password: '',
  },
  loading: false,
  token: '',
  userLogged: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CALL_AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.CALL_AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        error: '',
        userLogged: true,
      };
    case Types.CALL_AUTH_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.CALL_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.CALL_SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case Types.CALL_SIGNUP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.CLEAR:
      return {
        loading: false,
        user: {
          id: 0,
          email: '',
          password: '',
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  callAuthRequest: ({ email, password, navigation }) => ({
    type: Types.CALL_AUTH_REQUEST,
    payload: {
      email,
      password,
      navigation,
    },
  }),
  callAuthRequestSuccess: token => ({
    type: Types.CALL_AUTH_REQUEST_SUCCESS,
    payload: {
      token,
    },
  }),
  callAuthRequestFailure: error => ({
    type: Types.CALL_AUTH_REQUEST_FAILURE,
    payload: {
      error,
    },
  }),
  callSignupRequest: ({
    email, password, username, navigation,
  }) => ({
    type: Types.CALL_SIGNUP_REQUEST,
    payload: {
      email,
      password,
      username,
      navigation,
    },
  }),
  callSignupRequestSuccess: () => ({
    type: Types.CALL_SIGNUP_REQUEST_SUCCESS,
  }),
  callSignupRequestFailure: error => ({
    type: Types.CALL_SIGNUP_REQUEST_FAILURE,
    payload: {
      error,
    },
  }),
  clear: () => ({
    type: Types.CLEAR,
  }),
};
