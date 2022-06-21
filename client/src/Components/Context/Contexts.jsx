import {
  createContext, useState, useEffect, useCallback, useMemo, useContext,
} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Queue } from '../../Redux/Actions/getQueueAction';

const TodoContext = createContext();
const TodoContextHandler = createContext();

export default function TodoContextProvider({ children }) {
  // const { queue, user } = useSelector((state) => state);
  const { id } = useSelector((state) => state.user);
  const [socket, setSocket] = useState(new WebSocket('ws://localhost:3001'));
  const dispatch = useDispatch();
  console.log('---<<<close', socket);

  useEffect(() => {
    setSocket(new WebSocket('ws://localhost:3001'));
    // console.log('---<<<useEffect', socket);
  }, [id]);
  socket.onopen = function (e) {
    // socket.send('<<--- go socket --->>');
    // socket.send(JSON.stringify(user));
    // socket.onmessage
  };

  socket.onmessage = function (event) {
    console.log(`Получены данные ${event.data}`);
    const { type, params } = JSON.parse(event.data);
    const { queue } = params;
    switch (type) {
      case 'START':
        dispatch(Queue(queue));
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
export const useTodoContextHandler = () => useContext(TodoContextHandler);
