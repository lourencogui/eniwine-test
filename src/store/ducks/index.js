import { combineReducers } from 'redux';
import wine from './wine';
import login from './login';

export default combineReducers({
  wine,
  login,
});
