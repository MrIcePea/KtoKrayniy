import React from 'react';
import { Link } from 'react-router-dom';
import './Queue.css';

function ChangeModeMenu() {
  return (
    <div className="change-mode-wrapper">

      <div className="menu-wrapper">
        <div className="menu-item-wrapper">

          <Link to="/queue/1v1"><button type="submit" className="change-game-type-btn">1 vs 1</button></Link>

        </div>
        <div className="menu-item-wrapper">

          <Link to="/queue/2v2"><button type="submit" className="change-game-type-btn">2 vs 2</button></Link>

        </div>
        <div className="menu-item-wrapper">

          <Link to="/queue/circle"><button type="submit" className="change-game-type-btn">Круговая</button></Link>

        </div>
      </div>

    </div>
  );
}

export default ChangeModeMenu;
