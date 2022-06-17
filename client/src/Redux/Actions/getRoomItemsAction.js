/* import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GET_ROOM_ITEMS } from '../types/types';

export const allItems = (value) => ({
  type: GET_ROOM_ITEMS,
  payload: value,
});

export const getAllRooms = (id) => async (dispatch) => {
  const response = await axios({ url: `rooms/${id}`, baseURL: 'http://localhost:3001/' });
  dispatch(allItems(response.data));
};
 */
