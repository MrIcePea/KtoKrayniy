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
      <div>
        Queue
        {queue.map((el) => (
          <div key={el.id}>
            {el.id}
            {' '}
            {el.User.nickName}
          </div>
        ))}
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
