import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTournament } from '../../Redux/Actions/tournamentsAction';

function Tournament() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { tournament } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getTournament(id));
    console.log('-----', id);
  }, [id]);
  return (
    <div>
      {tournament.map((el) => (
        <div key={el.id}>
          <p>{el.round}</p>
        </div>
      ))}
    </div>
  );
}

export default Tournament;
