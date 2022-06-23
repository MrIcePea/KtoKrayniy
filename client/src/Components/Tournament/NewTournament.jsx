import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addUserToTournament } from '../../Redux/Actions/addUserToTournamentAction';
import { getRegistrationList1v1, getRegistrationList2v2 } from '../../Redux/Actions/getTournamentRegistrationListAction';

function NewTournament() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { tournaments } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  useEffect(() => {
    tournaments.forEach((el) => {
      if (el.id === id && el.mode === '1x1') {
        dispatch(getRegistrationList1v1(id));
      } else if (el.id === id && el.mode === '2x2') {
        dispatch(getRegistrationList2v2(id));
      }
    });
  }, []);
  function handleClick() {
    dispatch(addUserToTournament(id, user.id, tournaments[0].mode));
  }
  return (
    <div>
      <h2>Новый турнир</h2>
      <h4>1:32:27</h4>
      <button type="submit" onClick={() => console.log(user.id)}>click</button>
      <button type="submit" onClick={handleClick}>Участвовать</button>

    </div>
  );
}

export default NewTournament;
