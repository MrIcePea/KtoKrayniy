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
        <h3 className="text-center">Регистрация</h3>
        <Form onSubmit={submitHandler}>
          <FormGroup>
            <Input
              name="nickName"
              type="text"
              placeholder="You name"
              onChange={inputHandler}
              value={inputs.nickName || ''}
              style={style.input}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="firstName"
              type="text"
              placeholder="Имя"
              onChange={inputHandler}
              value={inputs.firstName || ''}
              style={style.input}
            />
          </FormGroup>
          <FormGroup>
            <Input
              name="lastName"
              type="text"
              placeholder="Фамилия"
              onChange={inputHandler}
              value={inputs.lastName || ''}
              style={style.input}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="pass"
              placeholder="password"
              onChange={inputHandler}
              value={inputs.pass || ''}
              style={style.input}
            />
          </FormGroup>
          <Button block type="submit">Отправить</Button>
        </Form>
      </Col>
    </Row>
  );
}
