import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTournament } from '../../Redux/Actions/tournamentsAction';
import './Tournament.css';

function Tournament() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { tournament } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTournament(id));
  }, [id]);
  /*   const players = tournament.players.map((el) => return ) */
  return (
    <div>
      <ul className="nav nav-tabs tabs__items">
        {tournament.map((el, index) => (
          <div key={index}>
            <li className="nav-item">
              <a className="nav-link tabs__item" href={`#tab-${index}`}>{el.round}</a>
            </li>
          </div>
        ))}
      </ul>
      {tournament.map((el, index) => (
        <div className="tabs__block" id={`tab-${index}`}>
          {el.players.map((elem) => (
            <p>{elem.user_id}</p>
          ))}
        </div>

      ))}
    </div>
  );
  // return (
  //   <div>
  //     <ul className="nav nav-tabs tabs__items">
  //       {tournament.map((el, index) => (
  //         <div key={index}>
  //           <li className="nav-item">
  //             <a className="nav-link tabs__item" href={`#tab-${index}`}>{el.round}</a>
  //           </li>
  //           <div className="tabs__block" id={`tab-${index}`}>
  //             {el.players.map((elem) => (
  //               <p>{elem.user_id}</p>
  //             ))}
  //           </div>
  //         </div>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default Tournament;
