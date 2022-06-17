import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <ul>
      <div className="menu-wrapper">
        <div className="menu-item-wrapper">
          <li>
            <Link to="/rankings"><img className="menu-img" src="/images/rating.jpeg" alt="Rating" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue"><img className="menu-img" src="/images/queue.jpeg" alt="Rating" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/tournament"><img className="menu-img" src="/images/tournament.jpeg" alt="Rating" /></Link>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default Menu;
