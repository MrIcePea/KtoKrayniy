import React from 'react';
import { Link } from 'react-router-dom';
import './Queue.css';

function ChangeModeMenu() {
  return (
    <ul>
      <div className="menu-wrapper">
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/1v1"><button type="submit" className="change-game-type-btn">1 vs 1</button></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/2v2"><button type="submit" className="change-game-type-btn">2 vs 2</button></Link>
          </li>
        </div>
        <div className="menu-item-wrapper">
          <li>
            <Link to="/queue/circle"><button type="submit" className="change-game-type-btn">Круговая</button></Link>
          </li>
        </div>
      </div>
    </ul>
  );
}

export default ChangeModeMenu;
