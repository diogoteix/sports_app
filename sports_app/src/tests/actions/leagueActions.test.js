import * as actions from '../../actions/leaguesActions';
import * as types from '../../actions/allActions';

describe('leagueActions', () => {
    it('should create an action to begin fetching leagues', () => {
        const expectedAction = {
            type: types.FETCH_LEAGUES_BEGIN
        }
        expect(actions.fetchLeaguesBegin()).toEqual(expectedAction)
    })

    it('should create an action to save leagues fetch', () => {
        const data = [
            {
                "id": 271,
                "legacy_id": 43,
                "country_id": 320,
                "name": "Superliga",
                "is_cup": false,
                "current_season_id": 6361,
                "current_round_id": 127991,
                "current_stage_id": 48050,
                "live_standings": true,
                "coverage": {
                    "topscorer_goals": true,
                    "topscorer_assists": true,
                    "topscorer_cards": true
                }
            }
        ]
        const expectedAction = {
            type: types.FETCH_LEAGUES_SUCCESS,
            payload: data
        }
        expect(actions.fetchLeaguesSuccess(data)).toEqual(expectedAction)
    })

    it('should create an action to send fetch error', () => {
        const expectedAction = {
            type: types.FETCH_LEAGUES_ERROR
        }
        expect(actions.fetchLeaguesError()).toEqual(expectedAction)
    })

    it('should create an action to select a league', () => {
        const data = "271";
        const expectedAction = {
            type: types.SELECT_LEAGUE,
            payload: data
        }
        expect(actions.selectLeague(data)).toEqual(expectedAction)
    })
})