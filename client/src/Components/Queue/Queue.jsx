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
    </>
  );
}

export default Queue;
