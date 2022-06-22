import axios from 'axios';
import { ADD_TO_QUEUE, GET_QUEUE, EXIT_FROM_QUEUE } from '../Types/types';

export const Queue = (value) => ({
  type: GET_QUEUE,
  payload: value,
});

export const getQueue = () => async (dispatch) => {
  try {
    const response = await axios({ url: 'queue/getqueue' });
    dispatch(Queue(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const addToQueue = (value) => {
  console.log('------', value);
  return {
    type: ADD_TO_QUEUE,
    payload: value,
  };
};

export const deleteFromQueue = (value) => {
  console.log('------', value);
  return {
    type: EXIT_FROM_QUEUE,
    payload: value,
  };
};
