import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import sagas from './sagas';
import reducers from './ducks';


const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
// const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(reducers, middlewares);

sagaMiddleware.run(sagas);

export { store };
