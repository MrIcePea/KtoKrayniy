import React, { useState } from 'react';
import {
  Button,
  Col, Form, FormGroup, Input, Row,
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { userSignIn } from '../../Redux/Actions/signAction';
// import { userSignIn } from '../../Redux/actions/userAction';

export default function SignIn() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userSignIn(inputs));
    setInputs({});
  };

  const style = {
    input: {
      borderRadius: 0,
      width: '180px',
      maxLength: '12',
    },
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col xs={4}>
        <h3 className="text-center">SignIn</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Input
              name="nickName"
              type="text"
              placeholder="nickName"
              value={inputs.nickName || ''}
              onChange={inputHandler}
              style={style.input}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="pass"
              placeholder="password"
              value={inputs.pass || ''}
              onChange={inputHandler}
              style={style.input}
            />
          </FormGroup>
          <Button block>Войти</Button>
        </Form>
      </Col>
    </Row>
  );
}
