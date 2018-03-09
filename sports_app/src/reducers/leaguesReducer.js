import update from 'immutability-helper';
import initialState from './initialState';
import { FETCH_LEAGUES_BEGIN, FETCH_LEAGUES_SUCCESS, FETCH_LEAGUES_ERROR, SELECT_LEAGUE } from '../actions/allActions';

export default function leagues(state = initialState.leagues, action) {
  switch (action.type) {
    case FETCH_LEAGUES_BEGIN:
      return update(state, { fetchingData: { $set: true } });
    case FETCH_LEAGUES_SUCCESS:
      return update(state, { fetchingData: { $set: false }, list: { $set: action.payload } });
    case FETCH_LEAGUES_ERROR:
      return update(state, { fetchingData: { $set: false }, list: { $set: [] } });
    case SELECT_LEAGUE:
      return update(state, { selectedLeague: { $set: action.payload } });
    default:
      return state;
  }
}