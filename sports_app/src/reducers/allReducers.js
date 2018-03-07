import { combineReducers } from 'redux';
import leagues from './leaguesReducer';

const rootReducer = combineReducers({
  leagues
});

export default rootReducer;