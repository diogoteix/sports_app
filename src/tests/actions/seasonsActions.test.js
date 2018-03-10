import * as actions from '../../actions/seasonsActions';
import * as types from '../../actions/allActions';

describe('seasonActions', () => {
    it('should create an action to begin fetching season', () => {
        const expectedAction = {
            type: types.FETCH_SEASONS_BEGIN
        }
        expect(actions.fetchSeasonsBegin()).toEqual(expectedAction)
    })

    it('should create an action to save season fetch', () => {
        const data = [
            {
                "id": 1273,
                "name": "2005\/2006",
                "league_id": 271,
                "is_current_season": false,
                "current_round_id": null,
                "current_stage_id": null
            }
        ]
        const expectedAction = {
            type: types.FETCH_SEASONS_SUCCESS,
            payload: data
        }
        expect(actions.fetchSeasonsSuccess(data)).toEqual(expectedAction)
    })

    it('should create an action to send fetch error', () => {
        const expectedAction = {
            type: types.FETCH_SEASONS_ERROR
        }
        expect(actions.fetchSeasonsError()).toEqual(expectedAction)
    })

    it('should create an action to select a season', () => {
        const data = "1273";
        const expectedAction = {
            type: types.SELECT_SEASON,
            payload: data
        }
        expect(actions.selectSeason(data)).toEqual(expectedAction)
    })
})