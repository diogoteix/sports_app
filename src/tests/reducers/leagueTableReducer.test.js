import reducer from '../../reducers/leagueTableReducer';
import * as actions from '../../actions/allActions';
import data from '../mocks/leagueTableMock';

describe('league table reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            fetchingData: false,
            stagesList: [],
            selectedStage: null
        });
    });

    it('should handle FETCH_LEAGUE_TABLE_BEGIN', () => {
        const beginAction = {
            type: actions.FETCH_LEAGUE_TABLE_BEGIN
        };

        expect(reducer(undefined, beginAction)).toEqual({
            fetchingData: true,
            stagesList: [],
            selectedStage: null
        });
    });

    it('should handle FETCH_LEAGUE_TABLE_SUCCESS', () => {
        const successAction = {
            type: actions.FETCH_LEAGUE_TABLE_SUCCESS,
            payload: data.standings.data
        };

        expect(reducer(undefined, successAction)).toEqual({
            fetchingData: false,
            stagesList: data.standings.data,
            selectedStage: null
        });
    });

    it('should handle FETCH_LEAGUE_TABLE_ERROR', () => {
        const errorAction = {
            type: actions.FETCH_LEAGUE_TABLE_ERROR
        };

        expect(reducer(undefined, errorAction)).toEqual({
            fetchingData: false,
            stagesList: [],
            selectedStage: null
        });
    });

    it('should handle SELECT_STAGE', () => {
        const selectStageAction = {
            type: actions.SELECT_STAGE,
            payload: "127"
        };

        expect(reducer(undefined, selectStageAction)).toEqual({
            fetchingData: false,
            stagesList: [],
            selectedStage: "127"
        });
    });
});