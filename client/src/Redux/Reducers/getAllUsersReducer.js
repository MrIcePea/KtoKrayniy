import { APPROVE_USERS, GET_ALL_USERS } from '../Types/types';

const getAllUsersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:

      return payload;

    case APPROVE_USERS:
      console.log('payload --------', payload);
      return payload;

    default:
      return state;
  }
};

export default getAllUsersReducer;
