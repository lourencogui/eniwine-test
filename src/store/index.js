import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sagas from './sagas';
import reducers from './ducks';

const persistConfig = {
  key: 'eniwineapp',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
// const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
// const createAppropriateStore = createStore;
const store = createAppropriateStore(persistedReducer, applyMiddleware(...middleware));
sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };
