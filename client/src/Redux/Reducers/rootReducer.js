import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  usrer: userReducer,
});

export default rootReducer;
