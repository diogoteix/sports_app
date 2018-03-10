import update from 'immutability-helper';
import initialState from './initialState';
import { FETCH_TEAM_BEGIN, FETCH_TEAM_SUCCESS, FETCH_TEAM_ERROR, SELECT_TEAM, FETCH_TEAM_PLAYERS_BEGIN, FETCH_TEAM_PLAYERS_SUCCESS, FETCH_TEAM_PLAYERS_ERROR } from '../actions/allActions';

export default function team(state = initialState.team, action) {
    switch (action.type) {
        case FETCH_TEAM_BEGIN:
            return update(state, { fetchingTeam: { $set: true } });
        case FETCH_TEAM_SUCCESS:
            return update(state, { fetchingTeam: { $set: false }, teamData: { $set: action.payload } });
        case FETCH_TEAM_ERROR:
            return update(state, { fetchingTeam: { $set: false }, teamData: { $set: null } });
        case SELECT_TEAM:
            return update(state, { selectedTeam: { $set: action.payload } });
        case FETCH_TEAM_PLAYERS_BEGIN:
            return update(state, { fetchingPlayers: { $set: true } });
        case FETCH_TEAM_PLAYERS_SUCCESS:
            return update(state, { fetchingPlayers: { $set: false }, teamPlayers: { $set: action.payload } });
        case FETCH_TEAM_PLAYERS_ERROR:
            return update(state, { fetchingPlayers: { $set: false }, teamPlayers: { $set: null } });
        default:
            return state;
    }
}