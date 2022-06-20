import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table } from 'reactstrap';
import { getDuoRanks } from '../../Redux/Actions/rankAction';

function DuoRankings() {
  const dispatch = useDispatch();
  const { duoRank } = useSelector((state) => state);
  useEffect(() => {
    if (!duoRank.length) {
      dispatch(getDuoRanks());
    }
  }, []);
  return (
    <div>
      Duo Rankings
      <Table dark bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rank</th>
            <th>Won</th>
            <th>Lost</th>
          </tr>
        </thead>
        <tbody>
          {duoRank.map((el) => {
            if ((el.duowon + el.duolost) > 4 && !el.ban) {
              return (
                <tr key={el.id}>
                  <td>{el.nickName}</td>
                  <td>{el.duorank}</td>
                  <td>{el.duowon}</td>
                  <td>{el.duolost}</td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DuoRankings;
