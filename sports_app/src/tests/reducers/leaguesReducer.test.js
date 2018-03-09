import reducer from '../../reducers/leaguesReducer';
import * as actions from '../../actions/allActions';
import data from '../mocks/leaguesMock';

describe('leagues reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            fetchingData: false,
            list: [],
            selectedLeague: null
        });
    });

    it('should handle FETCH_LEAGUES_BEGIN', () => {
        const beginAction = {
            type: actions.FETCH_LEAGUES_BEGIN
        };

        expect(reducer(undefined, beginAction)).toEqual({
            fetchingData: true,
            list: [],
            selectedLeague: null
        });
    });

    it('should handle FETCH_LEAGUES_SUCCESS', () => {
        const successAction = {
            type: actions.FETCH_LEAGUES_SUCCESS,
            payload: data
        };

        expect(reducer(undefined, successAction)).toEqual({
            fetchingData: false,
            list: data,
            selectedLeague: null
        });
    });

    it('should handle FETCH_LEAGUES_ERROR', () => {
        const errorAction = {
            type: actions.FETCH_LEAGUES_ERROR
        };

        expect(reducer(undefined, errorAction)).toEqual({
            fetchingData: false,
            list: [],
            selectedLeague: null
        });
    });

    it('should handle SELECT_LEAGUE', () => {
        const selectLeagueAction = {
            type: actions.SELECT_LEAGUE,
            payload: "127"
        };

        expect(reducer(undefined, selectLeagueAction)).toEqual({
            fetchingData: false,
            list: [],
            selectedLeague: "127"
        });
    });
});