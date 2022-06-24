import { SET_USER } from '../types';
import { APPROVE_USERS } from '../Types/types';

const userReducer = (state = { isFetch: true }, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
