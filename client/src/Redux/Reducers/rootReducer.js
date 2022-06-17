import { combineReducers } from 'redux';
import getAllUsersReducer from './getAllUsersReducer';
import getQueueReducer from './getQueueReducer';

const rootReducer = combineReducers({
  users: getAllUsersReducer,
  queue: getQueueReducer,
});

export default rootReducer;
