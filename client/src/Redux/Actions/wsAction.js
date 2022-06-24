import {
  ADD_TO_QUEUE, EXIT_FROM_QUEUE, MOVE_DOWN_QUEUE, WIN,
} from '../Types/types';

export const wsSendStart = (ws) => async (dispatch) => {
  console.log('wsSendStart----------->>', ws);
  ws.send(JSON.stringify({ type: 'START', params: {} }));
};

export const wsAddToQueue = (ws, id) => async (dispatch) => {
  console.log('wsAddToQueue----------->>', 'user_id:', id, 'ws:', ws);
  ws.send(JSON.stringify({ type: ADD_TO_QUEUE, params: { id } }));
};

export const wsExitFromQueue = (ws, id) => async (dispatch) => {
  console.log('wsExitFromQueue----------->>', 'user_id:', id, 'ws:', ws);
  ws.send(JSON.stringify({ type: EXIT_FROM_QUEUE, params: { id } }));
};

export const wsMoveDownQueue = (ws, id) => async (dispatch) => {
  console.log('wsMoveDownQueue----------->>', 'user_id:', id, 'ws:', ws);
  ws.send(JSON.stringify({ type: MOVE_DOWN_QUEUE, params: { id } }));
};

export const wsWin = (ws, winnerId, loserId) => async (dispatch) => {
  console.log('wsWin----------->>', 'winner_id:', winnerId, 'loser_id:', loserId, 'ws:', ws);
  ws.send(JSON.stringify({ type: WIN, params: { winnerId, loserId } }));
};


