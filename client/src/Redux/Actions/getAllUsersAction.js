import axios from 'axios';
import { GET_ALL_USERS } from '../Types/types';

export const allUsers = (value) => ({
  type: GET_ALL_USERS,
  payload: value,
});

export const getAllUsers = () => async (dispatch) => {
  try {
    const response = await axios({ url: 'users/getusers', baseURL: 'http://localhost:3001/' });
    dispatch(allUsers(response.data));
  } catch (err) {
    console.log(err);
  }
};
