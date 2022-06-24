import { APPROVE_USERS } from '../Types/types';

const getAllUsersReducer = (state = [], action) => {
  const { type, payload } = action;
  console.log('payload --------', payload);
  switch (type) {
    case APPROVE_USERS:
      console.log('payload --------', payload);
      return payload;

    default:
      return state;
  }
};

export default getAllUsersReducer;

