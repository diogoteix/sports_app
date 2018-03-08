import { combineReducers } from 'redux';
import leagues from './leaguesReducer';
import seasons from './seasonsReducer';

const rootReducer = combineReducers({
  leagues,
  seasons
});

export default rootReducer;