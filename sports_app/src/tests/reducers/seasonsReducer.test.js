import reducer from '../../reducers/seasonsReducer';
import * as actions from '../../actions/allActions';
import data from '../mocks/seasonsMock';

describe('seasons reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            fetchingData: false,
            list: [],
            selectedSeason: null
        });
    });

    it('should handle FETCH_SEASONS_BEGIN', () => {
        const beginAction = {
            type: actions.FETCH_SEASONS_BEGIN
        };

        expect(reducer(undefined, beginAction)).toEqual({
            fetchingData: true,
            list: [],
            selectedSeason: null
        });
    });

    it('should handle FETCH_SEASONS_SUCCESS', () => {
        const successAction = {
            type: actions.FETCH_SEASONS_SUCCESS,
            payload: data
        };

        expect(reducer(undefined, successAction)).toEqual({
            fetchingData: false,
            list: data,
            selectedSeason: null
        });
    });

    it('should handle FETCH_SEASONS_ERROR', () => {
        const errorAction = {
            type: actions.FETCH_SEASONS_ERROR
        };

        expect(reducer(undefined, errorAction)).toEqual({
            fetchingData: false,
            list: [],
            selectedSeason: null
        });
    });

    it('should handle SELECT_SEASON', () => {
        const selectSeasonAction = {
            type: actions.SELECT_SEASON,
            payload: "1273"
        };

        expect(reducer(undefined, selectSeasonAction)).toEqual({
            fetchingData: false,
            list: [],
            selectedSeason: "1273"
        });
    });
});