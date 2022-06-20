import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Table } from 'reactstrap';
import { getSoloRanks } from '../../Redux/Actions/rankAction';

function SoloRankings() {
  const dispatch = useDispatch();
  const { soloRank } = useSelector((state) => state);
  useEffect(() => {
    if (!soloRank.length) {
      dispatch(getSoloRanks());
    }
  }, []);
  return (
    <div>
      Solo Rankings
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
          {soloRank.map((el) => {
            if ((el.solowon + el.sololost) > 4 && !el.ban) {
              return (
                <tr key={el.id}>
                  <td>{el.nickName}</td>
                  <td>{el.solorank}</td>
                  <td>{el.solowon}</td>
                  <td>{el.sololost}</td>
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

export default SoloRankings;
