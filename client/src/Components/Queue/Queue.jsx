import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQueue } from '../../Redux/Actions/getQueueAction';
import ChangeModeMenu from './ChangeModeMenu';

function Queue() {
  const dispatch = useDispatch();
  const { queue } = useSelector((state) => state);
  useEffect(() => {
    if (!queue.length) {
      dispatch(getQueue());
    }
  }, []);

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
    </>
  );
}

export default Queue;
