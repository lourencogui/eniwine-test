import { put, call } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import { Creators as LoginActions } from '../ducks/login';
import { eniWineApi } from '~/services/eniWineApi';

function* navigate(navigation, routeName) {
  try {
    console.tron.log({ navigation, routeName });
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
      yield call(navigate, navigation, 'Main');
    }
  } catch (error) {
    yield put(LoginActions.callAuthRequestFailure('Erro ao autenticar o usuário'));
  }
}

export function* callSignupRequest(action) {
  try {
    const {
      email, password, username, navigation,
    } = action.payload;
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
      yield call(navigate, navigation, 'Login');
    }
  } catch (error) {
    yield put(LoginActions.callSignupRequestFailure('Erro ao criar o usuário'));
  }
}
