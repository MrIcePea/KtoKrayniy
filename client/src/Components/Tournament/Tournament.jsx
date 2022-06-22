import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row, Table } from 'reactstrap';
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
          <Table dark bordered style={{ width: '100%' }}>
            <thead>
              <tr style={{ backgroundColor: '#003686', borderColor: '#FFF' }}>
                <th style={{ backgroundColor: '#003686', borderColor: '#FFF' }}>Game</th>
              </tr>
            </thead>
            <tbody>
              {el.playerPairs.map((pair) => (
                <tr style={{ backgroundColor: '#003686', borderColor: '#FFF' }}>
                  <td style={{ backgroundColor: '#003686', borderColor: '#FFF' }}>
                    <Row>
                      <Col xs="5" className="myCol">
                        {pair[0].won ? <div className="winner">{pair[0].User.nickName}</div> : <div className="loser">{pair[0].User.nickName}</div>}
                      </Col>
                      <Col xs="2" className="myCol">VS</Col>
                      <Col xs="5" className="myCol">
                        {pair[1].won ? <div className="winner">{pair[1].User.nickName}</div> : <div className="loser">{pair[1].User.nickName}</div>}
                      </Col>
                    </Row>
                    {/* {pair.map((pl) => (
                      <div className="myTableRow">
                        {pl.won && <div className="winner">{pl.User.nickName}</div>}
                        {!pl.won && <div className="loser">{pl.User.nickName}</div>}
                      </div>
                    ))} */}
                  </td>
                </tr>

              ))}
            </tbody>
          </Table>
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
