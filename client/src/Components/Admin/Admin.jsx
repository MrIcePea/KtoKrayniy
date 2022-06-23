import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="add-user-admin-wrapper">
      <h3>Подтверждение пользователей</h3>
      <div>
        <p>
          <input className="add-user-admin-checkbox" type="checkbox" id="1" name="a" value="1417" />
          <label className="add-user-admin-item" htmlFor="1">1417</label>
        </p>
        <p>
          <input className="add-user-admin-checkbox" type="checkbox" id="2" name="a" value="1417" />
          <label className="add-user-admin-item" htmlFor="2">1417</label>
        </p>
        <p>
          <input className="add-user-admin-checkbox" type="checkbox" id="3" name="a" value="1417" />
          <label className="add-user-admin-item" htmlFor="3">1417</label>
        </p>
        <p>
          <input className="add-user-admin-checkbox" type="checkbox" id="4" name="a" value="1417" />
          <label className="add-user-admin-item" htmlFor="4">1417</label>
        </p>
        <p>
          <input className="add-user-admin-checkbox" type="checkbox" id="5" name="a" value="1417" />
          <label className="add-user-admin-item" htmlFor="5">1417</label>
        </p>
      </div>
      <button className="add-to-tournament-btn" type="submit">Подтвердить</button>
    </div>
  );
}

export default Admin;
