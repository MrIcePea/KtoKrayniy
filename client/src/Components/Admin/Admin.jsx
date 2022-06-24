import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { approveNewUsers } from '../../Redux/Actions/approveNewUsersAction';
import { getAllUsers } from '../../Redux/Actions/getAllUsersAction';
import './Admin.css';

function Admin() {
  const checkboxRef = useRef();
  const dispatch = useDispatch();


  const { allUsers } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  // let data;
  // allUsers.map((el) => {
  //   const newData = { id: el.id, checked: false}
  //   data.push(newData);
  // });
  // const [dataForm, setDataForm] = useState(data);

  const approveHandler = (e) => {
    e.preventDefault();
    const approved = [];
    console.log(e.target.elements);
    for (let i = 0; i <= e.target.elements.length - 2; i += 1) {
      if (e.target[i].checked) {
        console.log(e.target);
        approved.push(e.target[i].value);
      }
    }
    dispatch(approveNewUsers(approved));
  };

  return (
    <div className="add-user-admin-wrapper">
      <h3>Подтверждение пользователей</h3>
      <form onSubmit={approveHandler}>
        <div className="add-user-list">
          {allUsers && allUsers.map((el) => {
            if (!el.active) {
              return (
                <p key={el.id}>
                  <input className="add-user-admin-checkbox" type="checkbox" id={el.id} name={el.id} value={el.id} />
                  <label className="add-user-admin-item" htmlFor={el.id}>
                    {el.firstName}
                    {' '}
                    {el.lastName}
                  </label>
                </p>
              );
            }
            return null;
          })}
        </div>
        <button className="add-to-tournament-btn" type="submit">Подтвердить</button>
      </form>
    </div>
  );
}

export default Admin;
