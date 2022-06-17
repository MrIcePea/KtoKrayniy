import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { getAllUsers } from '../../Redux/Actions/getAllUsersAction';

function Rating() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  useEffect(() => {
    if (!users.length) {
      dispatch(getAllUsers());
    }
  }, []);
  return (
    <div>
      Rating
      {users.map((el) => {
        if ((el.won + el.lost) > 4 && !el.ban) {
          return (
            <Row>
              <Col>
                <div key={el.id}>{el.nickName}</div>
              </Col>
              <Col>
                <div>{el.rank}</div>
              </Col>
              <Col>
                <div>{el.won}</div>
              </Col>
              <Col>
                <div>{el.lost}</div>
              </Col>
            </Row>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Rating;
