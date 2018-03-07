import initialState from './initialState';
import { FETCH_LEAGUES, RECEIVE_LEAGUES } from '../actions/allActions';

export default function leagues(state = initialState.leagues, action) {
  let newState;
  switch (action.type) {
    case FETCH_LEAGUES:
      console.log('FETCH_LEAGUES Action')
      return action;
    case RECEIVE_LEAGUES:
      newState = action.leagues;
      console.log('RECEIVE_LEAGUES Action')
      return newState;
    default:
      return state;
  }
}