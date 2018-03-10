import * as allActions from './allActions';

export function fetchSeasonsBegin() {
    return {
        type: allActions.FETCH_SEASONS_BEGIN
    }
}

export function fetchSeasonsSuccess(data) {
    return {
        type: allActions.FETCH_SEASONS_SUCCESS,
        payload: data
    }
}

export function fetchSeasonsError(data) {
    return {
        type: allActions.FETCH_SEASONS_ERROR
    }
}

export function selectSeason(data) {
    return {
        type: allActions.SELECT_SEASON,
        payload: data
    }
}


export function fetchSeasons() {

    return function (dispatch) {

        dispatch(fetchSeasonsBegin());

        return fetch('https://soccer.sportmonks.com/api/v2.0/seasons?api_token=HOLCAStI6Z0OfdoPbjdSg5b41Q17w2W5P4WuoIBdC66Z54kUEvGWPIe33UYC')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log(response);
                    dispatch(fetchSeasonsSuccess(response.data.data))
                } else {
                    const error = new Error(response.statusText);
                    error.response = response;
                    dispatch(fetchSeasonsError())
                    throw error;
                }
            })
    }
}

