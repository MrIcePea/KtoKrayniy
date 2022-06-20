import React from 'react';
import { Link } from 'react-router-dom';

function ChangeModeMenu() {
  return (
    <ul>
      <div className="menu-wrapper">
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/1v1"><img className="menu-img" src="/images/1v1.jpeg" alt="Rating" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/2v2"><img className="menu-img" src="/images/2v2.jpeg" alt="Rating" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/circle"><img className="menu-img" src="/images/circle.jpeg" alt="Rating" /></Link>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default ChangeModeMenu;
