import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/Actions/getAllUsersAction';

function Queue() {
  const dispatch = useDispatch();
  const { queue } = useSelector((state) => state);
  useEffect(() => {
    if (!queue.length) {
      dispatch(getAllUsers());
    }
  }, []);

  return (
    <div>
      Queue
      {queue.map((el) => (
        <div key={el.id}>{el.nickName}</div>
      ))}
    </div>
  );
}

export default Queue;
