import React from 'react';
import { Link } from 'react-router-dom';
import './Exit.css';

function Exit() {
  return (
    <div className="exit-wrapper">
      <div className="exit-item-wrapper">
        <p>Привет, Илья!</p>
      </div>
      <div className="exit-item-wrapper">
        <Link to="/logout">Выйти</Link>
      </div>
    </div>
  );
}

export default Exit;
