import { combineReducers } from 'redux';
import leagues from './leaguesReducer';
import seasons from './seasonsReducer';
import leagueTable from './leagueTableReducer';

const rootReducer = combineReducers({
  leagues,
  seasons,
  leagueTable
});

export default rootReducer;