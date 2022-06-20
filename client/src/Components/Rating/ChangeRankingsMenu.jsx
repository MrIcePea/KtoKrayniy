import React from 'react';
import { Link } from 'react-router-dom';

function ChangeRankingsMenu() {
  return (
    <ul>
      <div className="menu-wrapper">
        <div className="menu-item-wrapper">
          <li>
            <Link to="/rankings/solo"><img className="menu-img" src="/images/1v1.jpeg" alt="Rating" /></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/rankings/duo"><img className="menu-img" src="/images/2v2.jpeg" alt="Rating" /></Link>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default ChangeRankingsMenu;
