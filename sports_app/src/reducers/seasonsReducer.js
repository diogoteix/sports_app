import update from 'immutability-helper';
import initialState from './initialState';
import { FETCH_SEASONS_BEGIN, FETCH_SEASONS_SUCCESS, FETCH_SEASONS_ERROR } from '../actions/allActions';

export default function seasons(state = initialState.seasons, action) {
    switch (action.type) {
        case FETCH_SEASONS_BEGIN:
            console.log('FETCH_SEASONS_BEGIN Action')
            return update(state, { fetchingData: { $set: true } });
        case FETCH_SEASONS_SUCCESS:
            console.log('FETCH_SEASONS_SUCCESS Action')
            return update(state, { fetchingData: { $set: false }, list: { $set: action.payload } });
        case FETCH_SEASONS_ERROR:
            console.log('FETCH_SEASONS_ERROR Action')
            return update(state, { fetchingData: false, list: [] });
        default:
            return state;
    }
}