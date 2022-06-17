import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/Actions/getAllUsersAction';

function Tournament() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  useEffect(() => {
    if (!users.length) {
      dispatch(getAllUsers());
    }
  }, []);
  return (
    <div>
      Tournament
      {users.map((el) => (
        <div key={el.id}>{el.nickName}</div>
      ))}
    </div>
  );
}

export default Tournament;
