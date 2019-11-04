import { put, call } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Creators as LoginActions } from '../ducks/login';
import { eniWineApi } from '~/services/eniWineApi';

function* navigate(navigation, routeName) {
  try {
    const navigateAction = NavigationActions.navigate({
      routeName,
      action: NavigationActions.navigate({ routeName }),
    });

    yield call(navigation.dispatch, navigateAction);
  } catch (error) {
    console.tron.log(`${error}`);
  }
}

export function* callAuthRequest(action) {
  try {
    const { email, password, navigation } = action.payload;
    if (email && password) {
      const response = yield call(
        eniWineApi.post,
        'sessions',
        { email, password },
      );
      const { token, admin } = response.data;
      yield put(LoginActions.callAuthRequestSuccess(token));
      if (admin) {
        yield call(navigate, navigation, 'CreateProduct');
        return;
      }
      yield call(navigate, navigation, 'Main');
    }
  } catch (error) {
    yield put(LoginActions.callAuthRequestFailure('Usuário ou senha inválidos'));
  }
}

export function* callSignupRequest(action) {
  try {
    const {
      email, password, passwordConfirmation, username, navigation,
    } = action.payload;
    if (email && password && username && passwordConfirmation) {
      const { data } = yield call(
        eniWineApi.post,
        'users',
        {
          email, password, username, password_confirmation: passwordConfirmation,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
        },
      );
      yield put(LoginActions.callSignupRequestSuccess());
      yield call(navigate, navigation, 'Login');
    } else {
      yield put(LoginActions.callSignupRequestFailure('Verifique seus dados'));
    }
  } catch (error) {
    yield put(LoginActions.callSignupRequestFailure('Erro ao criar o usuário'));
  }
}
