import React from 'react';
import { Link } from 'react-router-dom';
import './Queue.css';

function ChangeModeMenu() {
  return (
    <ul>
      <div className="menu-wrapper">
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/1v1">1 vs 1</Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/2v2">2 vs 2</Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/circle">O</Link>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default ChangeModeMenu;
