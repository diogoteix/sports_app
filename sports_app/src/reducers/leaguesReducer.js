import update from 'immutability-helper';
import initialState from './initialState';
import { FETCH_LEAGUES_BEGIN, FETCH_LEAGUES_SUCCESS, FETCH_LEAGUES_ERROR } from '../actions/allActions';

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
      return update(state, { fetchingData: false, list: [] });
    default:
      return state;
  }
}