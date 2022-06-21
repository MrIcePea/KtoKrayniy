import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <ul>
      <div className="menu-wrapper">
        <div className="menu-item-wrapper">
          <li>
            <Link to="/rankings/solo"><img className="menu-img" src="/images/ratingSvg.svg" alt="rating" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue"><img className="menu-img" src="/images/queueSvg.svg" alt="queue" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/tournaments"><img className="menu-img" src="/images/tournamentSvg.svg" alt="tournaments" /></Link>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default Menu;
