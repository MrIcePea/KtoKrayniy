export const wsSendStart = (ws) => async (dispatch) => {
  ws.send(JSON.stringify({ type: 'START', params: {} }));
};
