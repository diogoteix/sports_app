import * as actions from '../../actions/leagueTableActions';
import * as types from '../../actions/allActions';

describe('leagueTabelActions', () => {
    it('should create an action to begin fetching league table', () => {
        const expectedAction = {
            type: types.FETCH_LEAGUE_TABLE_BEGIN
        }
        expect(actions.fetchLeagueTableBegin()).toEqual(expectedAction)
    })

    it('should create an action to save league table fetch', () => {
        const data = [
            {
                "name": "2nd Phase",
                "league_id": 501,
                "season_id": 825,
                "stage_id": 1548,
                "stage_name": "2nd Phase",
                "standings": {
                    "data": [
                        {
                            "position": 1,
                            "team_id": 53,
                            "team_name": "Celtic",
                            "group_id": 56,
                            "group_name": "Championship Group",
                            "overall": {
                                "games_played": 38,
                                "won": 34,
                                "draw": 4,
                                "lost": 0,
                                "goals_scored": 106,
                                "goals_against": 25
                            },
                            "home": {
                                "games_played": 2,
                                "won": 2,
                                "draw": 0,
                                "lost": 0,
                                "goals_scored": 6,
                                "goals_against": 1
                            },
                            "away": {
                                "games_played": 3,
                                "won": 3,
                                "draw": 0,
                                "lost": 0,
                                "goals_scored": 13,
                                "goals_against": 2
                            },
                            "total": {
                                "goal_difference": "+81",
                                "points": 106
                            },
                            "result": "UEFA Champions League Qualifiers",
                            "points": 106,
                            "recent_form": "WWWWW",
                            "status": "same"
                        }
                    ]
                }
            }
        ]
        const expectedAction = {
            type: types.FETCH_LEAGUE_TABLE_SUCCESS,
            payload: data
        }
        expect(actions.fetchLeagueTableSuccess(data)).toEqual(expectedAction)
    })

    it('should create an action to send fetch error', () => {
        const expectedAction = {
            type: types.FETCH_LEAGUE_TABLE_ERROR
        }
        expect(actions.fetchLeagueTableError()).toEqual(expectedAction)
    })

    it('should create an action to select a stage', () => {
        const data = "1548";
        const expectedAction = {
            type: types.SELECT_STAGE,
            payload: data
        }
        expect(actions.selectStage(data)).toEqual(expectedAction)
    })
})