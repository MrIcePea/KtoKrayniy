import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-wrapper">
      <div className="menu-item-wrapper">
        <Link to="/rankings/solo"><img className="menu-img" src="/images/ratingSvg.svg" alt="rating" /></Link>
      </div>
      <div className="menu-item-wrapper">
        <Link to="/queue"><img className="menu-img" src="/images/queueSvg.svg" alt="queue" /></Link>
      </div>
      <div className="menu-item-wrapper">
        <Link to="/tournaments"><img className="menu-img" src="/images/tournamentSvg.svg" alt="tournaments" /></Link>
      </div>
    </div>
  );
}

export default Menu;
