import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../Redux/Actions/getAllUsersAction';
import './Admin.css';

function Admin() {
  const dispatch = useDispatch();
  const { allUsers } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className="add-user-admin-wrapper">
      <h3>Подтверждение пользователей</h3>
      <form action="/admin/approve">
        <div className="add-user-list">
          {allUsers.map((el) => (
            <p key={el.id}>
              <input className="add-user-admin-checkbox" type="checkbox" id={el.id} name="id" value={el.id} />
              <label className="add-user-admin-item" htmlFor={el.id}>
                {el.firstName}
                {' '}
                {el.lastName}
              </label>
            </p>
          ))}
        </div>
        <button className="add-to-tournament-btn" type="submit">Подтвердить</button>
      </form>
    </div>
  );
}

export default Admin;
