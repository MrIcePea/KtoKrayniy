import {
  createContext, useState, useEffect, useCallback, useMemo, useContext,
} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToQueue, Queue } from '../../Redux/Actions/getQueueAction';

const TodoContext = createContext();
console.log(process.env.REACT_APP_WS_URL);

export default function TodoContextProvider({ children }) {
  // const { queue, user } = useSelector((state) => state);
  const { id } = useSelector((state) => state.user);
  const [socket, setSocket] = useState(new WebSocket(process.env.REACT_APP_WS_URL));
  console.log('1---socket---TodoContextProvider---', socket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      setSocket(new WebSocket(process.env.REACT_APP_WS_URL));
      console.log('2--------------------');
    }
  }, [id]);
  socket.onopen = function (e) {
    // socket.send(JSON.stringify(user));
    // socket.onmessage;
  };

  socket.onmessage = function (event) {
    console.log(`Получены данные ${event.data}`);
    console.log('4--------------------');
    const { type, params } = JSON.parse(event.data);
    const { queue } = params;
    switch (type) {
      case 'START':
        dispatch(Queue(queue));
        break;
      case 'ADD_TO_QUEUE':
        dispatch(addToQueue(id));
        break;
      default:
        console.log('error switch context');
        break;
    }
  };
  return (
    <TodoContext.Provider value={{ socket }}>
      {children}

    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
