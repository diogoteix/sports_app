import update from 'immutability-helper';
import initialState from './initialState';
import { FETCH_LEAGUE_TABLE_BEGIN, FETCH_LEAGUE_TABLE_SUCCESS, FETCH_LEAGUE_TABLE_ERROR, SELECT_STAGE } from '../actions/allActions';

export default function leagueTable(state = initialState.leagueTable, action) {
    switch (action.type) {
        case FETCH_LEAGUE_TABLE_BEGIN:
            console.log('FETCH_LEAGUE_TABLE_BEGIN Action')
            return update(state, { fetchingData: { $set: true } });
        case FETCH_LEAGUE_TABLE_SUCCESS:
            console.log('FETCH_LEAGUE_TABLE_SUCCESS Action')
            return update(state, { fetchingData: { $set: false }, stagesList: { $set: action.payload } });
        case FETCH_LEAGUE_TABLE_ERROR:
            console.log('FETCH_LEAGUE_TABLE_ERROR Action')
            return update(state, { fetchingData: { $set: false }, stagesList: { $set: [] } });
        case SELECT_STAGE:
            console.log('SELECT_STAGE action')
            return update(state, { selectedStage: { $set: action.payload } });
        default:
            return state;
    }
}