import { all, takeLatest } from 'redux-saga/effects';
import { Types as WineTypes } from '../ducks/wine';
import { Types as LoginTypes } from '../ducks/login';

import { callAuthRequest, callSignupRequest } from './login';
import { getWines, checkoutOrder } from './wine';

export default function* rootSaga() {
  yield all([
    takeLatest(WineTypes.GET_WINES_REQUEST, getWines),
    takeLatest(WineTypes.CHECKOUT_ORDER_REQUEST, checkoutOrder),
    takeLatest(LoginTypes.CALL_AUTH_REQUEST, callAuthRequest),
    takeLatest(LoginTypes.CALL_SIGNUP_REQUEST, callSignupRequest),
  ]);
}
