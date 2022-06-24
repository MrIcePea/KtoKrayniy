import axios from 'axios';
import { APPROVE_USERS } from '../Types/types';

export const newUsers = (value) => {
  console.log('value---------', value);
  return {
    type: APPROVE_USERS,
    payload: value,
  };
};

export const approveNewUsers = (approved) => async (dispatch) => {
  try {
    const response = await axios.post('/admin', { approved });
    console.log('response.data------->', response.data);
    dispatch(newUsers(response.data));
  } catch (err) {
    console.log(err);
  }
};


// export const setTournament = (value) => ({
//   type: ADD_TOURNAMENT,
//   payload: value,
// });
// export const addTournament = (value) => async (dispatch) => {
//   console.log(value);
//   await axios.post('/tournaments/addtournament', value).then((res) => dispatch(setTournament(res.data)));
// };

