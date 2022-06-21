export const wsSendStart = (ws) => async (dispatch) => {
  console.log('wsSendStart----------->>', ws);
  ws.send(JSON.stringify({ type: 'START', params: {} }));
};
