import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTournament, getTournaments } from '../../Redux/Actions/tournamentsAction';

function Tournaments() {
  const dispatch = useDispatch();
  const { tournaments } = useSelector((state) => state);
  useEffect(() => {
    if (!tournaments.length) {
      dispatch(getTournaments());
    }
  }, []);
  return (
    <div>
      Tournaments
      {tournaments.map((el) => (<Link to={`/tournaments/${el.id}`} key={el.id}>{el.name}</Link>))}
    </div>
  );
}

export default Tournaments;
