import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQueue } from '../../Redux/Actions/getQueueAction';

function Queue() {
  const dispatch = useDispatch();
  const { queue } = useSelector((state) => state);
  useEffect(() => {
    if (!queue.length) {
      dispatch(getQueue());
    }
  }, []);

  return (
    <div>
      Queue
      {queue.map((el) => (
        <div key={el.id}>{el.user_id}</div>
      ))}
    </div>
  );
}

export default Queue;
