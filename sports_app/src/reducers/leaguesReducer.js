import update from 'immutability-helper';
import initialState from './initialState';
import { FETCH_LEAGUES_BEGIN, FETCH_LEAGUES_SUCCESS, FETCH_LEAGUES_ERROR, SELECT_LEAGUE } from '../actions/allActions';

export default function leagues(state = initialState.leagues, action) {
  switch (action.type) {
    case FETCH_LEAGUES_BEGIN:
      console.log('FETCH_LEAGUES_BEGIN Action')
      return update(state, { fetchingData: { $set: true } });
    case FETCH_LEAGUES_SUCCESS:
      console.log('FETCH_LEAGUES_SUCCESS Action')
      return update(state, { fetchingData: { $set: false }, list: { $set: action.payload } });
    case FETCH_LEAGUES_ERROR:
      console.log('FETCH_LEAGUES_ERROR Action')
      return update(state, { fetchingData: { $set: false }, list: { $set: [] } });
    case SELECT_LEAGUE:
      console.log('SELECT_LEAGUE action')
      return update(state, { selectedLeague: { $set: action.payload } });
    default:
      return state;
  }
}