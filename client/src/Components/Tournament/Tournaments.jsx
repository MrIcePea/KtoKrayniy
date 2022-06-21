import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { getTournament, getTournaments } from '../../Redux/Actions/tournamentsAction';
import './Tournament.css';

function Tournaments() {
  const dispatch = useDispatch();
  const { tournaments } = useSelector((state) => state);
  useEffect(() => {
    if (!tournaments.length) {
      dispatch(getTournaments());
    }
  }, []);
  return (
    <>
      <div className="addtournament-wrapper">
        <form action="">
          <div className="tournament-name-wrapper">
            <label htmlFor="tournament-name" className="form-label">Название турнира</label>
            <input type="text" className="form-control" id="tournament-name" placeholder="" />
          </div>
          <div className="tournament-select-wrapper">
            <select className="form-select" aria-label="Default select example">
              <option selected>Тип турнира</option>
              <option value="1">1х1</option>
              <option value="2">2х2</option>
            </select>
          </div>
          <div className="tournament-start-wrapper">
            <label htmlFor="startDate">Дата начала турнира</label>
            <input id="startDate" className="form-control" type="date" />
          </div>
          <div className="tournament-time-wrapper">
            <label htmlFor="tournament-time" className="form-label margin-0">Первая игра</label>
            <div className="tournament-time-inputs-wrapper">
              <input type="text" className="form-control tournament-time-input" id="tournament-time" placeholder="13" />
              <p className="margin-0">:</p>
              <input type="text" className="form-control tournament-time-input" placeholder="10" />
            </div>
          </div>
          <div className="tournament-time-wrapper">
            <label htmlFor="tournament-time" className="form-label margin-0">Последняя игра</label>
            <div className="tournament-time-inputs-wrapper">
              <input type="text" className="form-control tournament-time-input" id="tournament-time" placeholder="13" />
              <p className="margin-0">:</p>
              <input type="text" className="form-control tournament-time-input" placeholder="50" />
            </div>
          </div>
          <div className="tournament-btn-wrapper">
            <button type="submit" className="create-tournament-btn">Создать</button>
          </div>
        </form>
      </div>
      <div className="tournaments-wrapper">
        {tournaments.map((el) => (<div className="tournament-wrapper"><Link className="tournament-item-link" to={`/tournaments/${el.id}`} key={el.id}><div className="tournament-item">{el.name}</div></Link></div>))}
      </div>
    </>
  );
}

export default Tournaments;
