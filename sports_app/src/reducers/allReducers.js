import { combineReducers } from 'redux';
import leagues from './leaguesReducer';
import seasons from './seasonsReducer';
import leagueTable from './leagueTableReducer';
import team from './teamReducer';

const rootReducer = combineReducers({
  leagues,
  seasons,
  leagueTable,
  team
});

export default rootReducer;