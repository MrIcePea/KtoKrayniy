import { ADD_TO_QUEUE, GET_QUEUE } from '../Types/types';

const getQueueReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUEUE:
      return payload;

    case ADD_TO_QUEUE:
      state.push(payload);
      console.log('мы запушили юзера в редакс', state);
      return state;

    default:
      return state;
  }
};

export default getQueueReducer;
