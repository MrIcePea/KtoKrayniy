import { combineReducers } from 'redux';
import userReducer from './userReducer';
import SoloRankReducer from './soloRankReducer';
import DuoRankReducer from './duoRankReducer';
import getQueueReducer from './getQueueReducer';
import tournamentsReducer from './tournamentsReducer';
import tournamentReducer from './tournamentReducer';
import getTournamentRegistrationListReducer from './getTournamentRegistrationListReducer';
import addTournamentReducer from './addTournamentReducer';
import soloTourRegsReducer from './soloTourRegsReducer';
// import duoTourRegsReducer from './duoTourRegsReducer';

const rootReducer = combineReducers({
  soloRank: SoloRankReducer,
  duoRank: DuoRankReducer,
  queue: getQueueReducer,
  tournaments: tournamentsReducer,
  tournament: tournamentReducer,
  user: userReducer,
  regList: getTournamentRegistrationListReducer,
  addTourn: addTournamentReducer,
  soloTourRegs: soloTourRegsReducer,
  // duoTourRegs: duoTourRegsReducer,

});

export default rootReducer;
