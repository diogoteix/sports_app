import * as allActions from './allActions';

export function fetchLeaguesBegin() {
    return {
        type: allActions.FETCH_LEAGUES_BEGIN
    }
}

export function fetchLeaguesSuccess(data) {
    return {
        type: allActions.FETCH_LEAGUES_SUCCESS,
        payload: data
    }
}

export function fetchLeaguesError(data) {
    return {
        type: allActions.FETCH_LEAGUES_ERROR
    }
}

export function selectLeague(data) {
    return {
        type: allActions.SELECT_LEAGUE,
        payload: data
    }
}


export function fetchLeagues(subreddit) {

    return function (dispatch) {

        dispatch(fetchLeaguesBegin());

        return fetch('https://soccer.sportmonks.com/api/v2.0/leagues?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                    dispatch(fetchLeaguesSuccess(response.data.data))
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    dispatch(fetchLeaguesError())
                    throw error;
                }
            })
    }
}

