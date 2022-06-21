import axios from 'axios';
import { GET_QUEUE } from '../Types/types';

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
