import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Col, Form, FormGroup, Input, Row,
} from 'reactstrap';

import { getQueue } from '../../Redux/Actions/getQueueAction';
import { wsAddToQueue, wsSendStart } from '../../Redux/Actions/wsAction';
import { useTodoContext } from '../Context/Contexts';
import ChangeModeMenu from './ChangeModeMenu';


function Queue() {
  const { queue, user } = useSelector((state) => state);
  const { socket, readyState } = useTodoContext();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect');
    if (!queue.length && readyState === 1) {
      console.log('!queue.length-------->>>');
      dispatch(wsSendStart(socket));
    }
  }, [readyState]);

  const addToQueueHandler = (id) => {
    console.log('button pressed');
    dispatch(wsAddToQueue(socket, id));
  };


  return (
    <>
      <ChangeModeMenu />
      <Row>
        <Col className="centered">
          <button type="submit" className="winner-btn">Победил</button>
        </Col>
        <Col className="centered">
          <button type="submit" className="winner-btn">Победил</button>
        </Col>
      </Row>
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
        <Row>
          <Col className="centered">
            <button type="submit" className="kick-btn">Не явился</button>
          </Col>
          <Col className="centered">
            <button type="submit" className="kick-btn">Не явился</button>
          </Col>
        </Row>
        {queue && queue.map((el, index) => {
          if (index === 0 || index === 1) {
            return (
              null
            );
          }
          return (
            <div key={el.id}>
              <button type="submit" className="user-btn">{el.User.nickName}</button>
            </div>
          );
        })}
        {queue.find((el) => (user.id === el.User.id)) && (
        <Row>
          <Col className="centered">
            <button type="submit" className="stay-to-queue-btn">Пропустить очередь</button>
          </Col>
          <Col className="centered">
            <button type="submit" className="stay-to-queue-btn">Выйти из очереди</button>
          </Col>
        </Row>
        )}
        {!queue.find((el) => (user.id === el.User.id)) && (<button type="submit" className="stay-to-queue-btn" onClick={() => addToQueueHandler(user.id)}>Встать в очередь</button>)}
      </div>
    </>
  );
}

export default Queue;
