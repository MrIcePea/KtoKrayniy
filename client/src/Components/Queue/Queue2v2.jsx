import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Col, Form, FormGroup, Input, Row,
} from 'reactstrap';

import { getQueue } from '../../Redux/Actions/getQueueAction';
import {
  wsAddToQueue, wsExitFromQueue, wsMoveDownQueue, wsSendStart, wsWin,
} from '../../Redux/Actions/wsAction';
import { useTodoContext } from '../Context/Contexts';
import ChangeModeMenu from './ChangeModeMenu';


function Queue2v2() {
  const { queue, user } = useSelector((state) => state);
  const { socket, readyState } = useTodoContext();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!queue.length && readyState === 1) {
      dispatch(wsSendStart(socket));
    }
  }, [readyState]);

  const addToQueueHandler = (id) => {
    console.log('button pressed');
    dispatch(wsAddToQueue(socket, id));
  };

  const exitQueueHandler = (id) => {
    console.log('exit button pressed');
    dispatch(wsExitFromQueue(socket, id));
  };

  const moveDownHandler = (id) => {
    console.log('move down button pressed');
    dispatch(wsMoveDownQueue(socket, id));
  };

  const winHandler = (winnerId, loserId) => {
    console.log('win pressed');
    dispatch(wsWin(socket, winnerId, loserId));
  };

  return (
    <>
      <ChangeModeMenu />
      <div className="winner-btn-wrapper">
        <button type="submit" className="winner-btn" onClick={() => winHandler(queue[0].user_id, queue[1].user_id)}>Победил</button>
        <button type="submit" className="winner-btn" onClick={() => winHandler(queue[1].user_id, queue[0].user_id)}>Победил</button>
      </div>
      <div className="queue-wrapper">
        <img className="tennis-table-img" src="/images/table-tennis.png" alt="" />
        <div className="gamers-wrapper">
          <div className="gamers-wrapper-left">
            <div className="gamer">
              {queue.length && <span>{queue.find((el, index) => (index === 0)).User.nickName}</span>}
            </div>
            <div className="gamer" />
          </div>
          <div className="gamers-wrapper-right">
            <div className="gamer" />
            <div className="gamer">
              {queue.length && <span>{queue.find((el, index) => (index === 1)).User.nickName}</span>}
            </div>
          </div>
        </div>
        <div className="kick-btn-wrapper">
          <button type="submit" className="kick-btn" onClick={() => exitQueueHandler(queue[0].user_id)}>Не явился</button>
          <button type="submit" className="kick-btn" onClick={() => exitQueueHandler(queue[1].user_id)}>Не явился</button>
        </div>
        {queue && queue.map((el, index) => {
          if (index === 0 || index === 1) {
            return (
              null
            );
          }
          return (
            <div className="queue-users-wrapper" key={el.id}>
              <div className="left-user">
                <button type="submit" className="user-btn">{el.User.nickName}</button>
              </div>
              <div><span>—</span></div>
              <div className="right-user">
                <button type="submit" className="empty-btn">Свободно</button>
              </div>
            </div>
          );
        })}
        {queue.find((el) => (user.id === el.User.id)) && (
          <div className="stay-to-queue-wrapper">
            {queue.indexOf(queue.find((el) => (user.id === el.User.id))) !== queue.length - 1 && <button type="submit" className="stay-to-queue-btn" onClick={() => moveDownHandler(user.id)}>Пропустить очередь</button>}
            <button type="submit" className="stay-to-queue-btn" onClick={() => exitQueueHandler(user.id)}>Выйти из очереди</button>
          </div>
        )}
        {!queue.find((el) => (user.id === el.User.id)) && (<button type="submit" className="stay-to-queue-btn" onClick={() => addToQueueHandler(user.id)}>Встать в очередь</button>)}
      </div>
    </>
  );
}

export default Queue2v2;
