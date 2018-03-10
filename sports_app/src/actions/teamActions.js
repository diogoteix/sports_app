import * as allActions from './allActions';

export function fetchTeamBegin() {
    return {
        type: allActions.FETCH_TEAM_BEGIN
    }
}

export function fetchTeamSuccess(data) {
    return {
        type: allActions.FETCH_TEAM_SUCCESS,
        payload: data
    }
}

export function fetchTeamError(data) {
    return {
        type: allActions.FETCH_TEAM_ERROR
    }
}

export function selectTeam(data) {
    return {
        type: allActions.SELECT_TEAM,
        payload: data
    }
}

export function fetchTeamPlayersBegin() {
    return {
        type: allActions.FETCH_TEAM_PLAYERS_BEGIN
    }
}

export function fetchTeamPlayersSuccess(data) {
    return {
        type: allActions.FETCH_TEAM_PLAYERS_SUCCESS,
        payload: data
    }
}

export function fetchTeamPlayersError(data) {
    return {
        type: allActions.FETCH_TEAM_PLAYERS_ERROR
    }
}


export function fetchTeam(teamID) {

    return function (dispatch) {

        dispatch(fetchTeamBegin());

        return fetch(`https://soccer.sportmonks.com/api/v2.0/teams/${teamID}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC`)
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                    dispatch(fetchTeamSuccess(response.data.data))
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    dispatch(fetchTeamError())
                    throw error;
                }
            })
    }
}

export function fetchTeamPlayers(teamID, seasonID) {

    return function (dispatch) {

        dispatch(fetchTeamPlayersBegin());

        return fetch(`https://soccer.sportmonks.com/api/v2.0/squad/season/${seasonID}/team/${teamID}?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC&include=player`)
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                    dispatch(fetchTeamPlayersSuccess(response.data.data))
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    dispatch(fetchTeamPlayersError())
                    throw error;
                }
            })
    }
}

