import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTournament, getTournaments } from '../../Redux/Actions/tournamentsAction';

function Tournament() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getTournament(id));
  }, [id]);
  const { tournaments } = useSelector((state) => state);
  useEffect(() => {
    if (!tournaments.length) {
      dispatch(getTournaments());
    }
  }, []);
  return (
    <div>
      Tournaments
      {tournaments.map((el) => (<a href={el.id}>{el.name}</a>))}
    </div>
  );
}

export default Tournament;
