import { combineReducers } from 'redux';
import SoloRankReducer from './soloRankReducer';
import DuoRankReducer from './duoRankReducer';
import getQueueReducer from './getQueueReducer';
import tournamentsReducer from './tournamentsReducer';
import tournamentReducer from './tournamentReducer';

const rootReducer = combineReducers({
  soloRank: SoloRankReducer,
  duoRank: DuoRankReducer,
  queue: getQueueReducer,
  tournaments: tournamentsReducer,
  tournament: tournamentReducer,
});

export default rootReducer;
