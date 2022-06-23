import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addUserToTournament } from '../../Redux/Actions/addUserToTournamentAction';
import { getRegistrationList1v1, getRegistrationList2v2 } from '../../Redux/Actions/getTournamentRegistrationListAction';

function NewTournament() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    tournaments, soloRank, DuoRank, user,
  } = useSelector((state) => state);
  const findeTourn = tournaments.find((el) => el.id === Number(id));


  const { regList } = useSelector((state) => state);
  useEffect(() => {
    tournaments.forEach((el) => {
      if (el.id === id && el.mode === '1x1') {
        dispatch(getRegistrationList1v1(id));
      } else if (el.id === id && el.mode === '2x2') {
        dispatch(getRegistrationList2v2(id));
      }
    });
  }, []);

  const handleClick = (val1, val2, val3) => {
    dispatch(addUserToTournament(val1, val2, val3));
  };
  return (

    <div className="new-tournament-wrapper">
      <h3>Новый турнир</h3>
      <div>
        <button className="user-btn" type="submit">elefant</button>
      </div>
      <button className="add-to-tournament-btn" type="submit" onClick={() => { handleClick(id, user.id, findeTourn.mode); }}>Участвовать</button>
    </div>
  );
}

export default NewTournament;
