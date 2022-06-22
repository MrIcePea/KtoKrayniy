import { ADD_TO_QUEUE, EXIT_FROM_QUEUE, GET_QUEUE } from '../Types/types';

const getQueueReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_QUEUE:
      return payload;

    case ADD_TO_QUEUE:
      console.log('мы запушили юзера в редакс', state);
      return payload;

    case EXIT_FROM_QUEUE:
      console.log('мы удалили юзера из редакса', state);
      return payload;

    default:
      return state;
  }
};

export default getQueueReducer;
