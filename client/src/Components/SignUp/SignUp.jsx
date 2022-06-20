import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Col, Form, FormGroup, Input, Row,
} from 'reactstrap';
import { regUser } from '../../Redux/Actions/signAction';

export default function SignUp() {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(regUser(inputs));
    setInputs({});
  };

  return (
    <Row className="justify-content-center mt-4">
      <Col xs={4}>
        <h3 className="text-center">Регистрация</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Input
              name="nickName"
              type="text"
              placeholder="You name"
              onChange={inputHandler}
              value={inputs.nickName || ''}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="firstName"
              type="text"
              placeholder="You firstName"
              onChange={inputHandler}
              value={inputs.firstName || ''}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="lastName"
              type="text"
              placeholder="You lastName"
              onChange={inputHandler}
              value={inputs.lastName || ''}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="pass"
              placeholder="password"
              onChange={inputHandler}
              value={inputs.pass || ''}
            />
          </FormGroup>
          <Button block type="submit">Отправить</Button>
        </Form>
      </Col>
    </Row>
  );
}
