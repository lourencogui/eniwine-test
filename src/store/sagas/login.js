import { put, call } from 'redux-saga/effects';
import { Creators as LoginActions } from '../ducks/login';
import { eniWineApi } from '~/services/eniWineApi';

export function* callAuthRequest(action) {
  try {
    const { email, password } = action.payload;
    if (email && password) {
      const { data } = yield call(
        eniWineApi.post,
        '/sessions',
        JSON.stringify({ email, password }),
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      console.tron.log(data);
      yield put(LoginActions.callAuthRequestSuccess(data.token));
    }
  } catch (error) {
    yield put(LoginActions.callAuthRequestFailure('Erro ao autenticar o usuário'));
  }
}


export function* callSignupRequest(action) {
  try {
    const { email, password, username } = action.payload;
    if (email && password && username) {
      const { data } = yield call(
        eniWineApi.post,
        '/users',
        JSON.stringify({ email, password, username }),
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      console.tron.log(data);
      yield put(LoginActions.callSignupRequestSuccess());
    }
  } catch (error) {
    yield put(LoginActions.callSignupRequestFailure('Erro ao criar o usuário'));
  }
}
