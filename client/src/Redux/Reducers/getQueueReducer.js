import { GET_QUEUE } from '../Types/types';

const getQueueReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUEUE:

      return payload;

    default:
      return state;
  }
};

export default getQueueReducer;
