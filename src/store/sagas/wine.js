import { put, call } from 'redux-saga/effects';
import { Creators as WineActions } from '../ducks/wine';
import { store } from '~/store';
import { eniWineApi } from '~/services/eniWineApi';

export function* getWines() {
  try {
    const response = yield call(eniWineApi.get, 'products', {
      headers: {
        Authorization: `bearer ${store.getState().login.token}`,
      },
    });
    yield put(WineActions.getWinesSuccess(response.data));
  } catch (error) {
    console.tron.log(`${error}`);
    yield put(WineActions.getWinesFailure('Erro ao buscar os vinhos'));
  }
}

export function* checkoutOrder() {
  try {
    const { cart } = store.getState().wine;
    if (cart.length > 0) {
      yield call(eniWineApi.post, 'sales', JSON.stringify({ products: cart }), {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${store.getState().login.token}`,
        },
      });
      yield put(WineActions.checkoutOrderSuccess('Pedido finalizado com sucesso'));
    }
  } catch (error) {
    console.tron.log(error);
    yield put(WineActions.checkoutOrderFailure('Erro ao finalizar o seu pedido'));
  }
}
