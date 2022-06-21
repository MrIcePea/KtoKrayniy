import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button, Form, FormGroup, Input,
} from 'reactstrap';

import { getQueue } from '../../Redux/Actions/getQueueAction';
import { wsSendStart } from '../../Redux/Actions/wsAction';
import { useTodoContext } from '../Context/Contexts';
import ChangeModeMenu from './ChangeModeMenu';


function Queue() {
  const { queue, user } = useSelector((state) => state);
  const { socket } = useTodoContext();
  console.log('---<<<none', socket);
  // const socket = new WebSocket('ws://localhost:3001');


  const dispatch = useDispatch();
  useEffect(() => {
    if (!queue.length) {
      console.log('!queue.length-------->>>');
      dispatch(wsSendStart(socket));
      // dispatch(getQueue());
    }
  }, []);
  const addQueHandler = (e) => {
    e.preventDefault();
    // dispatch(userSignIn(inputs));
    // setInputs({});
  };

  return (
    <>
      <ChangeModeMenu />
      <div className="queue-wrapper">
        <img className="tennis-table-img" src="/images/table-tennis.png" alt="" />
        <div className="gamers-wrapper">
          <div className="gamers-wrapper-left">
            <div className="gamer">
              <span>Илья</span>
            </div>
            <div className="gamer">
              <span>Глеб</span>
            </div>
          </div>
          <div className="gamers-wrapper-right">
            <div className="gamer">
              <span>Илья</span>
            </div>
            <div className="gamer">
              <span>Глеб</span>
            </div>
          </div>
        </div>
        {queue.map((el) => (
          <div key={el.id}>
            <button type="submit" className="user-btn">{el.User.nickName}</button>
          </div>
        ))}

        <button type="submit" className="stay-to-queue-btn">Встать в очередь</button>
      </div>
      <Form onSubmit={addQueHandler}>
        <FormGroup>
          <Input
            name="nickName"
            type="hidden"
            placeholder="nickName"
            value={user.id || 'none'}
          />
        </FormGroup>
        <Button block>В очередь</Button>
      </Form>
    </>
  );
}

export default Queue;
