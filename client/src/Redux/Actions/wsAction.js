export const wsSendStart = (ws) => async (dispatch) => {
  console.log('wsSendStart----------->>', ws);
  ws.send(JSON.stringify({ type: 'START', params: {} }));
};

export const wsAddToQueue = (ws, id) => async (dispatch) => {
  console.log('wsAddToQueue----------->>', 'user_id:', id, 'ws:', ws);
  ws.send(JSON.stringify({ type: 'ADD_TO_QUEUE', params: { id } }));
};

export const wsExitFromQueue = (ws, id) => async (dispatch) => {
  console.log('wsExitFromQueue----------->>', 'user_id:', id, 'ws:', ws);
  ws.send(JSON.stringify({ type: 'EXIT_FROM_QUEUE', params: { id } }));
};
