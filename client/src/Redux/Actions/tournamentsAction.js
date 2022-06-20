import axios from 'axios';
import { GET_TOURNAMENT, GET_TOURNAMENTS } from '../Types/types';

export const Tournaments = (value) => ({
  type: GET_TOURNAMENTS,
  payload: value,
});

export const getTournaments = () => async (dispatch) => {
  try {
    const response = await axios({ url: 'tournaments', baseURL: 'http://localhost:3001/' });
    dispatch(Tournaments(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const Tournament = (value) => ({
  type: GET_TOURNAMENT,
  payload: value,
});

export const getTournament = (id) => async (dispatch) => {
  try {
    const response = await axios({ url: `tournaments/${id}`, baseURL: 'http://localhost:3001/' });
    dispatch(Tournament(response.data));
  } catch (err) {
    console.log(err);
  }
};
