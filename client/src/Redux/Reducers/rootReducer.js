import { combineReducers } from 'redux';
import getAllUsersReducer from './getAllUsersReducer';

const rootReducer = combineReducers({
  users: getAllUsersReducer,
});

export default rootReducer;
