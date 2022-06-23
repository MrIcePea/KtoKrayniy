import { combineReducers } from 'redux';
import userReducer from './userReducer';
import SoloRankReducer from './soloRankReducer';
import DuoRankReducer from './duoRankReducer';
import getQueueReducer from './getQueueReducer';
import tournamentsReducer from './tournamentsReducer';
import tournamentReducer from './tournamentReducer';
import getTournamentRegistrationListReducer from './getTournamentRegistrationListReducer';
import queueTypeReducer from './queueTypeReducer';

const rootReducer = combineReducers({
  soloRank: SoloRankReducer,
  duoRank: DuoRankReducer,
  queue: getQueueReducer,
  tournaments: tournamentsReducer,
  tournament: tournamentReducer,
  user: userReducer,
  regirstrationList: getTournamentRegistrationListReducer,
  queueType: queueTypeReducer,
});

export default rootReducer;
