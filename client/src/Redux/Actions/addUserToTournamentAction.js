import axios from 'axios';
import { ADD_USER_TO_TOURNAMENT } from '../Types/types';

export const registrationToTournament = (value) => ({
  type: ADD_USER_TO_TOURNAMENT,
  payload: value,
});

export const addUserToTournament = (id, user, mode) => async (dispatch) => {
  try {
    const resp = { id, user };
    const response = await axios({ url: `tournaments/${id}/${user}/${mode}`, baseURL: 'http://localhost:3001/' });
    dispatch(registrationToTournament(response.data));
  } catch (err) {
    console.log(err);
  }
};
