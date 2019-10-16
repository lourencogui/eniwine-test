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
  error: '',
  errorSignup: '',
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
        error: '',
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
        errorSignup: '',
      };
    case Types.CALL_SIGNUP_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        errorSignup: '',
      };
    case Types.CALL_SIGNUP_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        errorSignup: action.payload.errorSignup,
      };
    case Types.CLEAR:
      return {
        user: {
          id: 0,
          email: '',
          password: '',
        },
        error: '',
        errorSignup: '',
        loading: false,
        token: '',
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
    email, password, username, navigation, passwordConfirmation,
  }) => ({
    type: Types.CALL_SIGNUP_REQUEST,
    payload: {
      email,
      password,
      username,
      navigation,
      passwordConfirmation,
    },
  }),
  callSignupRequestSuccess: () => ({
    type: Types.CALL_SIGNUP_REQUEST_SUCCESS,
  }),
  callSignupRequestFailure: errorSignup => ({
    type: Types.CALL_SIGNUP_REQUEST_FAILURE,
    payload: {
      errorSignup,
    },
  }),
  clear: () => ({
    type: Types.CLEAR,
  }),
};
